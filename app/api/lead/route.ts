import { after, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { leadLimits, needs, situations } from '@/lib/lead-fields';
import { createLeadLimiter, hasAllowedLeadOrigin, LeadRequestError, PRODUCTION_LEADS_ENABLED, readLeadBody } from '@/lib/lead-security';
import { crmIntakeEnabled, receiveCrmLead } from '@/lib/crm-intake';
import { processCrmNotifications } from '@/lib/crm-notifications';

export const runtime = 'nodejs';

const singleLine = (max: number) => z.string().trim().min(1).max(max).refine(value => !/[\u0000-\u001f\u007f]/.test(value));
const optionalLine = z.string().trim().max(leadLimits.company).refine(value => !/[\u0000-\u001f\u007f]/.test(value)).optional();

const leadSchema = z.object({
    submissionId: z.string().uuid().optional(),
    firstName: singleLine(leadLimits.firstName),
    lastName: singleLine(leadLimits.lastName),
    email: z.string().trim().max(leadLimits.email).email(),
    phone: singleLine(leadLimits.phone).regex(/^[+\d\s().-]+$/).refine(value => {
        const digits = value.replace(/\D/g, '').length;
        return digits >= 7 && digits <= 15;
    }),
    company: optionalLine,
    situation: z.enum(situations),
    mainNeed: z.enum(needs),
    message: z.string().trim().max(leadLimits.message).refine(value => !/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)).optional(),
    website: z.string().max(256).optional(),
});

const limiter = createLeadLimiter();
const responseHeaders = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' };

function failure(status: number, error: string, headers: Record<string, string> = {}) {
    return NextResponse.json({ ok: false, error }, { status, headers: { ...responseHeaders, ...headers } });
}

function escapeHtml(value: string): string {
    return value.replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    }[character] as string));
}


export async function POST(request: Request) {
    try {
        if (!hasAllowedLeadOrigin(request)) {
            return failure(403, 'Merci d’envoyer votre demande depuis le formulaire FiduConnect.');
        }
        if (process.env.NODE_ENV === 'production' && !PRODUCTION_LEADS_ENABLED) {
            return failure(503, 'Le formulaire est temporairement indisponible. Écrivez-nous à contact@fiduconnect.ch.');
        }
        const body = await readLeadBody(request);

        // Honeypot check
        if (body && typeof body === 'object' && 'website' in body && typeof body.website === 'string' && body.website.trim()) {
            // Silent success for bots
            return NextResponse.json({ ok: true }, { headers: responseHeaders });
        }

        const validation = leadSchema.safeParse(body);

        if (!validation.success) {
            return failure(400, 'Vérifiez vos coordonnées, choisissez votre situation et votre besoin, puis réessayez.');
        }

        const { firstName, lastName, email, phone, company, situation, mainNeed, message } = validation.data;
        if (crmIntakeEnabled() && !validation.data.submissionId) {
            return failure(400, 'Rechargez la page avant de réessayer l’envoi.');
        }
        const retryAfter = limiter.consume(email);
        if (retryAfter !== null) {
            return failure(429, 'Trop de demandes ont été envoyées. Merci de réessayer dans quelques minutes.', { 'Retry-After': String(retryAfter) });
        }

        if (crmIntakeEnabled()) {
            // Lead + durable email queue are committed atomically before showing success.
            // No fallback to email-only on a database failure.
            await receiveCrmLead(validation.data.submissionId!, 'landing_ads', {
                firstName, lastName, email, phone, company, situation, mainNeed, message,
            });
            after(async () => {
                try { await processCrmNotifications(); }
                catch { console.error('crm.notification_deferred'); }
            });
            return NextResponse.json({ ok: true }, { headers: responseHeaders });
        }

        const name = `${firstName} ${lastName}`;
        const safe = {
            name: escapeHtml(name),
            email: escapeHtml(email),
            phone: escapeHtml(phone),
            company: company ? escapeHtml(company) : 'Non renseignée',
            situation: escapeHtml(situation),
            mainNeed: escapeHtml(mainNeed),
            message: message ? escapeHtml(message) : '',
        };

        const resendApiKey = process.env.RESEND_API_KEY;
        const fromEmail = process.env.LEAD_FROM_EMAIL;
        const toEmail = process.env.LEAD_TO_EMAIL;

        if (!resendApiKey || !fromEmail || !toEmail) {
            console.error('lead.configuration_missing');
            return failure(503, 'Le formulaire est temporairement indisponible. Écrivez-nous à contact@fiduconnect.ch.');
        }

        const resend = new Resend(resendApiKey);
        const { error } = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            subject: 'Nouvelle demande FIDUCONNECT',
            text: `Nouvelle demande FIDUCONNECT\nNom : ${name}\nEntreprise : ${company || 'Non renseignée'}\nE-mail : ${email}\nTéléphone : ${phone}\nSituation : ${situation}\nBesoin : ${mainNeed}\nPrécisions : ${message || 'Non renseignées'}\n\nÀ rappeler sous 24 h. Ne transmettre au partenaire qu’après l’appel et la validation du rendez-vous par le client.`,
            html: `
        <h2>Nouveau Lead Reçu</h2>
        <p><strong>Nom :</strong> ${safe.name}</p>
        <p><strong>Société :</strong> ${safe.company}</p>
        <p><strong>Email :</strong> ${safe.email}</p>
        <p><strong>Téléphone :</strong> ${safe.phone}</p>
        <p><strong>Situation :</strong> ${safe.situation}</p>
        <p><strong>Besoin principal :</strong> ${safe.mainNeed}</p>
        ${safe.message ? `<p style="white-space:pre-wrap"><strong>Précisions :</strong> ${safe.message}</p>` : ''}
        <br/>
        <p><strong>Origine :</strong> Landing SEA FIDUCONNECT</p>
        <p>À rappeler sous 24 h. Ne transmettre au partenaire qu’après l’appel et la validation du rendez-vous par le client.</p>
      `,
        });

        if (error) {
            console.error('lead.send_failed');
            return failure(502, 'L’envoi a échoué. Merci de réessayer ou de nous écrire à contact@fiduconnect.ch.');
        }

        return NextResponse.json({ ok: true }, { headers: responseHeaders });
    } catch (error: unknown) {
        if (error instanceof LeadRequestError) return failure(error.status, error.message);
        // Do not log bodies, credentials or provider error objects.
        console.error('lead.unexpected_failure');
        return failure(500, 'Une erreur est survenue. Merci de réessayer dans un instant.');
    }
}

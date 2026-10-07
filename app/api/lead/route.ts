import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const leadSchema = z.object({
    name: z.string().min(1, "Le nom est requis"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(1, "Le téléphone est requis"),
    company: z.string().optional(),
    situation: z.string().min(1, "La situation est requise"),
    mainNeed: z.string().min(1, "Le besoin principal est requis"),
    message: z.string().optional(),
    source: z.string().optional(),
    lp_variant: z.string().optional(), // Campagne SEA d'origine
    website: z.string().optional(), // Honeypot
});

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
        const resendApiKey = process.env.RESEND_API_KEY;

        if (!resendApiKey) {
            throw new Error("RESEND_API_KEY is not defined");
        }

        const resend = new Resend(resendApiKey);
        const body = await request.json();

        // Honeypot check
        if (body.website) {
            // Silent success for bots
            return NextResponse.json({ ok: true });
        }

        const validation = leadSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                { ok: false, errors: validation.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const { name, email, phone, company, situation, mainNeed, message, source, lp_variant } = validation.data;
        const safe = {
            name: escapeHtml(name),
            email: escapeHtml(email),
            phone: escapeHtml(phone),
            company: company ? escapeHtml(company) : 'Non renseignée',
            situation: escapeHtml(situation),
            mainNeed: escapeHtml(mainNeed),
            message: message ? escapeHtml(message) : '',
            source: source ? escapeHtml(source) : 'Inconnue',
            lpVariant: lp_variant ? escapeHtml(lp_variant) : '',
        };

        const fromEmail = process.env.LEAD_FROM_EMAIL;
        const toEmail = process.env.LEAD_TO_EMAIL;

        if (!fromEmail || !toEmail) {
            throw new Error("LEAD_FROM_EMAIL or LEAD_TO_EMAIL is not defined");
        }

        const { error } = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            subject: `Nouveau lead FiduConnect – ${name}`,
            html: `
        <h2>Nouveau Lead Reçu</h2>
        <p><strong>Nom :</strong> ${safe.name}</p>
        <p><strong>Société :</strong> ${safe.company}</p>
        <p><strong>Email :</strong> ${safe.email}</p>
        <p><strong>Téléphone :</strong> ${safe.phone}</p>
        <p><strong>Situation :</strong> ${safe.situation}</p>
        <p><strong>Besoin principal :</strong> ${safe.mainNeed}</p>
        ${safe.message ? `<p><strong>Précisions :</strong> ${safe.message}</p>` : ''}
        <br/>
        <p><strong>Page Source :</strong> ${safe.source}</p>
        ${safe.lpVariant ? `<p><strong>Campagne :</strong> ${safe.lpVariant}</p>` : ''}
        <p><strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { ok: false, error: "L'envoi a échoué. Merci de réessayer ou de nous écrire à contact@fiduconnect.ch." },
                { status: 500 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { ok: false, error: "Une erreur est survenue. Merci de réessayer dans un instant." },
            { status: 500 }
        );
    }
}

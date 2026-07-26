import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const leadSchema = z.object({
    name: z.string().min(1, "Le nom est requis"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(1, "Le téléphone est requis"),
    company: z.string().optional(),
    source: z.string().optional(),
    lp_variant: z.string().optional(), // Campagne SEA d'origine
    website: z.string().optional(), // Honeypot
});



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

        const { name, email, phone, company, source, lp_variant } = validation.data;

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
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Société :</strong> ${company || 'Non renseignée'}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <br/>
        <p><strong>Page Source :</strong> ${source || 'Inconnue'}</p>
        ${lp_variant ? `<p><strong>Campagne :</strong> ${lp_variant}</p>` : ''}
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

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const leadSchema = z.object({
    name: z.string().min(1, "Le nom est requis"),
    company: z.string().min(1, "La société est requise"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(1, "Le téléphone est requis"),
    subject: z.string().min(1, "Le sujet est requis"),
    comment: z.string().optional(),
    website: z.string().optional(), // Honeypot
    source: z.string().optional(),
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

        const { name, company, email, phone, subject, comment, source } = validation.data;

        const { error } = await resend.emails.send({
            from: process.env.LEAD_FROM_EMAIL || 'onboarding@resend.dev',
            to: 'contact@smartadministration.ch',
            subject: `Nouveau lead Fiduconnect – ${company} – ${subject}`,
            html: `
        <h2>Nouveau Lead Reçu</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Société :</strong> ${company}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Commentaire :</strong> ${comment || 'Aucun'}</p>
        <br/>
        <p><strong>Page Source :</strong> ${source || 'Inconnue'}</p>
        <p><strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ ok: false, error: 'Erreur lors de l\'envoi: ' + error.message }, { status: 500 });
        }

        // Sauvegarde dans Google Sheets via le Webhook Apps Script
        if (process.env.GOOGLE_SCRIPT_URL) {
            try {
                await fetch(process.env.GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name,
                        phone,
                        email,
                        source: source || 'Inconnue'
                    }),
                });
            } catch (err) {
                console.error('Google Sheets backup error:', err);
                // On ne bloque pas le retour "ok: true" si le script échoue
            }
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : 'Erreur serveur inconnue' }, { status: 500 });
    }
}

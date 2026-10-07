'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './Button';

type SeaLeadFormProps = { idPrefix: string };

declare global { interface Window { gtag?: (...args: unknown[]) => void; } }

export function SeaLeadForm({ idPrefix }: SeaLeadFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); setLoading(true); setError(null);
        const data = Object.fromEntries(new FormData(event.currentTarget).entries());
        const payload = { ...data, name: `${data.firstName} ${data.lastName}`.trim(), source: window.location.pathname, lp_variant: 'sea-fiduciaire-geneve' };
        try {
            const response = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) { const result = await response.json(); throw new Error(result.error || 'Une erreur est survenue.'); }
            window.gtag?.('event', 'lead_submit', { event_category: 'form', event_label: 'sea_fiduciaire_geneve' });
            router.push('/merci');
        } catch (err) { setError(err instanceof Error ? err.message : 'Une erreur est survenue.'); } finally { setLoading(false); }
    }
    const fieldClass = 'mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100';
    return <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700" htmlFor={`${idPrefix}-firstName`}>Prénom <span className="text-red-600">*</span><input id={`${idPrefix}-firstName`} name="firstName" required autoComplete="given-name" className={fieldClass} /></label>
            <label className="text-sm font-medium text-slate-700" htmlFor={`${idPrefix}-lastName`}>Nom <span className="text-red-600">*</span><input id={`${idPrefix}-lastName`} name="lastName" required autoComplete="family-name" className={fieldClass} /></label>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700" htmlFor={`${idPrefix}-email`}>E-mail <span className="text-red-600">*</span><input id={`${idPrefix}-email`} name="email" type="email" required autoComplete="email" className={fieldClass} /></label>
            <label className="text-sm font-medium text-slate-700" htmlFor={`${idPrefix}-phone`}>Téléphone <span className="text-red-600">*</span><input id={`${idPrefix}-phone`} name="phone" type="tel" required autoComplete="tel" placeholder="+41 79 000 00 00" className={fieldClass} /></label>
        </div>
        <label className="block text-sm font-medium text-slate-700" htmlFor={`${idPrefix}-company`}>Entreprise <span className="font-normal text-slate-400">(facultatif)</span><input id={`${idPrefix}-company`} name="company" autoComplete="organization" className={fieldClass} /></label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700" htmlFor={`${idPrefix}-situation`}>Votre situation <span className="text-red-600">*</span><select id={`${idPrefix}-situation`} name="situation" required defaultValue="" className={fieldClass}><option value="" disabled>Sélectionnez une option</option><option value="Création d’entreprise">Création d’entreprise</option><option value="Indépendant">Indépendant</option><option value="Sàrl ou SA">Sàrl ou SA</option><option value="Autre">Autre</option></select></label>
            <label className="text-sm font-medium text-slate-700" htmlFor={`${idPrefix}-need`}>Besoin principal <span className="text-red-600">*</span><select id={`${idPrefix}-need`} name="mainNeed" required defaultValue="" className={fieldClass}><option value="" disabled>Sélectionnez une option</option><option value="Comptabilité">Comptabilité</option><option value="Fiscalité">Fiscalité</option><option value="TVA">TVA</option><option value="Salaires">Salaires</option><option value="Comparer ou changer de fiduciaire">Comparer ou changer de fiduciaire</option><option value="Autre">Autre</option></select></label>
        </div>
        <label className="block text-sm font-medium text-slate-700" htmlFor={`${idPrefix}-message`}>Précisez votre demande <span className="font-normal text-slate-400">(facultatif)</span><textarea id={`${idPrefix}-message`} name="message" rows={3} className={fieldClass} /></label>
        <Button type="submit" variant="cta" fullWidth size="lg" disabled={loading}>{loading ? 'Envoi en cours…' : 'Trouver ma fiduciaire'}</Button>
        <p className="text-center text-xs leading-5 text-slate-500">Gratuit et sans engagement. Vos informations servent uniquement à vous recontacter.</p>
    </form>;
}

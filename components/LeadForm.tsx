'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './Button';

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export function LeadForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Simple honeypot check on server, field is hidden here
        // We add source page info
        const payload = {
            ...data,
            source: window.location.pathname,
        };

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Une erreur est survenue.');
            }

            // Optional: Tracking event
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'lead_submit', {
                    'event_category': 'form',
                    'event_label': 'lead_generation'
                });
            }

            router.push('/merci');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Une erreur est survenue.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Faire un point gratuit</h3>

            {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                {/* Honeypot field - hidden */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom complet <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border"
                        placeholder="Jean Dupont"
                    />
                </div>

                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Société <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        required
                        className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border"
                        placeholder="Nom de votre entreprise"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border"
                            placeholder="jean@entreprise.ch"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Téléphone <span className="text-red-500">*</span></label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border"
                            placeholder="+41 79 000 00 00"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Sujet de votre demande <span className="text-red-500">*</span></label>
                    <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border"
                        defaultValue=""
                    >
                        <option value="" disabled>Sélectionnez un sujet...</option>
                        <option value="TVA">TVA</option>
                        <option value="Comptabilité">Comptabilité (tenue / clôture)</option>
                        <option value="Déclarations fiscales">Déclarations fiscales</option>
                        <option value="Charges sociales / salaires">Charges sociales / salaires</option>
                        <option value="Création d'entreprise">Création d&apos;entreprise (SARL/SA)</option>
                        <option value="Changer de fiduciaire">Changer de fiduciaire</option>
                        <option value="Autre">Autre / Je ne sais pas</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-slate-700 mb-1">Commentaire (optionnel)</label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows={3}
                        className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border"
                        placeholder="Expliquez brièvement votre situation..."
                    />
                </div>

                <div className="pt-2">
                    <Button type="submit" fullWidth disabled={loading}>
                        {loading ? 'Envoi en cours...' : 'Faire un point gratuit'}
                    </Button>
                    <p className="mt-3 text-xs text-center text-slate-500">
                        Gratuit • Sans engagement • Confidentialité garantie
                    </p>
                </div>
            </div>
        </form>
    );
}

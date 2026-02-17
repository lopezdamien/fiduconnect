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
                const errorData = await response.json();
                throw new Error(errorData.error || 'Une erreur est survenue.');
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
            <h3 className="text-xl font-bold text-slate-900 mb-2">Recevez un premier avis stratégique gratuit (30 min)</h3>
            <p className="text-sm text-slate-600 mb-6">Nous analysons votre situation et vous indiquons les optimisations possibles ou les points de vigilance.
                Consultation réalisée par un expert fiduciaire partenaire.</p>

            {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                {/* Honeypot field - hidden */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom complet <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full rounded-md border-slate-300 shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:text-sm px-4 py-3 border text-slate-900 placeholder:text-slate-500"
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
                            className="w-full rounded-md border-slate-300 shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:text-sm px-4 py-3 border text-slate-900 placeholder:text-slate-500"
                            placeholder="Nom de votre entreprise"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full rounded-md border-slate-300 shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:text-sm px-4 py-3 border text-slate-900 placeholder:text-slate-500"
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
                            className="w-full rounded-md border-slate-300 shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:text-sm px-4 py-3 border text-slate-900 placeholder:text-slate-500"
                            placeholder="+41 22 XXX XX XX"
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <Button type="submit" fullWidth disabled={loading} className="bg-green-700 hover:bg-green-800 text-white shadow-lg shadow-green-900/20 py-4 text-lg font-bold transition-all transform hover:scale-[1.02]">
                        {loading ? 'Envoi en cours...' : 'Recevoir mon appel gratuit'}
                    </Button>
                    <div className="mt-4 text-xs text-center text-slate-500 flex items-center justify-center gap-2">
                        <span>🔒</span> Vos informations restent strictement confidentielles. Aucun spam.
                    </div>
                </div>
            </div>
        </form>
    );
}

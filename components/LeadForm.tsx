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
            <h3 className="text-xl font-bold text-slate-900 mb-6">Réserver mon point de situation (Gratuit)</h3>

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
                        className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border text-slate-900 placeholder:text-slate-400"
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
                        className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border text-slate-900 placeholder:text-slate-400"
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
                            className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border text-slate-900 placeholder:text-slate-400"
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
                            className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border text-slate-900 placeholder:text-slate-400"
                            placeholder="+41 79 000 00 00"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Votre besoin principal <span className="text-red-500">*</span></label>
                    <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border text-slate-900 placeholder:text-slate-400"
                        defaultValue=""
                    >
                        <option value="" disabled className="text-slate-400">Sélectionnez un sujet...</option>
                        <option value="TVA">TVA</option>
                        <option value="Salaires">Salaires</option>
                        <option value="Création">Création</option>
                        <option value="Changement de fiduciaire">Changement de fiduciaire</option>
                    </select>
                </div>

                <div className="pt-2">
                    <Button type="submit" fullWidth disabled={loading}>
                        {loading ? 'Envoi en cours...' : 'Obtenir mon diagnostic gratuit'}
                    </Button>
                    <p className="mt-3 text-xs text-center text-slate-500 flex items-center justify-center gap-1">
                        <span className="text-green-600">🔒</span> Confidentialité garantie - Conforme à la LPD suisse
                    </p>
                </div>
            </div>
        </form>
    );
}

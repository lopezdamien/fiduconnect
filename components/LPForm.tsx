'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './Button';

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export function LPForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const payload = {
            ...data,
            source: window.location.pathname,
            lp_variant: 'changer-fiduciaire-geneve', // Tag specific LP
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

            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'lead_submit', {
                    'event_category': 'form',
                    'event_label': 'lp_geneve'
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
        <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                    {error}
                </div>
            )}

            {/* Honeypot field - hidden */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Nom complet <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600 px-4 py-3 border text-slate-900 placeholder:text-slate-400"
                        placeholder="Jean Dupont"
                    />
                </div>
                <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1">Entreprise <span className="text-slate-400 font-normal">(Optionnel)</span></label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600 px-4 py-3 border text-slate-900 placeholder:text-slate-400"
                        placeholder="Votre société"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Email professionnel <span className="text-red-500">*</span></label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600 px-4 py-3 border text-slate-900 placeholder:text-slate-400"
                        placeholder="jean@entreprise.ch"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">Téléphone <span className="text-red-500">*</span></label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600 px-4 py-3 border text-slate-900 placeholder:text-slate-400"
                        placeholder="+41 22 ..."
                    />
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">Message (Optionnel)</label>
                <textarea
                    name="message"
                    id="message"
                    rows={3}
                    className="w-full rounded-lg border-slate-300 shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600 px-4 py-3 border text-slate-900 placeholder:text-slate-400"
                    placeholder="Précisez votre demande..."
                ></textarea>
            </div>

            <div className="pt-2">
                <Button type="submit" fullWidth disabled={loading} className="bg-green-800 hover:bg-green-900 text-white shadow-xl shadow-green-900/20 py-4 text-lg font-bold transition-all transform hover:scale-[1.01]">
                    {loading ? 'Planification...' : 'Planifier mon analyse confidentielle'}
                </Button>
            </div>
        </form>
    );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './Button';

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

const COUNTRY_CODES = [
    { code: '+41', flag: '🇨🇭', label: 'Suisse' },
    { code: '+33', flag: '🇫🇷', label: 'France' },
    { code: '+32', flag: '🇧🇪', label: 'Belgique' },
    { code: '+1', flag: '🇺🇸', label: 'États-Unis' }
];

export function LPForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const fullPhone = `${data.countryCode} ${data.phoneNumber}`;

        const payload = {
            ...data,
            phone: fullPhone,
            company: data.company || 'Non renseigné',
            subject: 'Demande depuis Landing Page',
            comment: data.message,
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

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-semibold text-slate-700 mb-1">Téléphone <span className="text-red-500">*</span></label>
                    <div className="flex relative shadow-sm rounded-lg">
                        <input type="hidden" name="countryCode" value={selectedCountry.code} />
                        
                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="inline-flex items-center justify-between w-[95px] shrink-0 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 hover:bg-slate-100 px-3 py-3 text-slate-600 font-medium sm:text-sm focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-colors"
                        >
                            <span className="flex items-center gap-1.5">
                                <span className="text-base leading-none">{selectedCountry.flag}</span>
                                <span>{selectedCountry.code}</span>
                            </span>
                            <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>

                        {isDropdownOpen && (
                            <>
                                <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)}></div>
                                <div className="absolute top-[calc(100%+4px)] left-0 w-[240px] z-20 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden py-1">
                                    {COUNTRY_CODES.map((country) => (
                                        <button
                                            key={country.code}
                                            type="button"
                                            onClick={() => {
                                                setSelectedCountry(country);
                                                setIsDropdownOpen(false);
                                            }}
                                            className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 focus:bg-slate-50 flex items-center justify-between transition-colors outline-none"
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className="text-xl leading-none">{country.flag}</span>
                                                <span className="font-medium text-slate-700">{country.label}</span>
                                            </span>
                                            <span className="text-slate-500 font-medium">{country.code}</span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                        <input
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                            required
                            onInput={(e) => {
                                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, '');
                            }}
                            className="w-full rounded-r-lg border px-4 py-3 border-slate-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 text-slate-900 placeholder:text-slate-400"
                            placeholder="79 000 00 00"
                        />
                    </div>
                </div>
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
            </div>



            <div className="pt-2">
                <Button type="submit" fullWidth disabled={loading} className="bg-green-800 hover:bg-green-900 text-white shadow-xl shadow-green-900/20 py-4 text-lg font-bold transition-all transform hover:scale-[1.01]">
                    {loading ? 'Envoi...' : 'Je veux être rappelé gratuitement'}
                </Button>
            </div>
        </form>
    );
}

'use client';

import { useState } from 'react';
import { Button } from './Button';

export function LeadForm() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-green-50 p-8 rounded-lg text-center border border-green-100">
                <h3 className="text-xl font-semibold text-green-900 mb-2">Message envoyé</h3>
                <p className="text-green-800">
                    Nous avons bien reçu votre demande. Un conseiller vous contactera sous 24h ouvrées.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Demander mon échange gratuit</h3>
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border"
                        placeholder="Jean Dupont"
                    />
                </div>
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Société</label>
                    <input
                        type="text"
                        id="company"
                        required
                        className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border"
                        placeholder="Nom de votre entreprise"
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email professionnel</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border"
                            placeholder="jean@entreprise.ch"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Téléphone</label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border"
                            placeholder="+41 79 000 00 00"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-slate-700 mb-1">Votre principale préoccupation</label>
                    <textarea
                        id="comment"
                        rows={3}
                        className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-900 focus:ring-slate-900 sm:text-sm px-4 py-3 border"
                        placeholder="Ex: Je ne comprends pas mes charges sociales..."
                    />
                </div>
                <div className="pt-2">
                    <Button type="submit" fullWidth disabled={loading}>
                        {loading ? 'Envoi en cours...' : 'Demander mon échange gratuit'}
                    </Button>
                    <p className="mt-3 text-xs text-center text-slate-500">
                        Gratuit • Sans engagement • Confidentialité garantie
                    </p>
                </div>
            </div>
        </form>
    );
}

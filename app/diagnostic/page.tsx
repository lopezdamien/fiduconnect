"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { useState } from "react";
import { CheckCircle2, Calendar } from "lucide-react";

export default function Diagnostic() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <Section className="bg-white min-h-[60vh] flex flex-col justify-center items-center text-center">
                <div className="bg-green-50 p-8 rounded-full mb-6">
                    <CheckCircle2 className="h-16 w-16 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Demande reçue !</h1>
                <p className="text-lg text-slate-600 mb-8 max-w-md">
                    Merci de votre confiance. Un expert FIDU va analyser votre demande et vous recontacter sous 24h ouvrées.
                </p>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 max-w-lg w-full">
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
                        <Calendar className="h-5 w-5 text-slate-700" />
                        Vous préférez choisir le créneau ?
                    </h2>
                    <p className="text-slate-600 mb-6 text-sm">
                        Réservez directement votre appel de qualification de 15 minutes. C&apos;est sans engagement.
                    </p>
                    {/* Placeholder for Calendly embed */}
                    <div className="bg-white border border-slate-200 rounded-lg p-4 text-center text-slate-400 text-sm mb-6">
                        [Calendly Widget Placeholder]
                    </div>

                    <Button variant="outline" onClick={() => window.open('https://calendly.com', '_blank')}>
                        Ouvrir l&apos;agenda en ligne
                    </Button>
                </div>
            </Section>
        );
    }

    return (
        <>
            <section className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                    Diagnostic Gratuit
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                    Analyse de votre organisation comptable et de vos obligations fiscales.
                    Objectif : Identifier d’éventuelles erreurs, retards ou incohérences.
                </p>
            </section>

            <Section className="bg-white">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom complet *</label>
                                <input type="text" id="name" required className="w-full rounded-md border-slate-300 shadow-sm focus:border-slate-900 focus:ring-slate-900 px-4 py-3 border" />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Société *</label>
                                <input type="text" id="company" required className="w-full rounded-md border-slate-300 shadow-sm focus:border-slate-900 focus:ring-slate-900 px-4 py-3 border" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email professionnel *</label>
                                <input type="email" id="email" required className="w-full rounded-md border-slate-300 shadow-sm focus:border-slate-900 focus:ring-slate-900 px-4 py-3 border" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Téléphone *</label>
                                <input type="tel" id="phone" required className="w-full rounded-md border-slate-300 shadow-sm focus:border-slate-900 focus:ring-slate-900 px-4 py-3 border" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="comment" className="block text-sm font-medium text-slate-700 mb-1">Votre principale préoccupation (facultatif)</label>
                            <textarea id="comment" rows={4} className="w-full rounded-md border-slate-300 shadow-sm focus:border-slate-900 focus:ring-slate-900 px-4 py-3 border" placeholder="Ex: Je pense payer trop de charges sociales..." />
                        </div>

                        <div className="pt-4">
                            <Button type="submit" fullWidth size="lg" disabled={loading} className="bg-green-700 hover:bg-green-800">
                                {loading ? 'Envoi en cours...' : 'Demander mon échange gratuit'}
                            </Button>
                            <p className="mt-4 text-xs text-center text-slate-500">
                                Vos données sont strictement confidentielles et ne seront jamais revendues.
                            </p>
                        </div>
                    </form>
                </div>
            </Section>
        </>
    );
}

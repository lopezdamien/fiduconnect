import { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle, Briefcase } from 'lucide-react';
import { LPForm } from '@/components/LPForm';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Changer de fiduciaire à Genève | Consultation gratuite 30 min',
    description: 'Besoin de changer de fiduciaire à Genève ? Transition encadrée, analyse confidentielle offerte en 30 minutes. Sans conflit, sans stress.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            {/* 0. DISCRET LOGO HEADER */}
            <header className="absolute top-0 left-0 w-full p-6 z-10">
                <Link href="/" className="text-xl font-bold text-slate-900">
                    FIDUCONNECT<span className="text-green-700">.</span>
                </Link>
            </header>

            {/* 1. HERO + FORMULAIRE */}
            <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6 leading-tight">
                                Changer de fiduciaire à Genève <br />
                                <span className="text-green-700">Sans conflit.</span> Sans perte de données. <span className="text-green-700">Sans stress.</span>
                            </h1>
                            <p className="mt-6 text-lg text-slate-600 mb-8 font-medium leading-relaxed">
                                Analyse confidentielle offerte (30 min).<br />
                                Transition encadrée par un expert fiduciaire partenaire à Genève.
                            </p>

                            {/* Checkpoints (Visible on Desktop, moved below form on Mobile usually, but here keeping consistent) */}
                            <div className="space-y-3 text-sm font-medium text-slate-700 mb-8 lg:mb-0">
                                <div className="flex items-center justify-center lg:justify-start gap-3">
                                    <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-700" /></div>
                                    <span>+120 PME accompagnées à Genève</span>
                                </div>
                                <div className="flex items-center justify-center lg:justify-start gap-3">
                                    <div className="bg-green-100 p-1 rounded-full"><ShieldCheck className="w-4 h-4 text-green-700" /></div>
                                    <span>100% confidentiel</span>
                                </div>
                                <div className="flex items-center justify-center lg:justify-start gap-3">
                                    <div className="bg-green-100 p-1 rounded-full"><Briefcase className="w-4 h-4 text-green-700" /></div>
                                    <span>Aucune démarche sans votre validation</span>
                                </div>
                                <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-500 text-xs mt-2 pt-2 border-t border-slate-100 max-w-xs mx-auto lg:mx-0">
                                    Analyse réalisée sous 48h – créneaux limités.
                                </div>
                            </div>
                        </div>

                        {/* Form Wrapper */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8">
                                <div className="text-center mb-6">
                                    <h2 className="text-xl font-bold text-slate-900">Réserver ma consultation gratuite (30 min)</h2>
                                    <p className="text-sm text-slate-500 mt-1">Remplissez ce formulaire pour être rappelé.</p>
                                </div>
                                <LPForm />
                                <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-2">
                                    <ShieldCheck className="w-3 h-3" /> Vos données sont 100% sécurisées.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. POURQUOI (Navy Background for contrast) */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Pourquoi des PME changent de fiduciaire ?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Manque de réactivité",
                            "Flou sur la TVA",
                            "Comptabilité subie",
                            "Sensation de risque",
                            "Honoraires opaques"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center p-5 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500 transition-colors">
                                <AlertTriangle className="w-5 h-5 text-green-500 mr-4 shrink-0" />
                                <span className="font-semibold">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. 3 ÉTAPES (White) */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-16">
                        Les 3 étapes du changement
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-slate-100 -z-10"></div>

                        <div className="relative bg-white p-4">
                            <div className="w-16 h-16 mx-auto bg-slate-50 text-slate-900 border border-slate-200 rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Analyse confidentielle</h3>
                            <p className="text-sm text-slate-600">État des lieux gratuit de votre situation.</p>
                        </div>
                        <div className="relative bg-white p-4">
                            <div className="w-16 h-16 mx-auto bg-slate-50 text-slate-900 border border-slate-200 rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Identification des risques</h3>
                            <p className="text-sm text-slate-600">Détection des points de vigilance.</p>
                        </div>
                        <div className="relative bg-white p-4">
                            <div className="w-16 h-16 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-green-900/20">3</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Transition encadrée</h3>
                            <p className="text-sm text-slate-600">Vers un expert partenaire certifié.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. RASSURANCE (Light Grey) */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Vous n’avez rien à gérer</h2>
                    <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                        Nous coordonnons la récupération de l'historique : <br />
                        <span className="font-semibold">Grand livre, TVA, Comptes annuels, Salaires.</span>
                    </p>
                    <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border border-green-200 text-green-800 font-bold text-sm uppercase tracking-wide shadow-sm">
                        <CheckCircle2 className="w-4 h-4 mr-2" /> Transition fluide et professionnelle
                    </div>
                </div>
            </section>

            {/* 5. FAQ (White) */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-3xl px-6">
                    <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">Questions fréquentes</h2>
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2 text-sm">Est-ce que mon ancien fiduciaire sera informé ?</h3>
                            <p className="text-sm text-slate-600">Non, rien n’est entrepris sans votre accord écrit.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2 text-sm">Combien de temps prend le changement ?</h3>
                            <p className="text-sm text-slate-600">C'est très rapide. Une fois validé, nous nous occupons de tout sous quelques semaines.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2 text-sm">Y a-t-il des frais pour l’analyse ?</h3>
                            <p className="text-sm text-slate-600">Non, c'est 100% offert pour les entreprises à Genève.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA (Navy) */}
            <section className="py-24 bg-slate-900 text-white text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Prêt à changer sereinement ?</h2>
                    <p className="text-slate-400 mb-10 text-lg">
                        Profitez de votre diagnostic offert avant la clôture des comptes.
                    </p>
                    <a href="#hero" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-5 rounded-xl shadow-lg shadow-green-900/40 transition-all transform hover:scale-105">
                        Réserver ma consultation gratuite
                    </a>
                    <p className="mt-6 text-xs text-slate-500">
                        Analyse réalisée sous 48h – créneaux limités.
                    </p>
                </div>
            </section>
        </main>
    );
}

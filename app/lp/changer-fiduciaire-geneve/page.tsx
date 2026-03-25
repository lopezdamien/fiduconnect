import { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle, Briefcase, Clock, Users } from 'lucide-react';
import { LPForm } from '@/components/LPForm';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Changer de fiduciaire | Consultation gratuite 30 min',
    description: 'Besoin de changer de fiduciaire ? Transition encadrée, analyse confidentielle offerte en 30 minutes. Sans conflit, sans stress.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            {/* 0. DISCRET LOGO HEADER */}
            <header className="absolute top-0 left-0 w-full p-4 sm:p-6 z-10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
                <Link href="/" className="text-xl font-bold text-slate-900">
                    FIDUCONNECT<span className="text-green-700">.</span>
                </Link>
                <a href="tel:+41795186717" className="text-sm font-medium text-slate-700 hover:text-green-700 transition-colors flex items-center gap-1.5">
                    📞 +41 79 518 67 17
                </a>
            </header>

            {/* 1. HERO + FORMULAIRE */}
            <section id="hero" className="relative pt-20 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 sm:mb-6 leading-tight text-balance mx-auto lg:mx-0 max-w-lg lg:max-w-none">
                                Changer de fiduciaire <br className="hidden sm:block" />
                                <span className="text-green-700">Sans conflit.</span> Sans perte de données. <span className="text-green-700 inline-block">Sans stress.</span>
                            </h1>
                            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 mb-6 font-medium leading-relaxed">
                                Analyse confidentielle offerte (30 min).<br />
                                Transition encadrée par un expert fiduciaire partenaire.
                            </p>

                            <div className="mb-6 flex justify-center lg:justify-start">
                                <Image 
                                    src="/images/image1.png" 
                                    alt="Illustration de la transition fiduciaire" 
                                    width={320} 
                                    height={240} 
                                    className="object-contain w-full max-w-[200px] sm:max-w-[280px]"
                                    priority
                                />
                            </div>

                            {/* Checkpoints (Desktop only) */}
                            <div className="hidden lg:block space-y-3 text-sm font-medium text-slate-700 mb-8 lg:mb-0">
                                <div className="flex items-start lg:items-center justify-center lg:justify-start gap-3">
                                    <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5 lg:mt-0"><ShieldCheck className="w-4 h-4 text-green-700" /></div>
                                    <span className="text-left text-sm">100% confidentiel</span>
                                </div>
                                <div className="flex items-start lg:items-center justify-center lg:justify-start gap-3">
                                    <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5 lg:mt-0"><Briefcase className="w-4 h-4 text-green-700" /></div>
                                    <span className="text-left text-sm leading-snug">Aucune démarche sans votre validation</span>
                                </div>
                                <div className="flex items-start lg:items-center justify-center lg:justify-start gap-3">
                                    <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5 lg:mt-0"><Clock className="w-4 h-4 text-green-700" /></div>
                                    <span className="text-left text-sm leading-snug">Consultation gratuite · 30 minutes</span>
                                </div>
                                <div className="flex items-start lg:items-center justify-center lg:justify-start gap-3">
                                    <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5 lg:mt-0"><Users className="w-4 h-4 text-green-700" /></div>
                                    <span className="text-left text-sm leading-snug">+ de 120 PME accompagnées par nos experts partenaires</span>
                                </div>
                                <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-500 text-xs mt-4 pt-4 border-t border-slate-100 w-full max-w-[280px] mx-auto lg:mx-0">
                                    Rappel sous 24h ouvrées.
                                </div>
                            </div>
                        </div>

                        {/* Form Wrapper */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-5 sm:p-8">
                                <div className="text-center mb-5 sm:mb-6">
                                    <h2 className="text-xl font-bold text-slate-900">Recevez votre analyse gratuite (30 min)</h2>
                                    <p className="text-sm text-slate-500 mt-1">Un expert vous rappelle sous 24h ouvrées.</p>
                                </div>
                                <LPForm />
                                <p className="text-center text-[11px] sm:text-xs text-slate-500 mt-4 flex items-center justify-center gap-2 font-medium">
                                    🔒 Confidentiel · Sans engagement
                                </p>
                                <p className="hidden sm:block text-[10px] text-slate-400 leading-relaxed mt-4 text-center">
                                    Vos données sont utilisées uniquement pour vous recontacter. Aucune revente à des tiers.<br/>
                                    En savoir plus : <a href="https://www.fiduconnect.ch/mentions-legales" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-500">Mentions légales</a>
                                </p>
                            </div>

                            {/* Checkpoints Mobile only */}
                            <div className="lg:hidden mt-8 space-y-3 text-sm font-medium text-slate-700 mx-auto max-w-sm">
                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5"><ShieldCheck className="w-4 h-4 text-green-700" /></div>
                                    <span className="text-left text-sm leading-snug font-semibold text-slate-800">100% confidentiel et sans engagement</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5"><Briefcase className="w-4 h-4 text-green-700" /></div>
                                    <span className="text-left text-sm leading-snug font-semibold text-slate-800">Aucune démarche sans votre validation expresse</span>
                                </div>
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
                            "Trop peu de suivi de mon dossier",
                            "Je ne comprends pas ma situation TVA",
                            "Je subis ma comptabilité sans la comprendre",
                            "J'ai peur de faire une erreur coûteuse",
                            "Je ne sais pas ce que je paie vraiment"
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
                            <p className="text-sm text-slate-600">Vous décrivez votre situation en 30 minutes.<br />Aucun document à préparer, aucun engagement.</p>
                        </div>
                        <div className="relative bg-white p-4">
                            <div className="w-16 h-16 mx-auto bg-slate-50 text-slate-900 border border-slate-200 rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Identification des points de vigilance</h3>
                            <p className="text-sm text-slate-600">Nous détectons ensemble les zones à risque :<br />TVA, clôtures, obligations manquées.</p>
                        </div>
                        <div className="relative bg-white p-4">
                            <div className="w-16 h-16 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-green-900/20">3</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Transition encadrée</h3>
                            <p className="text-sm text-slate-600">Nous coordonnons tout avec votre nouvel expert :<br />récupération du grand livre, TVA, comptes annuels, salaires.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. RASSURANCE (Light Grey) */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Vous n’avez rien à gérer</h2>
                    <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                        De la première consultation à la reprise complète du dossier,<br />
                        nous gérons chaque détail à votre place.
                    </p>

                    <div className="mb-10 w-full flex justify-center">
                        <Image 
                            src="/images/image2.png" 
                            alt="Reprise complète du dossier" 
                            width={800} 
                            height={400} 
                            className="object-contain w-full max-w-md drop-shadow-md"
                        />
                    </div>

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
                            <p className="text-sm text-slate-600">Non. Nous n'effectuons aucune démarche sans votre accord écrit préalable. La démarche est entièrement confidentielle.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2 text-sm">Combien de temps prend le changement ?</h3>
                            <p className="text-sm text-slate-600">En général 2 à 4 semaines. Nous gérons la récupération de tous vos documents et la continuité de votre comptabilité.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2 text-sm">Y a-t-il des frais pour l'analyse ?</h3>
                            <p className="text-sm text-slate-600">Non, la consultation de 30 minutes est entièrement gratuite et sans engagement pour votre entreprise.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2 text-sm">Est-ce risqué de changer en cours d'année ?</h3>
                            <p className="text-sm text-slate-600">Non. Un changement bien encadré n'entraîne aucune interruption ni perte de données, quelle que soit la période.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2 text-sm">À qui s'adresse ce service ?</h3>
                            <p className="text-sm text-slate-600">Aux indépendants, Sàrl et PME qui souhaitent une gestion comptable plus claire, plus réactive et mieux adaptée à leur structure.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA (Navy) */}
            <section className="py-24 bg-slate-900 text-white text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-balance">Votre situation mérite un regard neuf.</h2>
                    <p className="text-slate-400 mb-10 text-lg">
                        30 minutes suffisent pour savoir où vous en êtes. Gratuit, confidentiel, sans engagement.
                    </p>
                    <a href="#hero" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-5 rounded-xl shadow-lg shadow-green-900/40 transition-all transform hover:scale-105">
                        Je prends rendez-vous gratuitement
                    </a>
                </div>
            </section>
        </main>
    );
}

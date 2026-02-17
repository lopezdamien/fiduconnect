import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { CheckCircle2, MessageSquare, Clock, ShieldCheck, ArrowRight, HelpCircle, RefreshCcw, FileWarning, Unlock, Briefcase } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Changer de fiduciaire à Genève | Transition sécurisée",
    description: "Changez de fiduciaire à Genève sans risque. Audit préalable, transfert encadré et continuité fiscale garantie. Consultation gratuite.",
};

export default function ChangerFiduciaire() {
    return (
        <>
            {/* 1. HERO SECTION */}
            <section className="relative bg-slate-900 py-24 lg:py-32 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-950 opacity-80"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">
                        Changer de fiduciaire à Genève, <br className="hidden sm:block" />
                        <span className="text-green-500">simplement et sans risque</span>
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-slate-300 max-w-2xl mx-auto font-medium">
                        Nous analysons votre situation, organisons la transition avec votre ancien prestataire et sécurisons votre conformité fiscale.
                    </p>
                    <div className="mt-10 flex flex-col items-center gap-6">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 text-white px-10 py-6 text-lg font-bold shadow-2xl shadow-green-900/40 transform transition hover:-translate-y-1 hover:scale-105">
                                Faire un point gratuit
                            </Button>
                        </Link>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-slate-400 font-medium">
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Aucun conflit avec votre ancien fiduciaire</span>
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Processus encadré juridiquement</span>
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Aucune interruption d’activité</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SECTION QUESTIONS CLIENTS (Reassurance) */}
            <Section className="bg-white py-24 border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions fréquentes avant de sauter le pas</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-green-200 transition-colors h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <HelpCircle className="h-6 w-6 text-green-600" />
                                <h3 className="font-bold text-slate-900 uppercase tracking-wide text-sm">Mon fiduciaire va mal le prendre ?</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Changer de fiduciaire est un droit contractuel. Nous gérons la communication de manière professionnelle.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-green-200 transition-colors h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="h-6 w-6 text-green-600" />
                                <h3 className="font-bold text-slate-900 uppercase tracking-wide text-sm">Est-ce que je risque un problème fiscal ?</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Non. Nous auditons la situation avant toute reprise pour éviter erreurs et ruptures déclaratives.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-green-200 transition-colors h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="h-6 w-6 text-green-600" />
                                <h3 className="font-bold text-slate-900 uppercase tracking-wide text-sm">Est-ce que cela va me prendre du temps ?</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Non. Vous signez, nous coordonnons tout. Vous restez concentré sur votre activité.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. SECTION PROCESSUS */}
            <Section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Un transfert 100 % sécurisé</h2>
                        <p className="text-lg text-slate-600 font-medium">Un processus clair en 3 étapes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[3rem] left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

                        <div className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center shadow-lg mb-8 group-hover:border-green-500 group-hover:scale-105 transition-all duration-300 z-10">
                                <span className="text-3xl font-extrabold text-slate-900 group-hover:text-green-600 transition-colors">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Analyse complète</h3>
                            <p className="text-slate-600 leading-relaxed px-4">
                                Nous vérifions votre historique comptable et identifions les risques.
                            </p>
                        </div>

                        <div className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center shadow-lg mb-8 group-hover:border-green-500 group-hover:scale-105 transition-all duration-300 z-10">
                                <span className="text-3xl font-extrabold text-slate-900 group-hover:text-green-600 transition-colors">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Coordination & transfert</h3>
                            <p className="text-slate-600 leading-relaxed px-4">
                                Nous récupérons les documents et assurons la continuité fiscale.
                            </p>
                        </div>

                        <div className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center shadow-lg mb-8 group-hover:border-green-500 group-hover:scale-105 transition-all duration-300 z-10">
                                <span className="text-3xl font-extrabold text-slate-900 group-hover:text-green-600 transition-colors">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Mise en place optimisée</h3>
                            <p className="text-slate-600 leading-relaxed px-4">
                                Nous structurons votre organisation pour éviter les erreurs futures.
                            </p>
                        </div>
                    </div>

                    {/* 4. SECTION STRATEGIQUE (New) */}
                    <div className="mt-20 max-w-4xl mx-auto bg-green-50 border border-green-100 rounded-2xl p-8 sm:p-10 text-center">
                        <h3 className="text-2xl font-bold text-green-900 mb-8">Ce que nous sécurisons pour vous</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-left max-w-2xl mx-auto">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                                <span className="text-green-800 font-medium">Continuité TVA</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                                <span className="text-green-800 font-medium">Déclarations fiscales sans rupture</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                                <span className="text-green-800 font-medium">Vérification des périodes ouvertes</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                                <span className="text-green-800 font-medium">Identification des risques éventuels</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 5. SECTION POURQUOI CHANGER (Pain Points) */}
            <Section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi envisager un changement ?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform">
                                <Clock className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Retards fréquents</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Des réponses tardives ou des bilans livrés en retard fragilisent votre entreprise.
                            </p>
                        </div>

                        <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                                <MessageSquare className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Communication floue</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Un bon partenaire explique clairement vos obligations sans jargon.
                            </p>
                        </div>

                        <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                            <div className="h-12 w-12 bg-slate-200 rounded-lg flex items-center justify-center mb-6 text-slate-700 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Manque de suivi</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Un suivi proactif évite erreurs et mauvaises surprises fiscales.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6. CTA FINAL */}
            <section className="bg-slate-900 py-24 text-center">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6 sm:text-4xl">
                        Prêt à changer sereinement de fiduciaire ?
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Consultation gratuite, diagnostic clair et plan d’action structuré.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 px-10 py-6 text-lg font-bold shadow-xl shadow-green-900/20 transform transition hover:scale-105">
                                Faire un point gratuit
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

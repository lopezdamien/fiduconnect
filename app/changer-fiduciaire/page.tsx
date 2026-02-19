import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { CheckCircle2, MessageSquare, Clock, ShieldCheck, ArrowRight, HelpCircle, Briefcase } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Changer de fiduciaire | Processus simple et sécurisé",
    description: "Changer de fiduciaire sans rupture d’activité. Audit préalable, transfert sécurisé et accompagnement structuré. Consultation gratuite 30 minutes.",
};

export default function ChangerFiduciaire() {
    return (
        <>
            <section className="bg-slate-900 pt-24 pb-20 text-center">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6 leading-tight">
                        Changer de fiduciaire sans stress ni rupture d’activité
                    </h1>
                    <p className="text-lg leading-8 text-slate-300 max-w-3xl mx-auto mb-10">
                        Une transition fluide, encadrée juridiquement et 100% sécurisée.
                        Nous coordonnons le transfert complet de votre dossier comptable, sans conflit et sans interruption.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 px-8 py-4 text-lg shadow-lg shadow-green-900/20">
                                Faire un point gratuit <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-slate-400">
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Sans conflit avec l&apos;ancien fiduciaire</span>
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Aucun arrêt d’activité</span>
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Processus encadré juridiquement</span>
                        </div>
                    </div>
                    {/* MINI BLOC AUTORITÉ */}
                    <div className="mt-12 inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <Briefcase className="h-5 w-5 text-green-500" />
                            <span className="text-white font-bold text-lg">+120 PME accompagnées</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Transition gérée de manière professionnelle, confidentielle et structurée.
                            Nous analysons toujours la situation avant reprise pour éviter toute mauvaise surprise.
                        </p>
                    </div>
                </div>
            </section>

            <Section className="bg-white py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi envisager un changement ?</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Changer de fiduciaire n’est pas un échec.
                            C’est une décision stratégique pour sécuriser votre croissance et retrouver de la visibilité.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm h-full">
                            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-red-600">
                                <Clock className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Retards fréquents</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Vous attendez des semaines pour une réponse simple ou vos bilans arrivent tardivement ? Le respect des délais est essentiel.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm h-full">
                            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                                <MessageSquare className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Communication floue</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Votre comptable doit être capable de répondre clairement à vos questions administratives sans jargon excessif.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm h-full">
                            <div className="h-12 w-12 bg-slate-200 rounded-lg flex items-center justify-center mb-6 text-slate-600">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Manque de suivi</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Un bon partenaire vous alerte en cas d&apos;incohérence dans vos pièces ou vos déclarations, pour éviter les erreurs.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SECTION FREINS */}
            <Section className="bg-slate-50 border-y border-slate-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Les questions que nos clients se posent avant de changer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                                <HelpCircle className="h-5 w-5 text-green-600" />
                                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Mon fiduciaire va mal le prendre ?</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Le changement est un droit contractuel. Nous gérons la communication de manière professionnelle et respectueuse.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                                <ShieldCheck className="h-5 w-5 text-green-600" />
                                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Est-ce que je risque un problème fiscal ?</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Nous auditons votre situation avant toute reprise afin d’éviter toute rupture déclarative ou incohérence.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                                <Clock className="h-5 w-5 text-green-600" />
                                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Est-ce que cela va me prendre du temps ?</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Non. Vous signez, nous coordonnons. Vous continuez à gérer votre activité normalement.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Un transfert structuré et sécurisé en 3 étapes</h2>
                        <p className="text-lg text-slate-600 font-medium">Sans rupture administrative, fiscale ou déclarative.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col h-full text-center">
                            <div className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm mb-4">1</div>
                            <h4 className="font-bold text-slate-900 mb-2">Analyse de la situation</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Nous regardons ce qui a été fait et identifions les manques.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col h-full text-center">
                            <div className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm mb-4">2</div>
                            <h4 className="font-bold text-slate-900 mb-2">Transfert du dossier</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Nous gérons la transition avec votre ancien prestataire. Vous n&apos;avez rien à faire.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col h-full text-center">
                            <div className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm mb-4">3</div>
                            <h4 className="font-bold text-slate-900 mb-2">Reprise en main</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Mise en place de processus clairs pour l&apos;avenir.</p>
                        </div>
                    </div>

                    {/* DIFFERENCIATION */}
                    <div className="mt-12 bg-green-50 p-8 rounded-2xl border border-green-100 text-center">
                        <h3 className="text-xl font-bold text-green-900 mb-6">Pourquoi nous confier votre transition ?</h3>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm text-green-800 font-medium">
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-600" /> Analyse préalable complète avant reprise</span>
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-600" /> Vérification TVA et périodes ouvertes</span>
                        </div>
                        <div className="flex justify-center mt-4">
                            <span className="flex items-center justify-center text-sm text-green-800 font-medium"><CheckCircle2 className="h-5 w-5 mr-2 text-green-600" /> Identification des risques éventuels</span>
                        </div>
                    </div>
                </div>
            </Section>

            <section className="bg-slate-900 py-20 text-center">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
                        Votre fiduciaire est-elle vraiment adaptée à votre croissance ?
                    </h2>
                    <div className="flex flex-col items-center gap-8">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 px-10 py-5 text-lg shadow-xl shadow-green-900/20">
                                Faire un point gratuit (30 min) <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-400">
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Consultation offerte</span>
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Diagnostic clair</span>
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Plan d’action structuré</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Optimisation Salaires & Charges Sociales | FIDU",
    description: "Arbitrage salaire vs dividende, audit LPP et charges sociales. Optimisez vos revenus de dirigeant.",
};

export default function ServiceCharges() {
    return (
        <>
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Ressources Humaines</span>
                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                            Externalisez votre gestion des salaires pour une conformité totale (AVS/LPP)
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            La gestion des salaires est une responsabilité lourde. Nous simplifions vos obligations employeur pour vous permettre de vous concentrer sur votre équipe, sans risque de rappel de cotisations.
                        </p>
                    </div>
                </div>
            </section>

            <Section className="bg-slate-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Obligations Employeur Suisses</h2>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-green-100 rounded-full p-1">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                                </div>
                                <div>
                                    <strong className="block text-slate-900 mb-1">2ème Pilier (LPP)</strong>
                                    <span className="text-slate-600 leading-relaxed">Affiliation et cotisations LPP (2ème pilier) et suivi des changements de taux.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-green-100 rounded-full p-1">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                                </div>
                                <div>
                                    <strong className="block text-slate-900 mb-1">Déclarations Annuelles</strong>
                                    <span className="text-slate-600 leading-relaxed">Gestion des déclarations annuelles AVS/AI/APG/AC et certificats de salaire.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-green-100 rounded-full p-1">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                                </div>
                                <div>
                                    <strong className="block text-slate-900 mb-1">Assurances de Personnes</strong>
                                    <span className="text-slate-600 leading-relaxed">Annonces d'accidents (LAA) et de maladie (IJM) en temps réel.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Votre Audit de Conformité RH</h3>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 text-sm">Vérification de la conformité des affiliations.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 text-sm">Contrôle des taux et des déductions appliquées.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 text-sm">Gestion des entrées et sorties de collaborateurs.</span>
                            </li>
                        </ul>
                        <Link href="/contact">
                            <Button fullWidth className="bg-green-700 hover:bg-green-600 text-white">Demander un devis personnalisé</Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}

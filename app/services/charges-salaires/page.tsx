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
                            Charges Sociales & Salaires
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            La gestion des salaires implique de nombreuses obligations administratives (AVS, LPP, LAA). Une gestion rigoureuse évite les erreurs de décompte.
                        </p>
                    </div>
                </div>
            </section>

            <Section className="bg-slate-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Obligations Employeur</h2>
                        <p className="text-slate-600 mb-4">
                            En tant qu&apos;employeur, vous devez garantir la conformité de vos déclarations sociales auprès des différentes caisses :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-8">
                            <li>Déclarations AVS/AI/APG</li>
                            <li>Affiliation et cotisations LPP (2ème pilier)</li>
                            <li>Assurances accidents (LAA) et maladie (IJM)</li>
                            <li>Certificats de salaire annuels</li>
                        </ul>
                        <p className="text-slate-600">
                            Nous vérifions que vous êtes en règle avec toutes ces institutions pour éviter tout rappel de cotisations.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Notre Contrôle Administratif</h3>
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
                        <Link href="/diagnostic">
                            <Button fullWidth variant="primary">Faire un point gratuit</Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}

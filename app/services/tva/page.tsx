import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Expertise TVA Genève | Décompte & Optimisation | FIDU",
    description: "Méthode effective ou taux de dette fiscale nette ? Ne perdez plus d'argent avec votre TVA. Analyse gratuite pour PME.",
};

export default function ServiceTVA() {
    return (
        <>
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">Fiscalité</span>
                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                            TVA & Assujettissement
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Le seuil de 100k est souvent mal interprété. Une méthode ou un paramétrage inadapté peut entraîner des erreurs de décompte ou des rectifications.
                        </p>
                    </div>
                </div>
            </section>

            <Section className="bg-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Les pièges fréquents</h2>
                        <ul className="space-y-4">
                            <li className="flex gap-4 p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                                <AlertTriangle className="h-6 w-6 text-orange-500 shrink-0" />
                                <div>
                                    <strong className="block text-slate-900">Méthode inadaptée</strong>
                                    <span className="text-slate-600 text-sm">Choisir la mauvaise méthode peut complexifier inutilement votre gestion administrative.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                                <AlertTriangle className="h-6 w-6 text-orange-500 shrink-0" />
                                <div>
                                    <strong className="block text-slate-900">Impôt préalable oublié</strong>
                                    <span className="text-slate-600 text-sm">Des erreurs dans la déclaration des frais peuvent fausser votre décompte final.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                                <AlertTriangle className="h-6 w-6 text-orange-500 shrink-0" />
                                <div>
                                    <strong className="block text-slate-900">Prestations étrangères</strong>
                                    <span className="text-slate-600 text-sm">L&apos;impôt sur les acquisitions (services importés) est souvent omis, entraînant des reprises fiscales.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Notre Approche</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 font-bold text-sm">1</div>
                                    <p className="text-slate-700">Audit et vérification de vos décomptes TVA.</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 font-bold text-sm">2</div>
                                    <p className="text-slate-700">Contrôle de la cohérence de votre méthode (Effective vs TDFN).</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 font-bold text-sm">3</div>
                                    <p className="text-slate-700">Régularisation administrative si nécessaire.</p>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <Link href="/diagnostic">
                                    <Button fullWidth>Faire un point gratuit</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

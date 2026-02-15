import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import Link from "next/link";
import { CheckCircle2, ArrowRight, RefreshCcw } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Changer de Fiduciaire Genève | Processus Simple & Rapide",
    description: "Vous souhaitez changer de fiduciaire ? Nous organisons la transition de A à Z : récupération des pièces, historique comptable et mise en place du nouveau mandat.",
};

export default function ChangerFiduciaire() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-slate-900 pt-20 pb-24 text-center">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                        Changer de fiduciaire à Genève
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
                        Une transition fluide et sans rupture d'activité. Nous coordonnons le transfert intégral de votre dossier comptable.
                    </p>
                    <div className="mt-10">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600">
                                Demander une consultation gratuite de 30 minutes <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 1 - Pourquoi changer */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Pourquoi envisager un changement ?</h2>
                        <div className="text-lg text-slate-700 mb-6 space-y-4 text-justify">
                            <p>
                                L'évolution de votre PME nécessite peut-être un partenaire plus réactif ou mieux structuré. Changer de fiduciaire n'est pas un acte de défiance, mais une décision de gestion pour sécuriser votre avenir.
                            </p>
                            <p>
                                Si vous ressentez un manque de conseil, des délais de réponse trop longs ou une opacité dans la facturation, il est temps d'évaluer vos options.
                            </p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 shrink-0" />
                                <span className="text-slate-700 font-medium">Besoin de plus de réactivité et de digital.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 shrink-0" />
                                <span className="text-slate-700 font-medium">Recherche d'une tarification forfaitaire claire.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 shrink-0" />
                                <span className="text-slate-700 font-medium">Nécessité d'un suivi fiscal plus pointu.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex items-center justify-center">
                        <RefreshCcw className="h-32 w-32 text-slate-200" />
                    </div>
                </div>
            </Section>

            {/* Section 2 - Process */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Un transfert 100% sécurisé</h2>
                        <p className="text-slate-700 max-w-2xl mx-auto">
                            Nous prenons le relais directement avec votre ancien prestataire. Vous n'avez pas à gérer les aspects techniques ou conflictuels.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                            <h3 className="font-bold text-slate-900 mb-2">Mandat de transfert</h3>
                            <p className="text-slate-700 text-sm">
                                Vous signez une lettre de résiliation et un mandat nous autorisant à récupérer vos pièces comptables.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                            <h3 className="font-bold text-slate-900 mb-2">Audit de reprise</h3>
                            <p className="text-slate-700 text-sm">
                                Nous vérifions l'intégralité de l'historique reçu (Grand Livre, TVA) pour nous assurer qu'aucune erreur ne subsiste.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                            <h3 className="font-bold text-slate-900 mb-2">Continuité immédiate</h3>
                            <p className="text-slate-700 text-sm">
                                Nous mettons en place vos nouveaux accès et reprenons la gestion courante sans jour de carence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - Documents Necesaires */}
            <Section className="bg-white">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Ce que nous récupérons pour vous</h2>
                    <div className="bg-green-50/50 border-l-4 border-green-500 p-6 rounded-r-lg space-y-3">
                        <p className="text-slate-800 font-medium flex items-center"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2" /> Derniers bilans et comptes de résultat bouclés.</p>
                        <p className="text-slate-800 font-medium flex items-center"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2" /> Grand Livre et balances des exercices ouverts.</p>
                        <p className="text-slate-800 font-medium flex items-center"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2" /> Décomptes TVA et réconciliations fiscales.</p>
                        <p className="text-slate-800 font-medium flex items-center"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2" /> Dossiers du personnel et décomptes charges sociales.</p>
                    </div>
                </div>
            </Section>

            <Section className="bg-slate-50 text-center border-t border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Prêt à fiabiliser votre gestion ?</h2>
                <Link href="/contact">
                    <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                        Demander une consultation gratuite de 30 minutes
                    </Button>
                </Link>
            </Section>
        </>
    );
}

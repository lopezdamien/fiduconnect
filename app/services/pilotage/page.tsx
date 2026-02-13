import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { BarChart3, PieChart, LineChart, ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pilotage d'Entreprise & Tableau de Bord | FIDU Genève",
    description: "Transformez votre comptabilité en outil de décision. Tableaux de bord, budgets prévisionnels et conseils stratégiques pour dirigeants.",
};

export default function Pilotage() {
    return (
        <>
            <section className="bg-slate-900 pt-24 pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                            Vos chiffres devraient vous aider à décider.
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Pas seulement à déclarer. Passez d&apos;une comptabilité fiscale à une comptabilité de pilotage.
                        </p>
                    </div>
                </div>
            </section>

            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Anticipation vs Constat</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            La plupart des fiduciaires se contentent de saisir vos factures pour produire un bilan annuel. C&apos;est nécessaire pour l&apos;État, mais inutile pour vous.
                        </p>
                        <p className="text-lg text-slate-600 mb-6">
                            Le pilotage dirigeant, c&apos;est l&apos;art d&apos;utiliser la donnée financière pour prendre des décisions éclairées en temps réel.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                <BarChart3 className="h-8 w-8 text-green-700" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">Tableaux de bord mensuels</h3>
                                    <p className="text-sm text-slate-600">Suivez votre marge et vos frais fixes mois après mois.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                <PieChart className="h-8 w-8 text-green-700" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">Analyse des centres de coûts</h3>
                                    <p className="text-sm text-slate-600">Sachez exactement où part votre argent.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                <LineChart className="h-8 w-8 text-green-700" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">Budgets prévisionnels</h3>
                                    <p className="text-sm text-slate-600">Anticipez vos besoins de trésorerie à 6 mois.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                        <h3 className="text-2xl font-bold mb-6 relative z-10">Questions stratégiques</h3>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex gap-4">
                                <ArrowUpRight className="h-6 w-6 text-green-400 shrink-0" />
                                <span>&quot;Puis-je me permettre d&apos;embaucher ce nouveau collaborateur maintenant ?&quot;</span>
                            </li>
                            <li className="flex gap-4">
                                <ArrowUpRight className="h-6 w-6 text-green-400 shrink-0" />
                                <span>&quot;Quelle est la rentabilité réelle de ce projet ou de ce client ?&quot;</span>
                            </li>
                            <li className="flex gap-4">
                                <ArrowUpRight className="h-6 w-6 text-green-400 shrink-0" />
                                <span>&quot;Combien puis-je investir en marketing sans mettre en danger ma trésorerie ?&quot;</span>
                            </li>
                            <li className="flex gap-4">
                                <ArrowUpRight className="h-6 w-6 text-green-400 shrink-0" />
                                <span>&quot;Dois-je acheter ou louer ce véhicule ?&quot;</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            <section className="bg-green-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Prenez le contrôle</h2>
                    <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                        Nous mettons en place les outils qui vous manquent pour piloter sereinement.
                    </p>
                    <Link href="/contact">
                        <Button size="lg">Discuter de mes besoins de pilotage</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}

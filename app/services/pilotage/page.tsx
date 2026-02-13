import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { FileCheck, ShieldCheck, Clock, Archive } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Organisation Comptable & Sérénité | FIDUCONNECT",
    description: "Ne laissez plus l'administratif gâcher vos nuits. Nous structurons votre comptabilité pour garantir délais et conformité.",
};

export default function Pilotage() {
    return (
        <>
            <section className="bg-slate-900 pt-24 pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                            Dormez sur vos deux oreilles.
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Une comptabilité à jour, c&apos;est la garantie d&apos;éviter les mauvaises surprises fiscales et les amendes pour retard.
                        </p>
                    </div>
                </div>
            </section>

            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">L&apos;organisation, clé de la conformité</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            La comptabilité n&apos;est pas qu&apos;une obligation légale, c&apos;est votre protection. Des pièces manquantes ou des délais dépassés exposent votre entreprise à des risques inutiles.
                        </p>
                        <p className="text-lg text-slate-600 mb-6">
                            FIDUCONNECT vérifie que votre organisation actuelle permet de respecter toutes les échéances sans stress.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                <FileCheck className="h-8 w-8 text-green-700" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">Pièces comptables complètes</h3>
                                    <p className="text-sm text-slate-600">Fini les justificatifs perdus qui coûtent cher en impôts.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                <Clock className="h-8 w-8 text-green-700" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">Respect des délais</h3>
                                    <p className="text-sm text-slate-600">TVA, acomptes, déclarations : soyez toujours à l&apos;heure.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                <Archive className="h-8 w-8 text-green-700" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">Archivage sécurisé</h3>
                                    <p className="text-sm text-slate-600">Vos documents accessibles et protégés en cas de contrôle.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                        <h3 className="text-2xl font-bold mb-6 relative z-10">Les risques évités</h3>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex gap-4">
                                <ShieldCheck className="h-6 w-6 text-green-400 shrink-0" />
                                <span>Intérêts moratoires sur impôts et TVA</span>
                            </li>
                            <li className="flex gap-4">
                                <ShieldCheck className="h-6 w-6 text-green-400 shrink-0" />
                                <span>Taxation d&apos;office (estimation souvent majorée)</span>
                            </li>
                            <li className="flex gap-4">
                                <ShieldCheck className="h-6 w-6 text-green-400 shrink-0" />
                                <span>Pertes de déductions fiscales faute de preuves</span>
                            </li>
                            <li className="flex gap-4">
                                <ShieldCheck className="h-6 w-6 text-green-400 shrink-0" />
                                <span>Stress inutile à chaque courrier officiel</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            <section className="bg-green-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Mettez de l&apos;ordre</h2>
                    <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                        Nous auditons votre processus administratif pour vous garantir une tranquillité d&apos;esprit totale.
                    </p>
                    <Link href="/diagnostic">
                        <Button size="lg">Vérifier mon organisation</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { MessageSquare, Clock, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Changer de Fiduciaire à Genève | Transition en douceur",
    description: "Votre fiduciaire manque de réactivité ou de conseil ? Confiez-nous la transition de votre dossier comptable. Service pour PME.",
};

export default function ChangerFiduciaire() {
    return (
        <>
            <section className="bg-white pt-24 pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                        Votre fiduciaire est-elle assez réactive ?
                    </h1>
                    <p className="text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
                        La comptabilité demande de la rigueur et de la disponibilité. Un suivi comptable de qualité doit inclure le respect des délais et une communication claire.
                    </p>
                </div>
            </section>

            <Section className="bg-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-red-600">
                            <Clock className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Retards fréquents</h3>
                        <p className="text-slate-600">
                            Vous attendez des semaines pour une réponse simple ou vos bilans arrivent tardivement ? Le respect des délais est essentiel.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                            <MessageSquare className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Communication floue</h3>
                        <p className="text-slate-600">
                            Votre comptable doit être capable de répondre clairement à vos questions administratives sans jargon excessif.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <div className="h-12 w-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-600">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Manque de suivi</h3>
                        <p className="text-slate-600">
                            Un bon partenaire vous alerte en cas d&apos;incohérence dans vos pièces ou vos déclarations, pour éviter les erreurs.
                        </p>
                    </div>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Changer de fiduciaire, c&apos;est simple</h2>
                    <div className="text-left space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200">
                        <div className="flex gap-4">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm">1</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Analyse de la situation actuelle</h4>
                                <p className="text-slate-600">Nous regardons ce qui a été fait et identifions les manques.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm">2</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Transfert du dossier</h4>
                                <p className="text-slate-600">Nous gérons la transition avec votre ancien prestataire. Vous n&apos;avez rien à faire.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm">3</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Reprise en main</h4>
                                <p className="text-slate-600">Mise en place de processus clairs pour l&apos;avenir.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link href="/contact">
                            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                                Faire un point gratuit
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}

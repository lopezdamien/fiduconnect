import { Section } from "@/components/Section";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "À Propos | Cabinet d'expertise comptable Genève",
    description: "Un regard indépendant et structuré sur votre comptabilité. Découvrez notre approche pragmatique pour les PME genevoises.",
};

export default function About() {
    return (
        <>
            <section className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                    Notre Mission
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
                    Apporter de la clarté et de la sécurité aux dirigeants de PME genevoises.
                </p>
            </section>

            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Qui sommes-nous ?</h2>
                        <p className="text-lg text-slate-600 mb-4">
                            Nous sommes un cabinet indépendant spécialisé dans l&apos;analyse administrative et fiscale. Contrairement à une fiduciaire classique qui gère votre quotidien, nous intervenons pour <strong>auditer, structurer et orienter</strong>.
                        </p>
                        <p className="text-lg text-slate-600 mb-4">
                            Notre constat est simple : trop d&apos;entrepreneurs subissent leur comptabilité au lieu de l&apos;utiliser comme un outil de pilotage.
                        </p>
                        <p className="text-lg text-slate-600">
                            Nous ne cherchons pas à remplacer votre fiduciaire si elle vous convient, mais à vous assurer que vous êtes entre de bonnes mains et que vos chiffres sont optimisés.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Nos Valeurs</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-700 shrink-0" />
                                <span className="text-slate-700"><strong>Indépendance totale</strong> : Nous travaillons pour vous, pas pour l&apos;administration fiscale.</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-700 shrink-0" />
                                <span className="text-slate-700"><strong>Confidentialité</strong> : Vos données sont traitées avec le plus haut niveau de sécurité suisse.</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-700 shrink-0" />
                                <span className="text-slate-700"><strong>Pragmatisme</strong> : Pas de jargon inutile, des solutions concrètes et applicables.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section className="bg-slate-50">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Notre fonctionnement</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div>
                            <div className="text-4xl font-bold text-slate-200 mb-4">01</div>
                            <h3 className="font-bold text-slate-900 mb-2">Analyse</h3>
                            <p className="text-slate-600">Nous passons en revue vos derniers bouclements et votre organisation actuelle.</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-slate-200 mb-4">02</div>
                            <h3 className="font-bold text-slate-900 mb-2">Échange</h3>
                            <p className="text-slate-600">Nous vous présentons nos constats et les pistes d&apos;amélioration (tva, salaire, charges).</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-slate-200 mb-4">03</div>
                            <h3 className="font-bold text-slate-900 mb-2">Orientation</h3>
                            <p className="text-slate-600">Si nécessaire, nous vous orientons vers un partenaire fiduciaire adapté à votre taille.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

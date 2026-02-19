import { Section } from "@/components/Section";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "À Propos | Cabinet d'expertise comptable",
    description: "Un regard indépendant et structuré sur votre comptabilité. Découvrez notre approche pragmatique pour les PME.",
};

export default function About() {
    return (
        <>
            <section className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                    Notre Rôle
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
                    Apporter de la clarté administrative aux dirigeants de PME.
                </p>
            </section>

            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Qui sommes-nous ?</h2>
                        <p className="text-lg text-slate-600 mb-4">
                            Nous sommes un cabinet indépendant spécialisé dans l&apos;analyse de l&apos;organisation comptable.
                        </p>
                        <p className="text-lg text-slate-600 mb-6">
                            <strong>FIDUCONNECT agit comme point d’entrée et facilite la mise en relation avec des cabinets fiduciaires partenaires.</strong>
                        </p>
                        <p className="text-lg text-slate-600 mb-6">
                            Nous ne remplaçons pas un mandat fiduciaire : nous analysons votre situation et vous orientons vers le partenaire adapté pour la tenue de vos comptes et vos déclarations.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Nos Valeurs</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-700 shrink-0" />
                                <span className="text-slate-700"><strong>Indépendance</strong> : Nous vous conseillons le partenaire le plus adapté à votre structure.</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-700 shrink-0" />
                                <span className="text-slate-700"><strong>Rigueur</strong> : Nous vérifions la conformité de vos processus administratifs.</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-700 shrink-0" />
                                <span className="text-slate-700"><strong>Transparence</strong> : Pas de promesses irréalistes, uniquement de la gestion saine.</span>
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
                            <p className="text-slate-600">Nous passons en revue votre organisation administrative actuelle (classement, délais).</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-slate-200 mb-4">02</div>
                            <h3 className="font-bold text-slate-900 mb-2">Constat</h3>
                            <p className="text-slate-600">Nous identifions les manques éventuels (pièces, TVA, social).</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-slate-200 mb-4">03</div>
                            <h3 className="font-bold text-slate-900 mb-2">Mise en relation</h3>
                            <p className="text-slate-600">Nous vous connectons avec la fiduciaire qu&apos;il vous faut pour la gestion courante.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

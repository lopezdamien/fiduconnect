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
                            Le poste &quot;salaires&quot; est souvent le plus lourd de votre compte de résultat. Pour le dirigeant, l&apos;arbitrage entre salaire et dividende est crucial.
                        </p>
                    </div>
                </div>
            </section>

            <Section className="bg-slate-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Salaire ou Dividende ?</h2>
                        <p className="text-slate-600 mb-4">
                            En tant qu&apos;actionnaire-salarié de votre SA ou SARL, vous avez le choix. Ce choix impacte :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-8">
                            <li>Votre charge AVS/AI/APG (environ 10.6% + part employeur)</li>
                            <li>Vos cotisations LPP (2ème pilier)</li>
                            <li>Votre impôt sur le revenu privé</li>
                            <li>L&apos;impôt sur le bénéfice de la société</li>
                        </ul>
                        <p className="text-slate-600">
                            Il n&apos;y a pas de réponse unique. Une simulation chiffrée est indispensable chaque année.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Notre Audit LPP</h3>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 text-sm">Vérification de la conformité du plan de prévoyance.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 text-sm">Comparaison des frais de gestion et de risque (souvent cachés).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 text-sm">Proposition de plans &quot;Cadres&quot; (1e) optimisés fiscalement.</span>
                            </li>
                        </ul>
                        <Link href="/diagnostic">
                            <Button fullWidth variant="primary">Simuler mes charges</Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comptabilité & Déclarations Fiscales | FIDUCONNECT",
    description: "Tenue de comptes et déclarations fiscales PME. Nous garantissons l'exactitude de vos chiffres pour l'administration.",
};

export default function ServiceComptabilite() {
    return (
        <>
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">Gestion</span>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                        Comptabilité & Déclarations
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                        Une comptabilité rigoureuse est la base de votre sécurité fiscale. Nous auditons la qualité de votre tenue de comptes.
                    </p>
                </div>
            </section>

            <Section className="bg-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Ce que nous vérifions</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600 font-bold">1</div>
                                <div>
                                    <strong className="block text-slate-900">La justesse des écritures</strong>
                                    <span className="text-slate-600 text-sm">Les charges sont-elles déductibles ? Les comptes transitoires sont-ils justifiés ?</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600 font-bold">2</div>
                                <div>
                                    <strong className="block text-slate-900">L&apos;exhaustivité des déclarations</strong>
                                    <span className="text-slate-600 text-sm">TVA, Impôts, Dividendes : rien ne doit manquer à l&apos;appel.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600 font-bold">3</div>
                                <div>
                                    <strong className="block text-slate-900">Le dossier de bouclement</strong>
                                    <span className="text-slate-600 text-sm">Est-il complet pour résister à un contrôle fiscal ?</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-white p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">Notre garantie</h3>
                        <p className="text-slate-300 mb-6">
                            Nous nous assurons que votre comptabilité reflète fidèlement la réalité et respecte toutes les normes suisses.
                        </p>
                        <div className="space-y-3 mb-8">
                            <div className="flex gap-3">
                                <CheckCircle2 className="text-green-400 h-5 w-5" />
                                <span>Transparence totale sur les honoraires</span>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle2 className="text-green-400 h-5 w-5" />
                                <span>Accès à notre réseau de partenaires validés</span>
                            </div>
                        </div>
                        <Link href="/diagnostic">
                            <Button className="w-full bg-green-600 hover:bg-green-500 text-white border-none">
                                Auditer ma comptabilité
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comptabilité PME & Reporting | FIDU Genève",
    description: "Ne subissez plus votre comptabilité. Transformez vos bilans en outils de gestion clairs et précis.",
};

export default function ServiceComptabilite() {
    return (
        <>
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">Gestion</span>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                        Comptabilité & Reporting
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                        Une comptabilité bien tenue ne sert pas qu&apos;à remplir sa déclaration d&apos;impôt. C&apos;est le thermomètre de votre entreprise.
                    </p>
                </div>
            </section>

            <Section className="bg-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Ce que nous analysons</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600 font-bold">1</div>
                                <div>
                                    <strong className="block text-slate-900">La structure du plan comptable</strong>
                                    <span className="text-slate-600 text-sm">Est-il adapté à votre activité ? Permet-il de lire vos marges par produit/service ?</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600 font-bold">2</div>
                                <div>
                                    <strong className="block text-slate-900">La qualité des imputations</strong>
                                    <span className="text-slate-600 text-sm">Les charges directes sont-elles bien séparées des frais généraux ?</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600 font-bold">3</div>
                                <div>
                                    <strong className="block text-slate-900">Les amortissements</strong>
                                    <span className="text-slate-600 text-sm">Sont-ils optimisés fiscalement ou subis comptablement ?</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-white p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">Notre promesse</h3>
                        <p className="text-slate-300 mb-6">
                            Nous ne sommes pas là pour refaire votre saisie, mais pour s&apos;assurer que votre fiduciaire actuelle (ou future) vous fournit les bons chiffres.
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

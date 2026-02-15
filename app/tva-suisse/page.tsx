import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "TVA Suisse PME Genève | Inscription, Décompte & Taux",
    description: "Tout savoir sur la TVA en Suisse pour les PME. Seuil d'assujettissement, méthode effective vs taux de la dette fiscale nette. Diagnostic gratuit.",
};

export default function TvaSuisse() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-slate-900 pt-20 pb-24 text-center">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                        TVA en Suisse pour PME à Genève
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
                        Comprendre vos obligations, éviter les erreurs et structurer vos décomptes avec un partenaire fiduciaire expert.
                    </p>
                    <div className="mt-10">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600">
                                Faire le point TVA <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 1 - Seuil & Obligations */}
            <Section className="bg-white py-16">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Quand devez-vous vous assujettir à la TVA ?</h2>

                    {/* Intro optimisée lisibilité */}
                    <div className="mb-10">
                        <p className="text-[17px] leading-[1.6] text-slate-700 max-w-[720px] font-medium">
                            En Suisse, l'assujettissement à la TVA devient obligatoire dès que votre chiffre d'affaires annuel dépasse le seuil de <strong>100'000 CHF</strong>.
                            Cependant, il est parfois avantageux de s'assujettir volontairement avant ce seuil, notamment si vous avez d'importants investissements de départ.
                        </p>
                    </div>

                    {/* CTA Soft Conversion */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg mb-1">Besoin d’un avis rapide sur votre situation TVA ?</h3>
                            <p className="text-slate-600 text-sm">Demandez un audit conformité TVA gratuit (30 min) — sans engagement.</p>
                        </div>
                        <div className="flex flex-col gap-3 shrink-0">
                            <Link href="/contact">
                                <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white w-full">
                                    Demander un audit TVA
                                </Button>
                            </Link>
                            <Link href="#methodes" className="text-xs text-center text-slate-500 hover:text-green-600 underline decoration-slate-300 underline-offset-4">
                                Voir les méthodes TVA
                            </Link>
                        </div>
                    </div>

                    {/* Cartes Méthodes */}
                    <div id="methodes" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {/* Carte 1 */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-green-200 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center text-lg">
                                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" /> Méthode Effective
                            </h3>
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                Vous déduisez la TVA payée sur vos achats (impôt préalable) de la TVA facturée. Souvent pertinent si vous avez des investissements ou des achats importants.
                            </p>
                            <div className="bg-slate-50 rounded-lg p-3 mb-3">
                                <span className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">Pour qui ?</span>
                                <span className="text-xs text-slate-700">PME avec charges/achats significatifs (loyer, stock, matériel).</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-xs font-bold text-green-700 whitespace-nowrap">À retenir :</span>
                                <span className="text-xs text-slate-600">Plus précis, demande un suivi comptable rigoureux.</span>
                            </div>
                        </div>

                        {/* Carte 2 */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-green-200 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center text-lg">
                                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" /> Taux dette fiscale nette (TDFN)
                            </h3>
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                Forfait simplifié selon le secteur d'activité validé par l'AFC. Moins administratif, décompte semestriel, mais aucune déduction de l'impôt préalable possible.
                            </p>
                            <div className="bg-slate-50 rounded-lg p-3 mb-3">
                                <span className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">Pour qui ?</span>
                                <span className="text-xs text-slate-700">Prestataires de services avec peu d'achats, consultants.</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-xs font-bold text-green-700 whitespace-nowrap">À retenir :</span>
                                <span className="text-xs text-slate-600">Administrativement plus simple, mais attention à la marge.</span>
                            </div>
                        </div>
                    </div>

                    {/* Blocs SEO & Valeur */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-slate-100">
                        {/* Bloc A */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Seuil TVA : le point clé</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start text-sm text-slate-700">
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-3 shrink-0"></div>
                                    <span><strong>100'000 CHF</strong> de chiffre d'affaires mondial (et non seulement suisse).</span>
                                </li>
                                <li className="flex items-start text-sm text-slate-700">
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-3 shrink-0"></div>
                                    <span>Inscription obligatoire <strong>dans les 30 jours</strong> suivant le dépassement du seuil.</span>
                                </li>
                                <li className="flex items-start text-sm text-slate-700">
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-3 shrink-0"></div>
                                    <span>Possibilité de renoncer à l'assujettissement si le chiffre d'affaires provient d'activités exclues.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Bloc B */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Erreurs TVA fréquentes</h3>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start text-sm text-slate-700">
                                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 mr-2 shrink-0" />
                                    <span>Confondre chiffre d'affaires et bénéfice pour le seuil.</span>
                                </li>
                                <li className="flex items-start text-sm text-slate-700">
                                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 mr-2 shrink-0" />
                                    <span>Oublier l'auto-liquidation sur les services étrangers.</span>
                                </li>
                                <li className="flex items-start text-sm text-slate-700">
                                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 mr-2 shrink-0" />
                                    <span>Choisir le TDFN alors que la méthode effective est plus rentable.</span>
                                </li>
                            </ul>
                            <div className="flex items-center gap-4">
                                <Link href="/changer-fiduciaire" className="text-sm font-medium text-green-700 hover:text-green-800 underline underline-offset-4">
                                    En savoir plus sur la transition
                                </Link>
                                <Link href="/contact">
                                    <Button size="sm" variant="outline" className="text-xs px-3 h-8">
                                        Audit rapide
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 2 - Erreurs Fréquentes */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Les pièges à éviter</h2>
                        <p className="text-slate-600">Une mauvaise gestion TVA peut coûter cher en intérêts moratoires.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <AlertTriangle className="h-8 w-8 text-orange-500 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Inscription Tardive</h3>
                            <p className="text-slate-600 text-sm">Oublier de s'inscrire dès le dépassement du seuil entraîne un rappel d'impôt rétroactif souvent douloureux pour la trésorerie.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <AlertTriangle className="h-8 w-8 text-orange-500 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Mauvaise Méthode</h3>
                            <p className="text-slate-600 text-sm">Rester au taux effectif alors que le TDFN serait plus rentable (ou inversement) peut représenter des milliers de francs perdus.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <AlertTriangle className="h-8 w-8 text-orange-500 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Prestations à l'étranger</h3>
                            <p className="text-slate-600 text-sm">Les règles d'exportation de services ou de vente à l'étranger sont complexes et nécessitent une analyse précise.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - Solution Organisation */}
            <Section className="bg-white text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Comment nous sécurisons votre TVA</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                    Nous analysons votre activité pour déterminer la méthode la plus avantageuse et coordonnons l'établissement de vos décomptes avec nos partenaires.
                </p>
                <Link href="/contact">
                    <Button size="lg">Demander une analyse TVA</Button>
                </Link>
            </Section>
        </>
    );
}

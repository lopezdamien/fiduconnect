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
            <Section className="bg-white">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Quand devez-vous vous assujettir à la TVA ?</h2>
                    <div className="prose prose-slate lg:prose-lg mb-12">
                        <p>
                            En Suisse, l'assujettissement à la TVA devient obligatoire dès que votre chiffre d'affaires annuel dépasse le seuil de <strong>100'000 CHF</strong> (bientôt potentiellement revu pour certaines activités, mais c'est la règle générale).
                        </p>
                        <p>
                            Cependant, il est parfois avantageux de s'assujettir volontairement avant ce seuil, notamment si vous avez d'importants investissements de départ (récupération de l'impôt préalable).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" /> Méthode Effective
                            </h3>
                            <p className="text-sm text-slate-600">
                                Vous déduisez la TVA payée sur vos achats (impôt préalable) de la TVA facturée. Idéal pour les marges faibles ou gros investissements.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" /> Taux de la dette fiscale nette (TDFN)
                            </h3>
                            <p className="text-sm text-slate-600">
                                Forfait simplifié selon votre secteur. Moins administratif, décompte semestriel, mais pas de déduction de l'impôt préalable.
                            </p>
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

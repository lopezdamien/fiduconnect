import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, ArrowRight, TrendingUp, ShieldCheck, MapPin } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Expertise TVA Genève | Évitez les redressements & Optimisez vos décomptes",
    description: "TVA pour PME à Genève : seuil des 100’000 CHF, inscription TVA, méthode effective ou TDFN. Audit conformité gratuit.",
};

export default function TvaSuisse() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-slate-900 pt-20 pb-24 text-center">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6 leading-tight">
                        Expertise TVA à Genève : Évitez les redressements et optimisez vos décomptes
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
                        Dès 100’000 CHF de chiffre d’affaires annuel, l’assujettissement obligatoire auprès de l'Administration fédérale des contributions (AFC) s'applique. Nous vous aidons à choisir la bonne méthode et à sécuriser vos déclarations.
                    </p>
                    <p className="mt-4 text-sm text-slate-400 max-w-[60ch] mx-auto">
                        Accompagnement TVA pour PME à Genève, en conformité avec les exigences de l’AFC.
                    </p>
                    <div className="mt-10">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600">
                                Vérifier ma conformité TVA gratuitement <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <p className="mt-3 text-sm text-slate-500 flex flex-col sm:flex-row justify-center gap-2 sm:gap-6">
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" /> Sans engagement</span>
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" /> Analyse personnalisée</span>
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" /> Réponse claire sous 48h</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* 1. BLOC CRÉDIBILITÉ (New) */}
            <div className="bg-slate-50 border-b border-slate-200 py-8">
                <div className="mx-auto max-w-7xl px-4 text-center">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Pourquoi faire analyser votre TVA par un expert genevois ?</h3>
                    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-slate-700 font-medium">
                        <div className="flex items-center justify-center gap-3 bg-white px-5 py-3 rounded-lg border border-slate-100 shadow-sm">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span>+120 PME accompagnées à Genève</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 bg-white px-5 py-3 rounded-lg border border-slate-100 shadow-sm">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                            <span>Expertise en méthodes effective & TDFN</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 bg-white px-5 py-3 rounded-lg border border-slate-100 shadow-sm">
                            <ShieldCheck className="h-5 w-5 text-green-600" />
                            <span>Conformité aux exigences AFC Genève</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 1 - Seuil & Obligations */}
            <Section className="bg-white py-16">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Nous sécurisons votre TVA en 3 étapes claires</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col h-full text-center">
                            <div className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold text-sm mb-4">1</div>
                            <h4 className="font-bold text-slate-900 mb-2">Audit de conformité</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Analyse des risques et vérification de l'assujettissement.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col h-full text-center">
                            <div className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold text-sm mb-4">2</div>
                            <h4 className="font-bold text-slate-900 mb-2">Choix de la méthode</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Comparatif chiffré : Effective vs TDFN pour optimiser.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col h-full text-center">
                            <div className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold text-sm mb-4">3</div>
                            <h4 className="font-bold text-slate-900 mb-2">Déclaration sans erreur</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Établissement précis des décomptes et respect des délais.</p>
                        </div>
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
                                    Vérifier ma conformité TVA gratuitement
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
                            <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                                Déduction réelle de l'impôt préalable. Nécessite une comptabilité détaillée. Idéal pour les entreprises avec beaucoup d'achats ou d'investissements.
                            </p>
                            <div className="bg-slate-50 rounded-lg p-3 mb-3">
                                <span className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">Pour qui ?</span>
                                <span className="text-xs text-slate-700">Commerce, Construction, Startups.</span>
                            </div>
                        </div>

                        {/* Carte 2 */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-green-200 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center text-lg">
                                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" /> Taux TDFN
                            </h3>
                            <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                                Taux de la dette fiscale nette. Forfaitaire selon la branche. Pas de déduction de l'impôt préalable, mais administratif simplifié (décompte semestriel).
                            </p>
                            <div className="bg-slate-50 rounded-lg p-3 mb-3">
                                <span className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">Pour qui ?</span>
                                <span className="text-xs text-slate-700">Services, Conseils, Professions libérales.</span>
                            </div>
                        </div>
                    </div>

                    {/* NOUVELLE SECTION - Optimisation */}
                    <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 mb-16 text-white text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <div className="flex-1">
                                <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                                    <TrendingUp className="h-6 w-6 text-green-400" />
                                    <h3 className="text-xl font-bold text-white">Optimiser sa TVA à Genève : ce que la plupart des PME ignorent</h3>
                                </div>

                                <p className="text-slate-300 mb-4 leading-relaxed">
                                    Le choix entre la méthode effective et le taux de la dette fiscale nette (TDFN) peut représenter plusieurs milliers de francs d’écart par an pour une PME genevoise.
                                </p>

                                <div className="bg-slate-800/50 p-4 rounded-lg mb-8 text-sm text-slate-400 border border-slate-700">
                                    <p>Exemple : Une PME réalisant 450’000 CHF de chiffre d’affaires peut parfois générer un écart de 4’000 à 9’000 CHF par an selon la méthode TVA choisie.</p>
                                </div>

                                <ul className="text-sm text-slate-300 space-y-2 mb-8 text-left inline-block">
                                    <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>récupérer correctement l’impôt préalable</li>
                                    <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>éviter les erreurs de taux</li>
                                    <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>adapter la méthode à votre structure</li>
                                    <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>anticiper un changement de méthode</li>
                                </ul>

                                <div>
                                    <Link href="/contact">
                                        <Button variant="outline" className="border-slate-600 text-white hover:bg-white hover:text-slate-900">
                                            Analyser ma méthode actuelle
                                        </Button>
                                    </Link>
                                    <p className="mt-3 text-xs text-slate-500">✔ Analyse personnalisée sous 48h</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blocs SEO & Valeur */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-slate-100">
                        {/* Bloc A */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Points de vigilance</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start text-sm text-slate-700">
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-3 shrink-0"></div>
                                    <span><strong>Chiffre d'affaires mondial :</strong> Le seuil de 100k CHF inclut vos revenus hors Suisse.</span>
                                </li>
                                <li className="flex items-start text-sm text-slate-700">
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-3 shrink-0"></div>
                                    <span><strong>Délai d'inscription :</strong> Obligatoire dans les 30 jours suivant le dépassement.</span>
                                </li>
                                <li className="flex items-start text-sm text-slate-700">
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-3 shrink-0"></div>
                                    <span><strong>Prestations exportées :</strong> Certaines sont exonérées mais doivent être déclarées.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Bloc B */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Risques fréquents</h3>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start text-sm text-slate-700">
                                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 mr-2 shrink-0" />
                                    <span>Retard d'inscription (Rappel d'impôt rétroactif).</span>
                                </li>
                                <li className="flex items-start text-sm text-slate-700">
                                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 mr-2 shrink-0" />
                                    <span>Erreur de taux sur les prestations.</span>
                                </li>
                                <li className="flex items-start text-sm text-slate-700">
                                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 mr-2 shrink-0" />
                                    <span>Non-conformité formelle des factures émises.</span>
                                </li>
                            </ul>
                            <div className="flex items-center gap-4">
                                <Link href="/contact">
                                    <Button size="sm" variant="outline" className="text-xs px-3 h-8">
                                        Demander un audit TVA gratuit (30 min)
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
                            <h3 className="font-bold text-slate-900 mb-2">Erreur de méthode : Effective vs TDFN</h3>
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

            {/* 4. AJOUT SECTION FAQ SEO (New) */}
            <Section className="bg-white py-16">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Questions fréquentes sur la TVA à Genève</h2>
                    <div className="space-y-6">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-2">À partir de quel montant doit-on s’inscrire à la TVA en Suisse ?</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">L’assujettissement devient obligatoire dès 100’000 CHF de chiffre d’affaires mondial annuel (et pas seulement vos revenus à Genève).</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Quelle différence entre méthode effective et TDFN ?</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                La <strong>méthode effective</strong> permet de récupérer l’impôt préalable réel (déduction de la TVA payée).<br />
                                La <strong>TDFN</strong> (Taux de la Dette Fiscale Nette) applique un taux forfaitaire simplifié selon la branche, sans déduction de l'impôt préalable.
                            </p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Que risque une PME en cas d’erreur TVA ?</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Retard d’inscription, mauvaise méthode ou erreur de taux peuvent entraîner un redressement fiscal rétroactif auprès de l’AFC ainsi que des intérêts moratoires.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 3 - Solution Organisation */}
            <Section className="bg-slate-50 text-center border-t border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Sécurisez votre TVA avant un contrôle fiscal</h2>
                <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-10">
                    Nous analysons votre situation TVA, identifions les risques de redressement auprès de l’AFC Genève et optimisons votre méthode afin d’éviter des régularisations coûteuses.
                </p>
                <div className="flex flex-col items-center">
                    <Link href="/contact">
                        <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                            Demander un audit conformité gratuit
                        </Button>
                    </Link>
                    <p className="mt-4 text-sm text-slate-500">
                        ✔ Sans engagement &nbsp; ✔ Analyse personnalisée &nbsp; ✔ Réponse claire sous 48h
                    </p>
                </div>
            </Section>
        </>
    );
}

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, ArrowRight, TrendingUp, ShieldCheck, MapPin, Calculator, FileCheck, HelpCircle, ChevronDown } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Expert TVA Genève | Audit & Optimisation Fiscale PME",
    description: "Expert TVA à Genève pour PME. Audit 100% gratuit : choix méthode TDFN vs effective, inscription seuil 100'000 CHF, et conformité AFC.",
};

export default function TvaSuisse() {
    return (
        <>
            {/* 1. HERO SECTION */}
            <section className="relative bg-slate-900 py-24 lg:py-32 text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950 opacity-90"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 leading-tight max-w-5xl mx-auto">
                        Expert TVA à Genève pour PME : <br className="hidden sm:block" />
                        <span className="text-green-500">évitez les redressements fiscaux</span>
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-slate-300 max-w-3xl mx-auto font-medium">
                        Dès 100’000 CHF de chiffre d’affaires, la TVA devient un enjeu stratégique.
                        <br className="hidden md:block" />
                        Une erreur de méthode ou de déclaration peut coûter plusieurs milliers de francs.
                    </p>

                    <div className="mt-10 flex flex-col items-center gap-6">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 px-10 py-6 text-lg font-bold shadow-2xl shadow-green-900/40 transform transition hover:-translate-y-1 hover:scale-105">
                                Audit TVA gratuit (30 min)
                            </Button>
                        </Link>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-slate-400 font-medium tracking-wide">
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Sans engagement</span>
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Réponse sous 48h</span>
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Expertise méthodes effective & TDFN</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SECTION CREDIBILITE */}
            <div className="bg-[#f7f9fb] border-b border-slate-200 py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-10">Conseil TVA PME Genève : Pourquoi faire analyser votre dossier ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-700 font-medium">
                        <div className="flex flex-col items-center justify-center gap-4 bg-white px-8 py-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-3 bg-green-50 rounded-full text-green-600 mb-2">
                                <CheckCircle2 className="h-8 w-8" />
                            </div>
                            <span className="text-lg font-bold text-slate-900">+120 PME accompagnées</span>
                            <span className="text-sm text-slate-500">Implantées à Genève et environs</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 bg-white px-8 py-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-3 bg-green-50 rounded-full text-green-600 mb-2">
                                <TrendingUp className="h-8 w-8" />
                            </div>
                            <span className="text-lg font-bold text-slate-900">Expertise Méthodes</span>
                            <span className="text-sm text-slate-500">Effective vs Taux de Dette Fiscale Nette</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 bg-white px-8 py-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-3 bg-green-50 rounded-full text-green-600 mb-2">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <span className="text-lg font-bold text-slate-900">Conformité AFC</span>
                            <span className="text-sm text-slate-500">Respect strict des normes suisses</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. SECTION PROCESSUS */}
            <Section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider mb-4">Processus certifié</span>
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Comment nous sécurisons votre TVA</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="h-14 w-14 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl shadow-md mb-6 transition-colors">1</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Audit de conformité</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Analyse des risques, vérification du seuil des 100&apos;000 CHF et contrôle de l&apos;assujettissement auprès de l&apos;AFC.
                            </p>
                        </div>
                        <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="h-14 w-14 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl shadow-md mb-6 transition-colors">2</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Choix de la méthode</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Comparatif chiffré précis : Méthode Effective vs Taux de Dette Fiscale Nette (TDFN) pour optimiser votre charge fiscale.
                            </p>
                        </div>
                        <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="h-14 w-14 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl shadow-md mb-6 transition-colors">3</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Déclaration sans erreur</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Établissement rigoureux des décomptes TVA, respect des délais de paiement et gestion de la correspondance.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. SECTION METHODES */}
            <Section className="bg-slate-50 py-24 border-y border-slate-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 sm:text-4xl">Méthode TDFN vs effective : Laquelle est la plus avantageuse ?</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Le choix dépend de votre structure de coûts et de votre marge. Une mauvaise décision peut vous coûter cher chaque année.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
                        {/* Méthode Effective */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-green-300 transition-all flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                    <Calculator className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Méthode Effective</h3>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-start text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                                    <span>Déduction réelle de l&apos;impôt préalable (TVA payée sur achats).</span>
                                </li>
                                <li className="flex items-start text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                                    <span>Nécessite une comptabilité détaillée et rigoureuse.</span>
                                </li>
                                <li className="flex items-start text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                                    <span>Idéal pour : Commerce, Construction, Startups avec investissements.</span>
                                </li>
                            </ul>
                            <div className="mt-auto pt-6 border-t border-slate-100">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Complexité : Élevée</span>
                            </div>
                        </div>

                        {/* Méthode TDFN */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-green-300 transition-all flex flex-col h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                                Simplifié
                            </div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                                    <FileCheck className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Taux de Dette Fiscale Nette (TDFN)</h3>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-start text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                                    <span>Taux forfaitaire selon la branche (pas de déduction impôt préalable).</span>
                                </li>
                                <li className="flex items-start text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                                    <span>Administratif allégé : décompte semestriel (au lieu de trimestriel).</span>
                                </li>
                                <li className="flex items-start text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                                    <span>Idéal pour : Services, Conseils, Professions libérales (peu d&apos;achats).</span>
                                </li>
                            </ul>
                            <div className="mt-auto pt-6 border-t border-slate-100">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Complexité : Faible</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:border-green-600 hover:text-green-700 font-semibold px-8">
                                Comparer ma méthode TVA
                            </Button>
                        </Link>
                        <p className="mt-4 text-sm text-slate-500">
                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-2">Conseil</span>
                            La méthode la plus rentable dépend de votre structure de coûts.
                        </p>
                    </div>
                </div>
            </Section>

            {/* 5. SECTION OPTIMISATION (Blue Dark) */}
            <Section className="bg-slate-900 py-20 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-slate-800/50 rounded-3xl p-8 sm:p-12 border border-slate-700 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Optimisation Fiscale & TVA</h2>
                                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                    Le passage de la méthode effective au TDFN (ou inversement) peut générer des économies substantielles.
                                    Pourtant, beaucoup de PME restent sur leur configuration initiale par habitude, perdant de l&apos;argent chaque année.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-slate-200 font-medium">
                                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                        Récupération optimisée de l&apos;impôt préalable
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-200 font-medium">
                                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                        Anticipation des changements de taux
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                                <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                                    <TrendingUp className="h-6 w-6 text-green-400" />
                                    <span className="font-bold text-white">Impact Financier Réel</span>
                                </div>
                                <p className="text-slate-400 mb-6 font-medium">
                                    Pour une PME de services réalisant 450’000 CHF de CA, l&apos;écart entre les méthodes peut atteindre :
                                </p>
                                <div className="text-4xl font-extrabold text-green-400 mb-8 tracking-tight">
                                    4’000 à 9’000 CHF <span className="text-lg text-slate-500 font-normal block sm:inline">/ an</span>
                                </div>
                                <Link href="/contact" className="block">
                                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-500 text-white font-bold text-lg py-6 shadow-lg shadow-green-900/40">
                                        Calculer mon économie potentielle
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6. SECTION PIEGES */}
            <Section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 sm:text-4xl">Les erreurs TVA qui coûtent le plus cher aux PME genevoises</h2>
                        <p className="text-lg text-slate-600">Une gestion approximative entraîne souvent des correctifs douloureux.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-6 text-orange-600">
                                <AlertTriangle className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Inscription Tardive</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Dépasser les 100&apos;000 CHF sans s&apos;annoncer déclenche un rappel d&apos;impôt rétroactif qui peut assécher votre trésorerie du jour au lendemain.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-6 text-orange-600">
                                <AlertTriangle className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Erreur de Méthode</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Rester au taux effectif avec peu de charges déductibles (ou l&apos;inverse) est une perte financière sèche et récurrente.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-6 text-orange-600">
                                <AlertTriangle className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Prestations Étrangères</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                L&apos;impôt sur les acquisitions (services importés, logiciels, pub en ligne) est souvent oublié, entraînant des pénalités lors des contrôles.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 7. FAQ MODERNE */}
            <Section className="bg-[#f8fafc] py-24 border-t border-slate-100">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Questions fréquentes : Inscription TVA Suisse & seuil 100’000 CHF</h2>
                    <div className="space-y-6">
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 cursor-pointer [&_summary::-webkit-details-marker]:hidden hover:border-green-200 transition-all open:ring-1 open:ring-green-100">
                            <summary className="flex items-center justify-between gap-3 font-bold text-slate-900 text-lg">
                                <span>À partir de quel montant suis-je obligé de payer la TVA ?</span>
                                <span className="bg-slate-50 p-2 rounded-full group-open:bg-green-50 transition-colors">
                                    <ChevronDown className="h-5 w-5 text-slate-500 group-open:text-green-600 transition-transform group-open:rotate-180" />
                                </span>
                            </summary>
                            <div className="mt-4 text-slate-600 leading-relaxed text-base border-t border-slate-50 pt-4">
                                L&apos;assujettissement devient obligatoire dès que votre chiffre d’affaires mondial (imposable) dépasse <strong>100’000 CHF</strong> par an. Si vous êtes en dessous, vous pouvez opter pour l&apos;assujettissement volontaire (utile pour récupérer la TVA sur de gros investissements).
                            </div>
                        </details>

                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 cursor-pointer [&_summary::-webkit-details-marker]:hidden hover:border-green-200 transition-all open:ring-1 open:ring-green-100">
                            <summary className="flex items-center justify-between gap-3 font-bold text-slate-900 text-lg">
                                <span>Puis-je changer de méthode TVA (Effective / TDFN) ?</span>
                                <span className="bg-slate-50 p-2 rounded-full group-open:bg-green-50 transition-colors">
                                    <ChevronDown className="h-5 w-5 text-slate-500 group-open:text-green-600 transition-transform group-open:rotate-180" />
                                </span>
                            </summary>
                            <div className="mt-4 text-slate-600 leading-relaxed text-base border-t border-slate-50 pt-4">
                                Oui, mais sous certaines conditions de délais imposés par l&apos;Administration Fédérale des Contributions (AFC). En général, le changement se fait en début de période fiscale et doit être planifié pour éviter des blocages administratifs.
                            </div>
                        </details>

                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 cursor-pointer [&_summary::-webkit-details-marker]:hidden hover:border-green-200 transition-all open:ring-1 open:ring-green-100">
                            <summary className="flex items-center justify-between gap-3 font-bold text-slate-900 text-lg">
                                <span>Que faire si j'ai oublié de m'inscrire ?</span>
                                <span className="bg-slate-50 p-2 rounded-full group-open:bg-green-50 transition-colors">
                                    <ChevronDown className="h-5 w-5 text-slate-500 group-open:text-green-600 transition-transform group-open:rotate-180" />
                                </span>
                            </summary>
                            <div className="mt-4 text-slate-600 leading-relaxed text-base border-t border-slate-50 pt-4">
                                Il faut régulariser la situation au plus vite via une annonce tardive. L&apos;AFC réclamera la TVA due rétroactivement. Une démarche spontanée avec un fiduciaire permet souvent de négocier les modalités et d&apos;éviter des pénalités pour soustraction d&apos;impôt.
                            </div>
                        </details>
                    </div>
                </div>
            </Section>

            {/* 8. CTA FINAL */}
            <section className="bg-slate-900 py-24 text-center">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6 sm:text-4xl">
                        Besoin d’un avis expert sur votre situation TVA ?
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Un diagnostic clair pour savoir si vous payez trop… ou si vous risquez un redressement.
                    </p>
                    <div className="flex flex-col items-center gap-8">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 px-12 py-6 text-lg font-bold shadow-2xl shadow-green-900/50 transform transition hover:scale-105">
                                Demander mon audit TVA gratuit
                            </Button>
                        </Link>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400 font-medium">
                            <span className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" /> Sans engagement
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" /> Analyse personnalisée
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" /> Réponse sous 48h
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

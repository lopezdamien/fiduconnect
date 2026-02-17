import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Check, CheckCircle2, AlertTriangle, Building2, Users, Briefcase, ShieldAlert } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gestion Salaires & LPP Genève | Conformité AVS | FIDU",
    description: "Externalisez votre gestion des salaires en toute sécurité. Audit RH gratuit, LPP, AVS, LAA. Conformité garantie pour PME suisses. Évitez les redressements.",
};

export default function ServiceSalaires() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 opacity-90"></div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center pt-8">
                    <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-6">
                        RESSOURCES HUMAINES
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 max-w-5xl mx-auto leading-tight">
                        Externalisez votre gestion des salaires en <span className="text-green-500">toute conformité</span> (AVS / LPP / LAA)
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-slate-300 max-w-3xl mx-auto">
                        Nous prenons en charge vos obligations employeur suisses pour éviter rappels de cotisations, erreurs de taux et sanctions administratives.
                        <span className="block mt-4 text-slate-400 font-medium border-t border-slate-800 pt-4 max-w-xl mx-auto">
                            Un mauvais paramétrage peut entraîner des rappels de cotisations et des pénalités.
                        </span>
                    </p>

                    <div className="mt-12 flex flex-col items-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 text-white px-10 py-5 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                👉 Demander un diagnostic RH gratuit
                            </Button>
                        </Link>
                        <p className="text-xs text-slate-500 font-medium">
                            Réponse sous 24h – Diagnostic sans engagement
                        </p>
                    </div>
                </div>
            </section>

            {/* OBLIGATIONS EMPLOYEUR */}
            <Section className="bg-white py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto px-4">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 sm:text-4xl">Vos obligations employeur en Suisse</h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            En tant qu’employeur, vous êtes responsable de nombreuses déclarations et affiliations obligatoires. Une gestion rigoureuse est indispensable.
                        </p>

                        <div className="space-y-10">
                            <div className="flex gap-6 group">
                                <div className="flex-none w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                                    <Users className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">2ème Pilier (LPP)</h3>
                                    <p className="text-slate-600 leading-relaxed">Affiliation, cotisations et suivi des taux. Vérification des seuils d’entrée et des déductions de coordination.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="flex-none w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                                    <Briefcase className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Déclarations annuelles AVS / AI / APG / AC</h3>
                                    <p className="text-slate-600 leading-relaxed">Établissement des certificats de salaire et régularisations annuelles conformes aux directives cantonales.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="flex-none w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                                    <CheckCircle2 className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Assurances LAA & IJM</h3>
                                    <p className="text-slate-600 leading-relaxed">Déclarations d’accidents et gestion des absences maladie en conformité pour garantir la couverture de vos employés.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 lg:sticky lg:top-24">
                        {/* Risks List */}
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h3 className="text-red-900 font-bold mb-4 flex items-center gap-2 text-lg">
                                <ShieldAlert className="h-5 w-5" />
                                Les risques en cas d’erreur
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-red-800 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                    Rappel AVS rétroactif
                                </li>
                                <li className="flex items-center gap-3 text-red-800 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                    Redressement LPP
                                </li>
                                <li className="flex items-center gap-3 text-red-800 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                    Amendes LAA
                                </li>
                                <li className="flex items-center gap-3 text-red-800 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                    Stress administratif
                                </li>
                            </ul>
                        </div>

                        {/* Audit Card */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <div className="relative">
                                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-6 border border-green-200 uppercase tracking-wide">Premium</span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Votre audit de conformité RH en 3 étapes</h3>
                                <p className="text-slate-600 text-sm mb-8">Nous sécurisons votre situation dès le premier jour.</p>

                                <div className="space-y-5 mb-10">
                                    <div className="flex gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <div className="flex-none w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">1</div>
                                        <span className="text-slate-700 font-semibold text-sm">Vérification affiliations</span>
                                    </div>
                                    <div className="flex gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <div className="flex-none w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">2</div>
                                        <span className="text-slate-700 font-semibold text-sm">Contrôle des taux</span>
                                    </div>
                                    <div className="flex gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <div className="flex-none w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">3</div>
                                        <span className="text-slate-700 font-semibold text-sm">Sécurisation certificats</span>
                                    </div>
                                </div>

                                <Link href="/contact" className="block">
                                    <Button fullWidth className="bg-green-700 hover:bg-green-600 text-white py-4 text-lg shadow-lg hover:translate-y-px transition-all h-auto font-bold">
                                        👉 Recevoir un devis personnalisé
                                    </Button>
                                </Link>
                                <p className="text-center text-xs text-slate-500 mt-4 font-medium">
                                    Analyse confidentielle – sans engagement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* RISQUES FRÉQUENTS */}
            <Section className="bg-slate-50 py-24 border-t border-slate-200">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl text-center">Les erreurs les plus fréquentes en gestion salariale</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-100 transition-colors">
                            <AlertTriangle className="h-7 w-7" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">Mauvais taux LPP</h3>
                        <p className="text-slate-600 leading-relaxed">Des erreurs de classe d’âge ou de plan de prévoyance peuvent générer des écarts financiers importants à régulariser.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-100 transition-colors">
                            <AlertTriangle className="h-7 w-7" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">Oubli d’affiliation</h3>
                        <p className="text-slate-600 leading-relaxed">Un collaborateur mal affilié aux assurances obligatoires peut entraîner des rappels rétroactifs très lourds.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-100 transition-colors">
                            <AlertTriangle className="h-7 w-7" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">Mauvaise déclaration AVS</h3>
                        <p className="text-slate-600 leading-relaxed">Des erreurs dans le décompte annuel peuvent déclencher un contrôle approfondi ou une rectification d'office.</p>
                    </div>
                </div>
            </Section>

            {/* POUR QUI */}
            <Section className="bg-white py-24">
                <div className="mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-16 sm:text-4xl text-center">Ce service est idéal pour :</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center hover:border-blue-200 hover:shadow-md transition-all">
                            <Building2 className="h-12 w-12 text-blue-600 mb-6" />
                            <span className="font-bold text-slate-900 text-xl">PME genevoises en croissance</span>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center hover:border-blue-200 hover:shadow-md transition-all">
                            <div className="h-12 w-12 flex items-center justify-center bg-blue-100 rounded-full mb-6 text-blue-600 font-bold text-2xl">🚀</div>
                            <span className="font-bold text-slate-900 text-xl">Startups avec premiers employés</span>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center hover:border-blue-200 hover:shadow-md transition-all">
                            <Briefcase className="h-12 w-12 text-blue-600 mb-6" />
                            <span className="font-bold text-slate-900 text-xl">Indépendants devenant employeurs</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* NEW FINAL SECTION */}
            <section className="bg-slate-900 py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6 sm:text-4xl">
                        Sécurisez votre masse salariale
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Externaliser votre gestion salariale, c’est protéger votre entreprise et vos collaborateurs.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 text-white px-10 py-5 text-lg shadow-xl shadow-green-900/40 transform transition hover:-translate-y-1 hover:scale-105">
                                👉 Recevoir une offre personnalisée
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { FileCheck, ShieldCheck, Clock, Archive, ArrowRight, CheckCircle2, AlertTriangle, PlayCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Organisation et pilotage comptable pour PME genevoises",
    description: "Une organisation structurée pour une gestion sans stress. Finis les retards et les pénalités. Diagnostic organisationnel gratuit à Genève.",
    path: "/services/pilotage",
});

export default function Pilotage() {
    return (
        <>
            <JsonLd
                schema={[
                    serviceSchema({
                        name: "Organisation et pilotage comptable",
                        description:
                            "Structuration des processus administratifs, calendrier des échéances et digitalisation de la gestion documentaire.",
                        path: "/services/pilotage",
                        serviceType: "Organisation comptable",
                    }),
                    breadcrumbSchema([
                        { name: "Services", path: "/services" },
                        { name: "Pilotage", path: "/services/pilotage" },
                    ]),
                ]}
            />
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 opacity-90"></div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 leading-tight">
                            Dormez sur vos deux oreilles.
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
                            Une organisation structurée, des échéances respectées, zéro stress administratif.<br className="hidden sm:block" />
                            Nous sécurisons votre gestion pour éviter erreurs, pénalités et pertes fiscales.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <div className="flex flex-col gap-2">
                                <Link href="/contact">
                                    <Button size="lg" className="bg-green-700 hover:bg-green-600 text-white px-10 py-5 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                        Vérifier mon organisation gratuitement
                                    </Button>
                                </Link>
                                <p className="text-xs text-slate-500 font-medium ml-1">
                                    Réponse sous 24h – Sans engagement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT SECTION */}
            <Section className="bg-white py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT COLUMN */}
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 sm:text-4xl text-left">L’organisation est votre première protection fiscale</h2>

                        <div className="bg-red-50 border-l-4 border-red-500 p-8 mb-10 rounded-r-xl shadow-sm">
                            <h3 className="text-red-800 font-bold mb-4 flex items-center gap-3 text-lg">
                                <AlertTriangle className="h-6 w-6" />
                                Une comptabilité désorganisée entraîne :
                            </h3>
                            <ul className="space-y-3 text-red-700/80 font-medium">
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Retards de déclarations</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Pièces justificatives manquantes</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Taxation d’office</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Pertes de déductions</li>
                            </ul>
                        </div>

                        <p className="text-lg text-slate-700 font-medium mb-10 border-l-4 border-blue-500 pl-6 py-2 leading-relaxed">
                            FiduConnect vérifie et structure votre organisation pour garantir le respect de toutes vos échéances.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group hover:shadow-md">
                                <div className="bg-white p-4 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <FileCheck className="h-7 w-7 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Pièces comptables complètes</h3>
                                    <p className="text-slate-600 leading-relaxed">Tous vos justificatifs centralisés, classés et disponibles en cas de contrôle.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group hover:shadow-md">
                                <div className="bg-white p-4 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Clock className="h-7 w-7 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Respect des délais</h3>
                                    <p className="text-slate-600 leading-relaxed">TVA, acomptes, déclarations : plus aucun retard ni rappel.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group hover:shadow-md">
                                <div className="bg-white p-4 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Archive className="h-7 w-7 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Archivage sécurisé</h3>
                                    <p className="text-slate-600 leading-relaxed">Documents protégés et accessibles à tout moment.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - RISKS AVOIDED */}
                    <div className="relative lg:sticky lg:top-24">
                        <div className="bg-slate-900 rounded-3xl text-white overflow-hidden shadow-2xl ring-1 ring-white/10">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-green-500/10 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>

                            <div className="relative p-10 lg:p-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-8">
                                    Protection Totale
                                </div>
                                <h3 className="text-2xl font-bold mb-10">Les risques que nous éliminons</h3>

                                <ul className="space-y-6 mb-12">
                                    <li className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300 cursor-default">
                                        <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5 group-hover:text-green-400 transition-colors" />
                                        <span className="text-slate-200 text-lg group-hover:text-white transition-colors">Intérêts moratoires sur impôts et TVA</span>
                                    </li>
                                    <li className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300 cursor-default">
                                        <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5 group-hover:text-green-400 transition-colors" />
                                        <span className="text-slate-200 text-lg group-hover:text-white transition-colors">Taxation d’office majorée</span>
                                    </li>
                                    <li className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300 cursor-default">
                                        <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5 group-hover:text-green-400 transition-colors" />
                                        <span className="text-slate-200 text-lg group-hover:text-white transition-colors">Perte de déductions fiscales</span>
                                    </li>
                                    <li className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300 cursor-default">
                                        <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5 group-hover:text-green-400 transition-colors" />
                                        <span className="text-slate-200 text-lg group-hover:text-white transition-colors">Stress permanent face aux courriers officiels</span>
                                    </li>
                                </ul>

                                <Link href="/contact" className="block">
                                    <Button fullWidth className="bg-green-600 hover:bg-green-500 text-white py-5 text-lg font-bold shadow-lg shadow-green-900/20 border border-green-500/50 hover:shadow-green-500/20 transition-all">
                                        👉 Mettre mon organisation en conformité
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ACTION SECTION */}
            <section className="bg-slate-50 py-24 border-y border-slate-200">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 sm:text-4xl">Reprenez le contrôle de votre gestion</h2>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Nous auditons votre organisation administrative et mettons en place une structure fiable et durable.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 text-white px-12 py-6 text-xl font-bold shadow-xl shadow-green-900/10 hover:-translate-y-1 transition-all">
                                👉 Lancer mon audit organisationnel
                            </Button>
                        </Link>
                        <p className="text-sm text-slate-500 font-medium flex items-center gap-2 mt-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            Audit organisationnel offert
                        </p>
                    </div>
                </div>
            </section>

            {/* NEW FINAL SECTION */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 sm:text-4xl">
                        Pourquoi l’organisation fait toute la différence
                    </h2>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Une comptabilité bien organisée réduit les risques fiscaux, améliore votre trésorerie et simplifie votre gestion quotidienne.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 text-lg font-medium shadow-lg hover:shadow-xl transition-all">
                                Parler à un expert
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <Section className="bg-slate-50 py-24">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center sm:text-4xl">Questions fréquentes</h2>

                    <div className="space-y-6">
                        {/* FAQ Item 1 */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-200 transition-colors shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-4">
                                <span className="bg-blue-50 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                                Que comprend l’audit organisationnel ?
                            </h3>
                            <p className="text-slate-600 ml-14 leading-relaxed text-lg">
                                Analyse des processus administratifs, classement, respect des délais et conformité fiscale. Nous identifions les failles et proposons des correctifs immédiats.
                            </p>
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-200 transition-colors shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-4">
                                <span className="bg-blue-50 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                                Combien de temps prend la mise en place ?
                            </h3>
                            <p className="text-slate-600 ml-14 leading-relaxed text-lg">
                                Selon la taille de l’entreprise, entre quelques jours et quelques semaines. Nous travaillons en parallèle de votre activité sans la  perturber.
                            </p>
                        </div>

                        {/* FAQ Item 3 */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-200 transition-colors shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-4">
                                <span className="bg-blue-50 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                                Est-ce adapté aux indépendants ?
                            </h3>
                            <p className="text-slate-600 ml-14 leading-relaxed text-lg">
                                Oui, particulièrement utile pour les indépendants et PME en croissance qui n'ont pas de ressources administratives dédiées en interne.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { AlertTriangle, TrendingDown, FileText, ArrowRight, Wallet, RefreshCcw } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Services et expertise comptable pour PME à Genève",
    description: "Nos services d'analyse et d'orientation pour PME genevoises : TVA, fiscalité, salaires, comptabilité et organisation administrative.",
    path: "/services",
});

export default function Services() {
    const services = [
        {
            title: "Optimisation TVA & Conformité Fiscale",
            description: "Vérification de la conformité de vos décomptes TVA et de votre méthode d'assujettissement.",
            icon: AlertTriangle,
            color: "text-orange-600 bg-orange-100",
            href: "/services/tva"
        },
        {
            title: "Gestion des Salaires & Assurances Sociales (AVS/LPP)",
            description: "Gestion administrative de vos obligations employeur (AVS, LPP, LAA).",
            icon: FileText,
            color: "text-blue-600 bg-blue-100",
            href: "/services/charges-salaires"
        },
        {
            title: "Digitalisation & Organisation Administrative",
            description: "Mise en place de processus de classement et d'archivage pour respecter les délais.",
            icon: TrendingDown,
            color: "text-green-600 bg-green-100",
            href: "/services/pilotage"
        },
        {
            title: "Tenue de Comptabilité & Bilans Annuels",
            description: "Tenue de comptes rigoureuse et établissement de vos déclarations fiscales.",
            icon: Wallet,
            color: "text-purple-600 bg-purple-100",
            href: "/services/comptabilite"
        },
        {
            title: "Reprise de Dossier & Transition Fiduciaire Fluide",
            description: "Accompagnement pour le transfert de votre dossier comptable vers un nouveau partenaire.",
            icon: RefreshCcw,
            color: "text-red-600 bg-red-100",
            href: "/services/changer-fiduciaire"
        }
    ];

    return (
        <>
            <JsonLd schema={breadcrumbSchema([{ name: "Services", path: "/services" }])} />
            <section className="relative bg-slate-900 py-24 lg:py-32 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-950 opacity-80"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">
                        Une gestion comptable et fiscale de A à Z pour <span className="text-green-500">sécuriser votre croissance</span>
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-slate-200 max-w-2xl mx-auto font-medium">
                        Une organisation administrative complète : de la saisie comptable au bouclement fiscal, pilotée par des experts.
                    </p>
                    <div className="mt-10 flex flex-col items-center gap-3">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 text-white px-10 py-7 text-lg font-semibold shadow-2xl shadow-green-900/40 transform transition hover:-translate-y-1 hover:scale-105">
                                Demander une consultation gratuite de 30 minutes
                            </Button>
                        </Link>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
                            Sans engagement – Réponse sous 24h ouvrées – Diagnostic structuré
                        </p>
                    </div>
                </div>
            </section>

            <Section className="bg-white py-16 lg:py-24">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-4 border border-slate-200">Expertise ponctuelle & Optimisation</span>
                    <h2 className="text-3xl font-bold text-slate-900">Services Spécialisés</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 px-4">
                    {services.slice(0, 3).map((service) => (
                        <Link key={service.title} href={service.href} className="group block h-full">
                            <div className="relative rounded-2xl border border-slate-100 bg-white p-8 h-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-green-200 flex flex-col">
                                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.color} mb-6 shrink-0 shadow-sm opacity-90`}>
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed flex-grow text-base">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-center w-full py-3 bg-slate-50 text-sm font-bold text-slate-700 rounded-lg border border-slate-100 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all mt-auto">
                                    En savoir plus
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16"></div>

                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-4 border border-green-100">Cœur de métier</span>
                    <h2 className="text-3xl font-bold text-slate-900">Gestion Récurrente</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
                    {services.slice(3, 5).map((service) => (
                        <Link key={service.title} href={service.href} className="group block h-full">
                            <div className="relative rounded-2xl border border-slate-200 bg-slate-50/50 p-8 h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-green-300 flex flex-col">
                                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.color} mb-6 shrink-0 shadow-sm`}>
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-800 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed flex-grow text-base">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-center w-full py-4 bg-green-700 text-white text-base font-bold rounded-xl shadow-lg shadow-green-900/10 group-hover:bg-green-800 group-hover:shadow-green-900/20 transition-all mt-auto transform group-hover:scale-[1.02]">
                                    En savoir plus &rarr;
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>

            <Section className="bg-slate-50 py-24 pb-20 border-t border-slate-100">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 sm:text-4xl">Votre transition vers une gestion sereine en 3 étapes</h2>
                        <p className="text-lg text-slate-600 font-medium">Une méthode structurée pour sécuriser votre gestion sans interruption.</p>
                    </div>

                    <div className="space-y-10 mb-16">
                        <div className="group flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-none w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-slate-900/20 group-hover:bg-green-600 group-hover:shadow-green-600/30 transition-all">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Diagnostic 360°</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">Nous analysons vos spécificités (SA/SARL/Indépendant) pour définir une stratégie fiscale sur mesure et identifier les risques immédiats.</p>
                            </div>
                        </div>
                        <div className="group flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-none w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-slate-900/20 group-hover:bg-green-600 group-hover:shadow-green-600/30 transition-all">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Partenaire de Confiance</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">Votre dossier est piloté par un expert comptable expert du marché suisse, garantissant rigueur, conformité et réactivité.</p>
                            </div>
                        </div>
                        <div className="group flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-none w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-slate-900/20 group-hover:bg-green-600 group-hover:shadow-green-600/30 transition-all">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Zéro Stress Administratif</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">Nous coordonnons le suivi de vos échéances (TVA, impôts, LPP) avec l&apos;expert fiduciaire partenaire et veillons à une visibilité claire pour piloter votre activité.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-8 border-t border-slate-200">
                        <p className="text-lg font-semibold text-slate-900 mb-6">FiduConnect structure votre situation avant toute mise en relation.</p>
                        <div className="flex flex-col items-center gap-3">
                            <Link href="/contact">
                                <Button size="lg" className="bg-green-700 hover:bg-green-600 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                                    👉 Demander un diagnostic gratuit (30 min)
                                </Button>
                            </Link>
                            <p className="text-sm text-slate-500 font-medium">
                                Premier diagnostic offert – Sans engagement
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

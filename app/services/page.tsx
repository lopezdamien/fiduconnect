import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { AlertTriangle, TrendingDown, FileText, ArrowRight, Wallet, RefreshCcw } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services & Expertise Comptable Genève | FIDU",
    description: "Découvrez nos services d'analyse et d'orientation : TVA, Fiscalité, Salaires, Pilotage financier pour PME.",
};

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
            <section className="bg-slate-900 py-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                    Une gestion comptable et fiscale de A à Z pour sécuriser votre croissance
                </h2>
                <p className="mt-4 text-lg leading-7 text-slate-300 max-w-[60ch] mx-auto">
                    Une organisation administrative complète : de la saisie comptable au bouclement fiscal.
                </p>
                <div className="mt-8">
                    <Link href="/contact">
                        <Button size="lg" className="bg-green-700 hover:bg-green-600 h-12 px-8">
                            Demander une consultation gratuite de 30 minutes
                        </Button>
                    </Link>
                </div>
            </section>

            <Section className="bg-white py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Link key={service.title} href={service.href} className="group block">
                            <div className="rounded-2xl border border-slate-200 p-6 h-full shadow-sm hover:shadow-md transition-all hover:border-green-200 flex flex-col">
                                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${service.color} mb-4 shrink-0`}>
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-800 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-700 mb-4 leading-relaxed flex-grow text-sm">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-center w-full py-2 bg-green-50 text-sm font-bold text-green-700 rounded-lg group-hover:bg-green-100 transition-colors mt-auto">
                                    En savoir plus
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>

            <Section className="bg-slate-50 py-16 pb-12">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">Votre transition vers une gestion sereine en 3 étapes</h2>
                    <div className="space-y-8 text-left mb-12">
                        <div className="flex gap-4">
                            <div className="flex-none w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-green-900/20">1</div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Diagnostic 360°</h3>
                                <p className="text-slate-700 leading-relaxed">Nous analysons vos spécificités (SA/SARL/Indépendant) pour définir une stratégie fiscale sur mesure.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-none w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-green-900/20">2</div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Partenaire de Confiance</h3>
                                <p className="text-slate-700 leading-relaxed">Votre dossier est piloté par un expert comptable expert du marché genevois, garantissant rigueur et réactivité.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-none w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-green-900/20">3</div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Zéro Stress Administratif</h3>
                                <p className="text-slate-700 leading-relaxed">Nous gérons vos échéances (TVA, Impôts, LPP) et vous fournissons des tableaux de bord clairs pour piloter votre activité.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 px-8">
                                Démarrer ma transition aujourd'hui
                            </Button>
                        </Link>
                        <p className="mt-3 text-sm text-slate-500">
                            Réponse sous 24h — Premier diagnostic offert
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}

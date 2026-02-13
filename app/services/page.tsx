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
            title: "TVA & Fiscalité Dédiée",
            description: "Analyse de votre assujettissement, méthode de décompte et récupération d'impôt préalable.",
            icon: AlertTriangle,
            color: "text-orange-600 bg-orange-100",
            href: "/services/tva"
        },
        {
            title: "Charges Sociales & Salaires",
            description: "Optimisation du ratio salaire/dividende et audit de votre couverture LPP/LAA.",
            icon: FileText,
            color: "text-blue-600 bg-blue-100",
            href: "/services/charges-salaires"
        },
        {
            title: "Organisation & Conformité",
            description: "Structures vos processus pour ne plus jamais manquer une échéance administrative.",
            icon: TrendingDown,
            color: "text-green-600 bg-green-100",
            href: "/services/pilotage"
        },
        {
            title: "Comptabilité & Déclarations",
            description: "Tenue de comptes rigoureuse et établissement de vos déclarations fiscales.",
            icon: Wallet,
            color: "text-purple-600 bg-purple-100",
            href: "/services/comptabilite"
        },
        {
            title: "Changer de Fiduciaire",
            description: "Accompagnement complet pour une transition en douceur vers un partenaire adapté.",
            icon: RefreshCcw,
            color: "text-red-600 bg-red-100",
            href: "/services/changer-fiduciaire"
        }
    ];

    return (
        <>
            <section className="bg-slate-900 py-24 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                    Nos Domaines d&apos;Expertise
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
                    Nous ne faisons pas que de la saisie. Nous analysons, structurons et optimisons votre gestion.
                </p>
            </section>

            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link key={service.title} href={service.href} className="group block h-full">
                            <div className="rounded-2xl border border-slate-200 p-8 h-full shadow-sm hover:shadow-md transition-all hover:border-green-200">
                                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${service.color} mb-6`}>
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-800 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    {service.description}
                                </p>
                                <div className="flex items-center text-sm font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                                    En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>

            <Section className="bg-slate-50 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Besoin d&apos;un diagnostic global ?</h2>
                <Link href="/diagnostic">
                    <Button size="lg">Faire un point gratuit</Button>
                </Link>
            </Section>
        </>
    );
}

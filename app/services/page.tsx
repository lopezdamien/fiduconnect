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
            description: "Vérification de la conformité de vos décomptes TVA et de votre méthode d'assujettissement.",
            icon: AlertTriangle,
            color: "text-orange-600 bg-orange-100",
            href: "/services/tva"
        },
        {
            title: "Charges Sociales & Salaires",
            description: "Gestion administrative de vos obligations employeur (AVS, LPP, LAA).",
            icon: FileText,
            color: "text-blue-600 bg-blue-100",
            href: "/services/charges-salaires"
        },
        {
            title: "Organisation & Conformité",
            description: "Mise en place de processus de classement et d'archivage pour respecter les délais.",
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
            description: "Accompagnement pour le transfert de votre dossier comptable vers un nouveau partenaire.",
            icon: RefreshCcw,
            color: "text-red-600 bg-red-100",
            href: "/services/changer-fiduciaire"
        }
    ];

    return (
        <>
            <section className="bg-slate-900 py-24 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                    Services d’organisation fiduciaire à Genève
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
                    Nous structurons votre administratif, organisons la tenue comptable et coordonnons les obligations fiscales avec nos partenaires fiduciaires genevois.
                </p>
                <div className="mt-10">
                    <Link href="/contact">
                        <Button size="lg" className="bg-green-700 hover:bg-green-600">
                            Demander une offre
                        </Button>
                    </Link>
                </div>
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

            <Section className="bg-slate-50">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Comment ça marche ?</h2>
                    <div className="space-y-12 text-left">
                        <div className="flex gap-6">
                            <div className="flex-none w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Analyse & Organisation</h3>
                                <p className="text-slate-600">Nous analysons votre structure (SA/SARL/Indépendant) et définissons le cahier des charges comptable.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-none w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Choix du Partenaire</h3>
                                <p className="text-slate-600">Nous attribuons votre dossier au partenaire fiduciaire genevois le plus adapté à votre activité.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-none w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Coordination & Suivi</h3>
                                <p className="text-slate-600">Nous restons votre interlocuteur pour la transmission des pièces, les délais TVA et le suivi annuel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

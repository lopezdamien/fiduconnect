import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contactez FIDU | Cabinet Expertise Comptable Genève",
    description: "Besoin d'un audit ou d'un conseil comptable ? Contactez-nous pour un échange gratuit et sans engagement.",
};

export default function Contact() {
    return (
        <>
            <section className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                    Contactez-nous
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
                    Une question ? Besoin d&apos;un avis rapide ? nous sommes à votre écoute.
                </p>
            </section>

            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Nos coordonnées</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                    <MapPin className="h-5 w-5 text-slate-700" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Bureau</h3>
                                    <p className="text-slate-600">Rue du Rhône 14<br />1204 Genève, Suisse</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Phone className="h-5 w-5 text-slate-700" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Téléphone</h3>
                                    <p className="text-slate-600">+41 22 000 00 00</p>
                                    <p className="text-sm text-slate-500">Du lundi au vendredi, 9h-18h</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Mail className="h-5 w-5 text-slate-700" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Email</h3>
                                    <p className="text-slate-600">contact@fidu.ch</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-semibold text-slate-900 mb-2">Confidentialité</h3>
                            <p className="text-sm text-slate-600">
                                Toutes nos conversations sont strictement confidentielles. Nous ne partageons vos données avec aucun tiers sans votre accord explicite.
                            </p>
                        </div>

                        <div className="mt-6 flex gap-4 text-sm text-slate-500">
                            <Link href="/mentions-legales" className="hover:underline">Mentions légales</Link>
                            <span>•</span>
                            <Link href="/confidentialite" className="hover:underline">Politique de confidentialité</Link>
                        </div>
                    </div>

                    <div>
                        <LeadForm />
                    </div>
                </div>
            </Section>
        </>
    );
}

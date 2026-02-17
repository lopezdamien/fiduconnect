import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import Link from "next/link";
import { ContactScrollButton } from "@/components/ContactScrollButton";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Fiduciaire Genève | Consultation Comptable Gratuite | FiduConnect",
    description: "Besoin d’un avis comptable à Genève ? Obtenez une consultation gratuite de 30 minutes avec un expert fiduciaire partenaire. Analyse personnalisée et sans engagement.",
};

export default function Contact() {
    return (
        <>
            <section className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                    Parlons de votre situation comptable
                </h1>
                <p className="mt-6 text-xl leading-8 text-slate-300 max-w-2xl mx-auto">
                    Obtenez un avis clair et structuré en 30 minutes avec un expert fiduciaire à Genève.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm text-slate-400 mt-8">
                    <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Sans engagement</span>
                    <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Analyse personnalisée</span>
                    <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Réponse sous 48h</span>
                </div>
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
                                    <p className="text-xs text-green-700 font-bold uppercase tracking-wide mb-1">Présence locale à Genève</p>
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
                                    <p className="text-slate-600">+41 22 XXX XX XX</p>
                                    <p className="text-sm text-slate-500">Du lundi au vendredi, 9h-18h</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Mail className="h-5 w-5 text-slate-700" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Email</h3>
                                    <Link href="mailto:contact@fiduconnect.ch" className="text-slate-600 hover:text-green-700 transition-colors">contact@fiduconnect.ch</Link>
                                    <p className="text-sm text-slate-500">Réponse sous 1 à 2 jours ouvrables.</p>
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

            {/* 4. MINI BLOC CONVERSION */}
            <Section className="bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Pourquoi nous contacter ?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 mb-8">
                        <div className="flex items-center gap-2 justify-center bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span className="text-slate-700 font-medium">Avis neutre et structuré</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span className="text-slate-700 font-medium">Accompagnement par un expert genevois</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span className="text-slate-700 font-medium">Processus simple et transparent</span>
                        </div>
                    </div>
                    <div>
                        <ContactScrollButton />
                    </div>
                </div>
            </Section>
        </>
    );
}

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import Link from "next/link";
import { ContactScrollButton } from "@/components/ContactScrollButton";
import { Mail, Phone, MapPin, CheckCircle2, UserCheck, ShieldCheck, Briefcase } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Fiduciaire Genève | Consultation Comptable Gratuite | FiduConnect",
    description: "Besoin d’un avis comptable à Genève ? Obtenez une consultation gratuite de 30 minutes avec un expert fiduciaire partenaire. Analyse personnalisée et sans engagement.",
};

export default function Contact() {
    return (
        <>
            <section className="bg-slate-900 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
                        Parlons de votre situation comptable
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-slate-300 max-w-3xl mx-auto font-medium">
                        En 30 minutes, identifiez vos risques fiscaux et vos optimisations possibles avec un expert fiduciaire à Genève.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm text-slate-400 font-medium">
                        <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Sans engagement</span>
                        <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Analyse personnalisée</span>
                        <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Réponse sous 48h</span>
                    </div>

                    <div className="mt-10">
                        <Link href="#contact-form">
                            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white font-bold text-lg px-8 py-4 shadow-lg shadow-green-900/40 transform transition hover:-translate-y-1">
                                Recevoir un appel gratuit (30 min)
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Section className="bg-white py-16" id="contact-form">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Colonne gauche : Coordonnées */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Nos coordonnées</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4 group">
                                <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-green-200 transition-colors">
                                    <MapPin className="h-5 w-5 text-slate-700 group-hover:text-green-600 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs text-green-700 font-bold uppercase tracking-wide mb-1">Présence locale à Genève</p>
                                    <h3 className="font-bold text-slate-900 text-lg">Bureau</h3>
                                    <p className="text-slate-600 leading-relaxed mt-1">Rue du Rhône 14<br />1204 Genève, Suisse</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-green-200 transition-colors">
                                    <Phone className="h-5 w-5 text-slate-700 group-hover:text-green-600 transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Téléphone</h3>
                                    <p className="text-slate-600 mt-1 font-medium">+41 22 XXX XX XX</p>
                                    <p className="text-sm text-slate-500 mt-1">Du lundi au vendredi, 9h-18h</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-green-200 transition-colors">
                                    <Mail className="h-5 w-5 text-slate-700 group-hover:text-green-600 transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Email</h3>
                                    <Link href="mailto:contact@fiduconnect.ch" className="text-slate-600 hover:text-green-700 transition-colors font-medium block mt-1">contact@fiduconnect.ch</Link>
                                    <p className="text-sm text-slate-500 mt-1">Réponse sous 1 à 2 jours ouvrables.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-green-600" />
                                Confidentialité
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Toutes nos conversations sont strictement confidentielles. Nous ne partageons vos données avec aucun tiers sans votre accord explicite.
                            </p>
                        </div>

                        <div className="mt-8 flex gap-6 text-sm text-slate-400">
                            <Link href="/mentions-legales" className="hover:text-slate-600 transition-colors">Mentions légales</Link>
                            <Link href="/confidentialite" className="hover:text-slate-600 transition-colors">Politique de confidentialité</Link>
                        </div>
                    </div>

                    {/* Colonne droite : Formulaire + Trust */}
                    <div>
                        {/* Trust Section */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                Pourquoi nous contacter ?
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow">
                                    <div className="bg-green-50 p-2 rounded-full text-green-600">
                                        <Briefcase className="h-5 w-5" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700 leading-tight">+120 Entreprises accompagnées</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow">
                                    <div className="bg-green-50 p-2 rounded-full text-green-600">
                                        <UserCheck className="h-5 w-5" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700 leading-tight">Spécialiste PME & Indépendants</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow">
                                    <div className="bg-green-50 p-2 rounded-full text-green-600">
                                        <CheckCircle2 className="h-5 w-5" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700 leading-tight">Approche structurée</span>
                                </div>
                            </div>
                        </div>

                        {/* Formulaire */}
                        <LeadForm />
                    </div>
                </div>
            </Section>
        </>
    );
}

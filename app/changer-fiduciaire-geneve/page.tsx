
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import Link from "next/link";
import { CheckCircle2, ArrowRight, AlertTriangle, HelpCircle, ArrowLeft, ShieldCheck, Mail, FileCheck } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Changer de fiduciaire | Transition comptable PME",
    description: "Comment changer de fiduciaire ? Étapes, résiliation du mandat, reprise comptable et organisation TVA pour PME.",
};

export default function ChangerFiduciaireArticle() {
    return (
        <>
            {/* HERO ARTICLE */}
            <section className="bg-slate-50 pt-32 pb-20">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <Link href="/ressources" className="inline-flex items-center text-sm text-slate-500 hover:text-green-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour aux ressources
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-8 leading-tight">
                        Changer de fiduciaire : comment organiser la transition en toute sécurité ?
                    </h1>

                    <p className="text-xl leading-8 text-slate-700">
                        Changez de fiduciaire en toute sérénité. Nous gérons le transfert complet de votre dossier, sans interruption d’activité et sans conflit.
                    </p>

                    <div className="mt-8">
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <span className="flex items-center text-sm text-slate-600 font-medium bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" /> Sans conflit avec votre ancien fiduciaire
                            </span>
                            <span className="flex items-center text-sm text-slate-600 font-medium bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" /> Aucune rupture administrative
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <span className="flex items-center text-sm text-slate-600 font-medium bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" /> Processus 100% encadré
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* POURQUOI CHANGER */}
            <Section className="bg-white">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-6">
                        Pourquoi les PME envisagent-elles un changement de fiduciaire ?
                    </h2>
                    <p className="text-slate-700 mb-6 leading-relaxed font-medium text-lg">
                        Changer de fiduciaire n’est pas un échec, c’est une décision stratégique. Si votre entreprise évolue, votre accompagnement doit évoluer aussi.
                    </p>
                    <p className="text-slate-700 mb-8 leading-relaxed">
                        Un manque de réactivité ou de transparence peut coûter plus cher que vous ne le pensez.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="h-6 w-6 text-red-500 mr-3 shrink-0" />
                            <span className="text-slate-700"><strong>Retards dans les bouclements annuels :</strong> Des bilans qui arrivent tardivement, empêchant toute planification financière.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="h-6 w-6 text-red-500 mr-3 shrink-0" />
                            <span className="text-slate-700"><strong>Manque de visibilité sur la TVA :</strong> Des décomptes peu clairs et une incertitude permanente sur les montants à payer.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="h-6 w-6 text-red-500 mr-3 shrink-0" />
                            <span className="text-slate-700"><strong>Absence d’explication pédagogique :</strong> Un jargon technique incompréhensible sans effort de vulgarisation.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="h-6 w-6 text-red-500 mr-3 shrink-0" />
                            <span className="text-slate-700"><strong>Organisation comptable peu structurée :</strong> Des documents égarés ou une gestion encore trop "papier".</span>
                        </li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed">
                        Pour répondre aux obligations fiscales, une PME doit pouvoir compter sur une reprise comptable fluide et une transition maîtrisée.
                    </p>
                </div>
            </Section>

            {/* RISQUES EN COURS D'ANNÉE */}
            <Section className="bg-slate-50">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-6">
                        Est-il risqué de changer de fiduciaire en cours d’année ?
                    </h2>
                    <div className="prose prose-slate max-w-none text-slate-700 text-justify">
                        <p className="mb-4">
                            C'est une crainte fréquente : "Si je change maintenant, je vais perdre mes données". En réalité, il est tout à fait possible de résilier un mandat fiduciaire en cours d'exercice. L'essentiel est de bien vérifier les conditions contractuelles (préavis, généralement de 3 mois) et d'assurer la coordination pour la TVA suisse (e-TVA).
                        </p>
                        <p>
                            Une transition en cours d'année permet souvent de rectifier le tir avant la clôture annuelle, évitant ainsi de traîner des erreurs sur un bilan complet.
                        </p>
                    </div>
                </div>
            </Section>

            {/* ETAPES CONCRÈTES */}
            <Section className="bg-white">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-4">
                        Un transfert 100% sécurisé
                    </h2>
                    <p className="text-slate-600 mb-10">
                        Nous avons structuré un processus simple pour éviter toute tension ou perte d’information.
                    </p>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Analyse de la situation actuelle</h3>
                                <p className="text-slate-700">Évaluation de l'état de la comptabilité et identification des points bloquants (erreurs passées, retards). Nous identifions les éventuelles erreurs ou risques avant toute reprise.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Vérification des conditions contractuelles</h3>
                                <p className="text-slate-700">Relecture du contrat actuel pour respecter les délais de résiliation et préparer le courrier de transfert.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Transmission des documents</h3>
                                <p className="text-slate-700">Récupération du Grand Livre, des balances, des derniers décomptes TVA et des pièces justificatives. La reprise inclut la gestion de la relation avec l'administration fiscale cantonale genevoise.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">4</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Organisation de la reprise</h3>
                                <p className="text-slate-700">Mise en place de la nouvelle structure, paramétrage des accès et définition du calendrier comptable.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-green-50 rounded-2xl border border-green-100">
                        <h3 className="text-lg font-bold text-green-900 mb-4 text-center">Ce que nous récupérons pour vous</h3>
                        <p className="text-green-800 text-center mb-6 text-sm">Vous n’avez rien à gérer. Nous coordonnons directement avec votre ancien prestataire.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-3 rounded-lg border border-green-200 flex items-center shadow-sm">
                                <FileCheck className="h-5 w-5 text-green-600 mr-3" />
                                <span className="text-slate-700 text-sm">Grand Livre & Balances</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-green-200 flex items-center shadow-sm">
                                <FileCheck className="h-5 w-5 text-green-600 mr-3" />
                                <span className="text-slate-700 text-sm">Décomptes TVA passés</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-green-200 flex items-center shadow-sm">
                                <FileCheck className="h-5 w-5 text-green-600 mr-3" />
                                <span className="text-slate-700 text-sm">Dossiers Salaires (LPP, AVS)</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-green-200 flex items-center shadow-sm">
                                <FileCheck className="h-5 w-5 text-green-600 mr-3" />
                                <span className="text-slate-700 text-sm">Correspondances AFC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* TVA */}
            <Section className="bg-slate-50">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-6">
                        La TVA lors d’un changement de fiduciaire
                    </h2>
                    <div className="prose prose-slate max-w-none text-slate-700 text-justify space-y-4">
                        <p>
                            La TVA est souvent le point critique. Pour rappel, dès 100’000 CHF de chiffre d’affaires, l'assujettissement est obligatoire.
                        </p>
                        <p>
                            Lors du changement, il est crucial de vérifier si la méthode utilisée (méthode effective ou taux de la dette fiscale nette) est toujours la plus avantageuse pour votre PME. Une erreur méthodologique ou un retard déclaratif lors de la transition peut entraîner des risques déclaratifs importants.
                        </p>
                        <p>
                            Selon les cas, les accès (ex. e-TVA) et les procurations peuvent être mis à jour directement par le nouvel expert fiduciaire pour assurer cette continuité.
                        </p>
                    </div>
                </div>
            </Section>

            {/* NOUVELLE SECTION FREINS */}
            <Section className="bg-white">
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-12 text-center">
                        Vous hésitez encore ?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <HelpCircle className="h-6 w-6 text-green-600" />
                                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Mon ancien fiduciaire va mal le prendre</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Le changement est un droit. Nous gérons les échanges de manière professionnelle et neutre pour éviter tout conflit émotionnel.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="h-6 w-6 text-green-600" />
                                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Le transfert va être compliqué</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Nous avons un protocole clair. Vous signez un mandat de reprise, et nous nous occupons de récupérer l'ensemble de l'historique.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <FileCheck className="h-6 w-6 text-green-600" />
                                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Je risque une rupture administrative</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Faux. Nous assurons la continuité complète (TVA, salaires, déclarations) afin qu'aucune échéance ne soit manquée durant la transition.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>


            {/* CONCLUSION & CTA FINAL */}
            <section className="bg-slate-900 py-24 text-center">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                        Prêt à changer sereinement de fiduciaire ?
                    </h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                        Avec une approche claire et structurée, la transition peut être organisée sans interruption, sans risque fiscal et sans complexité inutile.
                    </p>
                    <div className="flex flex-col items-center gap-8">
                        <Link href="/diagnostic">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 px-10 py-6 text-lg shadow-xl shadow-green-900/20">
                                Demander une consultation gratuite de 30 minutes <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>

                        <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-400">
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Consultation stratégique offerte</span>
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Analyse de votre situation actuelle</span>
                            <span className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Plan de transition clair</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

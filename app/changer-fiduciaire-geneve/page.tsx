
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import Link from "next/link";
import { CheckCircle2, ArrowRight, AlertTriangle, FileText, HelpCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Changer de fiduciaire à Genève | Transition comptable PME",
    description: "Comment changer de fiduciaire à Genève ? Étapes, résiliation du mandat, reprise comptable et organisation TVA pour PME.",
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
                        Changer de fiduciaire à Genève : comment organiser la transition en toute sécurité ?
                    </h1>
                    <p className="text-xl leading-8 text-slate-700">
                        Changer de fiduciaire est une décision stratégique pour une PME à Genève. Lorsqu’un dirigeant constate un manque de clarté, une gestion TVA incertaine ou une organisation peu structurée, la question du changement peut se poser.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-700">
                        Contrairement aux idées reçues, la transition vers un nouvel expert fiduciaire peut être organisée simplement et sans perturbation, à condition de suivre un processus clair et structuré.
                    </p>
                </div>
            </section>

            {/* POURQUOI CHANGER */}
            <Section className="bg-white">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-6">
                        Pourquoi les PME à Genève envisagent-elles un changement de fiduciaire ?
                    </h2>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                        La gestion comptable d'une entreprise ne doit pas être une source de stress. Pourtant, de nombreux entrepreneurs genevois se retrouvent confrontés à des situations qui freinent leur développement :
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
                        Pour répondre aux obligations fiscales du canton de Genève, une PME doit pouvoir compter sur une reprise comptable fluide et une transition maîtrisée.
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
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-8">
                        Les étapes concrètes d’un changement structuré
                    </h2>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Analyse de la situation actuelle</h3>
                                <p className="text-slate-700">Évaluation de l'état de la comptabilité et identification des points bloquants (erreurs passées, retards).</p>
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
                                <p className="text-slate-700">Récupération du Grand Livre, des balances, des derniers décomptes TVA et des pièces justificatives. Nous assurons la liaison avec l'administration fiscale cantonale genevoise.</p>
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

                    <div className="my-12">
                        <Image
                            src="/images/transition-fiduciaire-geneve-process.jpg"
                            alt="Processus structuré de changement de fiduciaire pour PME à Genève"
                            width={1200}
                            height={600}
                            className="rounded-xl border border-slate-200"
                        />
                    </div>

                    <div className="mt-8 p-8 bg-green-50 rounded-2xl border border-green-100 text-center">
                        <h3 className="text-lg font-bold text-green-900 mb-3">Besoin d’un regard structuré sur votre situation actuelle ?</h3>
                        <Link href="/diagnostic">
                            <Button className="bg-green-700 hover:bg-green-800 text-white">
                                Demander une consultation gratuite de 30 minutes
                            </Button>
                        </Link>
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
                            Lors du changement, il est crucial de vérifier si la méthode utilisée (méthode effective ou taux de la dette fiscale nette) est toujours la plus avantageuse pour votre PME. Une erreur méthodologique ou un retard déclaratif lors de la transition peut entraîner des risques déclaratifs importants. Notre rôle est de sécuriser cette continuité.
                        </p>
                    </div>

                    <div className="my-12">
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm mx-auto max-w-2xl">
                            <Image
                                src="/images/changement-fiduciaire-points-sensibles-geneve.jpg"
                                alt="Points sensibles lors d’une transition comptable pour PME à Genève"
                                width={1200}
                                height={600}
                                className="rounded-lg"
                            />
                            <p className="text-center text-sm text-slate-500 mt-2">Les points de vigilance majeurs lors d'une transition fiduciaire.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* RISQUES ET BÉNÉFICES */}
            <Section className="bg-white">
                <div className="mx-auto max-w-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-4 flex items-center">
                                <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                                Risques d'une transition mal organisée
                            </h2>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start">• Retards déclaratifs auprès de l'AFC</li>
                                <li className="flex items-start">• Erreurs dans les décomptes TVA</li>
                                <li className="flex items-start">• Rappels fiscaux inattendus</li>
                                <li className="flex items-start">• Pénalités éventuelles pour négligence</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-4 flex items-center">
                                <CheckCircle2 className="h-6 w-6 text-green-600 mr-2" />
                                Bénéfices d'une transition structurée
                            </h2>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start">• Une vision financière enfin claire</li>
                                <li className="flex items-start">• Une organisation rigoureuse et digitale</li>
                                <li className="flex items-start">• Une meilleure compréhension de vos obligations</li>
                                <li className="flex items-start">• Une communication fluide avec votre expert</li>
                                <li className="flex items-start">• Une réduction drastique du risque d'erreurs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FAQ */}
            <Section className="bg-slate-50">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-8 text-center">
                        Questions fréquentes sur le changement de fiduciaire à Genève
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-start">
                                <HelpCircle className="h-5 w-5 text-green-600 mr-3 mt-1 shrink-0" />
                                Peut-on résilier un mandat fiduciaire à tout moment ?
                            </h3>
                            <p className="text-slate-700 pl-8">Idéalement, il faut respecter le préavis contractuel ou attendre la fin de l'exercice. Cependant, en cas de faute grave ou de rupture de confiance avérée, une résiliation immédiate peut s'envisager. Nous analysons votre contrat pour vous conseiller.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-start">
                                <HelpCircle className="h-5 w-5 text-green-600 mr-3 mt-1 shrink-0" />
                                Le changement entraîne-t-il des frais supplémentaires ?
                            </h3>
                            <p className="text-slate-700 pl-8">La reprise comptable demande un travail initial d'analyse et de paramétrage. Chez nous, cette étape est transparente et fait l'objet d'un devis clair. L'objectif est de repartir sur des bases saines.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-start">
                                <HelpCircle className="h-5 w-5 text-green-600 mr-3 mt-1 shrink-0" />
                                Peut-on changer en pleine période TVA ?
                            </h3>
                            <p className="text-slate-700 pl-8">Oui, mais cela demande de la rigueur. Le nouveau mandataire doit s'assurer que le décompte de la période en cours soit correctement préparé, même si la période a débuté sous l'ancien mandat.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-start">
                                <HelpCircle className="h-5 w-5 text-green-600 mr-3 mt-1 shrink-0" />
                                Faut-il informer l’administration fiscale ?
                            </h3>
                            <p className="text-slate-700 pl-8">Oui, nous nous chargeons d'annoncer la nouvelle représentation (procuration) auprès de l'Administration Fiscale Cantonale (AFC) et de l'Administration Fédérale des Contributions pour la TVA.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-start">
                                <HelpCircle className="h-5 w-5 text-green-600 mr-3 mt-1 shrink-0" />
                                Combien de temps dure une transition ?
                            </h3>
                            <p className="text-slate-700 pl-8">Une transition bien organisée prend généralement entre 2 et 4 semaines, le temps de récupérer les pièces, de vérifier les balances et de paramétrer les nouveaux outils. Votre activité ne s'arrête pas pendant ce temps.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* MAILLAGE INTERNE */}
            <Section className="bg-white border-t border-slate-100">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Pour aller plus loin</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/services/comptabilite" className="text-slate-600 hover:text-green-700 font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-green-700 transition-all">
                            Nos services comptables
                        </Link>
                        <span className="text-slate-300">|</span>
                        <Link href="/tva-suisse" className="text-slate-600 hover:text-green-700 font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-green-700 transition-all">
                            Comprendre la TVA Suisse
                        </Link>
                        <span className="text-slate-300">|</span>
                        <Link href="/diagnostic" className="text-slate-600 hover:text-green-700 font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-green-700 transition-all">
                            Audit gratuit
                        </Link>
                    </div>
                </div>
            </Section>

            {/* CONCLUSION & CTA FINAL */}
            <section className="bg-slate-900 py-20 text-center">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                        Une décision de gestion pour pérenniser votre activité
                    </h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                        Changer de fiduciaire à Genève est une décision de gestion, pas une rupture brutale. Avec une approche claire et structurée, la transition peut être organisée sans interruption, sans risque fiscal et sans complexité inutile.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link href="/diagnostic">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 px-8 py-6 text-lg shadow-xl shadow-green-900/20">
                                Demander une consultation gratuite de 30 minutes <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <p className="text-sm text-slate-400">
                            Consultation réalisée par un expert fiduciaire partenaire. Sans engagement.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import Link from "next/link";
import { CheckCircle2, ArrowRight, RefreshCcw } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Changer de Fiduciaire Genève | Processus Simple & Rapide",
    description: "Vous souhaitez changer de fiduciaire ? Nous organisons la transition de A à Z : récupération des pièces, historique comptable et mise en place du nouveau mandat.",
};

export default function ChangerFiduciaire() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-slate-900 pt-20 pb-24 text-center">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                        Changer de fiduciaire à Genève
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
                        Une transition sans rupture d'activité. Nous coordonnons le transfert de votre dossier pour vous.
                    </p>
                    <div className="mt-10">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600">
                                Organiser la transition <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 1 - Pourquoi changer */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Pourquoi changer de prestataire ?</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Il est courant qu'une PME évolue et que sa fiduciaire historique ne soit plus adaptée (réactivité, outils digitaux, conseil). Changer n'est pas une trahison, c'est parfois une nécessité de gestion.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 shrink-0" />
                                <span className="text-slate-700">Manque de réactivité ou de conseil</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 shrink-0" />
                                <span className="text-slate-700">Honoraires opaques ou trop élevés</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 shrink-0" />
                                <span className="text-slate-700">Besoin d'outils plus modernes</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex items-center justify-center">
                        <RefreshCcw className="h-32 w-32 text-slate-200" />
                    </div>
                </div>
            </Section>

            {/* Section 2 - Process */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Un processus de transfert sécurisé</h2>
                        <p className="text-slate-600">Nous nous occupons de tout. Vous n'avez pas à gérer les détails techniques avec votre ancien comptable.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                            <h3 className="font-bold text-slate-900 mb-2">Mandat de transfert</h3>
                            <p className="text-slate-600 text-sm">Vous nous signez un mandat nous autorisant à récupérer vos pièces.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                            <h3 className="font-bold text-slate-900 mb-2">Récupération Historique</h3>
                            <p className="text-slate-600 text-sm">Nous auditons l'historique (balance, grand livre) pour assurer la continuité.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                            <h3 className="font-bold text-slate-900 mb-2">Démarrage</h3>
                            <p className="text-slate-600 text-sm">Nous mettons en place le nouveau process avec notre partenaire fiduciaire dédié.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - Documents Necesaires */}
            <Section className="bg-white">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Documents nécessaires pour la reprise</h2>
                    <div className="border-l-4 border-green-500 pl-6 space-y-2">
                        <p className="text-slate-700">✅ Derniers bilans et comptes de pertes et profits bouclés</p>
                        <p className="text-slate-700">✅ Décomptes TVA des périodes précédentes en cours</p>
                        <p className="text-slate-700">✅ Détails des salaires et décomptes charges sociales</p>
                        <p className="text-slate-700">✅ Accès au logiciel comptable (si cloud)</p>
                    </div>
                </div>
            </Section>

            <Section className="bg-slate-50 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Prêt à changer ?</h2>
                <Link href="/contact">
                    <Button size="lg">Organiser la transition</Button>
                </Link>
            </Section>
        </>
    );
}

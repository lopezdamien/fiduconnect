
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité | Smart Administration",
    description: "Politique de confidentialité et gestion des données personnelles - Smart Administration.",
};

export default function Confidentialite() {
    return (
        <div className="bg-slate-50 min-h-screen py-24 px-6 lg:px-8">
            <div className="mx-auto max-w-3xl bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 pb-4 border-b border-slate-100">
                    Politique de Confidentialité
                </h1>

                <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">1. Responsable du traitement</h2>
                        <p>
                            Smart Administration - Damien Lopez<br />
                            Avenue d'Aïre 73C, 1203 Genève, Suisse<br />
                            Email : <a href="mailto:contact@smartadministration.ch" className="text-green-700 hover:underline">contact@smartadministration.ch</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">2. Données collectées</h2>
                        <p>
                            Les données susceptibles d’être collectées via le formulaire :
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Nom et prénom</li>
                            <li>Adresse email</li>
                            <li>Numéro de téléphone</li>
                            <li>Nom de la société</li>
                            <li>Informations transmises volontairement</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">3. Finalités du traitement</h2>
                        <p>Les données sont collectées pour :</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Organiser une consultation gratuite de 30 minutes</li>
                            <li>Permettre la mise en relation avec un expert fiduciaire partenaire</li>
                            <li>Répondre aux demandes</li>
                            <li>Améliorer le service (statistiques anonymisées)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">4. Transmission des données</h2>
                        <p>
                            Les informations transmises via le formulaire peuvent être communiquées à un expert fiduciaire partenaire uniquement dans le cadre de l’organisation et de la réalisation de la consultation.
                        </p>
                        <p className="mt-2 text-slate-900 font-medium">
                            Aucune donnée n’est vendue ou cédée à des tiers à des fins commerciales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">5. Base légale</h2>
                        <p>
                            Le traitement repose sur :
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>L’intérêt légitime</li>
                            <li>L’exécution de mesures précontractuelles</li>
                            <li>Le consentement lorsque requis</li>
                        </ul>
                        <p className="mt-2">
                            Conformément à la Loi fédérale sur la protection des données (LPD) et, le cas échéant, au RGPD.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">6. Durée de conservation</h2>
                        <p>
                            Les données sont conservées pour une durée maximale de 12 mois en l’absence de relation contractuelle.
                            En cas de relation contractuelle, elles sont conservées conformément aux obligations légales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">7. Sécurité</h2>
                        <p>
                            Des mesures techniques et organisationnelles appropriées sont mises en place afin de protéger les données personnelles.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">8. Droits des personnes concernées</h2>
                        <p>
                            Vous disposez d’un droit d’accès, de rectification, de suppression ou d’opposition.
                            Toute demande peut être adressée à : <a href="mailto:contact@smartadministration.ch" className="text-green-700 hover:underline">contact@smartadministration.ch</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

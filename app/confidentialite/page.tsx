
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

                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
                    <p>
                        La protection de vos données personnelles est une priorité pour Smart Administration. Cette politique vise à vous informer de manière transparente sur la manière dont nous collectons, utilisons et protégeons vos informations.
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">1. Responsable du traitement</h2>
                        <p>
                            Le responsable du traitement de vos données est :<br />
                            <strong>Smart Administration - Damien Lopez</strong><br />
                            Avenue d'Aïre 73C, 1203 Genève, Suisse<br />
                            Email : <a href="mailto:contact@smartadministration.ch" className="text-green-700 hover:underline">contact@smartadministration.ch</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">2. Données collectées</h2>
                        <p>
                            Nous collectons principalement les données que vous nous transmettez volontairement via nos formulaires de contact ou de demande de consultation :
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Identité (Nom, Prénom)</li>
                            <li>Coordonnées (Email, Téléphone)</li>
                            <li>Informations professionnelles (Nom de la société, forme juridique, secteur d'activité)</li>
                            <li>Tout autre détail sur votre situation que vous choisissez de nous communiquer dans le champ "commentaire".</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">3. Finalités du traitement</h2>
                        <p>Vos données sont collectées pour les objectifs suivants :</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li><strong>Organisation de votre consultation :</strong> Planifier et préparer votre échange de 30 minutes.</li>
                            <li><strong>Mise en relation partenariale :</strong> Transmettre les éléments nécessaires à l'expert fiduciaire partenaire qui réalisera la consultation.</li>
                            <li><strong>Gestion de la relation client :</strong> Suivi de votre dossier, réponses à vos questions.</li>
                            <li><strong>Amélioration de nos services :</strong> Statistiques anonymisées pour comprendre les besoins de nos visiteurs.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">4. Base légale</h2>
                        <p>
                            Le traitement de vos données repose sur la Loi fédérale sur la protection des données (LPD) et, le cas échéant, le RGPD. Il est justifié par :
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>L'exécution de mesures précontractuelles (votre demande de consultation).</li>
                            <li>Notre intérêt légitime à répondre aux sollicitations.</li>
                            <li>Votre consentement (lorsque vous soumettez le formulaire).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">5. Partage des données</h2>
                        <p>
                            Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées uniquement :
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Avec <strong>l'expert fiduciaire partenaire</strong> en charge de votre consultation, dans la stricte limite nécessaire à la réalisation de sa mission.</li>
                            <li>Avec nos prestataires techniques (hébergement, outils d'emailing) qui sont tenus à des obligations de confidentialité et de sécurité.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">6. Durée de conservation</h2>
                        <p>
                            Nous conservons vos données pour la durée nécessaire aux finalités poursuivies.
                            Pour une simple demande de contact n'aboutissant pas à une relation contractuelle, les données sont supprimées ou anonymisées dans un délai maximum de <strong>12 mois</strong>.
                            En cas de relation contractuelle, les durées légales de conservation (notamment comptables) s'appliquent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">7. Sécurité</h2>
                        <p>
                            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre l'accès non autorisé, la perte ou l'altération (protocole HTTPS, accès restreints, prestataires fiables).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">8. Vos droits</h2>
                        <p>
                            Conformément à la législation en vigueur, vous disposez d'un droit d'accès, de rectification, de suppression de vos données, ainsi que d'un droit à la limitation du traitement.
                        </p>
                        <p className="mt-2">
                            Pour exercer ces droits, contactez-nous simplement à : <a href="mailto:contact@smartadministration.ch" className="text-green-700 hover:underline">contact@smartadministration.ch</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

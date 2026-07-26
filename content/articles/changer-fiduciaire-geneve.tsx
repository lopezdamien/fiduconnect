import Link from "next/link";
import { FileCheck, HelpCircle, ShieldCheck } from "lucide-react";

const ETAPES = [
    {
        titre: "Analyse de la situation actuelle",
        texte: "Évaluation de l'état de la comptabilité et identification des points bloquants (erreurs passées, retards). Les éventuels risques sont identifiés avant toute reprise.",
    },
    {
        titre: "Vérification des conditions contractuelles",
        texte: "Relecture du contrat actuel pour respecter les délais de résiliation et préparer le courrier de transfert.",
    },
    {
        titre: "Transmission des documents",
        texte: "Récupération du Grand Livre, des balances, des derniers décomptes TVA et des pièces justificatives. La reprise inclut la gestion de la relation avec l'administration fiscale cantonale genevoise.",
    },
    {
        titre: "Organisation de la reprise",
        texte: "Mise en place de la nouvelle structure, paramétrage des accès et définition du calendrier comptable.",
    },
];

const DOCUMENTS = [
    "Grand Livre & Balances",
    "Décomptes TVA passés",
    "Dossiers Salaires (LPP, AVS)",
    "Correspondances AFC",
];

const OBJECTIONS = [
    {
        icon: HelpCircle,
        titre: "Mon ancien fiduciaire va mal le prendre",
        texte: "Le changement est un droit. Les échanges sont gérés de manière professionnelle et neutre pour éviter tout conflit émotionnel.",
    },
    {
        icon: ShieldCheck,
        titre: "Le transfert va être compliqué",
        texte: "Le protocole est clair : vous signez un mandat de reprise, et l'ensemble de l'historique est récupéré pour vous.",
    },
    {
        icon: FileCheck,
        titre: "Je risque une rupture administrative",
        texte: "Faux. La continuité est assurée sur la TVA, les salaires et les déclarations, afin qu'aucune échéance ne soit manquée durant la transition.",
    },
];

export default function Content() {
    return (
        <>
            <h2>Pourquoi les PME genevoises envisagent-elles un changement de fiduciaire ?</h2>
            <p>
                Changer de fiduciaire n’est pas un échec, c’est une décision stratégique. Si
                votre entreprise évolue, votre accompagnement doit évoluer aussi. Un manque de
                réactivité ou de transparence peut coûter plus cher que vous ne le pensez.
            </p>
            <ul>
                <li>
                    <strong>Retards dans les bouclements annuels :</strong> des bilans qui
                    arrivent tardivement, empêchant toute planification financière.
                </li>
                <li>
                    <strong>Manque de visibilité sur la TVA :</strong> des décomptes peu clairs
                    et une incertitude permanente sur les montants à payer.
                </li>
                <li>
                    <strong>Absence d’explication pédagogique :</strong> un jargon technique
                    incompréhensible sans effort de vulgarisation.
                </li>
                <li>
                    <strong>Organisation comptable peu structurée :</strong> des documents
                    égarés ou une gestion encore trop « papier ».
                </li>
            </ul>
            <p>
                Pour répondre aux obligations fiscales, une PME doit pouvoir compter sur une
                reprise comptable fluide et une transition maîtrisée.
            </p>

            <h2>Est-il risqué de changer de fiduciaire en cours d’année ?</h2>
            <p>
                C’est une crainte fréquente : « si je change maintenant, je vais perdre mes
                données ». En réalité, il est tout à fait possible de résilier un mandat
                fiduciaire en cours d’exercice. L’essentiel est de vérifier les conditions
                contractuelles — le préavis est généralement de 3 mois — et d’assurer la
                coordination pour la TVA (e-TVA).
            </p>
            <p>
                Une transition en cours d’année permet souvent de rectifier le tir avant la
                clôture annuelle, évitant ainsi de traîner des erreurs sur un bilan complet.
            </p>

            <h2>Les 4 étapes d’un transfert sécurisé</h2>
            <p>
                Un processus structuré évite les tensions et les pertes d’information.
            </p>

            <ol className="!list-none !pl-0 space-y-6">
                {ETAPES.map((etape, index) => (
                    <li key={etape.titre} className="flex gap-4">
                        <span className="flex-none flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">
                            {index + 1}
                        </span>
                        <span className="block">
                            <strong className="block text-lg mb-1">{etape.titre}</strong>
                            {etape.texte}
                        </span>
                    </li>
                ))}
            </ol>

            <div className="mt-12 p-8 bg-green-50 rounded-2xl border border-green-100">
                <h3 className="!mt-0 text-lg font-bold text-green-900 text-center">
                    Ce qui est récupéré pour vous
                </h3>
                <p className="text-green-800 text-center text-sm">
                    Vous n’avez rien à gérer : la coordination se fait directement avec votre
                    ancien prestataire.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {DOCUMENTS.map((doc) => (
                        <div
                            key={doc}
                            className="bg-white p-3 rounded-lg border border-green-200 flex items-center shadow-sm"
                        >
                            <FileCheck className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                            <span className="text-slate-700 text-sm">{doc}</span>
                        </div>
                    ))}
                </div>
            </div>

            <h2>La TVA lors d’un changement de fiduciaire</h2>
            <p>
                La TVA est souvent le point critique. Pour rappel, dès 100’000 CHF de chiffre
                d’affaires, l’assujettissement est obligatoire.
            </p>
            <p>
                Lors du changement, il est crucial de vérifier si la méthode utilisée — méthode
                effective ou taux de la dette fiscale nette — est toujours la plus avantageuse
                pour votre PME. Une erreur méthodologique ou un retard déclaratif lors de la
                transition peut entraîner des risques importants. Nous détaillons ces deux
                méthodes dans notre{" "}
                <Link href="/services/tva">page dédiée à l’expertise TVA</Link>.
            </p>
            <p>
                Selon les cas, les accès (e-TVA notamment) et les procurations peuvent être mis
                à jour directement par le nouvel expert fiduciaire pour assurer cette
                continuité.
            </p>

            <h2>Vous hésitez encore ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {OBJECTIONS.map((objection) => (
                    <div
                        key={objection.titre}
                        className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <objection.icon className="h-6 w-6 text-green-600 shrink-0" />
                            <h3 className="!mt-0 font-bold text-slate-900 text-sm uppercase tracking-wide">
                                {objection.titre}
                            </h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {objection.texte}
                        </p>
                    </div>
                ))}
            </div>

            <p>
                Avec une approche claire et structurée, la transition peut être organisée sans
                interruption, sans risque fiscal et sans complexité inutile.
            </p>
        </>
    );
}

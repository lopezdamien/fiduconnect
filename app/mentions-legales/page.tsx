
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales | Smart Administration",
    description: "Mentions légales du site Smart Administration - Damien Lopez.",
};

export default function MentionsLegales() {
    return (
        <div className="bg-slate-50 min-h-screen py-24 px-6 lg:px-8">
            <div className="mx-auto max-w-3xl bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 pb-4 border-b border-slate-100">
                    Mentions Légales
                </h1>

                <div className="space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">1. Éditeur du site</h2>
                        <p>
                            Le présent site est édité par :<br />
                            <strong>Smart Administration - Damien Lopez</strong><br />
                            <strong>Adresse :</strong> Avenue d'Aïre 73C, 1203 Genève, Suisse<br />
                            <strong>Email de contact :</strong> <a href="mailto:contact@smartadministration.ch" className="text-green-700 hover:underline">contact@smartadministration.ch</a><br />
                            <strong>Responsable :</strong> Damien LOPEZ
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">2. Objet du site</h2>
                        <p>
                            Le site a pour objet de présenter un service d’information et d’organisation de consultations administratives.
                            Les consultations proposées (notamment la consultation initiale de 30 minutes) sont réalisées par un <strong>expert fiduciaire partenaire indépendant</strong>.
                        </p>
                        <p className="mt-2">
                            Smart Administration agit en tant que facilitateur et organisateur. Nous ne sommes pas un cabinet fiduciaire et ne réalisons pas d'actes réservés sans la supervision de nos partenaires experts qualifiés.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">3. Clause de responsabilité</h2>
                        <p>
                            Les contenus publiés sur ce site sont fournis à titre purement informatif. Bien que nous nous efforcions de maintenir les informations à jour et exactes, aucune garantie d’exhaustivité ou de précision absolue ne peut être donnée, notamment au regard des évolutions législatives fréquentes.
                        </p>
                        <p className="mt-2">
                            Les décisions de gestion, fiscales ou comptables doivent être prises sur la base d’une analyse complète de votre situation par un professionnel qualifié. Smart Administration décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations présentes sur ce site sans consultation préalable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">4. Propriété intellectuelle</h2>
                        <p>
                            L’ensemble des contenus de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Smart Administration - Damien Lopez, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs cités. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Smart Administration.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">5. Droit applicable et for juridique</h2>
                        <p>
                            Le présent site et ses conditions d'utilisation sont régis par le <strong>droit suisse</strong>. En cas de litige, et à défaut d'accord amiable, le for juridique exclusif est situé à <strong>Genève</strong>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

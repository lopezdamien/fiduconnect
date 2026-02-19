
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

                <div className="space-y-8 text-slate-800 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">1. Éditeur du site</h2>
                        <p>
                            Le présent site est édité par :<br />
                            <strong>Smart Administration - Damien Lopez</strong><br />
                            <strong>Adresse :</strong> Avenue d'Aïre 73C, 1203 Genève, Suisse<br />
                            <strong>Email :</strong> <a href="mailto:contact@smartadministration.ch" className="text-green-700 hover:underline">contact@smartadministration.ch</a><br />
                            <strong>Responsable :</strong> Damien LOPEZ
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">2. Objet du site</h2>
                        <p>
                            Le site présente un service d’information et d’organisation de consultations en matière comptable et fiduciaire.
                            Les consultations de 30 minutes sont réalisées par un <strong>expert fiduciaire partenaire indépendant</strong>.
                        </p>
                        <p className="mt-2 text-slate-900 font-medium">
                            Smart Administration n’agit pas en qualité de cabinet fiduciaire.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">3. Hébergement</h2>
                        <p>
                            Le site est hébergé par :<br />
                            <strong>Vercel Inc.</strong><br />
                            340 S Lemon Ave #4133<br />
                            Walnut, CA 91789<br />
                            États-Unis<br />
                            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">https://vercel.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">4. Responsabilité</h2>
                        <p>
                            Les contenus publiés sur ce site sont fournis à titre informatif.
                            Ils ne constituent pas un conseil juridique ou fiscal personnalisé.
                            La responsabilité de Smart Administration ne saurait être engagée en cas d’erreur ou d’omission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">5. Propriété intellectuelle</h2>
                        <p>
                            Les contenus, textes et éléments graphiques sont protégés par le droit applicable.
                            Toute reproduction sans autorisation est interdite.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">6. Droit applicable</h2>
                        <p>
                            Le droit suisse est applicable.<br />
                            For juridique au siège de la société.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

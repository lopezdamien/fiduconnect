
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique Cookies | Smart Administration",
    description: "Information sur l'utilisation des cookies sur le site Smart Administration.",
};

export default function Cookies() {
    return (
        <div className="bg-slate-50 min-h-screen py-24 px-6 lg:px-8">
            <div className="mx-auto max-w-3xl bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 pb-4 border-b border-slate-100">
                    Politique relative aux Cookies
                </h1>

                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
                        <p>
                            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, mobile) lors de la visite d'un site web. Il permet au site de mémoriser certaines informations sur votre navigation ou vos préférences pour améliorer votre expérience utilisateur.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">2. Cookies utilisés sur ce site</h2>
                        <p>Nous utilisons différents types de cookies :</p>

                        <div className="mt-4 space-y-4">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <h3 className="font-semibold text-slate-900">Cookies techniques (nécessaires)</h3>
                                <p className="text-sm mt-1">
                                    Ces cookies sont indispensables au bon fonctionnement du site (sécurité, affichage). Ils ne peuvent pas être désactivés.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <h3 className="font-semibold text-slate-900">Cookies de mesure d'audience (Analytiques)</h3>
                                <p className="text-sm mt-1">
                                    Ils nous aident à comprendre comment les visiteurs interagissent avec le site (pages les plus vues, temps passé), de manière anonyme. Cela nous permet d'améliorer notre contenu et notre ergonomie.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">3. Gestion de votre consentement</h2>
                        <p>
                            Lors de votre première visite, un bandeau d'information vous prévient de l'utilisation de cookies.
                        </p>
                        <p className="mt-2">
                            Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies ou être alerté lors de leur installation. Notez que le refus des cookies techniques peut altérer certaines fonctionnalités du site.
                        </p>
                        <p className="mt-4">
                            Pour plus d'informations sur la gestion des cookies dans votre navigateur (Chrome, Firefox, Safari...), nous vous invitons à consulter l'aide en ligne de votre logiciel.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">4. Contact</h2>
                        <p>
                            Pour toute question relative à notre politique de cookies, vous pouvez nous écrire à : <a href="mailto:contact@smartadministration.ch" className="text-green-700 hover:underline">contact@smartadministration.ch</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

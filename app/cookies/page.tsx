
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Politique relative aux cookies | Smart Administration",
    description: "Information sur l'utilisation des cookies sur le site Smart Administration.",
};

export default function Cookies() {
    return (
        <div className="bg-slate-50 min-h-screen py-24 px-6 lg:px-8">
            <div className="mx-auto max-w-3xl bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 pb-4 border-b border-slate-100">
                    Politique relative aux cookies
                </h1>

                <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">1. Définition des cookies</h2>
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
                                <h3 className="font-semibold text-slate-900">Cookies de mesure d'audience</h3>
                                <p className="text-sm mt-1">
                                    Nous pouvons utiliser des outils comme Google Analytics pour comprendre comment les visiteurs interagissent avec le site (pages les plus vues, temps passé), de manière anonyme. Cela nous permet d'améliorer notre contenu et notre ergonomie.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">3. Gestion de vos préférences</h2>
                        <p>
                            Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies ou être alerté lors de leur installation.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li><strong>Chrome :</strong> Paramètres {'>'} Confidentialité et sécurité {'>'} Cookies.</li>
                            <li><strong>Firefox :</strong> Options {'>'} Vie privée et sécurité {'>'} Cookies.</li>
                            <li><strong>Safari :</strong> Préférences {'>'} Confidentialité.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">4. Politique de confidentialité</h2>
                        <p>
                            Pour en savoir plus sur la gestion de vos données personnelles, veuillez consulter notre{" "}
                            <Link href="/confidentialite" className="text-green-700 hover:underline font-medium">
                                Politique de confidentialité
                            </Link>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

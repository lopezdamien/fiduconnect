import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Check, AlertTriangle, ArrowRight, HelpCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Expertise TVA à Genève — décompte et optimisation PME",
    description: "Méthode effective ou taux de dette fiscale nette ? Ne perdez plus d'argent avec votre TVA. Analyse gratuite pour PME genevoises. Évitez les redressements.",
    path: "/services/tva",
});

const FAQ = [
    {
        question: "Quand suis-je obligé de m’assujettir à la TVA ?",
        answer: "Dès que votre chiffre d'affaires mondial dépasse 100'000 CHF (provenant de prestations imposables). L'assujettissement est également possible de manière volontaire en dessous de ce seuil pour récupérer l'impôt préalable.",
    },
    {
        question: "Quelle différence entre méthode effective et TDFN ?",
        answer: "La méthode effective permet de déduire la TVA réelle payée sur vos achats (impôt préalable). La méthode Taux de Dette Fiscale Nette (TDFN) applique un taux forfaitaire plus bas sur votre CA, mais ne permet aucune déduction. Le choix dépend de votre structure de coûts.",
    },
    {
        question: "Puis-je corriger une erreur passée ?",
        answer: "Oui, il est possible de déposer des décomptes rectificatifs (concordance annuelle) pour corriger des erreurs sur les 5 dernières années. Une démarche spontanée permet souvent d'éviter des pénalités plus lourdes.",
    },
];

export default function ServiceTVA() {
    return (
        <>
            <JsonLd
                schema={[
                    serviceSchema({
                        name: "Expertise TVA pour PME",
                        description:
                            "Analyse de votre méthode d'assujettissement TVA, vérification des décomptes et correction des erreurs passées.",
                        path: "/services/tva",
                        serviceType: "Conseil TVA",
                    }),
                    faqSchema(FAQ),
                    breadcrumbSchema([
                        { name: "Services", path: "/services" },
                        { name: "TVA", path: "/services/tva" },
                    ]),
                ]}
            />
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 opacity-90"></div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center pt-8">
                    <span className="inline-flex items-center rounded-full bg-orange-500/10 px-3 py-1 text-sm font-semibold text-orange-400 ring-1 ring-inset ring-orange-500/20 mb-6">
                        FISCALITÉ & TVA
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto leading-tight">
                        TVA & Assujettissement : <span className="text-green-500">sécurisez votre conformité</span> et évitez les reprises fiscales
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-slate-300 max-w-3xl mx-auto">
                        Nous analysons votre méthode, vos seuils d’assujettissement et vos décomptes afin d’éviter toute régularisation coûteuse auprès de l’AFC.<br />
                        <span className="text-orange-400 font-medium block mt-2">Une erreur de méthode peut coûter plusieurs milliers de francs en reprise fiscale.</span>
                    </p>

                    <ul className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-slate-200 text-sm font-medium">
                        <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            Audit complet de vos décomptes TVA
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            Vérification méthode Effective / TDFN
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            Identification des risques avant contrôle
                        </li>
                    </ul>

                    <div className="mt-12 flex flex-col items-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 text-white px-10 py-5 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                👉 Faire un audit TVA gratuit
                            </Button>
                        </Link>
                        <p className="text-sm text-slate-500 font-medium">
                            Analyse confidentielle – Réponse sous 24h
                        </p>
                    </div>
                </div>
            </section>

            {/* PIÈGES FRÉQUENTS */}
            <Section className="bg-slate-50 py-24">
                <div className="relative">
                    {/* Light background for the section is already applied via Section className bg-slate-50 */}
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Pourquoi les entreprises se font redresser ?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 text-red-600">
                                <AlertTriangle className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Méthode inadaptée</h3>
                            <p className="text-slate-600 leading-relaxed">Choisir la mauvaise méthode (Effective vs TDFN) peut complexifier inutilement votre gestion et augmenter votre charge fiscale.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 text-red-600">
                                <AlertTriangle className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Impôt préalable oublié</h3>
                            <p className="text-slate-600 leading-relaxed">Des erreurs dans la déclaration des frais ou l'absence de justificatifs conformes peuvent fausser votre décompte final.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 text-red-600">
                                <AlertTriangle className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Prestations étrangères</h3>
                            <p className="text-slate-600 leading-relaxed">L&apos;impôt sur les acquisitions (services importés, logiciels, pub) est souvent omis, entraînant des reprises fiscales immédiates.</p>
                        </div>
                    </div>

                    <div className="mx-auto max-w-3xl mt-16 text-center">
                        <div className="bg-red-50 rounded-xl p-6 border border-red-100 inline-block">
                            <p className="font-bold text-red-800 mb-4 text-lg">⚠️ Une erreur TVA peut entraîner :</p>
                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-red-700 font-medium">
                                <span className="flex items-center gap-2">Rectification sur 5 ans</span>
                                <span className="flex items-center gap-2">Pénalités et amendes</span>
                                <span className="flex items-center gap-2">Intérêts moratoires</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* MISE EN CONFORMITÉ */}
            <Section className="bg-white py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto px-4">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight sm:text-4xl">Notre méthode en <br /><span className="text-green-600">3 étapes structurées</span></h2>
                        <p className="text-lg text-slate-600 mb-10">Nous analysons votre dossier TVA et coordonnons sa mise en conformité avec l&apos;expert fiduciaire partenaire, pour votre sérénité fiscale.</p>

                        <div className="space-y-10">
                            <div className="flex gap-6">
                                <div className="flex-none w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-md">1</div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Audit et vérification détaillée</h3>
                                    <p className="text-slate-600 leading-relaxed">Analyse de vos derniers décomptes et de votre chiffre d'affaires mondial.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-none w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-md">2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Contrôle cohérence méthode</h3>
                                    <p className="text-slate-600 leading-relaxed">Comparaison chiffrée entre méthode Effective et TDFN pour optimiser votre charge.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-none w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-md">3</div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Régularisation et sécurisation</h3>
                                    <p className="text-slate-600 leading-relaxed">Correction des erreurs passées et mise en place de processus pour le futur.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Link href="/contact">
                                <Button size="lg" className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 shadow-lg hover:translate-y-px transition-all">
                                    Faire un point gratuit de 30 minutes
                                </Button>
                            </Link>
                            <p className="text-sm text-slate-500 mt-3 font-medium">
                                Diagnostic sans engagement – réponse sous 24h
                            </p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-xl lg:sticky lg:top-24">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Pourquoi cadrer votre TVA avant qu’il ne soit trop tard ?</h3>
                        <p className="text-slate-600 mb-5 leading-relaxed">
                            Le seuil de <strong>100’000 CHF</strong> est souvent mal interprété. De nombreuses entreprises pensent ne pas être assujetties alors qu'elles le sont, ou inversement.
                        </p>
                        <p className="text-slate-600 mb-5 leading-relaxed">
                            Un mauvais paramétrage dans votre logiciel comptable ou une méthode inadaptée peut générer des <strong>erreurs invisibles</strong> pendant plusieurs années, qui ne seront découvertes que lors d'un contrôle AFC.
                        </p>
                        <p className="text-slate-700 font-bold bg-green-50 p-4 rounded-lg border border-green-100 text-center">
                            Une vérification structurée permet d’anticiper plutôt que de subir.
                        </p>
                    </div>
                </div>
            </Section>

            {/* FAQ */}
            <Section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Questions Fréquentes TVA</h2>
                    <div className="space-y-4">
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 [&_summary::-webkit-details-marker]:hidden hover:border-slate-300 transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-lg select-none">
                                <span>Quand suis-je obligé de m’assujettir à la TVA ?</span>
                                <span className="shrink-0 rounded-full bg-slate-50 p-2 text-slate-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-slate-700">
                                Dès que votre chiffre d'affaires mondial dépasse 100'000 CHF (provenant de prestations imposables). L'assujettissement est également possible de manière volontaire en dessous de ce seuil pour récupérer l'impôt préalable.
                            </p>
                        </details>

                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 [&_summary::-webkit-details-marker]:hidden hover:border-slate-300 transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-lg select-none">
                                <span>Quelle différence entre méthode effective et TDFN ?</span>
                                <span className="shrink-0 rounded-full bg-slate-50 p-2 text-slate-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-slate-700">
                                La méthode effective permet de déduire la TVA réelle payée sur vos achats (impôt préalable). La méthode Taux de Dette Fiscale Nette (TDFN) applique un taux forfaitaire plus bas sur votre CA, mais ne permet aucune déduction. Le choix dépend de votre structure de coûts.
                            </p>
                        </details>

                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 [&_summary::-webkit-details-marker]:hidden hover:border-slate-300 transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-lg select-none">
                                <span>Puis-je corriger une erreur passée ?</span>
                                <span className="shrink-0 rounded-full bg-slate-50 p-2 text-slate-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-slate-700">
                                Oui, il est possible de déposer des décomptes rectificatifs (concordance annuelle) pour corriger des erreurs sur les 5 dernières années. Une démarche spontanée permet souvent d'éviter des pénalités plus lourdes.
                            </p>
                        </details>
                    </div>
                </div>
            </Section>

            {/* NEW FINAL SECTION */}
            <section className="bg-slate-900 py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6 sm:text-4xl">
                        Évitez les mauvaises surprises fiscales
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        La TVA est l’un des domaines les plus contrôlés par l’AFC. Une vérification aujourd’hui peut vous éviter une reprise demain.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 text-white px-10 py-5 text-lg shadow-xl shadow-green-900/40 hover:-translate-y-1 transition-all">
                                👉 Demander mon audit TVA
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

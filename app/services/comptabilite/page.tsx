import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { CheckCircle2, Calculator, LayoutDashboard, ScrollText, PieChart } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Comptabilité et déclarations fiscales PME à Genève",
    description: "Tenue de comptes et déclarations fiscales pour PME genevoises. L'exactitude de vos chiffres garantie face à l'administration. Diagnostic gratuit.",
    path: "/services/comptabilite",
});

export default function ServiceComptabilite() {
    return (
        <>
            <JsonLd
                schema={[
                    serviceSchema({
                        name: "Tenue de comptabilité et déclarations fiscales",
                        description:
                            "Tenue de comptes, bouclement annuel et déclarations fiscales pour PME et indépendants.",
                        path: "/services/comptabilite",
                        serviceType: "Comptabilité",
                    }),
                    breadcrumbSchema([
                        { name: "Services", path: "/services" },
                        { name: "Comptabilité", path: "/services/comptabilite" },
                    ]),
                ]}
            />
            <section className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-600 ring-1 ring-inset ring-purple-600/20 mb-6">
                        GESTION COMPTABLE & FISCALE
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
                        Comptabilité & Déclarations
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-10">
                        Une comptabilité rigoureuse est la base de votre sécurité fiscale. Nous auditons la qualité de votre tenue de comptes et assurons la conformité de vos déclarations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 text-white px-10 py-5 text-lg shadow-lg hover:-translate-y-1 transition-all">
                                👉 Auditer ma comptabilité gratuitement
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Section className="bg-slate-50 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-y-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 sm:text-4xl">Ce que nous vérifions</h2>
                        <ul className="space-y-8">
                            <li className="flex items-start gap-6 border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-700 font-bold text-xl shadow-sm">1</div>
                                <div>
                                    <strong className="block text-slate-900 text-xl mb-2">La justesse des écritures</strong>
                                    <span className="text-slate-600 text-lg leading-relaxed">Les charges sont-elles déductibles ? Les comptes transitoires sont-ils justifiés ? Nous épluchons chaque ligne.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-6 border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-700 font-bold text-xl shadow-sm">2</div>
                                <div>
                                    <strong className="block text-slate-900 text-xl mb-2">L&apos;exhaustivité des déclarations</strong>
                                    <span className="text-slate-600 text-lg leading-relaxed">TVA, Impôts, Dividendes : rien ne doit manquer à l&apos;appel pour éviter les amendes.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-6 border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-700 font-bold text-xl shadow-sm">3</div>
                                <div>
                                    <strong className="block text-slate-900 text-xl mb-2">Le dossier de bouclement</strong>
                                    <span className="text-slate-600 text-lg leading-relaxed">Est-il complet pour résister à un contrôle fiscal ? Nous préparons votre défense en amont.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:sticky lg:top-24 h-fit">
                        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden relative shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <div className="p-10 lg:p-12 relative">
                                <h3 className="text-2xl font-bold mb-6">Notre garantie</h3>
                                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                                    Nous nous assurons que votre comptabilité reflète fidèlement la réalité et respecte toutes les normes suisses (CO).
                                </p>
                                <div className="space-y-4 mb-10">
                                    <div className="flex gap-4 items-center">
                                        <CheckCircle2 className="text-green-400 h-6 w-6 shrink-0" />
                                        <span className="text-lg">Transparence totale sur les honoraires</span>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <CheckCircle2 className="text-green-400 h-6 w-6 shrink-0" />
                                        <span className="text-lg">Accès à notre réseau de partenaires validés</span>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <CheckCircle2 className="text-green-400 h-6 w-6 shrink-0" />
                                        <span className="text-lg">Interlocuteur dédié et réactif</span>
                                    </div>
                                </div>

                                <p className="text-center text-green-400 font-bold mb-4 uppercase tracking-wider text-sm">
                                    Zéro surprise. Zéro opacité.
                                </p>

                                <Link href="/diagnostic" className="block">
                                    <Button className="w-full bg-green-600 hover:bg-green-500 text-white border-none py-4 text-lg font-bold shadow-lg hover:shadow-green-900/40 transition-all h-auto">
                                        Auditer ma comptabilité
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* NEW FINAL SECTION */}
            <section className="bg-slate-900 py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6 sm:text-4xl">
                        Votre comptabilité doit être un outil, pas une contrainte
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Nous transformons votre comptabilité en outil stratégique pour piloter votre croissance.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="bg-green-700 hover:bg-green-600 text-white px-10 py-5 text-lg shadow-xl shadow-green-900/40 hover:-translate-y-1 transition-all">
                                👉 Planifier un appel de 30 minutes
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { ARTICLES, articlePath } from "@/lib/articles";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Ressources fiduciaires — analyses et guides pour PME genevoises",
    description: "Analyses et guides pratiques pour dirigeants de PME à Genève : TVA, fiscalité, comptabilité, salaires et changement de fiduciaire.",
    path: "/ressources",
});

const DATE_FORMATTER = new Intl.DateTimeFormat("fr-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
});

const THEMES = [
    "TVA & Fiscalité",
    "Charges Sociales",
    "Gestion Comptable",
    "Création d'Entreprise",
];

export default function Resources() {
    return (
        <>
            <JsonLd schema={breadcrumbSchema([{ name: "Ressources", path: "/ressources" }])} />

            <section className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                    Ressources & analyses fiduciaires
                </h1>
                <p className="mt-6 text-lg tracking-wide text-slate-300 max-w-2xl mx-auto font-medium opacity-90">
                    Guides pratiques, analyses fiscales et décryptages comptables pour dirigeants de PME à Genève.
                </p>
            </section>

            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {ARTICLES.map((article) => (
                        <article
                            key={article.slug}
                            className="flex flex-col items-start bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                                <time dateTime={article.datePublished} className="text-slate-500">
                                    {DATE_FORMATTER.format(new Date(article.datePublished))}
                                </time>
                                <span className="rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600">
                                    {article.category}
                                </span>
                                <span className="flex items-center text-slate-500">
                                    <Clock className="h-3.5 w-3.5 mr-1.5" />
                                    {article.readingTime}
                                </span>
                            </div>
                            <div className="group relative">
                                <h2 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600">
                                    <Link href={articlePath(article.slug)}>
                                        <span className="absolute inset-0" />
                                        {article.title}
                                    </Link>
                                </h2>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
                                    {article.excerpt}
                                </p>
                            </div>
                            <span className="mt-6 flex items-center text-sm font-semibold text-green-700 group-hover:text-green-800">
                                Lire l&apos;article <ArrowRight className="ml-1 h-4 w-4" />
                            </span>
                        </article>
                    ))}
                </div>
            </Section>

            <Section className="bg-slate-50">
                <div className="text-center">
                    <BookOpen className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Vous cherchez un sujet précis ?</h2>
                    <p className="text-slate-600 mb-6">Nos dossiers thématiques.</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {THEMES.map((theme) => (
                            <span
                                key={theme}
                                className="px-4 py-2 bg-white rounded-full border border-slate-200 text-sm text-slate-700"
                            >
                                {theme}
                            </span>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}

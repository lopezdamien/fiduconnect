import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { Article, articlePath } from "@/lib/articles";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";

const DATE_FORMATTER = new Intl.DateTimeFormat("fr-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
});

interface ArticleLayoutProps {
    article: Article;
    children: ReactNode;
}

/**
 * Enveloppe commune à tous les articles : balisage Article + fil d'Ariane,
 * en-tête, corps de texte et appel à l'action final.
 * Un nouvel article n'a donc à fournir que son contenu.
 */
export function ArticleLayout({ article, children }: ArticleLayoutProps) {
    const path = articlePath(article.slug);

    return (
        <>
            <JsonLd
                schema={[
                    articleSchema({
                        title: article.title,
                        description: article.description,
                        path,
                        datePublished: article.datePublished,
                        dateModified: article.dateModified,
                    }),
                    breadcrumbSchema([
                        { name: "Ressources", path: "/ressources" },
                        { name: article.title, path },
                    ]),
                ]}
            />

            <article>
                <header className="bg-slate-50 pt-32 pb-16">
                    <div className="mx-auto max-w-3xl px-6 lg:px-8">
                        <Link
                            href="/ressources"
                            className="inline-flex items-center text-sm text-slate-500 hover:text-green-700 mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Retour aux ressources
                        </Link>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs mb-5">
                            <span className="rounded-full bg-white border border-slate-200 px-3 py-1.5 font-medium text-slate-600">
                                {article.category}
                            </span>
                            <time dateTime={article.datePublished} className="text-slate-500">
                                {DATE_FORMATTER.format(new Date(article.datePublished))}
                            </time>
                            <span className="flex items-center text-slate-500">
                                <Clock className="h-3.5 w-3.5 mr-1.5" />
                                {article.readingTime} de lecture
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-8 leading-tight">
                            {article.title}
                        </h1>

                        <p className="text-xl leading-8 text-slate-700">{article.excerpt}</p>
                    </div>
                </header>

                <div className="bg-white py-16">
                    <div className="mx-auto max-w-3xl px-6 lg:px-8 article-body">
                        {children}
                    </div>
                </div>
            </article>

            <section className="bg-slate-900 py-20">
                <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                        Votre situation mérite un regard extérieur
                    </h2>
                    <p className="text-lg text-slate-300 mb-10">
                        30 minutes avec un expert fiduciaire partenaire pour clarifier vos
                        obligations et identifier vos points de fragilité. Sans engagement.
                    </p>
                    <Link href="/diagnostic">
                        <Button size="lg" className="bg-green-700 hover:bg-green-800 px-8 py-6 text-lg">
                            Demander mon diagnostic gratuit
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}

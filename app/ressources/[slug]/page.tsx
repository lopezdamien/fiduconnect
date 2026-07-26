import { ComponentType } from "react";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { ARTICLES, articlePath, getArticle } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";
import ChangerFiduciaireGeneve from "@/content/articles/changer-fiduciaire-geneve";

/**
 * Corps de chaque article, indexé par slug.
 * Publier un article = ajouter son entrée dans lib/articles.ts,
 * créer son composant dans content/articles/ et le référencer ici.
 */
const CONTENT: Record<string, ComponentType> = {
    "changer-fiduciaire-geneve": ChangerFiduciaireGeneve,
};

export function generateStaticParams() {
    return ARTICLES.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = getArticle(slug);

    if (!article) return {};

    return pageMetadata({
        title: article.title,
        description: article.description,
        path: articlePath(article.slug),
        type: "article",
    });
}

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = getArticle(slug);
    const Body = CONTENT[slug];

    if (!article || !Body) notFound();

    return (
        <ArticleLayout article={article}>
            <Body />
        </ArticleLayout>
    );
}

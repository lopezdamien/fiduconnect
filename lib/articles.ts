export interface Article {
    /** Segment d'URL sous /ressources. */
    slug: string;
    /** Titre H1 de l'article. */
    title: string;
    /** Meta description et texte du partage social. */
    description: string;
    /** Accroche affichée sur la page Ressources. */
    excerpt: string;
    category: string;
    /** Format ISO (YYYY-MM-DD), utilisé par le JSON-LD et le sitemap. */
    datePublished: string;
    dateModified?: string;
    readingTime: string;
}

/**
 * Registre des articles publiés, du plus récent au plus ancien.
 * Alimente la page /ressources, les routes /ressources/[slug] et le sitemap :
 * ajouter une entrée ici suffit à publier partout.
 */
export const ARTICLES: Article[] = [
    {
        slug: 'changer-fiduciaire-geneve',
        title:
            "Changer de fiduciaire à Genève : comment organiser la transition en toute sécurité ?",
        description:
            "Comment changer de fiduciaire à Genève ? Étapes, résiliation du mandat, reprise comptable et continuité TVA pour les PME.",
        excerpt:
            "Changer de fiduciaire est une décision stratégique. Découvrez comment organiser une transition fluide, sans risque fiscal et en toute transparence pour votre PME.",
        category: 'Gestion Fiduciaire',
        datePublished: '2026-02-15',
        readingTime: '6 min',
    },
];

export function getArticle(slug: string): Article | undefined {
    return ARTICLES.find((article) => article.slug === slug);
}

export function articlePath(slug: string): string {
    return `/ressources/${slug}`;
}

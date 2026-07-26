import { MetadataRoute } from 'next'
import { ARTICLES, articlePath } from '@/lib/articles'
import { absoluteUrl } from '@/lib/seo'

type Entry = {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
};

/**
 * Pages indexables. Sont volontairement absentes :
 * /lp/* (landing pages SEA en noindex) et /merci (page de confirmation).
 */
const PAGES: Entry[] = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/diagnostic', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services/tva', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services/comptabilite', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services/charges-salaires', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services/pilotage', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services/changer-fiduciaire', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/tva-suisse', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/ressources', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/contact', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/a-propos', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/confidentialite', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/cookies', changeFrequency: 'yearly', priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const pages: MetadataRoute.Sitemap = PAGES.map((page) => ({
        url: absoluteUrl(page.path),
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));

    const articles: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
        url: absoluteUrl(articlePath(article.slug)),
        lastModified: new Date(article.dateModified ?? article.datePublished),
        changeFrequency: 'yearly',
        priority: 0.7,
    }));

    return [...pages, ...articles];
}

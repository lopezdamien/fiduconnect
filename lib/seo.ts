import type { Metadata } from 'next';

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://www.fiduconnect.ch";

export const SITE_URL = rawUrl.replace(/&$/, '').replace(/\/$/, '');

export const SITE_NAME = "FiduConnect";

/** Zone de chalandise ciblée : Genève. */
export const AREA_SERVED = "Genève, Suisse";

export function absoluteUrl(path: string): string {
    if (!path || path === '/') return SITE_URL;
    return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Métadonnées d'une page : titre (sans suffixe de marque, ajouté par le
 * template du layout), canonical absolu et OpenGraph/Twitter cohérents.
 */
export function pageMetadata(params: {
    title: string;
    description: string;
    path: string;
    type?: 'website' | 'article';
    noIndex?: boolean;
}): Metadata {
    const url = absoluteUrl(params.path);

    return {
        title: params.title,
        description: params.description,
        alternates: {
            canonical: params.path,
        },
        openGraph: {
            type: params.type ?? 'website',
            locale: 'fr_CH',
            siteName: SITE_NAME,
            url,
            title: params.title,
            description: params.description,
        },
        twitter: {
            card: 'summary_large_image',
            title: params.title,
            description: params.description,
        },
        ...(params.noIndex
            ? { robots: { index: false, follow: true } }
            : {}),
    };
}

interface FaqEntry {
    question: string;
    answer: string;
}

interface Crumb {
    name: string;
    path: string;
}

/**
 * Identité de l'organisation, référencée par `@id` depuis les autres schémas
 * pour éviter de redéclarer l'entreprise sur chaque page.
 */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function organizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': ORGANIZATION_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description:
            "FiduConnect met en relation les PME et indépendants genevois avec un expert fiduciaire partenaire, après un diagnostic comptable et fiscal gratuit.",
        areaServed: {
            '@type': 'AdministrativeArea',
            name: AREA_SERVED,
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Genève',
            addressRegion: 'GE',
            addressCountry: 'CH',
        },
        knowsLanguage: ['fr-CH'],
        priceRange: 'Diagnostic gratuit',
    };
}

export function serviceSchema(params: {
    name: string;
    description: string;
    path: string;
    serviceType?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: params.name,
        description: params.description,
        url: absoluteUrl(params.path),
        serviceType: params.serviceType ?? params.name,
        provider: { '@id': ORGANIZATION_ID },
        areaServed: {
            '@type': 'AdministrativeArea',
            name: AREA_SERVED,
        },
    };
}

export function faqSchema(entries: FaqEntry[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: entries.map((entry) => ({
            '@type': 'Question',
            name: entry.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: entry.answer,
            },
        })),
    };
}

/** Le premier maillon "Accueil" est ajouté automatiquement. */
export function breadcrumbSchema(crumbs: Crumb[]) {
    const items = [{ name: 'Accueil', path: '/' }, ...crumbs];

    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: absoluteUrl(crumb.path),
        })),
    };
}

export function articleSchema(params: {
    title: string;
    description: string;
    path: string;
    datePublished: string;
    dateModified?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: params.title,
        description: params.description,
        url: absoluteUrl(params.path),
        datePublished: params.datePublished,
        dateModified: params.dateModified ?? params.datePublished,
        inLanguage: 'fr-CH',
        author: { '@id': ORGANIZATION_ID },
        publisher: { '@id': ORGANIZATION_ID },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': absoluteUrl(params.path),
        },
    };
}

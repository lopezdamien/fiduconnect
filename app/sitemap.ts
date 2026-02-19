import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://www.fiduconnect.ch";
    const SITE_URL = rawUrl.replace(/&$/, '').replace(/\/$/, '');

    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${SITE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/ressources`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/diagnostic`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/a-propos`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ]
}

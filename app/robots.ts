import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://www.fiduconnect.ch";

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
    }
}

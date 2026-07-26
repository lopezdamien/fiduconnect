import { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
    return {
        // Les pages hors index (/lp/*, /merci) portent une balise noindex.
        // Elles restent crawlables : bloquer le crawl empêcherait Google de la lire.
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/',
        },
        sitemap: absoluteUrl('/sitemap.xml'),
    }
}

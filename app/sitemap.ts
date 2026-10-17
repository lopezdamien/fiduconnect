import { MetadataRoute } from 'next'
import { SEO_PUBLICATION_APPROVED, SEO_INDEXABLE_PATHS } from '@/lib/seo-release';
import { absoluteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    if (!SEO_PUBLICATION_APPROVED) return [];
    return SEO_INDEXABLE_PATHS.map(path => ({ url: absoluteUrl(path) }));
}

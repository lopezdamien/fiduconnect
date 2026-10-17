import Link from 'next/link';
import { ArrowUpRight, Compass, Files, ChartNoAxesCombined, ArrowRightLeft } from 'lucide-react';
import type { SeoResource } from '@/lib/seo-resources';

const icons = { compass: Compass, transition: ArrowRightLeft, files: Files, chart: ChartNoAxesCombined };

export function SeoResourceCards({ resources, featured = false }: { resources: readonly SeoResource[]; featured?: boolean }) {
  return <div className={'seo-resource-grid' + (featured ? ' seo-resource-grid-featured' : '')}>
    {resources.map(resource => {
      const Icon = icons[resource.visual];
      return <Link key={resource.href} href={resource.href} className={'seo-resource-card seo-resource-' + resource.visual}>
        <div className="seo-resource-art" aria-hidden="true"><span className="seo-resource-orbit" /><span className="seo-resource-icon"><Icon size={54} strokeWidth={1.1} /></span><span className="seo-resource-kind">{resource.kind}</span></div>
        <div className="seo-resource-copy"><p className="seo-resource-theme">{resource.theme}</p><h3 className="sea-title">{resource.title}</h3><p className="seo-resource-description">{resource.description}</p><span className="seo-resource-link">{resource.kind === 'Guide pratique' ? 'Lire le guide' : resource.kind === 'Explorer ce besoin' ? 'Explorer ce besoin' : 'Découvrir les repères'}<ArrowUpRight size={20} aria-hidden="true" /></span></div>
      </Link>;
    })}
  </div>;
}

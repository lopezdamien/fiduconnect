import Link from 'next/link';
import { SeoHeader, SeoFooter } from '@/components/SeoChrome';

export default function NotFound() {
    return <div className="seo-site"><SeoHeader /><main id="contenu" className="seo-wrap seo-confirmation"><p className="sea-eyebrow">Page introuvable · 404</p><h1 className="sea-title">Ce chemin ne mène<br /><em>plus à cette page.</em></h1><p className="seo-intro">L’adresse est peut-être incomplète ou la page a été déplacée. Retrouvez les besoins que nous pouvons vous aider à clarifier.</p><div className="seo-actions"><Link className="seo-button" href="/services">Explorer les besoins</Link><Link className="seo-text-link" href="/">Retour à l’accueil</Link></div></main><SeoFooter /></div>;
}

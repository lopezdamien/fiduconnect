import type { Metadata } from 'next';
import Link from 'next/link';
import { SeoHeader, SeoFooter } from '@/components/SeoChrome';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/seo';
import { seoRobots } from '@/lib/seo-release';

type Section = { title: string; paragraphs: string[] };
export type Editorial = {
    path: string; title: string; description: string; label: string;
    heading: string; intro: string; sections: Section[];
    related: { href: string; label: string }[];
};

export function editorialMetadata(page: Editorial): Metadata {
    const url = 'https://www.fiduconnect.ch' + page.path;
    return { title: page.title, description: page.description,
        alternates: { canonical: url }, robots: seoRobots(),
        openGraph: { title: page.title, description: page.description, url, type: 'website', locale: 'fr_CH' },
    };
}

export function SeoEditorialPage({ page }: { page: Editorial }) {
    return <div className="seo-site"><SeoHeader /><main id="contenu">
        <JsonLd schema={breadcrumbSchema([{ name: page.label, path: page.path }])} />
        <div className="seo-wrap"><nav className="seo-breadcrumb" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><span aria-current="page">{page.label}</span></nav></div>
        <article className="seo-editorial seo-wrap"><header><p className="sea-eyebrow">FIDUCONNECT · Canton de Genève</p><h1 className="sea-title">{page.heading}</h1><p className="seo-intro">{page.intro}</p></header>
            <div className="seo-editorial-body">{page.sections.map(section => <section key={section.title}><h2 className="sea-title">{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
            <aside className="seo-editorial-related"><h2>Pour poursuivre votre recherche</h2><nav aria-label="Pages complémentaires">{page.related.map(link => <Link key={link.href} href={link.href}>{link.label} <span aria-hidden="true">↗</span></Link>)}</nav></aside>
        </article>
        <section className="seo-contact"><div className="seo-wrap"><div><p className="sea-eyebrow sea-eyebrow-light">Un premier échange</p><h2 className="sea-title">Parlons de<br /><em>votre besoin.</em></h2><p>Votre demande, le rappel et l’orientation sont gratuits et sans engagement. Les prestations du partenaire sont convenues et facturées séparément.</p><Link className="seo-button seo-button-light" href="/contact">Décrire mon besoin <span aria-hidden="true">↗</span></Link></div><aside><span>Votre choix reste le vôtre.</span><p>FIDUCONNECT est un intermédiaire, pas une fiduciaire. Vos coordonnées ne sont transmises qu’après l’appel et votre validation du rendez-vous.</p></aside></div></section>
    </main><SeoFooter /></div>;
}

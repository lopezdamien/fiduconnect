import type { Metadata } from 'next';
import Link from 'next/link';
import { SeoHeader, SeoFooter } from '@/components/SeoChrome';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/seo';
import { seoRobots } from '@/lib/seo-release';

type Section = { title: string; paragraphs: string[]; questions?: string[] };
export type Editorial = {
    path: string; title: string; description: string; label: string;
    heading: string; intro: string; sections: Section[];
    related: { href: string; label: string }[];
    article?: { published: string; displayDate: string; sources: { href: string; label: string; context: string }[] };
};

export function editorialMetadata(page: Editorial): Metadata {
    const url = 'https://www.fiduconnect.ch' + page.path;
    return { title: page.title, description: page.description,
        alternates: { canonical: url }, robots: seoRobots(),
        openGraph: { title: page.title, description: page.description, url, type: page.article ? 'article' : 'website', locale: 'fr_CH' },
    };
}

export function SeoEditorialPage({ page }: { page: Editorial }) {
    const crumbs = page.article ? [{ name: 'Ressources', path: '/ressources' }, { name: page.label, path: page.path }] : [{ name: page.label, path: page.path }];
    return <div className="seo-site"><SeoHeader /><main id="contenu">
        <JsonLd schema={breadcrumbSchema(crumbs)} />
        {page.article && <JsonLd schema={{ '@context': 'https://schema.org', '@type': 'Article', headline: page.heading, description: page.description, datePublished: page.article.published, dateModified: page.article.published, inLanguage: 'fr-CH', mainEntityOfPage: 'https://www.fiduconnect.ch' + page.path, author: { '@type': 'Organization', name: 'FIDUCONNECT', url: 'https://www.fiduconnect.ch' }, publisher: { '@type': 'Organization', name: 'FIDUCONNECT', url: 'https://www.fiduconnect.ch' } }} />}
        <div className="seo-wrap"><nav className="seo-breadcrumb" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden="true">/</span>{page.article && <><Link href="/ressources">Ressources</Link><span aria-hidden="true">/</span></>}<span aria-current="page">{page.label}</span></nav></div>
        <article className="seo-editorial seo-wrap"><header><p className="sea-eyebrow">FIDUCONNECT · Canton de Genève</p><h1 className="sea-title">{page.heading}</h1>{page.article && <p className="seo-article-date">Par FIDUCONNECT · Publié le <time dateTime={page.article.published}>{page.article.displayDate}</time></p>}<p className="seo-intro">{page.intro}</p></header>
            {page.article && <nav className="seo-article-summary" aria-label="Sommaire de l’article"><p>Dans ce guide</p><ol>{page.sections.map((section, index) => <li key={section.title}><a href={'#repere-' + (index + 1)}>{section.title}</a></li>)}</ol></nav>}
            <div className="seo-editorial-body">{page.sections.map((section, index) => <section key={section.title} id={'repere-' + (index + 1)}><h2 className="sea-title">{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.questions && <ul className="seo-article-questions">{section.questions.map(question => <li key={question}>{question}</li>)}</ul>}</section>)}</div>
            {page.article && <section className="seo-article-sources" aria-label="Sources et portée du guide"><h2>Sources et repères officiels</h2><ul>{page.article.sources.map(source => <li key={source.href}><a href={source.href} rel="noopener noreferrer">{source.label}</a><p>{source.context}</p></li>)}</ul><p>Ces sources présentent des informations générales. La grille de questions de cet article est une aide à la comparaison proposée par FIDUCONNECT, pas une recommandation d’un prestataire par ces organismes ni un conseil comptable, fiscal ou juridique personnalisé.</p></section>}
            <aside className="seo-editorial-related"><h2>Pour poursuivre votre recherche</h2><nav aria-label="Pages complémentaires">{page.related.map(link => <Link key={link.href} href={link.href}>{link.label} <span aria-hidden="true">↗</span></Link>)}</nav></aside>
        </article>
        <section className="seo-contact"><div className="seo-wrap"><div><p className="sea-eyebrow sea-eyebrow-light">Un premier échange</p><h2 className="sea-title">Parlons de<br /><em>votre besoin.</em></h2><p>Votre demande, le rappel et l’orientation sont gratuits et sans engagement. Les prestations du partenaire sont convenues et facturées séparément.</p><Link className="seo-button seo-button-light" href="/contact">Décrire mon besoin <span aria-hidden="true">↗</span></Link></div><aside><span>Votre choix reste le vôtre.</span><p>FIDUCONNECT est un intermédiaire, pas une fiduciaire. Vos coordonnées ne sont transmises qu’après l’appel et votre validation du rendez-vous.</p></aside></div></section>
    </main><SeoFooter /></div>;
}

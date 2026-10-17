import Link from 'next/link';
import { editorialMetadata, type Editorial } from '@/components/SeoEditorialPage';
import { SeoHeader, SeoFooter } from '@/components/SeoChrome';
import { SeoResourceCards } from '@/components/SeoResourceCards';
import { seoResources } from '@/lib/seo-resources';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/seo';

const page: Editorial = {
    path: '/ressources', label: 'Ressources', title: 'Ressources pour préparer votre recherche de fiduciaire à Genève',
    description: 'Des repères pour préparer vos échanges avec une fiduciaire à Genève : changement de partenaire, suivi comptable et questions TVA.',
    heading: 'Quelques repères pour préparer vos échanges.',
    intro: 'Ces contenus vous aident à formuler votre besoin. Ils ne remplacent pas l’analyse de votre situation par un professionnel.',
    sections: [{ title: 'Partir de votre situation', paragraphs: ['Vous envisagez de changer de partenaire ou souhaitez mieux organiser votre suivi ? Commencez par préciser vos attentes, les tâches à confier et les échéances à signaler. Nos repères ci-dessous vous aident à préparer la conversation.'] }],
    related: [
        { href: '/ressources/choisir-fiduciaire-geneve', label: 'Comment choisir une fiduciaire à Genève ?' },
        { href: '/ressources/changer-fiduciaire-geneve', label: 'Changer de fiduciaire : préparer la transition' },
        { href: '/tva-suisse', label: 'Préparer une demande concernant la TVA' },
        { href: '/services/pilotage', label: 'Clarifier vos attentes de suivi et de pilotage' },
    ],
};
export const metadata = editorialMetadata(page);
export default function Ressources() {
    return <div className="seo-site"><SeoHeader /><main id="contenu">
        <JsonLd schema={breadcrumbSchema([{ name: 'Ressources', path: '/ressources' }])} />
        <div className="seo-wrap"><nav className="seo-breadcrumb" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><span aria-current="page">Ressources</span></nav>
            <header className="seo-resources-intro"><p className="sea-eyebrow">La bibliothèque FIDUCONNECT</p><h1 className="sea-title">Les bons repères.<br />Pour <em>avancer sereinement.</em></h1><p>Choisir un partenaire, préparer un changement ou clarifier vos questions : partez de votre situation et prenez le temps de préparer vos échanges.</p></header>
            <section className="seo-resources-library" aria-labelledby="resources-heading"><div className="seo-resources-heading"><h2 id="resources-heading" className="sea-title">Guides et repères pratiques</h2><p>Pour les entreprises et les indépendants à Genève.</p></div><SeoResourceCards resources={seoResources} /><p className="seo-resources-disclaimer">Ces contenus vous aident à formuler votre besoin. Ils ne remplacent pas l’analyse de votre situation par un professionnel.</p></section>
        </div>
        <section className="seo-contact"><div className="seo-wrap"><div><p className="sea-eyebrow sea-eyebrow-light">Passer à la suite</p><h2 className="sea-title">Et pour <em>votre entreprise ?</em></h2><p>Un premier échange pour clarifier votre besoin et vous orienter vers un partenaire adapté.</p><Link href="/contact" className="seo-button seo-button-light">Parlons de votre besoin <span aria-hidden="true">↗</span></Link></div><aside><span>Orientation gratuite · Sans engagement</span><p>Vous gardez le choix. Vos coordonnées ne sont transmises qu’après l’appel et votre validation du rendez-vous.</p></aside></div></section>
    </main><SeoFooter /></div>;
}

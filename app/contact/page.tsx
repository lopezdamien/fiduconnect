import type { Metadata } from 'next';
import Link from 'next/link';
import { SeoHeader, SeoFooter } from '@/components/SeoChrome';
import { SeoLeadForm } from '@/components/SeoLeadForm';
import { SEO_FORM_SENDS_ENABLED } from '@/lib/seo-form-config';
import { seoRobots } from '@/lib/seo-release';
import { socialMetadata } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Votre demande de mise en relation fiduciaire à Genève',
    description: 'Décrivez votre besoin professionnel à Genève. FIDUCONNECT vous rappelle pour préparer une orientation gratuite et sans engagement.',
    alternates: { canonical: 'https://www.fiduconnect.ch/contact' },
    robots: seoRobots(),
    ...socialMetadata({ title: 'Votre demande de mise en relation fiduciaire à Genève', description: 'Décrivez votre besoin professionnel à Genève. FIDUCONNECT vous rappelle pour préparer une orientation gratuite et sans engagement.', path: '/contact' }),
};

export default function Contact() {
    return <div className="seo-site"><SeoHeader /><main id="contenu">
        <div className="seo-wrap"><nav className="seo-breadcrumb" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><span aria-current="page">Votre demande</span></nav></div>
        <section className="seo-wrap seo-contact-page">
            <div className="seo-contact-copy"><p className="sea-eyebrow">Entreprises & indépendants · Genève</p><h1 className="sea-title">Votre besoin.<br /><em>Notre point de départ.</em></h1>
                <p className="seo-intro">Quelques informations pour comprendre votre recherche de fiduciaire et préparer un premier échange.</p>
                <ol className="seo-contact-timeline"><li><span>01</span><div><h2>Vous décrivez votre situation.</h2><p>Votre activité, votre besoin et les coordonnées auxquelles vous joindre.</p></div></li><li><span>02</span><div><h2>Nous vous rappelons sous 24 h.</h2><p>Un échange gratuit pour préciser ce que vous attendez d’un partenaire.</p></div></li><li><span>03</span><div><h2>Vous choisissez la suite.</h2><p>Vos coordonnées ne sont transmises qu’après votre appel et votre validation du rendez-vous.</p></div></li></ol>
                <div className="seo-contact-direct"><p>Vous préférez nous écrire ?</p><a href="mailto:contact@fiduconnect.ch">contact@fiduconnect.ch</a><p>FIDUCONNECT organise la mise en relation. Les prestations du partenaire font l’objet d’un accord distinct.</p></div>
            </div>
            <div className="sea-form-card seo-contact-form"><div className="sea-form-heading"><p className="sea-eyebrow">Votre demande</p><h2 className="sea-title mt-3 text-[1.9rem]">Parlez-nous de votre entreprise.</h2><p className="mt-3 text-sm leading-6 text-[#6c665e]">Les champs sont obligatoires sauf mention contraire.</p></div>
                {!SEO_FORM_SENDS_ENABLED && <p className="seo-preview-notice" role="note">Aperçu de travail : les envois sont désactivés. Aucune demande ne sera transmise depuis ce formulaire pour le moment.</p>}
                <SeoLeadForm idPrefix="seo-contact" />
                <noscript><p className="seo-preview-notice">Ce formulaire nécessite JavaScript. Vous pouvez nous écrire à contact@fiduconnect.ch.</p></noscript>
            </div>
        </section>
    </main><SeoFooter /></div>;
}

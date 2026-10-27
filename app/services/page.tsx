import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SeoHeader, SeoFooter } from '@/components/SeoChrome';
import { SeoLeadSection } from '@/components/SeoLeadSection';
import { seoServices } from '@/lib/seo-services';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, socialMetadata } from '@/lib/seo';
import { seoRobots } from '@/lib/seo-release';

export const metadata: Metadata = {
  title: 'Vos besoins fiduciaires à Genève',
  description: 'Comptabilité, fiscalité d’entreprise, salaires ou changement de fiduciaire : précisez votre besoin avec FIDUCONNECT à Genève.',
  alternates: { canonical: 'https://www.fiduconnect.ch/services' },
  robots: seoRobots(),
  ...socialMetadata({ title: 'Vos besoins fiduciaires à Genève', description: 'Comptabilité, fiscalité d’entreprise, salaires ou changement de fiduciaire : précisez votre besoin avec FIDUCONNECT à Genève.', path: '/services' }),
};

export default function Services() {
  return <div className="seo-site"><SeoHeader /><main id="contenu">
    <JsonLd schema={breadcrumbSchema([{ name: 'Vos besoins', path: '/services' }])} />
    <div className="seo-wrap"><nav className="seo-breadcrumb" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><span aria-current="page">Vos besoins</span></nav></div>
    <section className="seo-wrap seo-services-intro"><p className="sea-eyebrow">Entreprises & indépendants · Canton de Genève</p><h1 className="sea-title">Vos besoins fiduciaires.<br /><em>Un partenaire à Genève.</em></h1><p className="seo-intro">Vous n’avez pas à connaître le nom du mandat qu’il vous faut. Explorez les sujets ci-dessous ou parlez-nous simplement de votre situation.</p><a className="seo-button" href="#demande">Décrire mon besoin <ArrowUpRight size={18} aria-hidden="true" /></a></section>
    <section className="seo-wrap seo-services-directory" aria-label="Domaines de mise en relation">{seoServices.map(service => <article key={service.slug}><span className="seo-directory-number">{service.number}</span><div><h2 className="sea-title"><Link href={'/services/' + service.slug}>{service.label}</Link></h2><p>{service.intro}</p><Link className="seo-text-link" href={'/services/' + service.slug}>Explorer ce besoin <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> : {service.label}</span></Link></div></article>)}</section>
    <SeoLeadSection idPrefix="seo-services" />
  </main><SeoFooter /></div>;
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { SeoHeader, SeoFooter } from '@/components/SeoChrome';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, socialMetadata } from '@/lib/seo';
import { seoRobots } from '@/lib/seo-release';
import { seoServices, type SeoService } from '@/lib/seo-services';

export function serviceMetadata(service: SeoService): Metadata {
  const url = 'https://www.fiduconnect.ch/services/' + service.slug;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    robots: seoRobots(),
    ...socialMetadata({ title: service.title, description: service.description, path: '/services/' + service.slug }),
  };
}

export function SeoServicePage({ service }: { service: SeoService }) {
  return <div className="seo-site">
    <SeoHeader />
    <main id="contenu">
      <JsonLd schema={breadcrumbSchema([{ name: 'Vos besoins', path: '/services' }, { name: service.label, path: '/services/' + service.slug }])} />
      <div className="seo-wrap"><nav aria-label="Fil d’Ariane" className="seo-breadcrumb"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><Link href="/services">Vos besoins</Link><span aria-hidden="true">/</span><span aria-current="page">{service.label}</span></nav></div>
      <section className="seo-wrap seo-service-hero">
        <div><p className="sea-eyebrow">Mise en relation · Canton de Genève</p><h1 className="sea-title">{service.heading}<br /><em>{service.accent}</em></h1><p className="seo-intro">{service.intro}</p><Link href="/contact" className="seo-button">Parlons de votre besoin <ArrowUpRight size={18} aria-hidden="true" /></Link><p className="seo-checks">Orientation gratuite · Sans engagement</p></div>
        <aside className="seo-service-note"><span className="seo-service-index">{service.number}</span><p className="sea-eyebrow">Notre point de départ</p><h2 className="sea-title">Votre situation.<br />Vos attentes.<br /><em>Votre choix.</em></h2><p>Nous vous aidons à définir ce que vous recherchez. Le partenaire fiduciaire réalise les prestations que vous décidez de lui confier.</p><span className="seo-service-location">Genève et son canton</span></aside>
      </section>
      <div className="seo-positioning"><div className="seo-wrap"><span>Un rôle précis</span><p>FIDUCONNECT facilite la mise en relation. Nous ne réalisons pas les prestations fiduciaires.</p></div></div>
      <section className="seo-wrap seo-section"><div className="seo-section-head"><div><p className="sea-eyebrow">Reconnaître votre besoin</p><h2 className="sea-title">Qu’est-ce qui vous<br />amène aujourd’hui ?</h2></div><p>Pas besoin d’avoir toutes les réponses pour commencer. Une description de votre situation nous aide à préparer l’échange.</p></div><div className="seo-service-situations">{service.situations.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section className="seo-process"><div className="seo-wrap seo-section seo-service-prepare"><div><p className="sea-eyebrow">Avant notre échange</p><h2 className="sea-title">Quelques repères.<br />Pas un dossier complet.</h2><p>Pour la première demande, partagez seulement les informations générales utiles. Gardez vos documents confidentiels pour un échange adapté avec le professionnel.</p></div><ul>{service.preparation.map(item => <li key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></li>)}</ul></div></section>
      <section className="seo-wrap seo-section seo-service-criteria"><div><p className="sea-eyebrow">Préparer votre décision</p><h2 className="sea-title">Ce qu’il est utile<br />de clarifier.</h2><p>La mise en relation est un début. Le périmètre, les conditions et les honoraires du mandat sont à convenir directement avec le partenaire.</p></div><div>{service.criteria.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section className="seo-section seo-wrap seo-faq"><div><p className="sea-eyebrow">Vos questions</p><h2 className="sea-title">Avant d’aller<br />plus loin.</h2></div><div>{service.faq.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>
      <section className="seo-wrap seo-section seo-related"><p className="sea-eyebrow">Pour préparer votre échange</p><h2 className="sea-title">Des repères à garder.</h2><nav aria-label="Ressources pour ce besoin">{service.resources.map(resource => <Link key={resource.href} href={resource.href}><span>{resource.label}</span><ArrowUpRight size={18} aria-hidden="true" /></Link>)}</nav></section>
      <section className="seo-contact seo-service-contact"><div className="seo-wrap"><div><p className="sea-eyebrow sea-eyebrow-light">Une première conversation</p><h2 className="sea-title">Commençons par<br /><em>votre entreprise.</em></h2><p>Parlez-nous de votre recherche à Genève. Nous vous rappelons gratuitement sous 24 heures pour clarifier votre besoin.</p><Link href="/contact" className="seo-button seo-button-light">Décrire mon besoin <ArrowUpRight size={18} aria-hidden="true" /></Link><p className="seo-contact-small">Gratuit et sans engagement pour votre orientation</p></div><aside><span>Vous gardez la maîtrise de la suite.</span><p>Vos coordonnées ne sont transmises au partenaire concerné qu’après votre appel et votre validation du rendez-vous. Les prestations du partenaire font l’objet d’un accord distinct.</p></aside></div></section>
      <section className="seo-wrap seo-section seo-related"><p className="sea-eyebrow">Votre besoin peut aussi concerner</p><h2 className="sea-title">D’autres sujets à explorer.</h2><nav aria-label="Autres besoins">{seoServices.filter(item => item.slug !== service.slug).map(item => <Link key={item.slug} href={'/services/' + item.slug}><span>{item.label}</span><ArrowUpRight size={18} aria-hidden="true" /></Link>)}</nav></section>
    </main>
    <SeoFooter />
  </div>;
}

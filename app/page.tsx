import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown, Files, Compass, Users, RefreshCw } from 'lucide-react';
import { SeoHeader, SeoFooter } from '@/components/SeoChrome';
import { seoRobots } from '@/lib/seo-release';
import { JsonLd } from '@/components/JsonLd';
import { organizationSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Trouvez une fiduciaire adaptée à votre entreprise à Genève',
  description: 'FIDUCONNECT clarifie votre besoin et vous oriente vers un partenaire fiduciaire à Genève. Orientation gratuite et sans engagement.',
  alternates: { canonical: 'https://www.fiduconnect.ch/' },
  robots: seoRobots(),
};

const needs = [
  { icon: Files, slug: 'comptabilite', title: 'Comptabilité', text: 'Votre activité évolue. Vous recherchez un partenaire pour organiser le suivi comptable de votre entreprise.' },
  { icon: Compass, slug: 'tva', title: 'Fiscalité & TVA', text: 'Vous souhaitez identifier un interlocuteur compétent pour les questions fiscales de votre entreprise.' },
  { icon: Users, slug: 'charges-salaires', title: 'Salaires & administration', text: 'Vous cherchez un partenaire pour accompagner la gestion des salaires et vos démarches administratives.' },
  { icon: RefreshCw, slug: 'changer-fiduciaire', title: 'Changer de fiduciaire', text: 'Votre collaboration actuelle ne vous convient plus. Prenons le temps de clarifier vos attentes.' },
];
const steps = [
  ['Vous nous parlez de votre entreprise.', 'Votre activité, votre organisation, ce que vous attendez : nous commençons par vous écouter.'],
  ['Nous clarifions votre besoin.', 'Un échange permet de préciser votre situation et les compétences recherchées chez un partenaire.'],
  ['Vous décidez de la suite.', 'Nous vous orientons vers un partenaire adapté. Vos coordonnées sont transmises uniquement après votre validation du rendez-vous.'],
];
const faq = [
  ['FIDUCONNECT est-il une fiduciaire ?', 'Non. FIDUCONNECT est un service de mise en relation. Les prestations comptables, fiscales et administratives sont réalisées par le partenaire fiduciaire, dans le cadre d’un accord distinct avec vous.'],
  ['Qu’est-ce qui est gratuit ?', 'Votre demande, le rappel et l’orientation FIDUCONNECT sont gratuits et sans engagement. Les prestations que vous choisissez ensuite de confier à une fiduciaire sont facturées selon ses propres tarifs et conditions.'],
  ['À qui s’adresse le service ?', 'Aux entreprises et aux indépendants qui recherchent un partenaire fiduciaire dans le canton de Genève, pour une première recherche ou un changement de partenaire.'],
  ['Mes coordonnées sont-elles transmises immédiatement ?', 'Non. Nous échangeons d’abord avec vous. Vos coordonnées ne sont transmises au partenaire concerné qu’après votre appel et votre validation du rendez-vous.'],
  ['Comparez-vous toutes les fiduciaires du canton ?', 'Non. Notre orientation porte sur des partenaires de notre réseau. Elle ne constitue pas une comparaison exhaustive du marché genevois.'],
];
function Arrow() { return <ArrowUpRight size={18} aria-hidden="true" />; }

export default function Home() {
  return <div className="seo-site">
    <SeoHeader />
    <main id="contenu">
      <JsonLd schema={organizationSchema()} />
      <section className="seo-hero seo-wrap">
        <div><p className="sea-eyebrow">Entreprises & indépendants · Canton de Genève</p>
          <h1 className="sea-title">La bonne fiduciaire.<br />Pour <em>votre</em> entreprise.</h1>
          <p className="seo-intro">Trouver un partenaire fiduciaire à Genève commence par comprendre ce dont vous avez vraiment besoin.</p>
          <p className="seo-hero-text">FIDUCONNECT vous écoute, clarifie votre situation et vous oriente vers un partenaire adapté. Simplement, et sans engagement.</p>
          <div className="seo-actions"><Link href="/contact" className="seo-button">Trouver ma fiduciaire <Arrow /></Link><a href="#fonctionnement" className="seo-text-link">Découvrir notre approche <ArrowDown size={15} aria-hidden="true" /></a></div>
          <p className="seo-checks"><span>✓ Orientation gratuite</span><span>✓ Vous gardez le choix</span></p>
        </div>
        <div className="seo-visual"><div className="seo-visual-top"><span>Un lien qui fait la différence.</span><span>01 — GE</span></div>
          <div className="seo-visual-center"><span>Votre entreprise</span><Image src="/brand/orientation-illustration.svg" width={760} height={230} alt="Mise en relation de votre entreprise avec un partenaire fiduciaire." priority /><span>Un partenaire adapté</span></div>
          <div className="seo-visual-note"><i aria-hidden="true" /><p>Un besoin compris.<br /><strong>Une orientation plus claire.</strong></p></div>
        </div>
      </section>
      <div className="seo-positioning"><div className="seo-wrap"><span>Notre rôle, en toute transparence</span><p>Nous ne sommes pas une fiduciaire. Nous vous aidons à trouver la vôtre.</p></div></div>
      <section id="besoins" className="seo-section seo-wrap">
        <div className="seo-section-head"><div><p className="sea-eyebrow">Partir de votre réalité</p><h2 className="sea-title">Un partenaire pour<br />ce qui compte pour vous.</h2></div><p>Une création, une activité qui grandit ou une collaboration à repenser : votre besoin est le point de départ.</p></div>
        <div className="seo-needs">{needs.map(({ icon: Icon, slug, title, text }, i) => <article key={title}><div className="seo-card-top"><Icon size={26} strokeWidth={1.2} aria-hidden="true" /><span>0{i + 1}</span></div><h3><Link href={'/services/' + slug}>{title}</Link></h3><p>{text}</p><Link href={'/services/' + slug}>Explorer ce besoin <Arrow /><span className="sr-only"> : {title}</span></Link></article>)}</div>
      </section>
      <section id="fonctionnement" className="seo-process"><div className="seo-wrap seo-section"><div className="seo-section-head"><div><p className="sea-eyebrow">Comment ça marche</p><h2 className="sea-title">Moins de recherches.<br />Plus de clarté.</h2></div><p>Un échange humain pour avancer, sans vous engager à confier un mandat.</p></div><ol className="seo-steps">{steps.map(([title, text], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>
      <section id="a-propos" className="seo-section seo-wrap seo-about"><div><p className="sea-eyebrow">L’esprit FIDUCONNECT</p><h2 className="sea-title">Choisir un partenaire,<br />pas seulement<br /><em>une prestation.</em></h2></div><div><p className="seo-about-lead">Derrière chaque entreprise, il y a une façon de travailler, des attentes et des priorités.</p><p>Notre rôle est de les comprendre avant de vous orienter. Pas de liste interminable à parcourir : nous prenons le temps de clarifier ce qui compte dans votre recherche.</p><p>FIDUCONNECT est un service exploité par Smart Administration – Damien Lopez, à Genève. Notre périmètre est aujourd’hui le canton de Genève.</p><div className="seo-signature">Une approche locale. Un premier échange humain.</div></div></section>
      <section className="seo-section seo-wrap seo-faq"><div><p className="sea-eyebrow">Avant de vous lancer</p><h2 className="sea-title">Vos questions.<br />Nos réponses.</h2></div><div>{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
      <section id="contact" className="seo-contact"><div className="seo-wrap"><div><p className="sea-eyebrow sea-eyebrow-light">Votre prochain pas</p><h2 className="sea-title">Et si nous commencions<br />par <em>votre besoin ?</em></h2><p>Décrivez votre activité et ce que vous recherchez.<br />Nous vous rappelons gratuitement sous 24 heures.</p><Link className="seo-button seo-button-light" href="/contact">Décrire mon besoin <Arrow /></Link><p className="seo-contact-small">Orientation gratuite · Sans engagement</p></div><aside><span>Un premier contact, simplement.</span><a href="mailto:contact@fiduconnect.ch">contact@fiduconnect.ch</a><p>Vos coordonnées ne sont transmises à un partenaire qu’après votre validation du rendez-vous.</p></aside></div></section>
    </main>
    <SeoFooter />
  </div>;
}

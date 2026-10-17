import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FiduLogo } from '@/components/FiduLogo';
import { seoServices } from '@/lib/seo-services';

export function SeoHeader() {
  const links = [
    { href: '/services', label: 'Vos besoins' },
    { href: '/comment-ca-marche', label: 'Comment ça marche' },
    { href: '/ressources', label: 'Ressources' },
    { href: '/a-propos', label: 'À propos' },
  ];
  const contact = '/contact';
  return <>
    <a href="#contenu" className="seo-skip">Aller au contenu</a>
    <header className="seo-header"><div className="seo-wrap seo-nav">
      <Link href="/" aria-label="FIDUCONNECT — Accueil"><FiduLogo className="w-[170px] sm:w-[195px]" /></Link>
      <nav aria-label="Navigation principale">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
      <Link href={contact} className="seo-button seo-nav-cta">Parlons de votre besoin <ArrowUpRight size={18} aria-hidden="true" /></Link>
      <details className="seo-mobile-nav"><summary>Menu</summary><nav aria-label="Navigation mobile">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}<Link href={contact}>Nous contacter</Link></nav></details>
    </div></header>
  </>;
}

export function SeoFooter() {
  return <footer className="seo-footer"><div className="seo-wrap">
    <div><Link href="/" aria-label="FIDUCONNECT — Accueil"><FiduLogo inverse className="w-[175px]" /></Link><p>La mise en relation fiduciaire, à Genève.</p></div>
    <nav aria-label="Nos domaines de mise en relation">{seoServices.map(service => <Link key={service.slug} href={'/services/' + service.slug}>{service.label}</Link>)}</nav>
    <nav aria-label="Informations et contact"><Link href="/a-propos">À propos</Link><Link href="/ressources">Ressources</Link><Link href="/mentions-legales">Mentions légales</Link><Link href="/confidentialite">Confidentialité</Link><Link href="/cookies">Cookies</Link><Link href="/contact">Contact</Link></nav>
    <span>© {new Date().getFullYear()} FIDUCONNECT</span>
  </div></footer>;
}

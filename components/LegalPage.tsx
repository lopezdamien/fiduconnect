import Link from 'next/link';
import { SeoHeader, SeoFooter } from '@/components/SeoChrome';

export function LegalPage({ title, children, version = '15 octobre 2026' }: { title: string; children: React.ReactNode; version?: string }) {
    return (
        <div className="seo-site"><SeoHeader /><main id="contenu" className="sea-page sea-legal-page min-h-screen px-5 py-8 sm:px-8 sm:py-12">
            <div className="mx-auto max-w-3xl">
                <nav aria-label="Fil d’Ariane" className="seo-breadcrumb"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>
                <article className="sea-legal-article mt-10 rounded-lg border border-[#ded7cb] bg-[#fffdfa] p-6 sm:p-10">
                    <p className="sea-eyebrow">Mise à jour le {version}</p>
                    <h1 className="sea-title mt-4 text-4xl sm:text-5xl">{title}</h1>
                    <div className="mt-9 space-y-8 text-sm leading-7 text-[#605b54] [&_h2]:mb-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-[#223b4a] [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">{children}</div>
                </article>
                <nav aria-label="Informations légales" className="mt-6 flex flex-wrap gap-5 text-xs text-[#6c665e]">
                    <Link href="/mentions-legales" className="underline underline-offset-4">Mentions légales</Link>
                    <Link href="/confidentialite" className="underline underline-offset-4">Confidentialité</Link>
                    <Link href="/cookies" className="underline underline-offset-4">Cookies</Link>
                </nav>
            </div>
        </main><SeoFooter /></div>
    );
}

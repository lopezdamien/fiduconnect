import Link from 'next/link';
import { FiduLogo } from '@/components/FiduLogo';

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <main className="sea-page sea-legal-page min-h-screen px-5 py-8 sm:px-8 sm:py-12">
            <div className="mx-auto max-w-3xl">
                <header className="flex flex-wrap items-center justify-between gap-5">
                    <Link href="/" aria-label="FIDUCONNECT — accueil"><FiduLogo className="w-[170px]" /></Link>
                    <Link href="/" className="text-sm underline underline-offset-4">Retour à l’accueil</Link>
                </header>
                <article className="sea-legal-article mt-10 rounded-lg border border-[#ded7cb] bg-[#fffdfa] p-6 sm:p-10">
                    <p className="sea-eyebrow">Version du 9 octobre 2026</p>
                    <h1 className="sea-title mt-4 text-4xl sm:text-5xl">{title}</h1>
                    <p className="mt-5 border-l-2 border-[#b36349] pl-4 text-xs leading-6 text-[#6c665e]">Version locale de travail. Publication après validation des paramètres des prestataires et des procédures de conservation.</p>
                    <div className="mt-9 space-y-8 text-sm leading-7 text-[#605b54] [&_h2]:mb-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-[#223b4a] [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">{children}</div>
                </article>
                <nav aria-label="Informations légales" className="mt-6 flex flex-wrap gap-5 text-xs text-[#6c665e]">
                    <Link href="/mentions-legales" className="underline underline-offset-4">Mentions légales</Link>
                    <Link href="/confidentialite" className="underline underline-offset-4">Confidentialité</Link>
                </nav>
            </div>
        </main>
    );
}

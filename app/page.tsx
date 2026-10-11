import Link from 'next/link';
import Image from 'next/image';
import { ArrowDownRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { PremiumReveal } from '@/components/PremiumReveal';
import { SeaLeadForm } from '@/components/SeaLeadForm';
import { FiduLogo } from '@/components/FiduLogo';
import { organizationSchema, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Trouvez la fiduciaire adaptée à votre entreprise à Genève',
    description: 'Décrivez votre besoin : FiduConnect vous aide à identifier et comparer des partenaires fiduciaires adaptés, gratuitement et sans engagement.',
    path: '/',
    noIndex: true,
});

const steps = [
    ['01', 'Vous décrivez votre besoin', 'Quelques informations suffisent pour comprendre votre activité et vos priorités.'],
    ['02', 'Nous analysons votre situation', 'Nous clarifions votre demande pour identifier les compétences utiles à votre entreprise.'],
    ['03', 'Nous vous orientons vers un partenaire adapté', 'Vous recevez une orientation claire, sans engagement de votre part.'],
];

const needs = [
    'Création d’entreprise',
    'Domiciliation',
    'Administration d’entreprise',
    'Comptabilité',
    'Fiscalité',
    'TVA',
    'Salaires',
    'Comparaison ou changement de fiduciaire',
];
const reassurances = [
    ['Gratuit', 'Aucun coût pour votre demande.'],
    ['Sans engagement', 'Vous restez libre de votre décision.'],
    ['Gain de temps', 'Un besoin clarifié dès le départ.'],
    ['Orientation adaptée', 'Selon votre activité et votre situation.'],
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return <p className={`sea-eyebrow ${light ? 'sea-eyebrow-light' : ''}`}>{children}</p>;
}

export default function Home() {
    return (
        <main className="sea-page">
            <JsonLd schema={organizationSchema()} />
            <div className="sea-first-screen">
                <header className="sea-header">
                    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
                        <Link href="/" className="shrink-0"><FiduLogo className="w-[150px] sm:w-[190px]" /></Link>
                        <a href="#demande" className="sea-header-link"><span className="sea-header-cta-full">Trouver ma fiduciaire</span><span className="sea-header-cta-short">Ma demande</span><ArrowDownRight aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
                    </div>
                </header>

                <section className="sea-hero">
                    <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_minmax(440px,.86fr)] lg:gap-16">
                        <PremiumReveal className="sea-hero-copy pt-2">
                            <h1 className="sea-title max-w-3xl text-[2.75rem] sm:text-6xl lg:text-[4.5rem]">
                                Trouvez la fiduciaire <em className="font-normal text-[#9c513b]">adaptée</em> à votre entreprise à Genève.
                            </h1>
                            <p className="sea-hero-description mt-7 max-w-xl text-base leading-7 text-[#605b54] sm:text-lg sm:leading-8">
                                Décrivez-nous votre besoin. FiduConnect vous aide à identifier et comparer des partenaires adaptés, gratuitement et sans engagement.
                            </p>
                            <div className="sea-hero-reassurance mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium text-[#605b54]">
                                <span>Rappel gratuit sous 24 h</span><span className="border-l border-[#c7c0b6] pl-6">Sans engagement</span>
                            </div>
                            <a href="#demande" className="sea-form-guide">
                                <span>Trouver ma fiduciaire</span>
                                <svg className="sea-form-guide-arrow" viewBox="0 0 180 64" aria-hidden="true" focusable="false" fill="none">
                                    <path d="M6 42C61 64 99 9 174 14M159 4L174 14L160 27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg className="sea-form-guide-mobile" viewBox="0 0 28 36" aria-hidden="true" focusable="false" fill="none">
                                    <path d="M4 4C15 4 20 13 20 30M14 24L20 30L26 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </PremiumReveal>
                        <PremiumReveal delay={0.1} className="sea-form-card scroll-mt-6" id="demande">
                            <div className="sea-form-heading">
                                <p className="sea-eyebrow">Votre premier pas</p>
                                <h2 className="sea-title mt-3 text-[1.9rem]">Parlez-nous de votre besoin.</h2>
                                <p className="mt-2 text-sm leading-6 text-[#6c665e]">Nous vous rappelons gratuitement sous 24 heures.</p>
                            </div>
                            <SeaLeadForm idPrefix="hero" />
                        </PremiumReveal>
                    </div>
                </section>
            </div>

            <section className="sea-section mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
                <PremiumReveal className="max-w-2xl">
                    <Eyebrow>Comment ça fonctionne</Eyebrow>
                    <h2 className="sea-title mt-5 text-4xl sm:text-5xl">Un chemin clair, de votre besoin à la bonne orientation.</h2>
                </PremiumReveal>
                <div className="sea-steps mt-12 grid gap-9 md:grid-cols-3 md:gap-8">
                    {steps.map(([number, title, text], index) => (
                        <PremiumReveal key={number} delay={index * 0.08} className="sea-step border-t border-[#cfc8bc] pt-5">
                            <span className="font-[family-name:var(--font-display)] text-3xl text-[#9c513b]">{number}</span>
                            <h3 className="mt-7 max-w-xs text-lg font-semibold tracking-tight">{title}</h3>
                            <p className="mt-3 max-w-xs text-sm leading-7 text-[#6c665e]">{text}</p>
                        </PremiumReveal>
                    ))}
                </div>
                <figure className="mt-10 border-t border-[#ded7cb] pt-8">
                    <Image
                        src="/brand/orientation-illustration.svg"
                        alt="FIDUCONNECT relie votre entreprise à un partenaire fiduciaire adapté."
                        width={760}
                        height={230}
                        className="mx-auto h-auto w-full max-w-2xl"
                    />
                </figure>
            </section>

            <section className="sea-section border-y border-[#c8d3dc] bg-[#e5eaf0] py-16 sm:py-24">
                <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
                    <PremiumReveal>
                        <Eyebrow>Vos besoins</Eyebrow>
                        <h2 className="sea-title mt-5 max-w-md text-4xl sm:text-5xl">À chaque étape, le bon partenaire.</h2>
                        <p className="mt-6 max-w-sm text-sm leading-7 text-[#6c665e]">Du lancement de votre entreprise à la recherche d’un nouveau partenaire, nous commençons par comprendre votre besoin.</p>
                    </PremiumReveal>
                    <ul className="sea-needs-list divide-y divide-[#c0ccd5]">
                        {needs.map((need, index) => (
                            <li key={need} className="flex items-center gap-5 py-4">
                                <span aria-hidden="true" className="w-5 shrink-0 text-xs tabular-nums text-[#9c513b]">0{index + 1}</span>
                                <span className="text-base font-medium sm:text-lg">{need}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="sea-section mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
                <PremiumReveal><Eyebrow>Pourquoi FiduConnect</Eyebrow><h2 className="sea-title mt-5 text-4xl sm:text-5xl">Avancer avec plus de clarté.</h2></PremiumReveal>
                <div className="sea-reassurances mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {reassurances.map(([title, text], index) => (
                        <PremiumReveal key={title} delay={index * 0.08} className="border-t border-[#cfc8bc] pt-5">
                            <h3 className="text-base font-semibold">{title}</h3>
                            <p className="mt-3 text-sm leading-6 text-[#6c665e]">{text}</p>
                        </PremiumReveal>
                    ))}
                </div>
            </section>

            <section className="sea-section bg-[#223b4a] px-5 py-16 text-[#f6f2e9] sm:px-8 sm:py-24">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16">
                    <PremiumReveal>
                        <Eyebrow light>Votre demande</Eyebrow>
                        <h2 className="sea-title mt-5 max-w-lg text-4xl sm:text-5xl">Prêt à trouver une fiduciaire adaptée ?</h2>
                        <p className="mt-6 max-w-md text-base leading-7 text-[#c8c3b9]">Expliquez-nous votre situation. Nous vous aidons à avancer simplement, avec une orientation cohérente avec votre entreprise.</p>
                        <p className="mt-8 text-sm tracking-wide text-[#efd6c9]">Rappel gratuit sous 24 h · Sans engagement</p>
                    </PremiumReveal>
                    <PremiumReveal delay={0.1} className="sea-form-card">
                        <div className="sea-form-heading"><h3 className="sea-title text-[1.9rem]">Commençons par votre besoin.</h3><p className="mt-2 text-sm leading-6 text-[#6c665e]">Nous vous rappelons gratuitement sous 24 heures.</p></div>
                        <SeaLeadForm idPrefix="final" />
                    </PremiumReveal>
                </div>
            </section>

            <footer className="border-t border-white/10 bg-[#223b4a] px-5 py-7 text-xs text-[#c8c3b9] sm:px-8">
                <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4">
                    <div className="space-y-3"><Link href="/"><FiduLogo inverse className="w-[150px]" /></Link><p>© {new Date().getFullYear()} FIDUCONNECT.</p></div>
                    <nav aria-label="Informations légales et cookies" className="flex flex-wrap gap-x-5 gap-y-2">
                        <Link href="/mentions-legales" className="inline-flex min-h-11 items-center hover:underline focus-visible:underline">Mentions légales</Link>
                        <Link href="/confidentialite" className="inline-flex min-h-11 items-center hover:underline focus-visible:underline">Confidentialité</Link>
                        <Link href="/confidentialite#cookies" className="inline-flex min-h-11 items-center hover:underline focus-visible:underline">Cookies</Link>
                    </nav>
                </div>
            </footer>
        </main>
    );
}

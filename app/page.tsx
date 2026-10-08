import Link from 'next/link';
import { ArrowDownRight, ArrowRight, Check, Clock3, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { PremiumReveal } from '@/components/PremiumReveal';
import { SeaLeadForm } from '@/components/SeaLeadForm';
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

const needs = ['Création d’entreprise', 'Comptabilité', 'Fiscalité', 'TVA', 'Salaires', 'Comparaison ou changement de fiduciaire'];

const reassurances = [
    [ShieldCheck, 'Gratuit', 'Aucun coût pour votre demande.'],
    [Check, 'Sans engagement', 'Vous restez libre de votre décision.'],
    [Clock3, 'Gain de temps', 'Un besoin clarifié dès le départ.'],
    [Compass, 'Orientation adaptée', 'Selon votre activité et votre situation.'],
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return <p className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] ${light ? 'text-emerald-300' : 'text-emerald-800'}`}><span className={`h-px w-7 ${light ? 'bg-emerald-400/70' : 'bg-emerald-700/70'}`} />{children}</p>;
}

export default function Home() {
    return (
        <main className="overflow-hidden bg-[#f8f8f5] text-slate-950">
            <JsonLd schema={organizationSchema()} />

            <header className="relative z-20 border-b border-white/10 bg-slate-950 text-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
                    <Link href="/" className="text-lg font-extrabold tracking-[-0.05em]">FIDUCONNECT<span className="text-emerald-400">.</span></Link>
                    <a href="#demande" className="group flex items-center gap-2 text-sm font-semibold text-slate-100 transition hover:text-emerald-300">Trouver ma fiduciaire <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" /></a>
                </div>
            </header>

            <section className="relative isolate overflow-hidden bg-slate-950 pb-16 pt-10 text-white sm:pb-24 sm:pt-16 lg:pb-28">
                <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:46px_46px]" />
                <div className="absolute -right-32 top-[-12rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-emerald-500/20 blur-[110px]" />
                <div className="absolute -bottom-52 left-[22%] -z-10 h-80 w-80 rounded-full bg-sky-400/10 blur-[100px]" />
                <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_minmax(430px,.82fr)] lg:gap-20">
                    <PremiumReveal className="pt-3 lg:pt-9">
                        <Eyebrow light>Genève · Mise en relation fiduciaire</Eyebrow>
                        <h1 className="mt-7 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">Trouvez la fiduciaire <span className="text-emerald-300">adaptée</span> à votre entreprise à Genève.</h1>
                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">Décrivez-nous votre besoin. FiduConnect vous aide à identifier et comparer des partenaires adaptés, gratuitement et sans engagement.</p>
                        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-200">{['Gratuit', 'Sans engagement', 'Réponse rapide'].map((item) => <span key={item} className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/60"><Check className="h-3 w-3 text-emerald-300" /></span>{item}</span>)}</div>
                        <a href="#demande" className="mt-10 inline-flex items-center gap-3 rounded-full bg-emerald-400 px-6 py-3.5 text-sm font-bold text-emerald-950 transition hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,.28)]">Trouver ma fiduciaire <ArrowRight className="h-4 w-4" /></a>
                    </PremiumReveal>

                    <PremiumReveal delay={0.1} className="relative" id="demande">
                        <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-emerald-300/15 bg-emerald-400/[0.05]" />
                        <div className="rounded-[1.4rem] border border-white/10 bg-white p-5 text-slate-950 shadow-[0_35px_80px_rgba(0,0,0,.35)] sm:p-7">
                            <div className="mb-6 flex items-start justify-between gap-4 border-b border-slate-100 pb-5"><div><p className="text-sm font-bold text-slate-950">Parlez-nous de votre besoin</p><p className="mt-1 text-sm leading-6 text-slate-500">Quelques réponses suffisent pour démarrer.</p></div><Sparkles className="mt-0.5 h-5 w-5 text-emerald-700" /></div>
                            <SeaLeadForm idPrefix="hero" />
                        </div>
                    </PremiumReveal>
                </div>
            </section>

            <section className="border-b border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">{['Un besoin clarifié', 'Une orientation humaine', 'Une décision libre'].map((item, index) => <div key={item} className="flex items-center gap-4 py-5 md:px-7 md:first:pl-0"><span className="font-[family-name:var(--font-display)] text-2xl text-emerald-800">0{index + 1}</span><p className="text-sm font-semibold text-slate-700">{item}</p></div>)}</div></section>

            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"><PremiumReveal className="max-w-2xl"><Eyebrow>Simple et clair</Eyebrow><h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl">Un chemin clair, de votre besoin à la bonne orientation.</h2></PremiumReveal><div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-3">{steps.map(([number, title, text], index) => <PremiumReveal key={number} delay={index * 0.08} className="bg-[#f8f8f5] p-7 sm:p-8"><span className="font-[family-name:var(--font-display)] text-3xl text-emerald-800">{number}</span><h3 className="mt-12 text-xl font-bold tracking-tight">{title}</h3><p className="mt-4 max-w-xs leading-7 text-slate-600">{text}</p></PremiumReveal>)}</div></section>

            <section className="bg-[#eaf5ef] py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr]"><PremiumReveal><Eyebrow>Vos besoins</Eyebrow><h2 className="mt-5 max-w-md font-[family-name:var(--font-display)] text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl">Une solution adaptée à chaque étape de votre activité.</h2><p className="mt-6 max-w-sm leading-7 text-slate-600">Du lancement de votre entreprise à la recherche d’un nouveau partenaire, la première étape reste la même : bien comprendre votre besoin.</p></PremiumReveal><div className="grid gap-3 sm:grid-cols-2">{needs.map((need, index) => <PremiumReveal key={need} delay={index * 0.04} className="group flex items-center justify-between rounded-xl border border-emerald-950/10 bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-700/35 hover:shadow-md"><span className="font-semibold text-slate-800">{need}</span><ArrowRight className="h-4 w-4 text-emerald-700 transition-transform group-hover:translate-x-1" /></PremiumReveal>)}</div></div></section>

            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"><PremiumReveal className="mx-auto max-w-2xl text-center"><Eyebrow>Pourquoi FiduConnect</Eyebrow><h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl">Avancer avec plus de clarté.</h2></PremiumReveal><div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{reassurances.map(([Icon, title, text], index) => <PremiumReveal key={title as string} delay={index * 0.08} className="border-t border-slate-300 pt-5"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100"><Icon className="h-5 w-5 text-emerald-800" /></div><h3 className="mt-8 text-lg font-bold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text as string}</p></PremiumReveal>)}</div></section>

            <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-24"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><PremiumReveal><Eyebrow light>Votre demande</Eyebrow><h2 className="mt-5 max-w-lg font-[family-name:var(--font-display)] text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl">Prêt à trouver une fiduciaire adaptée ?</h2><p className="mt-6 max-w-md leading-7 text-slate-300">Expliquez-nous votre situation. Nous vous aidons à avancer simplement, avec une orientation cohérente avec votre entreprise.</p><p className="mt-10 text-sm font-semibold text-emerald-300">Gratuit · Sans engagement · Confidentiel</p></PremiumReveal><PremiumReveal delay={0.1} className="rounded-[1.4rem] bg-white p-5 text-slate-950 shadow-2xl sm:p-8"><SeaLeadForm idPrefix="final" /></PremiumReveal></div></section>

            <footer className="bg-slate-950 px-5 py-7 text-center text-xs text-slate-500 sm:px-8"><p>© {new Date().getFullYear()} FiduConnect. <Link href="/mentions-legales" className="underline underline-offset-2 hover:text-white">Mentions légales</Link><span className="px-2">·</span><Link href="/confidentialite" className="underline underline-offset-2 hover:text-white">Confidentialité</Link></p></footer>
        </main>
    );
}

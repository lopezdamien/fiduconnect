import Link from 'next/link';
import { ArrowRight, Check, Clock3, Compass, ShieldCheck } from 'lucide-react';
import { SeaLeadForm } from '@/components/SeaLeadForm';
import { JsonLd } from '@/components/JsonLd';
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

export default function Home() {
    return <main className="overflow-hidden bg-white text-slate-900">
        <JsonLd schema={organizationSchema()} />
        <header className="border-b border-slate-100 bg-white/95"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6"><Link href="/" className="text-lg font-extrabold tracking-tight text-slate-950">FIDUCONNECT<span className="text-emerald-700">.</span></Link><a href="#demande" className="text-sm font-semibold text-emerald-800 hover:text-emerald-950">Trouver ma fiduciaire</a></div></header>
        <section className="relative bg-slate-950 py-12 sm:py-16 lg:py-20"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_38%)]" /><div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16"><div><p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Fiduciaires à Genève</p><h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">Trouvez la fiduciaire adaptée à votre entreprise à Genève.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Décrivez-nous votre besoin. FiduConnect vous aide à identifier et comparer des partenaires adaptés, gratuitement et sans engagement.</p><div className="mt-8 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">{['Gratuit', 'Sans engagement', 'Réponse rapide'].map((item) => <p key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" />{item}</p>)}</div><a href="#demande" className="mt-9 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-500">Trouver ma fiduciaire <ArrowRight className="h-4 w-4" /></a></div><div id="demande" className="scroll-mt-5 rounded-2xl bg-white p-5 shadow-2xl shadow-black/20 sm:p-7"><h2 className="text-xl font-bold tracking-tight text-slate-950">Parlez-nous de votre besoin</h2><p className="mb-5 mt-1 text-sm leading-6 text-slate-600">Remplissez ce court formulaire. Nous vous recontactons pour vous orienter.</p><SeaLeadForm idPrefix="hero" /></div></div></section>
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Simple et clair</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Comment ça fonctionne</h2></div><div className="mt-12 grid gap-6 md:grid-cols-3">{steps.map(([number, title, text]) => <article key={number} className="rounded-xl border border-slate-200 p-6"><span className="text-sm font-bold text-emerald-700">{number}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div></section>
        <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20"><div className="mx-auto max-w-6xl px-5 sm:px-6"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Vos besoins</p><h2 className="mt-3 text-3xl font-bold tracking-tight">Une orientation pour les sujets qui comptent</h2></div><div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{needs.map((need) => <div key={need} className="flex items-center gap-3 rounded-lg bg-white p-4 font-semibold text-slate-800 shadow-sm"><Check className="h-5 w-5 shrink-0 text-emerald-700" />{need}</div>)}</div></div></section>
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24"><div className="grid gap-8 md:grid-cols-4">{reassurances.map(([Icon, title, text]) => <div key={title as string} className="text-center"><div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50"><Icon className="h-5 w-5 text-emerald-700" /></div><h3 className="mt-4 font-bold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text as string}</p></div>)}</div></section>
        <section className="bg-slate-950 py-16 sm:py-20"><div className="mx-auto grid max-w-5xl gap-9 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div className="text-white"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-400">Votre demande</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Prêt à trouver une fiduciaire adaptée ?</h2><p className="mt-5 leading-7 text-slate-300">Expliquez-nous votre situation. Nous vous aidons à avancer simplement et rapidement.</p></div><div className="rounded-2xl bg-white p-5 sm:p-7"><SeaLeadForm idPrefix="final" /></div></div></section>
        <footer className="bg-white py-7 text-center text-xs text-slate-500"><p>© {new Date().getFullYear()} FiduConnect. <Link href="/mentions-legales" className="underline underline-offset-2 hover:text-slate-800">Mentions légales</Link><span className="px-2">·</span><Link href="/confidentialite" className="underline underline-offset-2 hover:text-slate-800">Confidentialité</Link></p></footer>
    </main>;
}

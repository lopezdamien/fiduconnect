import { Section } from "@/components/Section";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ressources & Actualités Comptables Genève | FIDU",
    description: "Guides pratiques, articles de fond et actualités fiscales pour les PME suisses.",
};

export default function Resources() {
    const articles = [
        {
            title: "Changer de fiduciaire à Genève : comment organiser la transition en toute sécurité ?",
            excerpt: "Changer de fiduciaire est une décision stratégique. Découvrez comment organiser une transition fluide, sans risque fiscal et en toute transparence pour votre PME.",
            category: "Gestion Fiduciaire",
            date: "15 Février 2026",
            slug: "/changer-fiduciaire-geneve"
        }
    ];

    return (
        <>
            <section className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                    Ressources & Conseils
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
                    La connaissance est votre meilleure protection contre les risques fiscaux.
                </p>
            </section>

            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {articles.map((article) => (
                        <article key={article.slug} className="flex flex-col items-start bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-slate-500">{article.date}</time>
                                <span className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100">
                                    {article.category}
                                </span>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600">
                                    <Link href={article.slug.startsWith('/') ? article.slug : `/blog/${article.slug}`}>
                                        <span className="absolute inset-0" />
                                        {article.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
                                    {article.excerpt}
                                </p>
                            </div>
                            <Link href={article.slug.startsWith('/') ? article.slug : `/blog/${article.slug}`} className="mt-6 flex items-center text-sm font-semibold text-green-700 hover:text-green-800">
                                Lire l&apos;article <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </article>
                    ))}
                </div>
            </Section>

            <Section className="bg-slate-50">
                <div className="text-center">
                    <BookOpen className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Vous cherchez un sujet précis ?</h2>
                    <p className="text-slate-600 mb-6">Consultez nos dossiers thématiques.</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-sm hover:border-slate-400 cursor-pointer">TVA & Fiscalité</span>
                        <span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-sm hover:border-slate-400 cursor-pointer">Charges Sociales</span>
                        <span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-sm hover:border-slate-400 cursor-pointer">Gestion Comptable</span>
                        <span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-sm hover:border-slate-400 cursor-pointer">Création d&apos;Entreprise</span>
                    </div>
                </div>
            </Section>
        </>
    );
}

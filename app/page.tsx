import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import Link from "next/link";
import { ArrowRight, AlertTriangle, FileText, TrendingDown, CheckCircle2 } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Organisation Comptable & TVA Genève | FIDUCONNECT",
  description: "Votre comptabilité est-elle à jour ? TVA, charges sociales, impôts : nous analysons votre situation et vous orientons vers le bon partenaire fiduciaire.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 max-w-4xl mx-auto">
            Ne laissez plus votre conformité fiscale au hasard.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            Anticipez les contrôles TVA et optimisez vos charges sociales à Genève. Nous diagnostiquons vos risques en 15 minutes et vous connectons à la fiduciaire experte de votre secteur.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="#contact">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/20 transform transition hover:scale-105">
                Obtenir mon diagnostic gratuit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 - Identification Problème */}
      {/* Section 1 - Identification Problème */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            3 risques majeurs pour les PME genevoises
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Une gestion approximative peut coûter très cher.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="h-full rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all hover:border-orange-200 bg-slate-50/50">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600 mb-6">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Risque TVA</h3>
            <p className="text-slate-600 text-sm mb-4">
              Évitez les redressements liés au seuil des 100k ou à la mauvaise méthode de décompte (effective vs taux de la dette fiscalenette).
            </p>
          </div>

          {/* Card 2 */}
          <div className="h-full rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all hover:border-orange-200 bg-slate-50/50">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-6">
              <TrendingDown className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Charges Sociales</h3>
            <p className="text-slate-600 text-sm mb-4">
              Sécurisez vos affiliations AVS/LPP. Une erreur de calcul peut entraîner des rattrapages coûteux plusieurs années après.
            </p>
          </div>

          {/* Card 3 */}
          <div className="h-full rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all hover:border-orange-200 bg-slate-50/50">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Perte de Temps</h3>
            <p className="text-slate-600 text-sm mb-4">
              Cessez de gérer l'administratif seul. Concentrez-vous sur votre CA et laissez des experts sécuriser vos arrières.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 2 - Sécurisation */}
      {/* Section 2 - Différenciation */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-base font-semibold leading-7 text-green-700">Pourquoi choisir FIDUCONNECT ?</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                L'objectivité d'un partenaire indépendant.
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Contrairement aux cabinets classiques, nous analysons objectivement vos besoins pour vous orienter vers le partenaire genevois le plus compétitif et spécialisé dans votre métier.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Notre approche tiers de confiance</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">✓</span>
                  Analyse neutre de vos risques
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">✓</span>
                  Réseau de fiduciaires certifiées
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">✓</span>
                  Solutions sur-mesure (pas de forfaits inutiles)
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">✓</span>
                  Suivi qualité continu
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Solution & CTA Form */}
      {/* Section 3 - Solution & CTA Form */}
      <Section id="contact" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Votre audit de sécurité comptable
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Ce n'est pas un appel de vente. C'est un diagnostic de sécurité pour votre entreprise. Nous identifions vos points de vulnérabilité et vous proposons des solutions concrètes.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                <span className="text-slate-700">Diagnostic flash (15 min)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                <span className="text-slate-700">Recommandations immédiates</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                <span className="text-slate-700">Zéro engagement, 100% confidentiel</span>
              </li>
            </ul>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 mb-8">
              <p className="text-sm text-slate-500 italic">
                &quot;Le diagnostic m'a permis de réaliser que je payais trop de TVA depuis 2 ans. Merci pour la transparence.&quot;
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">— Marc D., Restaurateur à Carouge</p>
            </div>

            {/* Social Proof / Secteurs */}
            <div>
              <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wider">Service 100% Genevois - Expertise locale garantie</p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
                <span className="px-3 py-1 bg-slate-100 rounded-full border border-slate-200">Restaurateurs</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full border border-slate-200">Indépendants</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full border border-slate-200">Santé</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full border border-slate-200">Artisans</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full border border-slate-200">Tech & Services</span>
              </div>
            </div>
          </div>

          <div className="sticky top-24">
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}

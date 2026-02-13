import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import Link from "next/link";
import { ArrowRight, AlertTriangle, FileText, TrendingDown, CheckCircle2 } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Expertise Comptable Genève | Audit & Orientation PME | FIDU",
  description: "Cabinet d'analyse comptable et fiscale à Genève. Nous ne remplaçons pas votre fiduciaire, nous optimisons votre gestion. Diagnostic gratuit.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 max-w-4xl mx-auto">
            Vous pilotez votre entreprise… <br className="hidden sm:block" />
            <span className="text-slate-400">ou vous subissez vos chiffres ?</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            TVA, impôts, charges sociales : un manque de visibilité coûte plus cher que vous ne le pensez.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/diagnostic">
              <Button size="lg" className="bg-green-700 hover:bg-green-600">
                Faire un point gratuit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent">
                Découvrir nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 - Identification Problème */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Les 3 zones de confusion fréquentes
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Beaucoup de PME genevoises naviguent à vue sur ces sujets critiques.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <Link href="/services/tva" className="group block h-full">
            <div className="h-full rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all hover:border-green-200">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-6">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-800 transition-colors">TVA & Assujettissement</h3>
              <p className="text-slate-600 text-sm mb-4">
                Le seuil de 100k est souvent mal interprété. Beaucoup déclarent trop tard ou choisissent la mauvaise méthode.
              </p>
              <span className="text-sm font-semibold text-green-700 flex items-center">
                En savoir plus <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/services/comptabilite" className="group block h-full">
            <div className="h-full rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all hover:border-green-200">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
                <TrendingDown className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-800 transition-colors">Impôts & Anticipation</h3>
              <p className="text-slate-600 text-sm mb-4">
                Découvrir sa charge fiscale une fois les comptes bouclés empêche toute optimisation.
              </p>
              <span className="text-sm font-semibold text-green-700 flex items-center">
                En savoir plus <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/services/charges-salaires" className="group block h-full">
            <div className="h-full rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all hover:border-green-200">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-800 transition-colors">Salaire vs Dividende</h3>
              <p className="text-slate-600 text-sm mb-4">
                L&apos;arbitrage entre salaire et dividende impacte vos charges sociales et votre impôt privé.
              </p>
              <span className="text-sm font-semibold text-green-700 flex items-center">
                En savoir plus <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </Section>

      {/* Section 2 - Comptabilité Subie */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-700">Réalité Entrepreneuriale</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Une entreprise ne devrait pas subir ses chiffres
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Beaucoup de dirigeants découvrent leurs résultats une fois par an lors du rendez-vous bilan. C&apos;est trop tard.
              Une comptabilité utile doit être un tableau de bord, pas un rétroviseur.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Solution & CTA Form */}
      <Section id="contact" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Faire le point avant que cela ne coûte plus cher
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Nous analysons votre organisation comptable et fiscale actuelle.
              C&apos;est sans engagement et sans promesse irréaliste. Juste un regard professionnel neutre et structuré.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                <span className="text-slate-700">Analyse de cohérence TVA</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                <span className="text-slate-700">Revue des acomptes fiscaux</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                <span className="text-slate-700">Orientation vers le bon partenaire fiduciaire</span>
              </li>
            </ul>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-sm text-slate-500 italic">
                &quot;Ce diagnostic m&apos;a permis de réaliser que je payais 15% de trop en charges sociales par simple méconnaissance des statuts.&quot;
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">— Un dirigeant de PME genevoise</p>
            </div>
          </div>

          <div>
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}

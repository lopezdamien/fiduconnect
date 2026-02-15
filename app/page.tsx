import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

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
            Organisation de comptabilité & TVA pour PME à Genève
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            Nous structurons et mettons en place votre mandat fiduciaire avec un partenaire sélectionné — simple, clair et sécurisé.
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-4 text-slate-300">
            <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Interlocuteur dédié</li>
            <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Process structuré</li>
            <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Transition simplifiée</li>
          </ul>

          <div className="mt-10 flex flex-col items-center justify-center gap-y-4">
            <Link href="/contact">
              <Button size="lg" className="bg-green-700 hover:bg-green-600 w-full sm:w-auto">
                Demander une offre personnalisée <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sm text-slate-400">
              Réponse sous 24h ouvrées — sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 - Identification Problème */}
      {/* Section 1 - Positionnement & Approche */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Une approche organisée et indépendante
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Nous analysons votre situation, organisons la mise en place du mandat et coordonnons le suivi comptable avec un partenaire fiduciaire basé à Genève. Vous bénéficiez d’un cadre clair et d’un interlocuteur unique.
          </p>
        </div>
      </section>

      {/* Section 2 - Services */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Mandats fiduciaires structurés pour PME
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-xl bg-white p-8 shadow-sm border border-slate-100">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
              <TrendingDown className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Tenue comptable</h3>
            <p className="text-slate-600 text-sm">
              Saisie rigoureuse de vos pièces et bouclement annuel conforme aux normes suisses.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-white p-8 shadow-sm border border-slate-100">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Déclarations TVA</h3>
            <p className="text-slate-600 text-sm">
              Établissement et contrôle de vos décomptes TVA. Méthode effective ou taux de la dette fiscale nette.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-white p-8 shadow-sm border border-slate-100">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Salaires & Charges</h3>
            <p className="text-slate-600 text-sm">
              Gestion complète de la paie, des assurances sociales et des impôts à la source.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl bg-white p-8 shadow-sm border border-slate-100">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Déclaration Fiscale</h3>
            <p className="text-slate-600 text-sm">
              Optimisation et remplissage de la déclaration d'impôt pour votre entreprise (PM).
            </p>
          </div>
        </div>
      </Section>

      {/* Section 2 - Sécurisation */}
      {/* Section 3 - Changer de Fiduciaire */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Changer de fiduciaire à Genève, sans stress
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Nous coordonnons la transition pour éviter toute rupture administrative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-bold">1</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Analyse de situation</h3>
              <p className="text-slate-600 text-sm">Nous faisons le point sur l'état de votre comptabilité actuelle et vos besoins.</p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-bold">2</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Organisation du transfert</h3>
              <p className="text-slate-600 text-sm">Nous récupérons les pièces et l'historique auprès de votre ancien prestataire.</p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-bold">3</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Mise en place du suivi</h3>
              <p className="text-slate-600 text-sm">Votre nouveau mandat démarre sur des bases saines et structurées.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/changer-fiduciaire">
              <Button size="lg" variant="outline">
                Organiser la reprise de dossier
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 - Pour Qui */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-12">
            Nous accompagnons
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white rounded-full shadow-sm text-slate-700 font-semibold border border-slate-200">PME genevoises</span>
            <span className="px-6 py-3 bg-white rounded-full shadow-sm text-slate-700 font-semibold border border-slate-200">Indépendants</span>
            <span className="px-6 py-3 bg-white rounded-full shadow-sm text-slate-700 font-semibold border border-slate-200">Sociétés soumises à la TVA</span>
            <span className="px-6 py-3 bg-white rounded-full shadow-sm text-slate-700 font-semibold border border-slate-200">Entreprises en création</span>
          </div>
        </div>
      </section>

      {/* Section 3 - Solution & CTA Form */}
      {/* Section 5 - FAQ */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Êtes-vous une fiduciaire ?</h3>
              <p className="text-slate-600">
                Nous sommes un service d'organisation et de structuration comptable. Nous analysons vos besoins et mettons en place votre mandat avec un partenaire fiduciaire agréé à Genève. Vous bénéficiez ainsi d'une coordination professionnelle et d'un interlocuteur dédié pour le suivi.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Combien coûte un mandat ?</h3>
              <p className="text-slate-600">
                Le coût dépend du volume de pièces comptables et de la complexité de votre dossier (nombre de salariés, assujettissement TVA). Nous vous fournissons une offre détaillée et transparente sous 24h après analyse de votre situation.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Comment se passe la mise en place ?</h3>
              <p className="text-slate-600">
                L'organisation est rapide : 1. Nous définissons vos besoins. 2. Nous structurons le mandat avec le partenaire. 3. Nous mettons en place les outils de transmission des pièces. Le tout peut être opérationnel en moins de 48h.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Travaillez-vous avec des PME déjà soumises à la TVA ?</h3>
              <p className="text-slate-600">
                Oui, c'est notre cœur de métier. Nous gérons la reprise de mandats existants (décomptes effectifs ou TDFN) et vérifions la conformité des périodes précédentes.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

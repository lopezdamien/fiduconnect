import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Search,
  Layers,
  LayoutDashboard,
  FileText,
  AlertCircle,
  HelpCircle,
  Briefcase
} from "lucide-react";
import { Metadata } from 'next';
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "FiduConnect | Diagnostic et optimisation fiduciaire en Suisse romande",
  description: "Vous souhaitez changer de fiduciaire en Suisse romande ? Comparez les honoraires, la TVA et la qualité de service. Diagnostic gratuit pour PME et indépendants.",
  alternates: {
    canonical: "/",
  }
};

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION (Premium & Structured) */}
      <section className="relative bg-slate-900 pt-40 pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-[900px] mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8 leading-tight">
              30 minutes pour clarifier et sécuriser votre situation comptable.
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-300 font-medium">
              FiduConnect organise un diagnostic stratégique gratuit avec un expert fiduciaire partenaire afin d’identifier vos points de fragilité, structurer votre situation et éviter des erreurs coûteuses.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 text-slate-200 text-lg">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Analyse claire de votre situation TVA</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Identification des zones de fragilité</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Organisation d’une gestion conforme</span>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-center gap-4">
              <Link href="#audit">
                <Button size="lg" className="bg-green-700 hover:bg-green-800 px-10 py-7 text-lg shadow-2xl shadow-green-900/30 transform transition hover:scale-105">
                  Demander une consultation gratuite de 30 minutes
                </Button>
              </Link>
              <p className="text-sm text-slate-500 mt-2">
                Sans engagement. Réponse sous 24h ouvrées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION PROBLÉMATIQUE (Tension Soft) */}
      <Section className="bg-white py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
            Une gestion mal structurée finit toujours par coûter du temps… ou de l’argent.
          </h2>
          <p className="text-lg text-slate-600 mb-16 leading-relaxed max-w-3xl mx-auto">
            Une interprétation imprécise des obligations TVA, un manque de suivi ou une organisation floue peuvent entraîner :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              "Rappels fiscaux imprévus",
              "Pénalités de retard",
              "Stress administratif",
              "Perte de temps en gestion"
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 font-medium hover:bg-slate-100 transition-colors">
                {item}
              </div>
            ))}
          </div>

          <div>
            <Link href="#audit" className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors underline decoration-slate-300 underline-offset-4">
              Vérifier ma situation
            </Link>
          </div>
        </div>
      </Section>

      {/* 3. SECTION POSITIONNEMENT (Carte Premium) */}
      <Section className="bg-slate-50 border-y border-slate-200 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              FiduConnect n’est pas une fiduciaire classique.
            </h2>
            <p className="text-xl text-slate-600">
              Nous structurons votre situation avant toute décision.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 lg:p-14 border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="flex flex-col items-start space-y-3">
                <div className="p-3 bg-blue-50 rounded-xl mb-2">
                  <LayoutDashboard className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Structurer l’analyse</h3>
                <p className="text-slate-600 leading-relaxed">Audit initial complet.</p>
              </div>

              <div className="flex flex-col items-start space-y-3">
                <div className="p-3 bg-orange-50 rounded-xl mb-2">
                  <Search className="h-6 w-6 text-orange-700" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Identifier les fragilités</h3>
                <p className="text-slate-600 leading-relaxed">Détection des points sensibles.</p>
              </div>

              <div className="flex flex-col items-start space-y-3">
                <div className="p-3 bg-green-50 rounded-xl mb-2">
                  <Layers className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Organiser la gestion</h3>
                <p className="text-slate-600 leading-relaxed">Mise en place adaptée à votre structure.</p>
              </div>

              <div className="flex flex-col items-start space-y-3">
                <div className="p-3 bg-purple-50 rounded-xl mb-2">
                  <ShieldCheck className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Sécuriser la continuité</h3>
                <p className="text-slate-600 leading-relaxed">Accompagnement fluide et conforme.</p>
              </div>
            </div>

            <div className="mt-14 pt-10 border-t border-slate-100 text-center space-y-4">
              <p className="text-lg text-slate-600">
                Les prestations comptables sont ensuite réalisées par un expert fiduciaire partenaire sélectionné pour sa rigueur et sa conformité.
              </p>
              <p className="text-lg text-green-700 font-bold uppercase tracking-wide">
                UN MANDAT BIEN STRUCTURÉ DÈS LE DÉPART CHANGE TOUT.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. PROCESSUS (Simplifié & Minimaliste) */}
      <Section className="bg-white py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-16">
            Un processus clair en 3 étapes.
          </h2>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Ligne de connexion */}
            <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-[1px] bg-slate-200 -z-10"></div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center text-3xl font-bold text-slate-900 shadow-md mb-6 group-hover:border-green-500 group-hover:text-green-700 transition-colors">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Consultation stratégique (30 min)</h3>
              <p className="text-slate-600 leading-relaxed px-4">Échange structuré pour comprendre votre situation.</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center text-3xl font-bold text-slate-900 shadow-md mb-6 group-hover:border-green-500 group-hover:text-green-700 transition-colors">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Analyse et cadrage</h3>
              <p className="text-slate-600 leading-relaxed px-4">Diagnostic précis des risques et obligations.</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center text-3xl font-bold text-slate-900 shadow-md mb-6 group-hover:border-green-500 group-hover:text-green-700 transition-colors">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mise en relation qualifiée</h3>
              <p className="text-slate-600 leading-relaxed px-4">Orientation vers un expert fiduciaire partenaire adapté.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. SECTION TVA (Premium) */}
      <section className="bg-slate-900 py-36 text-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FileText className="h-12 w-12 text-slate-300 mx-auto mb-8 opacity-70" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            La TVA : un sujet technique qui mérite un cadrage précis.
          </h2>
          <div className="prose prose-lg prose-invert mx-auto text-slate-300 space-y-8">
            <p className="text-xl text-white/95 font-light leading-relaxed">
              Méthode effective ou TDFN, seuils d’assujettissement, taux applicables…
              <br />
              Une vérification structurée permet d’éviter des régularisations futures.
            </p>
            <div className="pt-8">
              <Link href="#audit">
                <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 rounded-lg shadow-lg shadow-green-900/40 text-lg transition-all transform hover:scale-105">
                  Faire analyser ma situation TVA
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CHANGEMENT DE FIDUCIAIRE (Continuité) */}
      <Section className="bg-slate-50 py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="bg-white rounded-2xl p-10 lg:p-16 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                Changer de fiduciaire, en toute continuité.
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Une transition organisée garantit l'absence de toute interruption administrative et la bonne tenue de vos comptes.
              </p>
              <Link href="#audit">
                <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 shadow-lg shadow-green-900/10">
                  Organiser ma transition
                </Button>
              </Link>
            </div>
            <div className="flex-1 w-full">
              <ul className="space-y-4">
                <li className="flex items-center text-slate-800 font-medium p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-green-700 mr-4 shrink-0" /> Continuité des déclarations
                </li>
                <li className="flex items-center text-slate-800 font-medium p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-green-700 mr-4 shrink-0" /> Transmission structurée des documents
                </li>
                <li className="flex items-center text-slate-800 font-medium p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-green-700 mr-4 shrink-0" /> Absence d’interruption administrative
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. SECTION TYPES D'ENTREPRISES (Refined Design) */}
      <Section className="bg-white py-20 border-t border-slate-100">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-12">
            Nous accompagnons notamment
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Indépendants",
              "Sociétés à responsabilité limitée (Sàrl)",
              "Petites et Moyennes Entreprises (PME)",
              "Consultants & freelances",
              "Artisans",
              "Sociétés anonymes (SA)"
            ].map((type, index) => (
              <span key={index} className="px-8 py-4 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100 text-slate-700 font-medium cursor-default">
                {type}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* 8. FAQ (Réécriture Premium) */}
      <Section className="bg-slate-50 py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-16">
            Questions fréquentes
          </h2>
          <div className="grid gap-6">
            <details className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-lg select-none">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Quel est le rôle exact de FiduConnect ?</span>
                </div>
                <div className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </summary>
              <p className="mt-4 leading-relaxed text-slate-700 pl-8">
                FiduConnect organise et structure la mise en relation avec un expert fiduciaire partenaire. Les prestations comptables sont réalisées directement par cet expert.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-lg select-none">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>La consultation est-elle vraiment gratuite ?</span>
                </div>
                <div className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </summary>
              <p className="mt-4 leading-relaxed text-slate-700 pl-8">
                Oui. Elle permet d’analyser votre situation sans engagement.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-lg select-none">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Suis-je obligé de changer de fiduciaire ?</span>
                </div>
                <div className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </summary>
              <p className="mt-4 leading-relaxed text-slate-700 pl-8">
                Non. L’objectif est d’évaluer et de structurer votre situation.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-lg select-none">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Pourquoi passer par FiduConnect plutôt que contacter directement une fiduciaire ?</span>
                </div>
                <div className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </summary>
              <p className="mt-4 leading-relaxed text-slate-700 pl-8">
                FiduConnect structure en amont votre situation afin d’orienter votre mandat vers un expert réellement adapté à vos besoins.
              </p>
            </details>
          </div>
        </div>
      </Section>

      {/* 9. FORMULAIRE FINAL */}
      <div id="audit" className="bg-slate-900 py-32 scroll-mt-20 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8 leading-tight">
                Prenez 30 minutes pour sécuriser votre gestion comptable.
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-center text-lg text-slate-300">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-green-500" />
                  </div>
                  <span>Temps estimé : 1 minute</span>
                </div>
                <div className="flex items-center text-lg text-slate-300">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-4">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                  </div>
                  <span>Réponse sous 24h ouvrées</span>
                </div>
              </div>

              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <p className="text-slate-400 text-sm leading-relaxed">
                  Vos informations sont strictement confidentielles et utilisées uniquement pour préparer votre consultation.
                </p>
              </div>
            </div>
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Accordion } from "@/components/Accordion";
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
} from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, organizationSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Diagnostic et optimisation fiduciaire à Genève",
  description:
    "Vous souhaitez changer de fiduciaire à Genève ? Comparez les honoraires, la TVA et la qualité de service. Diagnostic gratuit pour PME et indépendants.",
  path: "/",
});

const FAQ = [
  {
    question: "Quel est le rôle exact de FiduConnect ?",
    answer:
      "FiduConnect organise et structure la mise en relation avec un expert fiduciaire partenaire. Les prestations comptables sont réalisées directement par cet expert.",
  },
  {
    question: "La consultation est-elle vraiment gratuite ?",
    answer: "Oui. Elle permet d’analyser votre situation sans engagement.",
  },
  {
    question: "Suis-je obligé de changer de fiduciaire ?",
    answer: "Non. L’objectif est d’évaluer et de structurer votre situation.",
  },
  {
    question:
      "Pourquoi passer par FiduConnect plutôt que contacter directement une fiduciaire ?",
    answer:
      "FiduConnect structure en amont votre situation afin d’orienter votre mandat vers un expert réellement adapté à vos besoins.",
  },
];

const APPROCHE = [
  { icon: LayoutDashboard, color: "text-blue-700 bg-blue-50", title: "Structurer l’analyse", text: "Audit initial complet." },
  { icon: Search, color: "text-orange-700 bg-orange-50", title: "Identifier les fragilités", text: "Détection des points sensibles." },
  { icon: Layers, color: "text-green-700 bg-green-50", title: "Organiser la gestion", text: "Mise en place adaptée à votre structure." },
  { icon: ShieldCheck, color: "text-purple-700 bg-purple-50", title: "Sécuriser la continuité", text: "Accompagnement fluide et conforme." },
];

const ETAPES = [
  { n: "1", title: "Consultation stratégique (30 min)", text: "Échange structuré pour comprendre votre situation." },
  { n: "2", title: "Analyse et cadrage", text: "Diagnostic précis des risques et obligations." },
  { n: "3", title: "Mise en relation qualifiée", text: "Orientation vers un expert fiduciaire partenaire adapté." },
];

const DOULEURS = ["Rappels fiscaux imprévus", "Pénalités de retard", "Stress administratif", "Perte de temps en gestion"];

const CIBLES = [
  "Indépendants",
  "Sociétés à responsabilité limitée (Sàrl)",
  "Petites et Moyennes Entreprises (PME)",
  "Consultants & freelances",
  "Artisans",
  "Sociétés anonymes (SA)",
];

export default function Home() {
  return (
    <>
      <JsonLd schema={[organizationSchema(), faqSchema(FAQ)]} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-28 sm:pt-40 sm:pb-48">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        {/* Halo vert diffus */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-600/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-[900px]">
            <div className="mb-8 flex justify-center">
              <Eyebrow onDark>Diagnostic gratuit · Genève</Eyebrow>
            </div>
            <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              30 minutes pour clarifier et sécuriser votre situation comptable.
            </h1>
            <p className="mt-6 text-xl font-medium leading-8 text-slate-300">
              FiduConnect organise un diagnostic stratégique gratuit avec un expert fiduciaire partenaire afin d’identifier vos points de fragilité, structurer votre situation et éviter des erreurs coûteuses.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-6 text-lg text-slate-200 sm:flex-row sm:gap-10">
              {["Analyse claire de votre situation TVA", "Identification des zones de fragilité", "Organisation d’une gestion conforme"].map((item) => (
                <div key={item} className="flex items-center justify-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-center gap-4">
              <Link href="#audit">
                <Button variant="cta" size="xl">
                  Demander une consultation gratuite de 30 minutes
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <p className="mt-2 text-sm text-slate-500">Sans engagement. Réponse sous 24h ouvrées.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLÉMATIQUE */}
      <Section className="bg-white py-16 sm:py-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <Eyebrow color="orange">Les risques d’une gestion floue</Eyebrow>
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Une gestion mal structurée finit toujours par coûter du temps… ou de l’argent.
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-lg leading-relaxed text-slate-600">
            Une interprétation imprécise des obligations TVA, un manque de suivi ou une organisation floue peuvent entraîner :
          </p>

          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DOULEURS.map((item, index) => (
              <Reveal key={item} delay={index * 0.08}>
                <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-6 text-center font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-red-50 hover:shadow-md">
                  <AlertCircle className="h-6 w-6 text-slate-400 transition-colors group-hover:text-red-500" />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>

          <Link href="#audit" className="text-sm font-semibold text-slate-500 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-800">
            Vérifier ma situation
          </Link>
        </Reveal>
      </Section>

      {/* 3. POSITIONNEMENT */}
      <Section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-16 text-center">
            <div className="mb-4 flex justify-center">
              <Eyebrow color="blue">Notre approche</Eyebrow>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              FiduConnect n’est pas une fiduciaire classique.
            </h2>
            <p className="text-xl text-slate-600">Nous structurons votre situation avant toute décision.</p>
          </Reveal>

          <Reveal className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/50 lg:p-14">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              {APPROCHE.map((it) => (
                <div key={it.title} className="group flex flex-col items-start space-y-3">
                  <div className={`mb-2 rounded-xl p-3 transition-transform duration-300 group-hover:scale-110 ${it.color}`}>
                    <it.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{it.title}</h3>
                  <p className="leading-relaxed text-slate-600">{it.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 space-y-4 border-t border-slate-100 pt-10 text-center">
              <p className="text-lg text-slate-600">
                Les prestations comptables sont ensuite réalisées par un expert fiduciaire partenaire sélectionné pour sa rigueur et sa conformité.
              </p>
              <p className="text-lg font-bold uppercase tracking-wide text-green-700">
                Un mandat bien structuré dès le départ change tout.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4. PROCESSUS */}
      <Section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-16 text-center">
            <div className="mb-4 flex justify-center">
              <Eyebrow color="green">Comment ça marche</Eyebrow>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Un processus clair en 3 étapes.</h2>
          </Reveal>

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="absolute left-[15%] right-[15%] top-10 -z-10 hidden h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent md:block" />
            {ETAPES.map((etape, index) => (
              <Reveal key={etape.n} delay={index * 0.12} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-slate-900 to-slate-700 text-3xl font-bold text-white shadow-lg ring-4 ring-white">
                  {etape.n}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{etape.title}</h3>
                <p className="px-4 leading-relaxed text-slate-600">{etape.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. TVA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-green-950 py-28 text-white sm:py-36">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-green-600/15 blur-[100px]" />
        <Reveal className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mb-8 flex justify-center">
            <Eyebrow onDark>TVA suisse</Eyebrow>
          </div>
          <FileText className="mx-auto mb-8 h-12 w-12 text-green-400/80" />
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
            La TVA : un sujet technique qui mérite un cadrage précis.
          </h2>
          <p className="text-xl font-light leading-relaxed text-white/95">
            Méthode effective ou TDFN, seuils d’assujettissement, taux applicables…
            <br />
            Une vérification structurée permet d’éviter des régularisations futures.
          </p>
          <div className="pt-10">
            <Link href="#audit">
              <Button variant="cta" size="lg">
                Faire analyser ma situation TVA
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* 6. CHANGEMENT DE FIDUCIAIRE */}
      <Section className="bg-slate-50 py-16 sm:py-32">
        <Reveal className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center justify-between gap-12 rounded-2xl border border-slate-100 bg-white p-10 shadow-sm md:flex-row lg:p-16">
            <div className="max-w-md">
              <div className="mb-6">
                <Eyebrow color="purple">Transition</Eyebrow>
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">
                Changer de fiduciaire, en toute continuité.
              </h2>
              <p className="mb-8 leading-relaxed text-slate-600">
                Une transition organisée garantit l&apos;absence de toute interruption administrative et la bonne tenue de vos comptes.
              </p>
              <Link href="#audit">
                <Button variant="cta">
                  Organiser ma transition
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <ul className="w-full flex-1 space-y-4">
              {["Continuité des déclarations", "Transmission structurée des documents", "Absence d’interruption administrative"].map((item) => (
                <li key={item} className="flex items-center rounded-lg border border-slate-100 bg-slate-50 p-4 font-medium text-slate-800 transition-colors hover:border-green-200 hover:bg-green-50">
                  <CheckCircle2 className="mr-4 h-5 w-5 shrink-0 text-green-700" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* 7. TYPES D'ENTREPRISES */}
      <Section className="border-t border-slate-100 bg-white py-14 sm:py-20">
        <Reveal className="mx-auto max-w-6xl text-center">
          <div className="mb-5 flex justify-center">
            <Eyebrow color="slate">Pour qui</Eyebrow>
          </div>
          <h2 className="mb-12 text-2xl font-bold tracking-tight text-slate-900">Nous accompagnons notamment</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {CIBLES.map((type) => (
              <span key={type} className="cursor-default rounded-xl border border-slate-100 bg-white px-8 py-4 font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">
                {type}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* 8. FAQ */}
      <Section className="bg-slate-50 py-16 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <Reveal className="mb-16 text-center">
            <div className="mb-4 flex justify-center">
              <Eyebrow color="green">FAQ</Eyebrow>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Questions fréquentes</h2>
          </Reveal>
          <Reveal>
            <Accordion items={FAQ} />
          </Reveal>
        </div>
      </Section>

      {/* 9. FORMULAIRE FINAL */}
      <div id="audit" className="scroll-mt-20 border-t border-slate-800 bg-slate-900 py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <Reveal>
              <div className="mb-8">
                <Eyebrow onDark>Consultation gratuite</Eyebrow>
              </div>
              <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Prenez 30 minutes pour sécuriser votre gestion comptable.
              </h2>

              <div className="mb-10 space-y-6">
                <div className="flex items-center text-lg text-slate-300">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
                    <Clock className="h-5 w-5 text-green-500" />
                  </div>
                  <span>Temps estimé : 1 minute</span>
                </div>
                <div className="flex items-center text-lg text-slate-300">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                  </div>
                  <span>Réponse sous 24h ouvrées</span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
                <p className="text-sm leading-relaxed text-slate-400">
                  Vos informations sont strictement confidentielles et utilisées uniquement pour préparer votre consultation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <LeadForm />
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}

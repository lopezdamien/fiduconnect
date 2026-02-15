import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileText,
  TrendingUp,
  Users,
  RefreshCcw,
  HelpCircle,
  Clock,
  AlertTriangle,
  BookOpen,
  PieChart,
  Target,
  Search
} from "lucide-react";
import { Metadata } from 'next';
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Fiduciaire PME Genève | Mandat Structuré & Conformité Comptable",
  description: "Organisation de mandats fiduciaires pour PME à Genève. Audit conformité gratuit. Nous structurons votre comptabilité, TVA et obligations fiscales. Expert partenaire dédié.",
};

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8 max-w-4xl mx-auto leading-tight">
            Fiduciaire pour PME à Genève
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-300 max-w-3xl mx-auto font-medium">
            Une approche claire et structurée de votre comptabilité.
          </p>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Nous accompagnons les PME genevoises dans la gestion rigoureuse de leur comptabilité et de leurs obligations fiscales, avec une organisation simple, structurée et transparente.
          </p>

          <ul className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-slate-300 font-medium text-lg">
            <li className="flex items-center justify-center"><CheckCircle2 className="h-6 w-6 text-green-500 mr-2" /> Organisation rigoureuse</li>
            <li className="flex items-center justify-center"><CheckCircle2 className="h-6 w-6 text-green-500 mr-2" /> Conformité maîtrisée</li>
            <li className="flex items-center justify-center"><CheckCircle2 className="h-6 w-6 text-green-500 mr-2" /> Process clair et structuré</li>
          </ul>

          <div className="mt-12 flex flex-col items-center gap-4">
            <Link href="#audit">
              <Button size="lg" className="bg-green-700 hover:bg-green-600 px-8 py-6 text-lg shadow-xl shadow-green-900/20 transform transition hover:scale-105">
                Demander une consultation gratuite de 30 minutes <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-slate-400">
              Consultation réalisée par un expert fiduciaire partenaire. Sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BLOC "SITUATIONS FRÉQUENTES" */}
      <Section className="bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Rencontrez-vous l’une de ces situations ?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Une consultation permet d’y voir plus clair et d’identifier les points à sécuriser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Manque de visibilité sur votre TVA ?",
              "Doutes sur votre conformité fiscale ?",
              "Fiduciaire peu réactif ?",
              "Organisation comptable peu structurée ?",
              "Difficulté à obtenir des réponses claires ?"
            ].map((item, index) => (
              <div key={index} className="flex items-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-green-200 transition-colors">
                <Search className="h-6 w-6 text-green-600 mr-4 shrink-0" />
                <span className="text-slate-800 font-medium">{item}</span>
              </div>
            ))}
            <div className="flex items-center justify-center p-6 bg-green-50 rounded-xl border border-green-100">
              <Link href="#audit" className="text-green-800 font-semibold hover:underline flex items-center">
                En discuter avec un expert <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. SECTION SERVICES */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Mandat fiduciaire pour PME à Genève : ce que cela comprend
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Une couverture complète de vos obligations légales et fiscales pour une sérénité totale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Comptabilité PME Genève</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Saisie rigoureuse des pièces comptables, réconciliations bancaires et tenue des grands livres selon les normes suisses. Une gestion claire pour piloter votre activité.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <PieChart className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">TVA Genève & Décomptes</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Établissement précis des décomptes trimestriels ou semestriels. Analyse de la méthode (TDFN vs effective) et respect des délais AFC pour éviter les pénalités.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <TrendingUp className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Bouclement annuel & Bilan</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Clôture des comptes, amortissements et préparation du bilan pour l'assemblée générale. Une vision fidèle de la santé financière de votre PME.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Déclaration fiscale entreprise</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Optimisation et remplissage de la déclaration d'impôt pour SA/SARL ou indépendants. Gestion des relations avec l'administration fiscale cantonale genevoise.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <Users className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Gestion des salaires</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Fiches de paie mensuelles, décomptes charges sociales (AVS/LPP/LAA) et certificats de salaire. Une gestion RH conforme au droit du travail suisse.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center">
            <Target className="h-10 w-10 text-slate-400 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Conseil fiduciaire dédié</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Un interlocuteur unique pour répondre à vos questions et anticiper vos échéances.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. SECTION TVA */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <AlertTriangle className="h-12 w-12 text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-center">
            TVA en Suisse : un point clé pour les PME genevoises
          </h2>

          <div className="prose prose-lg prose-invert mx-auto text-slate-300 space-y-6 text-justify">
            <p className="text-xl font-medium text-white text-center mb-8">
              La TVA représente un point sensible pour de nombreuses PME à Genève.
            </p>
            <p>
              Dès <strong>100’000 CHF</strong> de chiffre d’affaires annuel, l’assujettissement devient obligatoire.
              Une mauvaise interprétation des seuils ou des taux peut générer des risques fiscaux.
            </p>
            <p>
              Notre rôle est d'analyser votre modèle d'affaires pour déterminer la méthode qui optimise votre charge fiscale tout en garantissant une conformité absolue.
            </p>

            <div className="flex justify-center mt-10 pt-4">
              <Link href="#audit">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 transition-colors">
                  Demander une consultation gratuite de 30 minutes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BLOC DIFFÉRENCIATION "POURQUOI NOUS ?" */}
      <Section className="bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-12">
            Pourquoi passer par notre structure ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Expert Partenaire</h3>
              <p className="text-sm text-slate-700">Consultation directe avec un expert fiduciaire partenaire.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Clarté Immédiate</h3>
              <p className="text-sm text-slate-700">Organisation claire dès le premier échange.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Vision Structurée</h3>
              <p className="text-sm text-slate-700">Vision structurée de vos obligations.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-orange-700" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Simplicité</h3>
              <p className="text-sm text-slate-700">Approche simple, professionnelle et transparente.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. SECTION CHANGER DE FIDUCIAIRE */}
      <Section className="bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Changer de fiduciaire à Genève
            </h2>

            <div className="prose prose-slate text-slate-700 space-y-6">
              <p>
                Votre fiduciaire actuelle ne répond plus à vos attentes ? Changer de partenaire est une démarche saine de gestion, mais elle nécessite de l'organisation.
              </p>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" /> Signaux d'alerte :
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Retards répétés</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Manque d’explication sur la TVA</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Absence de suivi structuré</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Communication difficile</li>
                </ul>
              </div>

              <p className="font-medium text-slate-900">
                La transition vers un nouvel expert fiduciaire peut être organisée de manière simple et structurée.
              </p>
              <p>
                Nous organisons le transfert pour garantir la continuité de votre activité sans perte de données (récupération balances, grand livre, historique).
              </p>

              <div className="mt-8">
                <Link href="#audit">
                  <Button className="bg-slate-900 text-white hover:bg-slate-800">
                    Demander une consultation gratuite de 30 minutes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200 flex items-center justify-center min-h-[400px] shadow-sm">
            <div className="text-center">
              <RefreshCcw className="h-24 w-24 text-green-100 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Transition Maîtrisée</h3>
              <p className="text-slate-600 max-w-xs mx-auto">
                Nous garantissons qu'aucune pièce ne se perde durant le transfert et que vos obligations continuent d'être respectées.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. SECTION POUR QUI */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-12">
            Des services comptables adaptés à votre structure
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "PME basées à Genève",
              "Indépendants & Freelances",
              "Sociétés à Responsabilité Limitée (Sàrl)",
              "Sociétés Anonymes (SA)",
              "Sociétés soumises à la TVA",
              "Entreprises proches du seuil TVA",
              "Associations & Fondations"
            ].map((item, index) => (
              <span key={index} className="px-8 py-4 bg-white rounded-xl shadow-sm border border-slate-200 text-lg font-semibold text-slate-700 hover:border-green-300 hover:shadow-md transition-all cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir pour sécuriser la gestion comptable de votre PME à Genève.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Êtes-vous une fiduciaire classique ?",
                a: "Nous sommes une structure hybride moderne. Nous ne faisons pas que de la saisie : nous organisons et pilotons votre administratif. Pour la validation des comptes et la fiscalité, nous collaborons avec des experts-comptables genevois certifiés. Vous avez ainsi la réactivité d'une start-up et la sécurité d'une fiduciaire établie."
              },
              {
                q: "L’audit de conformité est-il vraiment gratuit ?",
                a: "Oui, à 100%. C'est notre manière de vous prouver notre valeur. En 30 minutes, nous analysons vos risques (TVA, charges sociales) et votre organisation actuelle. Si vous ne souhaitez pas travailler avec nous ensuite, vous repartez avec nos conseils, sans aucun frais."
              },
              {
                q: "Comment se passe la transition si j'ai déjà une fiduciaire ?",
                a: "C'est notre spécialité. Nous gérons le transfert de A à Z : récupération des balances, grand livre et historiques auprès de votre ancien prestataire. Nous nous assurons qu'il n'y a aucune rupture dans vos déclarations TVA ou salaires durant le changement."
              },
              {
                q: "Vos tarifs sont-ils adaptés aux petites PME ?",
                a: "Absolument. Nous privilégions les forfaits mensuels fixes plutôt que la facturation horaire opaque. En digitalisant les processus d'échange de documents, nous réduisons le temps de saisie inutile pour nous concentrer sur le conseil à forte valeur ajoutée."
              },
              {
                q: "Gérez-vous la TVA Suisse et les impôts ?",
                a: "Oui, nous prenons en charge l'entier du cycle fiscal : décomptes TVA trimestriels ou semestriels, impôts sur le bénéfice et capital, ainsi que la déclaration fiscale personnelle de l'administrateur si besoin."
              },
              {
                q: "Suis-je obligé de me déplacer à Genève ?",
                a: "Non. Bien que nous soyons basés à Genève et ravis de vous rencontrer, toute notre collaboration peut se faire à distance grâce à des outils sécurisés et des visios régulières. Nous nous adaptons à votre rythme d'entrepreneur."
              }
            ].map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-6 hover:border-green-200 transition-colors bg-slate-50/50">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start">
                  <HelpCircle className="h-5 w-5 text-green-600 mr-3 mt-1 shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-slate-700 pl-8 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. CTA FINAL */}
      <div id="audit" className="bg-slate-900 py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Obtenez une vision claire de votre situation comptable
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Ne laissez pas l'administratif freiner votre croissance. Demandez une consultation gratuite de 30 minutes. C'est simple, rapide et réalisé par un expert fiduciaire partenaire.
              </p>
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-900/30 p-3 rounded-lg">
                    <ShieldCheck className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Confidentialité Totale</h4>
                    <p className="text-slate-400 text-sm">Vos données sont protégées et traitées sous le sceau du secret professionnel.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Réponse Rapide</h4>
                    <p className="text-slate-400 text-sm">Un expert analyse votre demande et vous recontacte sous 24h ouvrées.</p>
                  </div>
                </div>
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

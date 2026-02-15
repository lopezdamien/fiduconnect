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
  PieChart
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
          <p className="mt-6 text-xl leading-8 text-slate-300 max-w-3xl mx-auto">
            Une approche claire et structurée de votre comptabilité, TVA et obligations fiscales.
          </p>

          <ul className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-slate-300 font-medium text-lg">
            <li className="flex items-center justify-center"><CheckCircle2 className="h-6 w-6 text-green-500 mr-2" /> Organisation rigoureuse</li>
            <li className="flex items-center justify-center"><CheckCircle2 className="h-6 w-6 text-green-500 mr-2" /> Conformité maîtrisée</li>
            <li className="flex items-center justify-center"><CheckCircle2 className="h-6 w-6 text-green-500 mr-2" /> Process transparent</li>
          </ul>

          <div className="mt-12 flex flex-col items-center gap-4">
            <Link href="#audit">
              <Button size="lg" className="bg-green-700 hover:bg-green-600 px-8 py-6 text-lg shadow-xl shadow-green-900/20 transform transition hover:scale-105">
                Demander une analyse de situation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-slate-400">
              Analyse de 30 minutes — sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SECTION POSITIONNEMENT */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8 text-center">
            Une approche moderne du mandat fiduciaire
          </h2>
          <div className="prose prose-lg prose-slate mx-auto text-justify text-slate-600">
            <p>
              Dans un environnement économique et fiscal aussi rigoureux que celui de la Suisse, la gestion comptable d'une PME ne peut se limiter à une simple saisie de factures. À Genève, où le tissu économique est dense et concurrentiel, choisir le bon partenaire pour votre mandat fiduciaire est une décision stratégique qui impacte directement la pérennité de votre entreprise.
            </p>
            <p>
              Trop souvent, les entrepreneurs, qu'ils soient indépendants ou dirigeants de PME, se retrouvent isolés face à la complexité de leurs obligations. Retards de TVA, incompréhension des décomptes, manque de visibilité sur le résultat, ou pire, risques de redressements fiscaux par manque de suivi : ces situations sont évitables.
            </p>
            <p>
              Notre mission est de vous offrir un cadre structuré et sécurisé. Nous ne sommes pas une simple boîte à lettres, mais un véritable organisateur de votre conformité comptable. Nous analysons votre structure, définissons vos besoins spécifiques (assujettissement TVA, gestion des salaires, optimisation fiscale) et coordonnons la mise en place de votre mandat avec un expert fiduciaire partenaire sélectionné pour sa rigueur et sa compétence à Genève.
            </p>
            <p className="font-semibold text-slate-900 mt-6">
              Cette approche vous garantit :
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Une clarté totale sur vos coûts et vos obligations.</li>
              <li>Une réactivité garantie par un processus de suivi digitalisé.</li>
              <li>La sécurité d'un travail effectué selon les normes suisses les plus strictes.</li>
              <li>Un interlocuteur qui comprend votre métier et parle votre langage, sans jargon inutile.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 3. SECTION PROCESS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Comment nous organisons votre mandat fiduciaire
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Une méthodologie en 4 étapes pour ne rien laisser au hasard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Ligne de connexion (desktop seulement) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

            {/* Étape 1 */}
            <div className="relative bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-green-200 transition-all">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-lg group-hover:bg-green-600 transition-colors">1</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Audit conformité initial</h3>
              <p className="text-slate-600 text-sm">
                Un diagnostic gratuit de 30 minutes pour analyser votre situation actuelle, vos risques TVA et vos besoins en gestion.
              </p>
            </div>

            {/* Étape 2 */}
            <div className="relative bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-green-200 transition-all">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-lg group-hover:bg-green-600 transition-colors">2</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Coordination expert</h3>
              <p className="text-slate-600 text-sm">
                Nous sélectionnons le partenaire fiduciaire genevois idéal et définissons le cahier des charges précis du mandat.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="relative bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-green-200 transition-all">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-lg group-hover:bg-green-600 transition-colors">3</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Mise en place</h3>
              <p className="text-slate-600 text-sm">
                Récupération des historiques, paramétrage des outils comptables et mise en conformité immédiate TVA/Salaires.
              </p>
            </div>

            {/* Étape 4 */}
            <div className="relative bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-green-200 transition-all">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-lg group-hover:bg-green-600 transition-colors">4</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Suivi structuré</h3>
              <p className="text-slate-600 text-sm">
                Votre comptabilité est tenue à jour, vos décomptes envoyés à temps, et vous avez une vision claire de vos chiffres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION SERVICES */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Mandat fiduciaire pour PME à Genève : ce que cela comprend
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Une couverture complète de vos obligations légales et fiscales pour une sérénité totale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Tenue comptable</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Saisie de vos pièces comptables, réconciliations bancaires et tenue des grands livres selon les normes suisses. Une comptabilité tenue au cordeau pour une visibilité parfaite.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <PieChart className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Déclarations TVA</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Établissement des décomptes trimestriels ou semestriels. Analyse de la méthode optimale (TDFN vs effective) et respect rigoureux des délais de l'AFC.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <TrendingUp className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Bouclement annuel</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Clôture des comptes, écritures de transitoires, amortissements et préparation du bilan et du compte de résultat pour votre assemblée générale.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <ShieldCheck className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Déclaration fiscale</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Remplissage et optimisation de la déclaration d'impôt pour les personnes morales (SA/SARL) ou les indépendants. Gestion des relations avec l'administration fiscale cantonale.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <Users className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Gestion des salaires</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fiches de paie mensuelles, décomptes charges sociales (AVS/LPP/LAA), impôt à la source et certificats de salaire annuels. Une gestion RH conforme et sécurisée.
            </p>
          </div>
        </div>
      </Section>

      {/* 5. SECTION TVA (SEO BLOCK) */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <AlertTriangle className="h-12 w-12 text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">
            TVA en Suisse : un point clé pour les PME genevoises
          </h2>
          <div className="prose prose-lg prose-invert mx-auto text-slate-300 space-y-6 text-justify">
            <p>
              La Taxe sur la Valeur Ajoutée (TVA) est l'un des domaines les plus complexes et les plus risqués pour les PME en Suisse. Beaucoup d'entrepreneurs sous-estiment l'impact d'une erreur de gestion TVA, qui peut entraîner des redressements fiscaux rétroactifs sur 5 ans, assortis d'intérêts moratoires lourds.
            </p>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Le seuil critique des 100'000 CHF</h3>
            <p>
              Dès que votre chiffre d'affaires mondial (et non seulement suisse) dépasse 100'000 CHF, l'assujettissement à la TVA devient obligatoire. Ce seuil doit être surveillé de près, surtout pour les startups et les indépendants en croissance. Une inscription tardive est l'une des erreurs les plus fréquentes et les plus coûteuses.
            </p>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Obligations déclaratives et conformité</h3>
            <p>
              Une fois assujetti, la rigueur est de mise. Que vous soyez au décompte effectif (trimestriel) ou au taux de la dette fiscale nette (semestriel), chaque période doit être bouclée avec précision. La méthode TDFN simplifie la gestion administrative mais n'est pas toujours la plus avantageuse économiquement. Notre rôle est d'analyser votre modèle d'affaires pour déterminer la méthode qui optimise votre charge fiscale tout en garantissant une conformité absolue lors d'un éventuel contrôle de l'AFC.
            </p>
            <p>
              Une organisation rigoureuse de vos pièces comptables est la seule défense efficace contre les risques fiscaux. C'est pourquoi nous plaçons la structure et la conformité au cœur de notre mandat fiduciaire à Genève.
            </p>
          </div>
        </div>
      </section>

      {/* 6. SECTION CHANGER DE FIDUCIAIRE */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Changer de fiduciaire à Genève : une transition structurée
            </h2>
            <div className="prose prose-slate text-slate-600 space-y-4">
              <p>
                Votre fiduciaire actuelle ne répond plus à vos attentes ? Vous constatez un manque de réactivité, des erreurs récurrentes ou une opacité dans la facturation ? Changer de fiduciaire est une démarche saine de gestion d'entreprise, mais elle effraie souvent par la peur de la complexité administrative.
              </p>
              <p>
                Chez nous, la transition est un processus maîtrisé. Nous ne nous contentons pas de reprendre votre dossier ; nous organisons le transfert pour garantir la continuité de votre activité sans perte de données.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <RefreshCcw className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <span>Récupération intégrale de l'historique comptable (Grand Livre, Balances).</span>
                </li>
                <li className="flex items-start">
                  <RefreshCcw className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <span>Vérification des périodes fiscales ouvertes et des délais en cours.</span>
                </li>
                <li className="flex items-start">
                  <RefreshCcw className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <span>Mise en place immédiate des nouveaux accès et processus.</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link href="/changer-fiduciaire">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                    Organiser une analyse de situation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex items-center justify-center min-h-[400px]">
            {/* Abstract Illustration or Image could go here */}
            <div className="text-center">
              <ShieldCheck className="h-24 w-24 text-green-100 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Sécurité Administrative</h3>
              <p className="text-slate-500 max-w-xs mx-auto">
                Nous garantissons qu'aucune pièce ne se perde durant le transfert et que vos obligations continuent d'être respectées sans interruption.
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
                Ne laissez pas l'administratif freiner votre croissance. Demandez votre diagnostic gratuit et découvrez comment nous pouvons sécuriser et optimiser votre gestion fiduciaire dès aujourd'hui.
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

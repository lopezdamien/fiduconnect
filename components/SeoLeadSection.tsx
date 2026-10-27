import { SeoLeadForm } from '@/components/SeoLeadForm';
import { SEO_FORM_SENDS_ENABLED } from '@/lib/seo-form-config';

export function SeoLeadSection({ idPrefix }: { idPrefix: string }) {
  return <section className="seo-wrap seo-inline-lead" aria-labelledby={`${idPrefix}-heading`}>
    <div className="seo-inline-lead-copy">
      <p className="sea-eyebrow">Un premier échange · Genève</p>
      <h2 id={`${idPrefix}-heading`} className="sea-title">Parlons de<br /><em>votre besoin.</em></h2>
      <p>Décrivez votre recherche ici. Nous vous rappelons gratuitement sous 24 heures pour préciser votre besoin et préparer une mise en relation.</p>
      <p>Votre demande, le rappel et l’orientation sont gratuits et sans engagement. Les prestations du partenaire sont convenues et facturées séparément.</p>
      <p className="seo-inline-lead-note">FIDUCONNECT est un intermédiaire, pas une fiduciaire. Vos coordonnées ne sont transmises qu’après l’appel et votre validation du rendez-vous.</p>
    </div>
    <div id="demande" className="sea-form-card seo-contact-form seo-inline-lead-form">
      <div className="sea-form-heading"><h3 className="sea-title">Votre demande</h3><p className="mt-3 text-sm leading-6 text-[#6c665e]">Les champs sont obligatoires sauf mention contraire.</p></div>
      {!SEO_FORM_SENDS_ENABLED && <p className="seo-preview-notice" role="note">Aperçu de travail : les envois sont désactivés. Aucune demande ne sera transmise depuis ce formulaire pour le moment.</p>}
      <SeoLeadForm idPrefix={idPrefix} />
      <noscript><p className="seo-preview-notice">Ce formulaire nécessite JavaScript. Vous pouvez nous écrire à contact@fiduconnect.ch.</p></noscript>
    </div>
  </section>;
}

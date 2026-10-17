import { LegalPage } from '@/components/LegalPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Mentions légales',
    description: 'Identité de l’exploitant et fonctionnement du service FIDUCONNECT.',
    path: '/mentions-legales',
    noIndex: true,
});

export default function MentionsLegales() {
    return (
        <LegalPage title="Mentions légales" version="17 octobre 2026">
            <section>
                <h2>1. Exploitant et contact</h2>
                <p>FIDUCONNECT est un service exploité par <strong>Smart Administration – Damien Lopez</strong>.</p>
                <dl className="mt-4 space-y-3">
                    <div><dt className="font-semibold text-[#223b4a]">Raison sociale</dt><dd>Smart Administration Damien Lopez</dd></div>
                    <div><dt className="font-semibold text-[#223b4a]">Numéro d’identification des entreprises (IDE)</dt><dd>CHE-418.678.913</dd></div>
                    <div><dt className="font-semibold text-[#223b4a]">Adresse de contact</dt><dd>Avenue d’Aïre 73C, 1203 Genève, Suisse.</dd></div>
                    <div><dt className="font-semibold text-[#223b4a]">Responsable du site</dt><dd>Damien Lopez.</dd></div>
                    <div><dt className="font-semibold text-[#223b4a]">Contact</dt><dd><a href="mailto:contact@fiduconnect.ch">contact@fiduconnect.ch</a>.</dd></div>
                </dl>
                <p className="mt-3">Ces mentions concernent la page de contact publicitaire <strong>contact.fiduconnect.ch</strong>. Les informations sur vos données figurent dans la <a href="/confidentialite">déclaration de confidentialité</a> ; les outils de mesure et vos choix sont présentés sur la page <a href="/cookies">Cookies et préférences</a>.</p>
            </section>
            <section>
                <h2>2. Le rôle de FIDUCONNECT</h2>
                <p>Nous recueillons votre besoin, vous rappelons gratuitement sous 24 heures et vous aidons à identifier et comparer des partenaires fiduciaires adaptés à votre entreprise à Genève. La demande, le rappel et l’orientation FIDUCONNECT sont gratuits et sans engagement pour vous.</p>
                <h3 className="mb-2 mt-5 font-semibold text-[#223b4a]">Comment FIDUCONNECT est-il rémunéré ?</h3>
                <p>FIDUCONNECT est rémunéré par ses partenaires fiduciaires pour son service de mise en relation. La demande, le rappel et l’orientation restent gratuits pour vous. Les prestations que vous choisissez ensuite de confier à une fiduciaire sont distinctes et soumises aux tarifs et conditions convenus avec elle.</p>
                <p className="mt-3">FIDUCONNECT n’est pas un cabinet fiduciaire et ne fournit pas de conseil comptable, fiscal ou juridique personnalisé. L’orientation porte sur des partenaires du réseau, sans comparaison exhaustive de toutes les fiduciaires du marché.</p>
                <p className="mt-3">Après l’appel, vos coordonnées ne sont transmises au partenaire concerné que si vous validez un rendez-vous. Vous restez libre de donner suite ou non. Les prestations éventuellement commandées à la fiduciaire font l’objet d’un accord distinct avec elle, notamment pour leurs tarifs et leurs conditions.</p>
            </section>
            <section>
                <h2>3. Hébergement et prestataires techniques</h2>
                <p>Le site est hébergé par <a href="https://www.netlify.com/privacy/" rel="noopener noreferrer">Netlify Inc.</a>, États-Unis. Le traitement du formulaire est configuré dans la région Ohio, aux États-Unis. L’envoi des demandes utilise Resend ; la messagerie contact@fiduconnect.ch est hébergée par Infomaniak en Suisse.</p>
                <p className="mt-3">Les traitements associés sont décrits dans la <a href="/confidentialite">déclaration de confidentialité</a>.</p>
            </section>
            <section>
                <h2>4. Informations et responsabilité</h2>
                <p>Le site présente le service d’orientation. Ses informations ne remplacent pas l’analyse de votre situation par un professionnel. Chaque partenaire reste responsable de ses propres conseils et prestations. Ces précisions ne limitent pas les droits que la loi vous reconnaît.</p>
            </section>
            <section>
                <h2>5. Contenus du site</h2>
                <p>Les textes, le logo et les éléments graphiques sont soumis aux droits de leurs titulaires respectifs. Pour une demande de réutilisation, contactez-nous.</p>
            </section>
            <section>
                <h2>6. Droit applicable</h2>
                <p>Le service est destiné aux entreprises recherchant une fiduciaire à Genève. Le droit suisse s’applique, sous réserve des dispositions impératives applicables.</p>
            </section>
        </LegalPage>
    );
}

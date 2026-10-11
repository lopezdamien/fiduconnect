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
        <LegalPage title="Mentions légales">
            <section>
                <h2>1. Exploitant et contact</h2>
                <p>FIDUCONNECT est un service exploité par <strong>Smart Administration – Damien Lopez</strong>.</p>
                <p>Avenue d’Aïre 73C, 1203 Genève, Suisse.<br />Responsable du site : Damien Lopez.<br />E-mail : <a href="mailto:contact@fiduconnect.ch">contact@fiduconnect.ch</a>.</p>
            </section>
            <section>
                <h2>2. Le rôle de FIDUCONNECT</h2>
                <p>Nous recueillons votre besoin, vous rappelons gratuitement sous 24 heures et vous aidons à identifier et comparer des partenaires fiduciaires adaptés à votre entreprise à Genève. La demande, le rappel et l’orientation FIDUCONNECT sont gratuits et sans engagement pour vous.</p>
                <p className="mt-3">FIDUCONNECT n’est pas un cabinet fiduciaire et ne fournit pas de conseil comptable, fiscal ou juridique personnalisé. L’orientation porte sur des partenaires du réseau, sans comparaison exhaustive de toutes les fiduciaires du marché.</p>
                <p className="mt-3">Après l’appel, vos coordonnées ne sont transmises au partenaire concerné que si vous validez un rendez-vous. Vous restez libre de donner suite ou non. Les prestations éventuellement commandées à la fiduciaire font l’objet d’un accord distinct avec elle, notamment pour leurs tarifs et leurs conditions.</p>
            </section>
            <section>
                <h2>3. Hébergement et prestataires techniques</h2>
                <p>L’hébergeur prévu pour la version publiée est <a href="https://www.netlify.com/privacy/" rel="noopener noreferrer">Netlify Inc.</a>, États-Unis. L’envoi des demandes utilise Resend ; la messagerie de réception est hébergée par Infomaniak en Suisse.</p>
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

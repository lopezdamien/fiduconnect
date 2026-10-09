import { LegalPage } from '@/components/LegalPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Confidentialité',
    description: 'Comment FIDUCONNECT utilise les informations de votre demande.',
    path: '/confidentialite',
    noIndex: true,
});

export default function Confidentialite() {
    return (
        <LegalPage title="Votre confidentialité">
            <section>
                <h2>1. Responsable du traitement</h2>
                <p>Smart Administration – Damien Lopez, Avenue d’Aïre 73C, 1203 Genève, Suisse, exploite FIDUCONNECT et est responsable du traitement de vos demandes.</p>
                <p>Contact pour vos données : <a href="mailto:contact@smartadministration.ch">contact@smartadministration.ch</a>.</p>
            </section>
            <section>
                <h2>2. Informations recueillies</h2>
                <ul>
                    <li>Votre prénom, nom, e-mail et téléphone, nécessaires pour vous recontacter.</li>
                    <li>Votre situation et votre besoin principal, pour préparer le rappel.</li>
                    <li>Le nom de votre entreprise et vos précisions, si vous les fournissez.</li>
                </ul>
                <p className="mt-3">Les serveurs peuvent traiter des informations techniques, notamment l’adresse IP, la date et la page demandée, pour le fonctionnement et la sécurité du site. Un identifiant dérivé de l’e-mail est conservé temporairement en mémoire pour limiter les demandes répétées, sans garder cet e-mail en clair dans le limiteur.</p>
                <p className="mt-3">Ne transmettez pas de pièces d’identité, de données bancaires, de données salariales ou de documents fiscaux confidentiels dans le champ libre. Aucun dépôt de document n’est proposé.</p>
            </section>
            <section>
                <h2>3. Utilisation de votre demande</h2>
                <p>Vos informations servent à vous rappeler gratuitement sous 24 heures, à comprendre votre situation et à préparer une orientation vers un partenaire adapté. Les informations techniques servent au fonctionnement du site et à la prévention des abus.</p>
                <p className="mt-3">Votre demande ne vous inscrit pas à une newsletter et n’autorise pas une prospection sans rapport avec votre besoin. Le traitement est soumis à la Loi fédérale suisse sur la protection des données.</p>
            </section>
            <section>
                <h2>4. Destinataires et partenaires</h2>
                <p>Votre demande est envoyée à Smart Administration – Damien Lopez. Les prestataires d’hébergement, d’envoi et de messagerie la traitent pour fournir leurs services.</p>
                <p className="mt-3">Vos coordonnées et les informations utiles ne sont transmises à une fiduciaire partenaire qu’après l’appel et votre validation d’un rendez-vous avec le partenaire concerné. Le formulaire n’envoie aucune demande automatiquement aux fiduciaires. Le partenaire vous informe de ses propres traitements.</p>
            </section>
            <section>
                <h2>5. Prestataires et traitements à l’étranger</h2>
                <ul>
                    <li><strong>Vercel Inc.</strong> : hébergement prévu et exécution du formulaire. Son accord prévoit notamment des traitements aux États-Unis et par ses sous-traitants. <a href="https://vercel.com/legal/dpa" rel="noopener noreferrer">Accord Vercel</a>.</li>
                    <li><strong>Resend</strong> : envoi par e-mail. La région d’envoi configurée est l’Irlande ; Resend indique que les e-mails et journaux stockés le sont aux États-Unis. <a href="https://resend.com/security" rel="noopener noreferrer">Informations Resend</a>.</li>
                    <li><strong>Infomaniak</strong> : réception et conservation dans la messagerie. Son Service Mail est hébergé en Suisse. <a href="https://www.infomaniak.com/fr/ksuite/service-mail" rel="noopener noreferrer">Service Mail</a>.</li>
                </ul>
                <p className="mt-3">Les accords de Vercel et de Resend prévoient des mécanismes de transfert international, notamment des clauses contractuelles types avec des dispositions adaptées au droit suisse. Les contrats du compte, les sous-traitants et les pays de traitement doivent être vérifiés avant publication de cette version de travail. La région d’envoi ne garantit pas un stockage exclusivement européen ou suisse.</p>
            </section>
            <section>
                <h2>6. Conservation</h2>
                <p>La conservation doit être limitée aux besoins de suivi de votre demande et de la mise en relation. La durée maximale pour les demandes sans rendez-vous reste à valider avant publication ; l’ancienne durée de douze mois n’est pas reprise sans vérification.</p>
                <p className="mt-3">La suppression doit couvrir les e-mails, les éventuels exports et les outils de suivi. Resend annonce trente jours de conservation des e-mails et journaux sur ses offres Free, Pro et Scale, indépendamment de notre boîte de réception. Une obligation légale ou la défense d’un droit peut justifier une conservation distincte.</p>
            </section>
            <section>
                <h2>7. Cookies et publicité</h2>
                <p>Cette version n’active ni Google Tag Manager, ni mesure de conversion Google, ni cookies publicitaires. Aucun accord publicitaire n’est nécessaire pour utiliser le formulaire.</p>
                <p className="mt-3">Si une mesure publicitaire est ajoutée, les informations et les choix proposés seront mis à jour avant son activation. Votre demande ne vaut pas consentement à une future publicité.</p>
            </section>
            <section>
                <h2>8. Sécurité</h2>
                <p>Le formulaire limite la taille des données et contrôle les champs côté serveur. Les erreurs applicatives ne journalisent pas le contenu de votre demande. La clé d’envoi reste côté serveur. Les accès aux comptes, le chiffrement du transport des e-mails et les protections centralisées de l’hébergement restent à vérifier avant mise en ligne.</p>
                <p className="mt-3">La protection concerne aussi la messagerie et les échanges avec les partenaires ; le site seul ne garantit pas la sécurité de l’ensemble du parcours.</p>
            </section>
            <section>
                <h2>9. Vos droits</h2>
                <p>Dans les conditions prévues par la loi, vous pouvez demander l’accès à vos données, leur rectification ou leur suppression, et faire valoir les autres droits applicables. Vous pouvez nous indiquer que vous ne souhaitez plus donner suite.</p>
                <p className="mt-3">Écrivez à <a href="mailto:contact@smartadministration.ch">contact@smartadministration.ch</a>. Nous pouvons vérifier votre identité de manière proportionnée avant de communiquer des informations personnelles. Vous pouvez également contacter le <a href="https://www.edoeb.admin.ch/fr" rel="noopener noreferrer">Préposé fédéral à la protection des données et à la transparence</a>.</p>
            </section>
        </LegalPage>
    );
}

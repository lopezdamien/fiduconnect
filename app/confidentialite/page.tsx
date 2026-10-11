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
                <p>Contact pour vos données : <a href="mailto:contact@fiduconnect.ch">contact@fiduconnect.ch</a>.</p>
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
                <h2>3. À quoi servent vos informations ?</h2>
                <p>Vos informations servent à vous rappeler gratuitement sous 24 heures, à comprendre votre situation et à préparer une orientation vers un partenaire adapté. Les informations techniques servent au fonctionnement du site et à la prévention des abus.</p>
                <p className="mt-3">Votre demande ne vous inscrit pas à une newsletter et n’autorise pas une prospection sans rapport avec votre besoin. Le traitement est soumis à la Loi fédérale suisse sur la protection des données.</p>
            </section>
            <section>
                <h2>4. Qui reçoit votre demande ?</h2>
                <p>Smart Administration – Damien Lopez reçoit votre demande et prépare votre rappel. Netlify, Resend et Infomaniak sont les prestataires prévus pour le fonctionnement du site publié et l’acheminement de cette demande, comme expliqué ci-dessous.</p>
                <p className="mt-3">Vos coordonnées et les informations utiles ne sont transmises à une fiduciaire partenaire qu’après l’appel et votre validation d’un rendez-vous avec le partenaire concerné. Le formulaire n’envoie aucune demande automatiquement aux fiduciaires. Le partenaire vous informe de ses propres traitements.</p>
            </section>
            <section>
                <h2 id="prestataires">5. Où vos données sont-elles traitées ?</h2>
                <ul>
                    <li><strong>Netlify Inc.</strong> est l’hébergeur prévu pour publication et le traitement du formulaire. Cela concerne les informations de votre demande ainsi que les données techniques du site. Des traitements sont prévus notamment aux <strong>États-Unis</strong>, avec le recours à d’autres prestataires. Les régions et les autres pays effectivement concernés restent à confirmer avant publication. <a href="https://www.netlify.com/trust-center/" rel="noopener noreferrer">Informations sur le traitement et les sous-traitants de Netlify</a>.</li>
                    <li><strong>Resend</strong> achemine votre demande par e-mail. L’envoi est configuré depuis l’<strong>Irlande</strong>, mais les e-mails et journaux sont stockés aux <strong>États-Unis</strong>. Choisir une région d’envoi européenne ne signifie donc pas que les données restent en Europe. <a href="https://resend.com/security" rel="noopener noreferrer">Informations sur le traitement par Resend</a>.</li>
                    <li><strong>Infomaniak</strong> reçoit et conserve les e-mails dans notre messagerie, hébergée en <strong>Suisse</strong>. <a href="https://www.infomaniak.com/fr/ksuite/service-mail" rel="noopener noreferrer">Informations sur le Service Mail Infomaniak</a>.</li>
                </ul>
                <h3 id="garanties" className="mb-2 mt-5 font-semibold text-[#223b4a]">Quelles garanties sont prévues ?</h3>
                <p>Les accords publiés par Netlify et Resend prévoient notamment des « clauses contractuelles types », avec des dispositions pour les transferts depuis la Suisse. Ce sont des engagements encadrant l’utilisation et la protection des données lors d’un transfert à l’étranger. Ils ne signifient pas que les données restent en Suisse.</p>
                <p className="mt-3">Vous pouvez consulter ces engagements dans les <a href="https://www.netlify.com/pdf/netlify-dpa.pdf" rel="noopener noreferrer">dispositions de protection des données de Netlify</a> et de <a href="https://resend.com/legal/dpa" rel="noopener noreferrer">Resend</a>, ou nous contacter pour des précisions sur les garanties applicables à votre demande.</p>
                <p className="mt-3">Pour cette version locale de travail, l’application de ces accords à nos comptes et la liste complète des pays concernés par les autres prestataires doivent encore être confirmées avant publication.</p>
            </section>
            <section>
                <h2>6. Conservation</h2>
                <p>Si votre demande n’aboutit pas à un rendez-vous, nous prévoyons de la supprimer au plus tard trois mois après sa réception. Un rappel ne remet pas ce délai à zéro. Si un rendez-vous est validé, les informations utiles sont conservées uniquement le temps nécessaire au suivi de la mise en relation, puis supprimées.</p>
                <p className="mt-3">Cette règle concerne les e-mails et les copies dans les éventuels exports ou outils de suivi. Sa mise en œuvre dans la messagerie, y compris la corbeille et les modalités de sauvegarde, doit être vérifiée avant publication. Le site ne supprime pas automatiquement les e-mails. Resend annonce trente jours de conservation des e-mails et journaux pour l’offre utilisée, indépendamment de notre boîte de réception.</p>
                <p className="mt-3">Une obligation légale ou la défense d’un droit peut justifier une conservation distincte, limitée aux informations nécessaires et à la durée justifiée.</p>
            </section>
            <section id="cookies" className="scroll-mt-8">
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
                <p className="mt-3">Écrivez à <a href="mailto:contact@fiduconnect.ch">contact@fiduconnect.ch</a>. Nous pouvons vérifier votre identité de manière proportionnée avant de communiquer des informations personnelles. Vous pouvez également contacter le <a href="https://www.edoeb.admin.ch/fr" rel="noopener noreferrer">Préposé fédéral à la protection des données et à la transparence</a>.</p>
            </section>
        </LegalPage>
    );
}

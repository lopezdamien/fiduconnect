import { LegalPage } from '@/components/LegalPage';
import { pageMetadata } from '@/lib/seo';
import { CookiePreferencesButton } from '@/components/AdsConsent';

export const metadata = pageMetadata({
    title: 'Confidentialité',
    description: 'Comment FIDUCONNECT utilise les informations de votre demande.',
    path: '/confidentialite',
    noIndex: true,
});

export default function Confidentialite() {
    return (
        <LegalPage title="Votre confidentialité" version="14 octobre 2026">
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
                <p>Smart Administration – Damien Lopez reçoit votre demande dans la boîte contact@fiduconnect.ch et prépare votre rappel. Netlify, Resend et Infomaniak interviennent pour le fonctionnement du site et l’acheminement de cette demande, comme expliqué ci-dessous.</p>
                <p className="mt-3">Vos coordonnées et les informations utiles ne sont transmises à une fiduciaire partenaire qu’après l’appel et votre validation d’un rendez-vous avec le partenaire concerné. Le formulaire n’envoie aucune demande automatiquement aux fiduciaires. Le partenaire vous informe de ses propres traitements.</p>
            </section>
            <section>
                <h2 id="prestataires">5. Où vos données sont-elles traitées ?</h2>
                <ul>
                    <li><strong>Netlify Inc.</strong> héberge le site et traite le formulaire. La fonction qui traite votre demande est configurée dans la région Ohio, aux <strong>États-Unis</strong>. Cela concerne les informations de votre demande ainsi que les données techniques du site. Cette région ne couvre pas nécessairement tous les traitements : Netlify utilise aussi un réseau de diffusion et d’autres prestataires. Les autres pays effectivement concernés restent à confirmer avant l’ouverture au public. <a href="https://www.netlify.com/trust-center/" rel="noopener noreferrer">Informations sur le traitement et les sous-traitants de Netlify</a>.</li>
                    <li><strong>Resend</strong> achemine votre demande par e-mail. L’envoi est configuré depuis l’<strong>Irlande</strong>, mais les e-mails et journaux sont stockés aux <strong>États-Unis</strong>. Choisir une région d’envoi européenne ne signifie donc pas que les données restent en Europe. <a href="https://resend.com/security" rel="noopener noreferrer">Informations sur le traitement par Resend</a>.</li>
                    <li><strong>Infomaniak</strong> reçoit et conserve les e-mails dans notre messagerie, hébergée en <strong>Suisse</strong>. <a href="https://www.infomaniak.com/fr/ksuite/service-mail" rel="noopener noreferrer">Informations sur le Service Mail Infomaniak</a>.</li>
                </ul>
                <h3 id="garanties" className="mb-2 mt-5 font-semibold text-[#223b4a]">Quelles garanties sont prévues ?</h3>
                <p>Les accords publiés par Netlify et Resend prévoient notamment des « clauses contractuelles types », avec des dispositions pour les transferts depuis la Suisse. Ce sont des engagements encadrant l’utilisation et la protection des données lors d’un transfert à l’étranger. Ils ne signifient pas que les données restent en Suisse.</p>
                <p className="mt-3">Vous pouvez consulter ces engagements dans les <a href="https://www.netlify.com/pdf/netlify-dpa.pdf" rel="noopener noreferrer">dispositions de protection des données de Netlify</a> et de <a href="https://resend.com/legal/dpa" rel="noopener noreferrer">Resend</a>, ou nous contacter pour des précisions sur les garanties applicables à votre demande.</p>
                <p className="mt-3">Nos comptes professionnels utilisent les conditions standard des prestataires, dont font partie leurs accords de traitement des données. Infomaniak prévoit également un <a href="https://www.infomaniak.com/documents/privacy/DPA/Accord_sur_le_traitement_des_donnees_%28DPA%29.pdf" rel="noopener noreferrer">accord de traitement des données</a>. La liste complète des pays concernés par les traitements complémentaires reste à confirmer avant l’ouverture au public.</p>
            </section>
            <section>
                <h2>6. Conservation</h2>
                <p>Si votre demande n’aboutit pas à un rendez-vous, nous supprimons les e-mails et copies que nous gérons au plus tard trois mois après sa réception. Un rappel ne remet pas ce délai à zéro. Si un rendez-vous est validé, les informations utiles sont conservées uniquement le temps nécessaire au suivi de la mise en relation, puis supprimées.</p>
                <p className="mt-3">La suppression est assurée manuellement dans notre messagerie et comprend les copies que nous gérons, y compris dans la corbeille. Le site ne supprime pas automatiquement les e-mails.</p>
                <p className="mt-3">La suppression dans notre boîte ne signifie pas l’effacement immédiat des sauvegardes internes des prestataires. Resend annonce trente jours de conservation des e-mails et journaux pour l’offre utilisée et sept jours pour ses sauvegardes. Les modalités applicables aux sauvegardes de notre boîte Infomaniak restent à préciser avant l’ouverture au public. Si une restauration réintroduit une demande supprimée, nous la supprimons de nouveau.</p>
                <p className="mt-3">Une obligation légale ou la défense d’un droit peut justifier une conservation distincte, limitée aux informations nécessaires et à la durée justifiée.</p>
            </section>
            <section id="cookies" className="scroll-mt-8">
                <h2>7. Cookies et publicité</h2>
                <p>Sur contact.fiduconnect.ch, nous proposons une mesure Google Ads pour savoir si nos publicités génèrent des demandes. Elle est facultative : aucune balise ni requête de mesure Google n’est chargée avant votre accord ou lorsque vous refusez. Le formulaire fonctionne sans cet accord. Votre demande ne vaut pas consentement publicitaire.</p>
                <p className="mt-3">Après acceptation, Google peut traiter des informations techniques, notamment l’adresse IP, le navigateur, la page consultée et des identifiants de clic ou de cookies. Un événement est envoyé après l’acceptation de l’envoi du formulaire par notre service d’e-mail ; il ne confirme pas un rendez-vous ni la réception dans notre boîte. L’événement comprend un identifiant aléatoire de déduplication, sans lien avec vos coordonnées. Nous ne transmettons pas à Google le nom, l’e-mail, le téléphone, l’entreprise ou le texte de votre demande.</p>
                <p className="mt-3">Cette intégration n’utilise ni Google Analytics, ni conteneur Google Tag Manager, ni suivi avancé des conversions. La personnalisation publicitaire est désactivée. La balise Google est distribuée depuis googletagmanager.com, même sans utiliser un conteneur Tag Manager.</p>
                <p className="mt-3">Votre choix, sa date et la version du texte sont mémorisés dans le stockage local de ce navigateur pendant 180 jours au maximum, puis redemandés. Il ne contient aucune donnée du formulaire. Cette durée est notre choix de fonctionnement, pas un délai légal universel. Si ce stockage est indisponible, la mesure reste désactivée. Après accord, les cookies de mesure Google commençant par _gcl_ sont prévus pour une durée de 90 jours ; le navigateur peut limiter cette durée. Les données déjà envoyées à Google ont leur propre conservation, distincte de celle des cookies.</p>
                <p className="mt-3">Le destinataire de cette mesure est Google, pour son service Google Ads. Des traitements peuvent avoir lieu aux États-Unis et dans d’autres pays où Google ou ses prestataires opèrent. Consultez les <a href="https://policies.google.com/privacy?hl=fr">règles de confidentialité de Google</a>, ses informations sur les <a href="https://policies.google.com/technologies/cookies?hl=fr">cookies</a> et ses <a href="https://policies.google.com/privacy/frameworks?hl=fr">garanties de transfert</a>. Cela ne signifie pas que les données restent en Suisse.</p>
                <p className="mt-3">Vous pouvez changer votre choix à tout moment avec le bouton Cookies. Un retrait empêche les nouveaux événements de notre formulaire et supprime les cookies de mesure accessibles sur ce site. Si la balise a déjà été chargée, la page se recharge pour l’arrêter ; une demande en cours d’envoi est d’abord laissée se terminer. Les informations déjà envoyées ne sont pas effacées rétroactivement, et notre site ne peut pas supprimer les cookies appartenant à un domaine Google.</p>
                <CookiePreferencesButton className="mt-3 min-h-11 underline underline-offset-4" />
            </section>
            <section>
                <h2>8. Sécurité</h2>
                <p>Le site utilise HTTPS pour le transport entre votre navigateur et le site. Le formulaire limite la taille des données, contrôle les champs côté serveur et refuse les demandes provenant d’une autre origine. Des limites de fréquence réduisent les demandes répétées. Les erreurs applicatives ne journalisent pas le contenu de votre demande et la clé d’envoi reste côté serveur.</p>
                <p className="mt-3">Les accès d’administration Netlify et Infomaniak sont protégés par une double authentification, confirmée par l’exploitant. Le transport chiffré d’un e-mail ne garantit pas le chiffrement de bout en bout de la messagerie. Ne transmettez pas de documents confidentiels pour cette simple demande de mise en relation.</p>
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

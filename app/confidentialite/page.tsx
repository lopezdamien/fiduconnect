import { LegalPage } from '@/components/LegalPage';
import { crmIntakeEnabled } from '@/lib/crm-intake';
import { pageMetadata } from '@/lib/seo';
import { SeoAnalyticsPreferences } from '@/components/SeoAnalytics';

export const metadata = pageMetadata({
    title: 'Confidentialité',
    description: 'Les données de votre demande de mise en relation fiduciaire à Genève, leur utilisation et vos droits.',
    path: '/confidentialite',
    noIndex: true,
});
metadata.robots = { index: false, follow: false };

export default function Confidentialite() {
    const crmEnabled = crmIntakeEnabled();
    return (
        <LegalPage title="Votre confidentialité" version="20 novembre 2026">
            <section aria-label="L’essentiel de votre confidentialité">
                <h2>Votre demande, en bref</h2>
                <p>Le site principal www.fiduconnect.ch présente le service de mise en relation, sans suivi publicitaire. Votre demande sert au rappel et à l’orientation, sans transmission automatique aux fiduciaires ni inscription à une newsletter.</p>
                <nav aria-label="Sommaire de la confidentialité" className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    <a href="#responsable">Responsable</a><a href="#donnees">Données</a><a href="#destinataires">Destinataires</a><a href="#prestataires">Pays et prestataires</a><a href="#conservation">Conservation</a><a href="#cookies">Stockage technique</a><a href="#droits">Vos droits</a>
                </nav>
            </section>
            <section id="responsable">
                <h2>1. Responsable et périmètre</h2>
                <p>Smart Administration – Damien Lopez, Avenue d’Aïre 73C, 1203 Genève, Suisse, exploite FIDUCONNECT et est responsable du traitement de vos demandes. Pour toute question : <a href="mailto:contact@fiduconnect.ch">contact@fiduconnect.ch</a>.</p>
                <p className="mt-3">Cette déclaration concerne le site SEO destiné à www.fiduconnect.ch, pour les entreprises et indépendants du canton de Genève. Elle ne décrit pas la mesure publicitaire de la page distincte contact.fiduconnect.ch.</p>
            </section>
            <section>
                <h2>2. Envoi de votre demande</h2>
                <p>Lorsque vous confirmez le formulaire, les informations sont transmises au serveur du site. {crmEnabled ? 'Votre demande est enregistrée dans notre CRM privé, avec son origine formulaire et sa date de réception. Resend achemine ensuite une notification à contact@fiduconnect.ch ; une panne de messagerie n’efface pas la demande enregistrée.' : 'Resend achemine ensuite un e-mail à contact@fiduconnect.ch. Elles ne sont pas enregistrées dans une base de prospects par ce site.'} Vous pouvez aussi nous écrire directement à cette adresse.</p>
            </section>
            <section id="donnees">
                <h2>3. Informations demandées et finalités</h2>
                <ul>
                    <li>Prénom, nom, e-mail et téléphone : pour vous identifier et vous recontacter.</li>
                    <li>Situation et besoin principal : pour préparer le premier échange.</li>
                    <li>Entreprise et précisions facultatives : pour mieux comprendre votre recherche.</li>
                </ul>
                <p className="mt-3">La demande, le rappel prévu sous 24 heures et l’orientation FIDUCONNECT sont gratuits et sans engagement. Les données ne servent pas à vous inscrire à une newsletter ni à une prospection sans rapport avec votre demande. FIDUCONNECT ne fournit pas de conseil comptable, fiscal ou juridique personnalisé.</p>
                <p className="mt-3">Ne saisissez pas de pièces d’identité, de données bancaires, salariales ou de documents fiscaux confidentiels. Aucun dépôt de fichier n’est proposé.</p>
            </section>
            <section id="destinataires">
                <h2>4. Destinataires et choix du partenaire</h2>
                <p>L’exploitant reçoit et traite votre demande pour préparer votre rappel. Les prestataires techniques retenus pour l’hébergement et l’e-mail interviennent uniquement dans le cadre de leurs services.</p>
                {crmEnabled && <p className="mt-3">Seul l’exploitant accède au CRM après connexion et double vérification. Il peut y ajouter un statut de suivi, des notes et un rappel. Aucun accès partenaire n’est ouvert.</p>}
                <p className="mt-3">Le formulaire ne transmet rien automatiquement aux fiduciaires. Après l’appel, vos coordonnées et les informations utiles ne sont communiquées au partenaire concerné que si vous validez un rendez-vous avec lui. Vous restez libre de ne pas poursuivre. Le partenaire est responsable de ses propres traitements et prestations et vous en informe séparément.</p>
            </section>
            <section id="prestataires">
                {crmEnabled && <p className="mb-3">Supabase héberge la base du CRM dans la région configurée à Zurich, Suisse. Cela ne garantit pas que tous les traitements complémentaires, journaux et sous-traitants restent en Suisse. Vercel héberge aussi l’interface privée du CRM, sans clé serveur dans le navigateur.</p>}
                <h2>5. Prestataires et traitements à l’étranger</h2>
                <p>Vercel héberge et exécute le site, avec les fonctions du formulaire dans la région américaine iad1. Son réseau de diffusion et ses sous-traitants ne sont pas limités à la Suisse. Resend achemine les coordonnées et le contenu de la demande vers notre messagerie ; Resend indique stocker les données aux États-Unis. Infomaniak héberge notre messagerie en Suisse. Le choix d’une région d’envoi ne garantit pas le lieu de stockage de tous les e-mails, journaux et sauvegardes.</p>
                <p className="mt-3">Le site utilise actuellement l’offre Hobby de Vercel. L’accord de traitement publié par Vercel ne couvre que Pro et Enterprise : nous ne présentons donc pas cet accord comme une garantie applicable à cette offre. Voir les <a href="https://vercel.com/legal/dpa">conditions de traitement Vercel</a>, les <a href="https://resend.com/legal/dpa">conditions Resend</a> et les <a href="https://www.infomaniak.com/fr/cgv/reglement-general-protection-donnees">informations Infomaniak</a>. Les pays et modalités complémentaires des sous-traitants, journaux et sauvegardes restent à préciser ; aucune localisation exclusivement suisse n’est promise.</p>
                <p className="mt-3">Le devoir d’informer sur une communication à l’étranger est expliqué par le <a href="https://www.edoeb.admin.ch/fr/communication-de-donnees-a-letranger" rel="noopener noreferrer">Préposé fédéral à la protection des données et à la transparence</a>. Les conditions générales d’un fournisseur ne remplacent pas la vérification de notre configuration effective.</p>
            </section>
            <section id="conservation">
                {crmEnabled && <p className="mb-3">Les délais ci-dessous s’appliquent aussi aux demandes, notes et rappels du CRM. L’exploitant assure leur suppression manuellement dans la base ; aucun effacement automatique n’est activé. Une restauration ne doit pas prolonger la conservation d’une demande déjà supprimée.</p>}
                <h2>6. Conservation et suppression</h2>
                <p>Nous supprimons les demandes sans rendez-vous au plus tard trois mois après leur réception, sans prolonger ce délai à chaque rappel. Pour les mises en relation suivies, nous supprimons les données au plus tard six mois après le dernier échange lié à cette mise en relation, hors obligation légale justifiée.</p>
                <p className="mt-3">L’exploitant assure manuellement ces suppressions dans les e-mails, copies et corbeilles qu’il gère. Le site ne supprime pas automatiquement les messages d’une boîte mail. Les durées des journaux et sauvegardes des prestataires ainsi que la procédure après restauration restent à confirmer. Aucune durée de fournisseur non vérifiée n’est promise dans cette version de travail.</p>
                <p className="mt-3">Une conservation distincte peut être nécessaire pour une obligation légale ou la défense d’un droit, limitée aux informations et à la durée justifiées.</p>
            </section>
            <section id="cookies">
                <h2>7. Stockage dans le navigateur et mesure d’audience</h2>
                <p className="mb-3">Les finalités et la durée du stockage technique sont aussi présentées sur la page <a href="/cookies">Cookies et stockage du navigateur</a>.</p>
                <p>Le site ne charge pas de balise Google Ads, de conteneur Google Tag Manager ni de pixel OpenAI. Google Analytics 4 mesure l’audience uniquement après votre acceptation. Refuser ou retirer votre accord ne bloque ni le site ni le formulaire. Aucun script Analytics ni appel de mesure à Google n’est chargé avant accord.</p>
                <p className="mt-3">La mesure porte sur les pages consultées, l’origine générale des visites, les caractéristiques du navigateur et de l’appareil, les clics de contact, le début des formulaires et les demandes confirmées. Les adresses de pages sont envoyées sans paramètres ni fragments, et les adresses de sites référents externes sont limitées à leur origine. Aucune coordonnée, donnée saisie ou identifiant de demande n’est envoyé à Google. Les fonctionnalités de personnalisation publicitaire et les mesures améliorées automatiques sont désactivées.</p>
                <p className="mt-3">Google intervient comme prestataire de mesure et peut traiter des données hors de Suisse, notamment aux États-Unis. Voir les <a href="https://policies.google.com/privacy">règles de confidentialité Google</a> et les <a href="https://business.safety.google/adsprocessorterms/">conditions de traitement des données Google</a>. Il ne s’agit pas d’une mesure anonyme garantie : Google reçoit des données techniques de connexion pour fournir son service.</p>
                <p className="mt-3">Le choix est conservé 180 jours dans <code>fiduconnect.seo-analytics-consent</code>. Les cookies Analytics sont limités à 180 jours, sans renouvellement à chaque visite. Le détail et le retrait du choix sont disponibles sur <a href="/cookies">la page Cookies</a> et depuis le pied de page.</p>
                <SeoAnalyticsPreferences />
                <p className="mt-3">Après une réponse positive du service d’envoi, un marqueur technique nommé <code>fiduconnect.seo-receipt</code> peut être enregistré dans le stockage de session de l’onglet. Il contient uniquement une date d’expiration, pas vos coordonnées ou votre message. Il permet à la page de remerciement de reconnaître une confirmation récente, sans prouver la livraison dans la boîte de réception.</p>
                <p className="mt-3">Ce marqueur n’est reconnu que pendant trente minutes au maximum. Le navigateur peut conserver sa valeur au-delà de ce délai tant que la session subsiste, mais elle est alors ignorée. Il est remplacé ou supprimé lors d’une nouvelle tentative ; vous pouvez aussi effacer les données du site dans le navigateur. Si ce stockage est bloqué, une confirmation temporaire en mémoire permet la navigation courante.</p>
                <p className="mt-3">Les données saisies dans le formulaire ne sont pas enregistrées par le site dans le stockage local, le stockage de session ou l’adresse de la page. Elles restent affichées en cas d’erreur tant que la page reste ouverte. Votre navigateur peut gérer séparément ses fonctions de saisie automatique.</p>
            </section>
            <section>
                <h2>8. Fonctionnement technique et sécurité</h2>
                <p>Le formulaire vérifie l’origine et les champs côté serveur, limite la taille des demandes et utilise un champ anti-robot ainsi qu’un limiteur de fréquence. Ce limiteur conserve temporairement en mémoire un identifiant dérivé de l’e-mail, sans y conserver l’e-mail en clair. Les erreurs applicatives sont conçues pour ne pas journaliser le contenu de la demande.</p>
                <p className="mt-3">L’hébergement peut traiter des données techniques telles que l’adresse IP, la date, la page demandée et le navigateur pour assurer son fonctionnement et sa sécurité. Le site utilise HTTPS. Les durées détaillées des journaux et sauvegardes des prestataires restent à préciser ; ces traitements ne servent pas à une prospection publicitaire par ce site.</p>
                <p className="mt-3">L’envoi par e-mail n’offre pas une garantie de chiffrement de bout en bout. Ne transmettez pas de documents confidentiels pour cette simple demande d’orientation.</p>
            </section>
            <section id="droits">
                <h2>9. Vos droits et notre contact</h2>
                <p>Dans les conditions prévues par la loi fédérale suisse sur la protection des données, vous pouvez notamment demander l’accès à vos données, leur rectification ou leur suppression et nous indiquer que vous ne souhaitez plus poursuivre la mise en relation.</p>
                <p className="mt-3">Écrivez à <a href="mailto:contact@fiduconnect.ch">contact@fiduconnect.ch</a>. Une vérification proportionnée de votre identité peut être nécessaire avant de communiquer des données personnelles. Vous pouvez également contacter le <a href="https://www.edoeb.admin.ch/fr" rel="noopener noreferrer">Préposé fédéral à la protection des données et à la transparence</a>.</p>
            </section>
        </LegalPage>
    );
}

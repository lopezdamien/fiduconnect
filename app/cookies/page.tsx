import { LegalPage } from '@/components/LegalPage';
import { pageMetadata } from '@/lib/seo';
import { SeoAnalyticsPreferences } from '@/components/SeoAnalytics';

export const metadata = pageMetadata({
    title: 'Cookies et stockage du navigateur',
    description: 'Le stockage technique, les statistiques facultatives et vos choix sur le site principal FIDUCONNECT.',
    path: '/cookies',
    noIndex: true,
});
metadata.robots = { index: false, follow: false };

export default function Cookies() {
    return <LegalPage title="Cookies et stockage du navigateur" version="20 novembre 2026">
        <section>
            <h2>1. Le site principal, sans suivi publicitaire</h2>
            <p>Cette page concerne le site principal <strong>www.fiduconnect.ch</strong>. Il ne charge pas de balise Google Ads, de conteneur Google Tag Manager ni de pixel OpenAI. Google Analytics 4 est utilisé uniquement pour les statistiques du site, après votre acceptation.</p>
            <p className="mt-3">La page publicitaire distincte <a href="https://contact.fiduconnect.ch/cookies">contact.fiduconnect.ch</a> dispose de sa propre information et de ses propres préférences. Un choix sur cette page publicitaire n’active pas de suivi dans cette version du site principal.</p>
        </section>
        <section>
            <h2>2. Confirmation technique d’une demande</h2>
            <p>Le formulaire utilise uniquement un marqueur technique de confirmation, sans mesure publicitaire.</p>
            <p className="mt-3">Après une réponse positive du service d’envoi, un marqueur nommé <code>fiduconnect.seo-receipt</code> est enregistré dans le stockage de session de l’onglet. Il contient uniquement une date d’expiration, pas vos coordonnées ni votre message. Il permet de reconnaître une confirmation récente sur la page de remerciement, sans prouver la livraison dans notre boîte mail.</p>
            <p className="mt-3">Le marqueur est reconnu pendant trente minutes au maximum. Sa valeur peut subsister plus longtemps dans une session ouverte, mais elle est alors ignorée. Une nouvelle tentative le remplace ou le supprime. Si le stockage est bloqué, une confirmation temporaire en mémoire permet la navigation courante.</p>
        </section>
        <section>
            <h2>3. Statistiques facultatives et vos choix</h2>
            <p>À votre première visite, vous pouvez accepter ou refuser la mesure d’audience avec la même facilité. Sans accord, aucun script ni appel de mesure Google Analytics n’est chargé. Le refus ne bloque pas la navigation ni l’envoi du formulaire.</p>
            <p className="mt-3">Après acceptation, Google Analytics mesure les pages consultées, l’origine générale des visites, le navigateur et l’appareil, les clics de contact, le début d’un formulaire et les demandes dont la réception est confirmée par notre serveur. Le contenu du formulaire, vos coordonnées et les identifiants de demandes ne sont pas transmis. Les paramètres d’adresse et les fragments sont retirés des adresses de pages mesurées. Les mesures automatiques supplémentaires et la personnalisation publicitaire sont désactivées.</p>
            <p className="mt-3">Votre choix est enregistré pendant 180 jours dans le stockage local sous <code>fiduconnect.seo-analytics-consent</code>. Après acceptation, les cookies <code>_ga</code> et <code>_ga_…</code> peuvent être déposés sur www.fiduconnect.ch pour au maximum 180 jours, sans prolongation à chaque visite. Vous pouvez retirer votre accord à tout moment ; le site arrête la mesure et efface ses cookies Analytics accessibles.</p>
            <SeoAnalyticsPreferences />
            <p className="mt-3">Google fournit la mesure et peut traiter des données hors de Suisse. Consultez les <a href="https://policies.google.com/privacy">règles de confidentialité de Google</a> et la <a href="/confidentialite#cookies">déclaration de confidentialité du site</a>. Les statistiques restent partielles lorsque les visiteurs refusent la mesure ou la bloquent.</p>
        </section>
        <section>
            <h2>4. Vos données et votre navigateur</h2>
            <p>Vous pouvez effacer le stockage du site dans les réglages de votre navigateur. Les champs du formulaire ne sont pas enregistrés par le site dans le stockage local, le stockage de session ou l’adresse de la page ; les fonctions de saisie automatique de votre navigateur sont distinctes.</p>
            <p className="mt-3">Pour les données techniques de connexion, le formulaire, les prestataires et vos droits, consultez la <a href="/confidentialite">déclaration de confidentialité</a>.</p>
            <p className="mt-3">Questions : <a href="mailto:contact@fiduconnect.ch">contact@fiduconnect.ch</a>.</p>
        </section>
    </LegalPage>;
}

import { LegalPage } from '@/components/LegalPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Cookies et stockage du navigateur',
    description: 'Le stockage technique sur le site principal FIDUCONNECT, sans mesure publicitaire.',
    path: '/cookies',
    noIndex: true,
});
metadata.robots = { index: false, follow: false };

export default function Cookies() {
    return <LegalPage title="Cookies et stockage du navigateur" version="17 octobre 2026">
        <section>
            <h2>1. Le site principal, sans suivi publicitaire</h2>
            <p>Cette page concerne le site principal destiné à <strong>www.fiduconnect.ch</strong>. Cette version ne charge ni Google Ads, ni Google Analytics, ni Google Tag Manager, ni pixel OpenAI. Elle ne crée pas de cookie de suivi publicitaire et ne propose donc pas de bouton d’acceptation pour ces outils absents.</p>
            <p className="mt-3">La page publicitaire distincte <a href="https://contact.fiduconnect.ch/cookies">contact.fiduconnect.ch</a> dispose de sa propre information et de ses propres préférences. Un choix sur cette page publicitaire n’active pas de suivi dans cette version du site principal.</p>
        </section>
        <section>
            <h2>2. Confirmation technique d’une demande</h2>
            <p>Le formulaire utilise uniquement un marqueur technique de confirmation, sans mesure publicitaire.</p>
            <p className="mt-3">Après une réponse positive du service d’envoi, un marqueur nommé <code>fiduconnect.seo-receipt</code> est enregistré dans le stockage de session de l’onglet. Il contient uniquement une date d’expiration, pas vos coordonnées ni votre message. Il permet de reconnaître une confirmation récente sur la page de remerciement, sans prouver la livraison dans notre boîte mail.</p>
            <p className="mt-3">Le marqueur est reconnu pendant trente minutes au maximum. Sa valeur peut subsister plus longtemps dans une session ouverte, mais elle est alors ignorée. Une nouvelle tentative le remplace ou le supprime. Si le stockage est bloqué, une confirmation temporaire en mémoire permet la navigation courante.</p>
        </section>
        <section>
            <h2>3. Vos choix et vos données</h2>
            <p>Vous pouvez effacer le stockage du site dans les réglages de votre navigateur. Les champs du formulaire ne sont pas enregistrés par le site dans le stockage local, le stockage de session ou l’adresse de la page ; les fonctions de saisie automatique de votre navigateur sont distinctes.</p>
            <p className="mt-3">L’ajout ultérieur d’une mesure facultative nécessitera une mise à jour de cette information et du dispositif de choix avant activation. Pour les données techniques de connexion, le formulaire, les prestataires et vos droits, consultez la <a href="/confidentialite">déclaration de confidentialité</a>.</p>
            <p className="mt-3">Questions : <a href="mailto:contact@fiduconnect.ch">contact@fiduconnect.ch</a>.</p>
        </section>
    </LegalPage>;
}

import { LegalPage } from '@/components/LegalPage';
import { CookiePreferencesButton } from '@/components/AdsConsent';
import { OPENAI_ADS_ENABLED } from '@/lib/openai-ads';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Cookies et préférences',
    description: 'Les cookies utilisés sur la page de contact FIDUCONNECT, leurs finalités, leurs durées et vos choix.',
    path: '/cookies',
    noIndex: true,
});

export default function Cookies() {
    return <LegalPage title="Cookies et préférences" version="17 octobre 2026">
        <section aria-label="L’essentiel">
            <p>Cette page concerne <strong>contact.fiduconnect.ch</strong>, la page publicitaire de FIDUCONNECT. Vous pouvez consulter le site et envoyer une demande sans accepter la mesure publicitaire. L’envoi du formulaire et le choix de cookies sont deux actions distinctes.</p>
            <CookiePreferencesButton label="Gérer mes cookies" className="mt-3 min-h-11 underline underline-offset-4" />
        </section>
        <section id="necessaires">
            <h2>1. Mémoriser votre choix</h2>
            <p>La préférence <code>fiduconnect.ads-consent</code> est enregistrée dans le stockage local de ce navigateur, et non dans un cookie. Elle contient votre acceptation ou votre refus, la date du choix et la version de l’information présentée, sans coordonnées ni contenu du formulaire.</p>
            <p className="mt-3">Elle est reconnue pendant <strong>180 jours au maximum</strong>, puis un nouveau choix est demandé. Une modification des outils couverts peut aussi nécessiter un nouvel accord. Si votre navigateur ne permet pas de mémoriser le choix, le suivi reste désactivé.</p>
        </section>
        <section id="mesure">
            <h2>2. Mesure publicitaire — facultative</h2>
            <p>Avec votre accord, Google Ads{OPENAI_ADS_ENABLED ? ' et OpenAI (ChatGPT Ads)' : ''} peuvent mesurer les demandes pour les relier aux publicités. Avant cet accord ou après un refus, notre site ne charge pas leurs scripts de mesure. Une simple acceptation ne crée pas une demande : l’événement de contact n’est déclenché qu’après une réponse positive du service d’envoi du formulaire, pas à l’ouverture de la page de remerciement.</p>
            <dl className="mt-4 space-y-4">
                <div><dt className="font-semibold text-[#223b4a]">Google Ads · cookies <code>_gcl_*</code></dt><dd>Identifiants de mesure et de clic ; durée prévue de 90 jours. Notre intégration ne transmet pas les coordonnées saisies ni le message à Google, n’active pas Google Analytics et désactive la personnalisation publicitaire.</dd></div>
                {OPENAI_ADS_ENABLED && <>
                    <div><dt className="font-semibold text-[#223b4a]">OpenAI · cookie <code>__oppref</code></dt><dd>Identifiant d’attribution publicitaire ; 30 jours après son écriture. Une nouvelle capture d’un identifiant de clic, même identique, renouvelle ce délai.</dd></div>
                    <div><dt className="font-semibold text-[#223b4a]">OpenAI · cookie <code>__obref</code></dt><dd>Identifiant aléatoire du navigateur ; 365 jours après sa création, sans renouvellement à sa simple lecture.</dd></div>
                </>}
            </dl>
            <p className="mt-3">Les navigateurs peuvent limiter ces durées. La durée d’un cookie ne détermine pas celle des données déjà reçues par le prestataire.</p>
            {OPENAI_ADS_ENABLED && <p className="mt-3">Le pixel OpenAI peut détecter des coordonnées prises en charge et transmettre leurs empreintes après hachage dans le navigateur. Ces empreintes ne sont pas anonymes. Notre appel d’événement ne contient pas le message libre ni de coordonnées ajoutées manuellement. Nous demandons l’exclusion des événements d’une future personnalisation publicitaire au niveau utilisateur.</p>}
            <p className="mt-3">Les prestataires reçoivent aussi des informations techniques de connexion. Des traitements peuvent avoir lieu à l’étranger, notamment aux États-Unis. Les destinataires, les garanties de transfert et les liens vers leurs politiques figurent dans la <a href="/confidentialite#cookies">déclaration de confidentialité</a>.</p>
        </section>
        <section id="modifier">
            <h2>3. Accepter, refuser ou retirer votre accord</h2>
            <p>Le bandeau propose Refuser, Accepter et Personnaliser. Le choix facultatif est décoché avant un premier accord. Personnaliser permet de consulter les prestataires et d’enregistrer votre choix pour cette finalité commune de mesure publicitaire.</p>
            <p className="mt-3">Le bouton Gérer mes cookies, disponible en bas de page, permet de revenir sur votre décision. Le retrait bloque les événements suivants et supprime les cookies de mesure accessibles sur ce site. Si un script était déjà chargé, une actualisation arrête son exécution ; un formulaire en cours d’envoi est d’abord laissé se terminer. Les informations déjà reçues par les prestataires ne sont pas effacées rétroactivement, et notre site ne peut pas effacer les cookies d’un domaine tiers.</p>
            <CookiePreferencesButton label="Gérer mes cookies" className="mt-3 min-h-11 underline underline-offset-4" />
        </section>
        <section>
            <h2>4. Vos données et votre contact</h2>
            <p>Pour le traitement de votre demande, les durées de conservation et vos droits, consultez notre <a href="/confidentialite">déclaration de confidentialité</a>. Pour toute question : <a href="mailto:contact@fiduconnect.ch">contact@fiduconnect.ch</a>.</p>
        </section>
    </LegalPage>;
}

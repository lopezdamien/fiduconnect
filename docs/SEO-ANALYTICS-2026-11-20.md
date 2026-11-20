# Statistiques du site principal — 20 novembre 2026

## Compte et accès

Propriété GA4 existante **FiduConnect**, ID `529835382`, compte **Smart Administration** `370934258`, accessible avec le compte Google propriétaire `contact@smartadministration.ch`.

Tableau de bord : https://analytics.google.com/analytics/web/?authuser=2#/a370934258p529835382/reports/intelligenthome

Flux existant **FiduConnect Web**, ID `14223741785`, URL `https://www.fiduconnect.ch`, mesure publique `G-MQMDRTXM65`. La collecte était signalée inactive lors du contrôle initial. Aucun nouveau compte ni abonnement créé.

L'événement `generate_lead` a été marqué comme événement clé dans GA4, sans valeur monétaire par défaut et avec comptage par événement. Aucune conversion Google Ads n'est créée ni importée. Les mesures améliorées du flux étaient déjà désactivées et le restent, afin d'éviter les doubles pages vues et les faux formulaires confirmés.

## Périmètre et événements

- `page_view` : une vue par navigation, y compris les transitions Next.js ; dédoublonnage des effets React.
- `contact_click` : lien vers contact, e-mail ou téléphone ; aucune adresse de contact dans les paramètres d'événement.
- `form_start` : première modification d'un formulaire monté, uniquement si consentement présent.
- `generate_lead` : uniquement après une réponse serveur `ok: true`, hors honeypot. Déclenché avant la navigation de confirmation. L'ID sert à dédoublonner en mémoire et n'est jamais envoyé. Aucun événement généré à la simple visite de `/merci`.

La bibliothèque ne charge rien hors de `www.fiduconnect.ch` : pas de collecte dans les aperçus Vercel, en local, sur le CRM ou la landing SEA. Aucun changement à contact.fiduconnect.ch, aux enchères, aux budgets ou aux campagnes.

## Choix des visiteurs

Chargement basique après accord : aucun script ou appel Google Analytics avant acceptation. Choix séparé de celui de la landing SEA, stocké 180 jours dans `fiduconnect.seo-analytics-consent`. Boutons Accepter et Refuser de même présentation ; retrait via « Gérer les statistiques » dans les pieds de page et pages légales. Retrait, expiration et changement d'un autre onglet désactivent la collecte. Les cookies GA accessibles sont effacés au retrait. Cookies Analytics limités à 180 jours sans rafraîchissement à chaque visite.

Google Signals et personnalisation publicitaire désactivés côté balise, consentements publicitaires refusés. Seules les routes connues sont mesurées : paramètres, fragments et chemins inconnus ne sont pas transmis. Référents externes réduits à leur origine. Aucun nom, e-mail, téléphone, entreprise, message ou identifiant de lead envoyé. Pas de capture de session, de champs ou de contenu utilisateur.

Les statistiques ne reconstituent pas les visites antérieures et sont partielles en cas de refus, de blocage ou de restriction du navigateur. Le CRM reste la référence pour le nombre de demandes reçues. Un clic contact ou un début de formulaire n'est pas une demande qualifiée.

## Vérification et maintenance

`npm run test:seo`, `npm run build -- --webpack`, `npm run check:seo-built`. Tests dédiés : absence de consentement, refus, expiration, stockage bloqué/corrompu, retrait, reprise, panne de balise, domaines hors périmètre, nettoyage d'URL et dédoublonnage des demandes. Contrôle visuel du bandeau et des préférences sur mobile puis vérification du site publié et du temps réel GA4.

Source de base : `codex/seo-launch` à `944e03b`, production constatée `dpl_B5WBSMzD91AjensAsF5TCxfSbRCV`. Travail isolé sur `codex/seo-analytics-2026-11-20` dans `/private/tmp/fiduconnect-seo-analytics-20261120`. Conserver les nouveaux commits dans Git ; ne pas publier les fichiers `.vercel` ou les fichiers d'environnement.

## Résultat de publication

Publié le 20 novembre 2026 sur le projet Vercel existant, déploiement `dpl_JB4yfL12LD741sG8u1jWLSBV8sjd` (`https://fiduconnect-okfw8v4lw-lopezdamiens-projects.vercel.app`), promu sur les domaines du site principal. Révision applicative `aab2ede`, issue de `fb21564`. Les branches `codex/seo-launch` et `codex/seo-analytics-2026-11-20` ont été avancées sans réécriture puis sauvegardées sur le dépôt existant après l'accord explicite de Damien.

Contrôles : 76 tests SEO/formulaire/consentement et 17 tests du HTML construit réussis, compilation locale et Vercel réussie ; rendu mobile à 390 px, refus et réouverture des préférences vérifiés. HTTP 200 et canoniques contrôlés pour accueil, contact, cookies et confidentialité, sitemap HTTP 200. Aucun script Analytics avant accord ; script chargé après accord. État de chargement de la balise confirmé sur le site public.

Réception vérifiée dans le navigateur intégré connecté au compte propriétaire : le temps réel FiduConnect a affiché **1 utilisateur actif, 3 pages vues, 1 contact_click et 1 form_start**, correspondant aux visites de contrôle. Aucun formulaire n'a été soumis au serveur et aucun lead fictif n'a été créé. Le compteur `generate_lead` est configuré et son déclenchement confirmé par tests avec réponses serveur simulées ; sa réception réelle sera à vérifier lors d'une prochaine demande légitime.

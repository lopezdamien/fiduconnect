# Google Ads — intégration du 14 octobre 2026

## Périmètre

Damien a créé manuellement dans Google Ads `FIDUCONNECT — Demande envoyée`, source Site Web, action principale, nombre Une, fenêtre après clic 90 jours, non incluse dans les objectifs par défaut du compte. Il a saisi une valeur fixe de 0 CHF ; le snippet fourni ne comprend pas de valeur, et l’événement du site l’envoie explicitement à zéro. Le suivi avancé a été décoché sur l’écran final.

- Balise : `AW-17635546413`.
- Conversion : `AW-17635546413/BQ99CODZ8pwdEK2qpNlB`.
- Mesure uniquement sur `contact.fiduconnect.ch` et les hôtes de test local.
- Aucun accès API, secret, champ du formulaire ou configuration Resend modifié.
- Aucune campagne publiée ou activée par cette intervention.

## Fonctionnement

La bannière non bloquante propose Accepter et Refuser avec la même présentation. Le bouton Cookies du pied de page et des pages légales rouvre les choix. La mesure est bloquée avant accord, après refus, si le stockage est inaccessible, ou si le choix est invalide/périmé. La préférence minimale (choix, date, version) expire après 180 jours. C’est une décision de fonctionnement, non une durée légale universelle.

Après accord, gtag reçoit d’abord les états refusés, puis le stockage et les données nécessaires à la mesure publicitaire acceptés. La personnalisation et le stockage Analytics restent refusés. Aucun conteneur GTM ni propriété Analytics n’est intégré. Le script gtag est fourni par googletagmanager.com. Les cookies sont configurés sur l’hôte SEA, pour 90 jours sans renouvellement à chaque visite.

Le test de la balise réelle a identifié une destination Analytics ancienne `G-TRG36EY6PG` qui tentait un événement `scroll`, bloqué par la CSP. Elle est désormais explicitement désactivée via le mécanisme Google `ga-disable-…` avant le chargement de gtag, uniquement sur ce site. Les paramètres partagés du compte et de l’ancien site ne sont pas modifiés. La CSP continue à interdire tous les points de collecte Analytics : toute nouvelle association doit être examinée avant de modifier ces restrictions.

Un succès exige une réponse HTTP réussie, un JSON `{ ok: true }`, un champ piège vide et un accord encore valide. Le compteur part après l’acceptation par le service d’e-mail, pas au clic du bouton et pas sur `/merci`. L’événement contient uniquement les paramètres techniques nécessaires, une valeur zéro et un UUID aléatoire pour déduplication, jamais les coordonnées. Les autres paramètres d’URL sont supprimés de `page_location`; seuls les identifiants de clic reconnus sont conservés. Le référent est volontairement vidé.

Un verrou immédiat empêche les envois concurrents du même formulaire. Cela ne rend pas le serveur d’e-mail idempotent entre deux rechargements ou onglets. Une panne Google ou l’absence de callback ne bloque pas Merci (attente bornée à une seconde).

Au retrait, les nouveaux événements sont immédiatement bloqués et les cookies `_gcl_` accessibles sur cet hôte sont effacés. La page est rechargée pour éliminer le script déjà exécuté. Si une demande est en cours, son envoi se termine d’abord ; en cas de succès, une navigation complète vers Merci détruit ce contexte. Des requêtes déjà parties ne peuvent pas être rappelées. Le retrait ne supprime pas rétroactivement les données Google ou ses cookies tiers. Un retrait avant la fin d’envoi ne génère pas de nouvelle conversion.

## Vérifications et suites

- Tests unitaires et vrais gestionnaires de formulaire avec Google, HTTP et Resend simulés ; aucun e-mail réel.
- Recette locale de navigateur : `tests/google-ads.browser.mjs`, Google et envoi entièrement interceptés. Le script refuse les hôtes autres que localhost/127.0.0.1.
- Contrôle local de la balise réelle sans envoyer de formulaire ni événement de conversion : `tests/google-ads.network.mjs`.
- Contrôles lint, TypeScript, construction de production, vue mobile et bureau.

Recette locale terminée : 73 tests automatisés réussis, sept parcours de navigateur simulés réussis, lint et construction de production réussis. La balise réelle s’exécute après accord, pose `_gcl_au` sur l’hôte local pour 90 jours, ne tente plus d’envoi Analytics et n’émet pas de requête après le retrait stabilisé. Le contrôle ne déclenche aucune conversion portant le libellé réel.

Le contrôle public `tests/google-ads.production.mjs` ne remplit aucun formulaire, interdit les requêtes de formulaire et le libellé de conversion réel, et utilise un profil Chrome isolé. Il examine uniquement la bannière, le chargement après accord, le blocage après refus, les cookies d’hôte et les éventuelles violations de sécurité.

Ces tests ne prouvent pas l’attribution d’un clic publicitaire payant ni la réception d’une conversion dans le rapport Google Ads. La vérification de production dans Tag Assistant et Google Ads reste nécessaire.

Avant le lancement : choisir cette conversion pour la campagne test (pas les anciennes conversions GA4 ou le formulaire hébergé Google), vérifier les composants hérités (notamment Appel), les exclusions, le marquage automatique et le budget. Garder le brouillon tant que ces points ne sont pas confirmés. La valeur zéro ne permet pas de calculer un ROAS financier ; suivre les demandes, leur qualité et les rendez-vous.

## Références utilisées

- [Consentement basique Google](https://developers.google.com/tag-platform/security/concepts/consent-mode).
- [États de consentement](https://developers.google.com/tag-platform/security/guides/consent).
- [Domaines CSP officiels](https://developers.google.com/tag-platform/security/guides/csp).
- [Paramètres de confidentialité](https://developers.google.com/tag-platform/security/guides/privacy).
- [Configuration des cookies](https://developers.google.com/tag-platform/security/guides/customize-cookies).
- [Informations Google sur les cookies _gcl_](https://policies.google.com/technologies/cookies?hl=fr).

La confidentialité du site décrit les informations techniques, les destinataires, les transferts possibles et les limites du retrait. Cette recette n’est pas une certification juridique.

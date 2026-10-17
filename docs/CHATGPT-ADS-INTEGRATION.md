# ChatGPT Ads — intégration et publication autorisée

17 octobre 2026. Périmètre : uniquement la landing contact.fiduconnect.ch.
Le site SEO dans son worktree distinct n'est pas modifié.

L'exploitant a autorisé la simplification du bandeau et sa mise en ligne le
17 octobre 2026. Le premier niveau présente « Vos préférences de cookies »,
Accepter, Refuser et Personnaliser. Le volet Personnaliser expose la finalité
facultative, Google Ads, OpenAI et la correspondance automatique avancée avant
le choix. Il permet de conserver la mesure décochée et d'enregistrer ses choix.
Le formulaire reste utilisable sans accord. La mise en ligne effective doit
être vérifiée dans Netlify et sur le domaine après le push.

## Ressources déjà créées par l'exploitant

- Pixel public : `6D5tyKYCNSbDkUQaLHpVbs`.
- Source : FIDUCONNECT — contact.fiduconnect.ch.
- Conversion : Demande FiduConnect. (point final présent dans Ads Manager).
- Événement standard : `lead_created`, données `customer_action`.
- Campagne actuellement à objectif Clics, budget moyen 20 CHF/jour,
  dates affichées 17–24 octobre 2026. Aucune modification de campagne ici.

## Garde-fous dans le code

`OPENAI_ADS_ENABLED = true` dans `lib/openai-ads.ts`, après autorisation de
publication. Le drapeau reste un coupe-circuit : le remettre à false et
redéployer désactive OpenAI. Il ne remplace jamais le choix du visiteur.

Fonctionnement :

- Nouveau consentement version 2 (version 1 Google seule refusée pour la mesure).
- Prestataires et empreintes de coordonnées présentés dans Personnaliser et
  dans la politique de confidentialité, accessibles avant le choix.
- Aucun téléchargement du SDK avant acceptation ; refus et stockage indisponible
  ne bloquent pas le formulaire. SDK initialisé avec consentement false avant init.
- Chargement limité au sous-domaine contact et aux hôtes locaux de test.
- Mesure seulement après réponse `/api/lead` réussie avec JSON `ok: true`,
  hors honeypot. Le serveur confirme l'acceptation par le service d'e-mail,
  pas la délivrabilité ni la qualification commerciale du prospect.
- Verrou de soumission existant conservé ; pas d'événement au montage de /merci.
- Identifiant aléatoire par conversion, `opt_out: true`, `debug: false`.
- Aucun champ du formulaire passé manuellement au pixel. Attention : ce n'est
  **pas** une garantie d'absence de coordonnées hachées : la correspondance
  automatique avancée de cette source peut les détecter dans la page.
- Retrait : consentement false, purge de la file locale si le SDK attend encore,
  suppression des cookies accessibles, rechargement différé si un envoi est en cours.
- Google Ads conservé et indépendant d'un blocage du SDK OpenAI.
- Aucun secret, aucune clé API, aucune API Conversions serveur nécessaire.

Les tests simulent les scripts et les réponses du formulaire. Ils n'envoient
ni demande réelle ni événement réel à OpenAI ou à Google.

## Vérifications et limites

1. Conditions de conversion et Ad Tools DPA officiels consultés le 17 octobre.
   Le DPA prévoit le traitement des données suisses par OpenAI Ireland Limited
   et un mécanisme de transfert valable pour les transferts ultérieurs ; cela
   ne garantit pas un stockage exclusivement européen. La notice renvoie aux
   conditions, au DPA et à la politique de confidentialité pour la Suisse.
   Aucun nouveau contrat n'a été accepté par l'agent. L'exploitant avait créé
   la source dans Ads Manager. Ce contrôle n'est pas une certification juridique.
2. Tests locaux avec SDK, réponses serveur et préférences simulés : aucune
   demande réelle ni événement réel de conversion envoyé. La compilation de
   production est vérifiée ; les tests isolent aussi le coupe-circuit désactivé.
3. Vérifier dans un navigateur : aucun domaine OpenAI avant choix/refus ;
   un seul SDK après accord ; ancienne préférence redemandée ; retrait, onglets,
   navigation, blocage SDK, un succès et aucun événement sur erreur/double clic.
   La correspondance automatique du SDK réel n'a pas encore été auditée.
4. Vérifier les nouvelles origines CSP script/connect/img sans élargir à `*`.
5. Après publication, réaliser avec autorisation un test contrôlé de réception dans
   le flux d'événements Ads Manager. La création de la conversion n'est pas
   une preuve de réception effective. Ne pas publier le site SEO par erreur.
6. Examiner séparément l'association pour les rapports à la campagne Clics ;
   ne pas dupliquer en campagne Conversions ni changer objectif/budget sans accord.

## Références officielles consultées

- https://developers.openai.com/ads/measurement-pixel
- https://developers.openai.com/ads/conversion-tracking
- https://openai.com/policies/conversion-terms/
- https://openai.com/policies/ad-tools-dpa/

Les durées documentées sont 30 jours après écriture de `__oppref` et
365 jours pour `__obref` (le navigateur peut les limiter). Elles ne sont ni
la fenêtre d'attribution ni la durée de conservation côté fournisseur.

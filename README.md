# FIDUCONNECT — refonte SEO Genève

Copie de travail SEO distincte de la landing SEA. Domaine visé : **www.fiduconnect.ch**, hébergeur existant confirmé : **Vercel**, projet **fiduconnect.ch** dans **lopezdamiens-projects**. Ne pas le confondre avec l’autre projet `fiduconnect`. Ne pas déployer dans le projet Netlify `fiduconnect-sea`, ni pousser sur sa branche `landing-sea`.

## Aperçu local

`npm run dev -- --webpack --hostname 127.0.0.1 --port 3002`

Ouvrir http://127.0.0.1:3002/ . Aucun secret n’est nécessaire : les envois sont bloqués par `SEO_FORM_SENDS_ENABLED=false`, même si un environnement possède des identifiants. Utiliser uniquement des données fictives pour les essais.

## Vérifications SEO

`npm run lint`

`npm run test:seo`

`npm run build -- --webpack`

`npm run check:seo-built`

Les tests historiques SEA restent dans le dépôt mais ne sont pas tous applicables à cette refonte. Les contrôles du HTML construit supposent le mode aperçu actuel, non indexable.

## Publication non autorisée à ce stade

`SEO_PUBLICATION_APPROVED=false` maintient les pages en noindex et le sitemap vide. Un futur changement de ce verrou n’active pas le formulaire. La commande de build Vercel préparée appelle `check:seo-deploy`, qui doit refuser le lancement tant que l’accord et les envois ne sont pas validés. Un build local réussi ne vaut pas autorisation de publication. La règle edge Netlify héritée ne s’exécute pas sur Vercel : sa protection anti-abus reste à vérifier séparément.

Voir [le point global et la procédure de lancement](docs/SEO-AVANT-PUBLICATION.md) et [l’historique de préparation](docs/SEO-PREVIEW.md). Les autres documents de déploiement présents dans le dépôt décrivent la landing SEA et son historique, pas une preuve de configuration du futur hébergement SEO.

Présenter le point global à Damien et obtenir son accord avant publication. Ne pas modifier les DNS, les secrets, l’abonnement ou les réglages du SEA par déduction. Ne pas importer un dépôt dans un hébergeur sans validation : l’import peut publier immédiatement.

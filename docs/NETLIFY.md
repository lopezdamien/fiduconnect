# Préparation Netlify — 11 octobre 2026

Hébergeur retenu : Netlify Free. **Aucune publication autorisée ou effectuée.** Aucun compte créé, contrat accepté, dépôt connecté, DNS modifié ou secret transféré par cette préparation.

## Configuration locale

- Node 24 ; build `npm run build -- --webpack` ; sortie `.next`.
- Adaptateur Next.js automatique fourni par Netlify, sans dépendance ajoutée ni version forcée.
- Pas d’export statique, de redirection SPA ou de Netlify Forms : `/api/lead` et Resend sont conservés. Netlify exécutera les routes serveur dans ses fonctions.
- Aucun secret dans `netlify.toml`. Aucun fichier `.env` modifié.
- `PRODUCTION_LEADS_ENABLED = false` reste actif. Ce verrou bloque l’envoi, **pas la publication**. La configuration n’empêche pas un import ou un téléversement de publier le site.
- Un build Next local ne valide pas à lui seul l’adaptateur Netlify : ce contrôle reste à effectuer lors d’une étape autorisée, sans rendre le site public prématurément.

Contrôles locaux effectués après ces changements : lint réussi, 48 tests réussis, build webpack réussi. Les tests n’envoient pas d’e-mail réel. La préparation ne change ni la landing responsive ni ses formulaires.

## Étape actuelle : compte uniquement

L’exploitant peut créer ou ouvrir son compte Free et accepter lui-même les conditions. Ne pas importer de dépôt, cliquer sur Deploy/Publish, utiliser le glisser-déposer ou modifier un abonnement à ce stade. Vérifier les accès et la récupération du compte.

## Avant toute publication ultérieure

1. Confirmer le domaine public ; la valeur de repli actuelle `www.fiduconnect.ch` n’est pas une confirmation. Pas de modification DNS sans autorisation.
2. Valider les accords du compte, les sous-traitants et les pays réellement concernés ; compléter la confidentialité. Le DPA public prévoit des clauses contractuelles types adaptées à la Suisse, mais aucun accord n’a été accepté ici. Ne pas promettre un hébergement exclusivement européen.
3. Examiner une protection anti-abus durable adaptée à Netlify : le limiteur mémoire actuel est par processus et ne suffit pas pour plusieurs fonctions. Vérifier les fonctions disponibles et leur coût avant de choisir ; ne pas transposer automatiquement une règle Vercel.
4. Faire saisir les secrets côté serveur par l’exploitant, sans les recopier dans Git, les documents ou le navigateur client. Vérifier la configuration Resend existante ; aucune migration de messagerie requise.
5. Désactiver le badge « Powered by Netlify » dans les paramètres du futur projet. Il est activé par défaut sur les nouveaux projets Free mais peut être désactivé gratuitement. Recontrôler scripts, cookies, stockage et CSP sur la version finale.
6. Vérifier les quotas : Free dispose actuellement de 300 crédits mensuels partagés dans le compte. Trafic, requêtes et déploiements consomment des crédits ; à épuisement, les projets peuvent être suspendus. Ne pas promettre un nombre de visiteurs ni activer de facturation sans accord.
7. Reprendre la liste `AVANT-PUBLICATION.md`, valider la suppression des données, puis obtenir l’autorisation de lancement avant de lever le verrou. Tester ensuite l’environnement réel avec un seul test fictif autorisé.

## Sources officielles vérifiées

- [Next.js sur Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/)
- [Configuration du build](https://docs.netlify.com/build/configure-builds/file-based-configuration/)
- [Node 24 par défaut](https://www.netlify.com/changelog/2026-07-07-nodejs-24-default-new-sites/)
- [Offres et crédits](https://www.netlify.com/pricing/)
- [DPA, version du 9 juin 2026](https://www.netlify.com/pdf/netlify-dpa.pdf) et [sous-traitants](https://www.netlify.com/trust-center/)
- [Badge désactivable](https://docs.netlify.com/manage/projects/powered-by-netlify-badge/)

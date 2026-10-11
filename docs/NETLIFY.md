# Préparation Netlify — 11 octobre 2026

Hébergeur retenu : Netlify Free. **Aucune publication autorisée ou effectuée.** L’exploitant a ouvert son compte. Inspection en lecture seule : offre Free, 300 crédits disponibles, zéro projet créé, aucune carte bancaire enregistrée. Aucun contrat accepté par l’agent, dépôt connecté, DNS modifié ou secret transféré. Double authentification : activation confirmée par l’exploitant après ce contrôle, sans nouvelle inspection directe par l’agent.

Adresse confirmée par l’exploitant : **https://contact.fiduconnect.ch/** pour la landing SEA. **https://www.fiduconnect.ch/** est réservé au futur site SEO. `contact` est un sous-domaine du domaine déjà détenu : aucun nouvel achat nécessaire. La configuration locale ne crée pas le sous-domaine et ne modifie ni DNS, ni certificat, ni site existant.

Après préparation de cette adresse : lint, 54 tests et build webpack réussis. Vérification du HTML compilé : canonical et URL OpenGraph pointent bien vers `https://contact.fiduconnect.ch`. Les secrets et fichiers `.env` sont inchangés ; la landing reste non indexable et le verrou d’envoi en production reste actif. Le sous-domaine n’est pas encore raccordé à cette version.

## Configuration locale

- Node 24 ; build `npm run build -- --webpack` ; sortie `.next`.
- Adresse publique non secrète `NEXT_PUBLIC_SITE_URL` préparée dans `netlify.toml` ; valeur de repli dans `lib/seo.ts` identique. Les URL des métadonnées, de l’organisation et du sitemap utilisent cette base. Les variables existantes restent prioritaires ; vérifier qu’aucune valeur du compte Netlify ne la remplace avant lancement. Aucun fichier `.env` modifié.
- Adaptateur Next.js automatique fourni par Netlify, sans dépendance ajoutée ni version forcée.
- Pas d’export statique, de redirection SPA ou de Netlify Forms : `/api/lead` et Resend sont conservés. Netlify exécutera les routes serveur dans ses fonctions.
- Aucun secret dans `netlify.toml`. Aucun fichier `.env` modifié.
- `PRODUCTION_LEADS_ENABLED = false` reste actif. Ce verrou bloque l’envoi, **pas la publication**. La configuration n’empêche pas un import ou un téléversement de publier le site.
- Un build Next local ne valide pas à lui seul l’adaptateur Netlify : ce contrôle reste à effectuer lors d’une étape autorisée, sans rendre le site public prématurément.

La règle préparée dans `netlify/edge-functions/lead-rate-limit.js` vise uniquement `/api/lead` : 10 requêtes sur 60 secondes, par IP et domaine. Le moteur Netlify applique le comptage ; la fonction retourne `undefined` pour poursuivre vers l’API Next existante, sans lire, stocker ou journaliser le formulaire. Aucun compteur local prétendument partagé, secret, cookie, CAPTCHA ou nouveau prestataire. La règle est définie dans le code de la fonction, pas dans `netlify.toml`.

Cette règle compte les requêtes sur ce chemin, pas uniquement les demandes valides. Un réseau d’entreprise peut partager une IP. Netlify annonce un délai d’application pouvant atteindre dix secondes après dépassement ; cette limite ne constitue donc pas un plafond strict d’e-mails ni une protection contre des attaques distribuées. Le limiteur mémoire existant et les autres contrôles de l’API sont conservés. L’offre Free autorise deux règles dans le code ; une seule est préparée ici.

Le formulaire traite désormais les réponses 429 même si Netlify renvoie du texte ou du HTML, avec un message invitant à patienter et sans perdre la saisie. Les autres erreurs non JSON affichent un message compréhensible, pas les détails techniques du serveur.

**Pas encore active ou validée sur Netlify.** Le serveur `next dev` n’exécute pas cette règle. Les tests locaux contrôlent la configuration et le passage vers Next, ainsi que les erreurs du formulaire, pas le compteur distribué de Netlify. Avant lancement, vérifier dans les journaux de traitement Netlify que la règle est reconnue (une règle invalide n’empêche pas forcément une publication), les chemins alternatifs éventuels de l’API générée par l’adaptateur et le rejet 429. Tester avec envoi d’e-mails désactivé, sur une infrastructure autorisée ; aucune nouvelle demande réelle n’a été envoyée.

Contrôles après ajout de la règle : lint, 52 tests et build webpack réussis. Aucun paquet installé, aucune modification des fichiers `.env`, aucun envoi réel ni déploiement.

## Étape actuelle : compte uniquement

Le compte est ouvert. Ne pas importer de dépôt, cliquer sur Deploy/Publish, utiliser le glisser-déposer ou modifier un abonnement à ce stade. Vérifier les accès et la récupération du compte.

## Avant toute publication ultérieure

1. Adresse confirmée : `contact.fiduconnect.ch`. Vérifier la maîtrise de la zone DNS, puis préparer le rattachement du **seul sous-domaine** à Netlify après autorisation. Ne pas remplacer les enregistrements du domaine principal, de `www` ou de la messagerie. Aucun changement DNS, certificat ou rattachement effectué ici ; ne pas deviner la cible CNAME avant la création autorisée du projet.
2. Valider les accords du compte, les sous-traitants et les pays réellement concernés ; compléter la confidentialité. Le DPA public prévoit des clauses contractuelles types adaptées à la Suisse, mais aucun accord n’a été accepté ici. Ne pas promettre un hébergement exclusivement européen.
3. Valider la règle anti-abus préparée ci-dessus, ses limites et l’absence de chemin de contournement. Elle ne remplace pas une surveillance des crédits, des erreurs et des abus. Réexaminer les seuils selon le trafic réel, sans abonnement supplémentaire automatique.
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
- [Limitation des requêtes : disponibilité, délais et validation](https://docs.netlify.com/manage/security/secure-access-to-sites/rate-limiting/)
- [Déclaration des fonctions edge](https://docs.netlify.com/build/edge-functions/declarations/) et [passage vers le traitement suivant](https://docs.netlify.com/build/edge-functions/api/)

# FIDUCONNECT — validation avant publication

Version locale du 10 octobre 2026. Aucun déploiement autorisé.

## Corrections locales

- Mentions légales et déclaration de confidentialité adaptées au service d’orientation, et non à une consultation de 30 minutes.
- Contact : Smart Administration – Damien Lopez, Avenue d’Aïre 73C, 1203 Genève ; contact@smartadministration.ch.
- Transmission au partenaire seulement après l’appel et validation du rendez-vous par le client.
- Résumé d’information avant le bouton d’envoi dans les deux formulaires : exploitant, finalité, validation du rendez-vous avant transmission, destinataires techniques et pays accessibles dans un volet natif. Liens vers la conservation, les droits et les garanties de transfert ; pas de case imposant un consentement publicitaire.
- Déclaration de confidentialité reformulée en langage simple : rôles de Vercel, Resend et Infomaniak, distinction entre l’envoi depuis l’Irlande et le stockage aux États-Unis, explication des clauses contractuelles types. Aucun tarif d’abonnement ni rémunération commerciale publié. Avertissement de travail conservé, sans prétendre à une validation complète des pays et des accords.
- Google Tag Manager, iframe sans JavaScript et événement de conversion retirés. Ne pas réintroduire le conteneur avant audit de ses tags et des choix de consentement.
- Champs normalisés et bornés côté serveur, listes de choix partagées avec le formulaire, téléphone contrôlé, corps JSON limité à 16 Kio et lecture limitée à 5 secondes.
- Vérification du format et de l’origine, honeypot, échappement HTML, erreurs sans contenu personnel et réponse sans cache.
- Limiteur complémentaire : 3 demandes par e-mail et 30 au total par fenêtre de 15 minutes, **par processus**. L’identifiant est un HMAC avec clé aléatoire en mémoire. Pas d’adresse IP ni d’e-mail en clair conservé par ce limiteur. Celui-ci se réinitialise lors des redémarrages et ne protège pas à lui seul un déploiement serverless multi-instance.
- En-têtes de sécurité et interdiction d’images distantes. La CSP bloque les ressources tierces, mais autorise les scripts inline nécessaires à l’hydratation Next.js : ce n’est pas une CSP stricte à nonce.

## Verrou de production

`lib/lead-security.ts` contient `PRODUCTION_LEADS_ENABLED = false` : l’endpoint répond 503 lorsque `NODE_ENV=production`, sans envoyer de lead. Cela concerne aussi `npm run start` en local. Le formulaire fonctionne avec `npm run dev` si la configuration Resend existante est valide.

Ne retirer ce verrou qu’après validation de tous les points ci-dessous et autorisation de publication par l’exploitant. Ne pas le remplacer par un paramètre public contrôlable depuis le navigateur.

## Points encore à valider

Cette liste distingue les obligations de protection et d'information, les conditions des fournisseurs et les précautions techniques proposées. Chaque case n'est pas une obligation légale autonome. La double authentification, un nouveau service de sauvegarde ou le réglage Resend TLS Enforced ne sont pas présentés comme des obligations universelles. La sécurité doit rester proportionnée aux données et aux risques ; les résultats d'un contrôle doivent être documentés sans prétendre à une certification.

- [x] Durée des demandes sans rendez-vous retenue après délégation de l’exploitant : trois mois calendaires depuis la réception initiale, sans renouvellement au rappel. Déclaration mise à jour ; mise en œuvre de la suppression encore à vérifier.
- [ ] Mettre en œuvre la suppression dans Infomaniak, corbeilles, exports et outils de suivi, et documenter les limites des sauvegardes. Aucun effacement automatique des e-mails n’est réalisé par le code du site.
- [ ] Pour chaque transmission : noter la date, le partenaire identifié, le rendez-vous validé et les informations que le client accepte de partager. Pas d’enregistrement audio nécessaire par défaut. Partager uniquement les informations utiles, pas l’ensemble de la boîte mail.
- [ ] Validation contractuelle à la charge de l’exploitant : vérifier les accords applicables aux comptes Vercel, Resend et Infomaniak, leurs sous-traitants, les pays de traitement et les garanties de transfert. Compléter la déclaration avec tous les pays réellement concernés. Le résumé public ne remplace pas cette validation ; aucun contrat accepté par l’agent.
- [ ] Choisir une offre d’hébergement autorisant l’usage commercial : le projet Vercel inspecté est sur Hobby, réservé à l’usage personnel non commercial. Aucun abonnement modifié. Voir [les conditions d’usage Vercel](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage).
- [ ] Examiner le modèle de rémunération avec l’exploitant et, si nécessaire, un juriste. Ne pas promettre une comparaison exhaustive ou une indépendance non démontrée. La gratuité concerne FIDUCONNECT, pas les services ultérieurs de la fiduciaire.
- [ ] Activer une protection centralisée anti-abus pour POST /api/lead sur Vercel (règle WAF ou limiteur durable), avec limites, exceptions et tests adaptés au trafic attendu. Ne pas se fier uniquement au limiteur mémoire ni au contrôle d’origine : un bot peut fabriquer des en-têtes.
- [ ] Vérifier les accès, la double authentification et les permissions de la clé d’envoi. Aucun secret n’a été lu en clair ou modifié pour ces corrections.
- [ ] Vérifier la réception Infomaniak avec TLS, puis envisager TLS Enforced dans Resend et retester. Le réglage observé lors de l’audit était Opportunistic ; aucun paramètre de compte n’a été changé.
- [x] Procédure d’accès, de rectification et de suppression rédigée ; responsable désigné : Damien Lopez. Voir `docs/PROCEDURES-DONNEES.md`.
- [x] Procédure d’incident rédigée : contenir, évaluer le risque, documenter et examiner les notifications requises. Voir `docs/PROCEDURES-DONNEES.md`.
- [ ] Vérifier l’application effective de ces procédures : surveillance de la boîte, calendrier de suppression, suivi restreint et moyens de réponse/gestion d’incident. Une procédure écrite ne prouve pas sa mise en œuvre.
- [ ] Si les campagnes et mesures Google sont activées : inventorier les tags, prévoir les choix appropriés, le retrait et la preuve du consentement. Tester l’absence de transmission non autorisée, y compris sans JavaScript. Ne jamais transmettre le texte libre ou les coordonnées via une URL, un événement ou le dataLayer.
- [ ] Fixer le domaine public, vérifier HTTPS, les en-têtes et les journaux de l’environnement final avant ouverture au public. La configuration locale ne prouve pas celle des comptes.
- [ ] Faire relire les textes, supprimer leur avertissement « version locale de travail » seulement après validation et autoriser explicitement la publication.

## Vérifications reproductibles

### Contrôle des comptes du 9 octobre 2026

Lecture seule Vercel : compte accessible, deux projets FiduConnect identifiés. `fiduconnect.ch` utilise Next.js et Node 24.x ; `fiduconnect` utilise le préréglage Other. Tableau de bord de `fiduconnect.ch` : offre Hobby, aucune règle personnalisée, Bot Protection Off. Aucun projet n’a été modifié, lié au dépôt ou déployé. L’offre Hobby n’autorise pas le lancement commercial de cette landing. La règle proposée et les vérifications restantes figurent dans `docs/PROCEDURES-DONNEES.md` ; le projet cible doit être confirmé avant toute action sur le site existant.

Lecture seule Resend : domaine Verified, région d’envoi Irlande, TLS Opportunistic et offre Free confirmés. DPA signé par Resend disponible dans Settings → Documents ; contenu de la version applicable encore à relire, aucun accord accepté pendant ce contrôle.

### Contrôle complémentaire du 10 octobre 2026

- Git propre avant la mise à jour de cette documentation, branche `landing-sea`.
- Console Infomaniak accessible : un utilisateur actif, aucune invitation en attente et un appareil configuré pour la boîte de réception. Les permissions détaillées n'ont pas été validées. Lors du contrôle précédent, aucune redirection n'était configurée et la double authentification du compte était active par SMS ; aucun réglage changé.
- La fenêtre de restauration de la boîte destinataire indique explicitement **30 jours maximum** et propose la sauvegarde du 10 octobre 2026 à 04:30. Fenêtre fermée avec Annuler : aucune restauration, suppression ou notification provoquée.
- La [FAQ Infomaniak](https://www.infomaniak.com/fr/support/faq/1203/restaurer-un-compte-mail-recuperer-des-e-mails-supprimes) décrit des sauvegardes quotidiennes et une restauration jusqu'à 30 jours selon l'offre. Les [conditions particulières Service Mail](https://welcome.infomaniak.com/api/web-components/1/cgu/latest?id=38&locale=fr_FR), révision du 27 mai 2026, mentionnent sept jours au §7.2 et la responsabilité du client de conserver une sauvegarde au §5.3. L'interface confirme la fenêtre de restauration proposée, pas la durée de toutes les copies internes ni la version contractuelle applicable au compte. Ne pas garantir un effacement immédiat ou fixer publiquement une durée globale sur cette seule base. Aucun service de sauvegarde supplémentaire souscrit.
- Resend : domaine Verified, région Ireland, **Opportunistic** à nouveau observé. Ce mode tente TLS mais autorise un repli sans chiffrement ; [TLS Enforced](https://resend.com/docs/dashboard/domains/tls) refuse l'envoi si TLS ne peut pas être établi. Aucun changement appliqué.
- Le MX du domaine destinataire est `mta-gw.infomaniak.ch`. Une tentative STARTTLS SMTP sur le port 25, avec vérification du certificat et du nom de serveur demandée, n'a donné aucune réponse et a été arrêtée après 25 secondes. Aucun message ni identifiant de connexion envoyé. **Résultat non concluant** : ni succès TLS, ni preuve d'une absence de TLS. Vérifier un en-tête de réception d'un test fictif identifié ou réaliser un test de livraison distinct autorisé avant d'affirmer que le trajet Resend → Infomaniak a été vérifié.
- Aucun compte, secret, fichier `.env` ou texte public de la landing modifié ; aucun déploiement. Seule la documentation interne a été actualisée.

`npm test` teste le véritable handler avec Resend simulé, sans lire de fichier .env ni envoyer d’e-mail. Compléter avec `npm run lint`, `npm run build`, `npm audit` et `npm audit --omit=dev`. Un envoi réel doit être un test distinct autorisé, avec données fictives clairement identifiées.

### Dépendances après mise à jour

Next.js et sa configuration ESLint sont alignés sur 16.4.0. Resend est conservé et mis à jour dans sa majeure 6. Les autres mises à jour respectent les plages de versions du projet.

L’audit complet conserve cinq entrées élevées dans la chaîne **de développement uniquement** : eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces 3.0.3. Elles remontent à la même alerte de récursion sur des motifs imbriqués. L’avis consulté ne propose aucune version corrigée de braces. Ne pas lancer `npm audit fix --force` : npm propose ici un retour à eslint-config-next 14, incompatible avec l’alignement actuel. Réévaluer dès qu’une correction amont existe ; ne pas donner à l’outil de lint des motifs non fiables. [Avis braces](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm).

### Résultats locaux

- Tests : 36 réussis, dont 34 pour le handler avec Resend simulé et 2 pour l’information sur les données. Le rendu du véritable formulaire est vérifié pour les instances hero/final : notice avant l’envoi, pays, partenaires, liens et absence de newsletter automatique. Le rendu du contenu de confidentialité vérifie les garanties et l’absence de promesse de validation terminée. Aucun envoi réel.
- Lint : réussi, sans erreur ni avertissement.
- Audit des dépendances de production : zéro alerte au moment du contrôle. Cela ne garantit pas une absence globale de vulnérabilités.
- Compilation vérifiée avec `npm run build -- --webpack`. Le moteur Turbopack de `npm run build` est bloqué localement par une restriction de création de processus/port, même après la tentative avec permissions étendues. Le script par défaut est conservé.
- Prévisualisation locale : `npm run dev -- --webpack --hostname 127.0.0.1`, à http://127.0.0.1:3000/.
- Pages principales et légales : HTTP 200 ; anciennes routes vérifiées : HTTP 404.
- Tests HTTP sur localhost et 127.0.0.1 : contrôle des champs 400, format incorrect 415, origine étrangère 403, honeypot 200 sans envoi. Next.js normalise certaines adresses locales ; le contrôle d’origine tient compte du Host réel.
- Version compilée vérifiée temporairement sur le port local 3002 : page 200, en-têtes de production présents, demande valide refusée avec 503 par le verrou avant tout envoi. Ce serveur de contrôle a ensuite été arrêté.
- Ouverture automatique dans le navigateur bloquée par sa politique d’accès. Pas de nouvelle validation visuelle mobile ni de nouvel envoi réel après la mise à jour Resend.

## Fichiers concernés

- `app/api/lead/route.ts` : validation, contrôles d’envoi et messages Resend.
- `lib/lead-security.ts` : lecture bornée, contrôle d’origine, limiteur mémoire et verrou de production.
- `lib/lead-fields.ts` : options et limites partagées.
- `components/SeaLeadForm.tsx` : champs bornés, données utiles et information préalable.
- `app/layout.tsx` : retrait des tags et de l’iframe Google.
- `next.config.ts` : en-têtes, images distantes désactivées et retrait des anciennes redirections SEO.
- `app/mentions-legales/page.tsx` et `app/confidentialite/page.tsx` : textes actualisés, encore explicitement en version de travail.
- `components/LegalPage.tsx` : présentation des textes dans l’identité visuelle de la landing.
- `lib/seo.ts` : coordonnées structurées cohérentes avec l’exploitant confirmé ; ancien téléphone non confirmé retiré.
- `package.json` et `package-lock.json` : versions corrigées et commande de test.
- `tests/lead.test.mjs` : tests isolés sans réseau ni secrets.
- `tests/privacy.test.mjs` : contrôles du rendu de l’information avant envoi et du contenu de confidentialité, sans navigateur ni secrets.
- `docs/AVANT-PUBLICATION.md` : procédures, limites et points encore à valider.
- `docs/PROCEDURES-DONNEES.md` : préparation opérationnelle de la conservation, des suppressions, des accords de transmission, des droits et des incidents ; contrôles des comptes encore à effectuer.
- `AGENTS.md` : fichier généré automatiquement par la nouvelle version de Next.js au démarrage local, conservé comme tel.

Aucun fichier `.env`, secret, logo ou contenu visuel de la landing n’a été modifié.

## Références consultées

- [PFPDT — devoir d’informer](https://www.edoeb.admin.ch/fr/devoir-dinformer) : information préalable, finalités, destinataires et transferts.
- [PFPDT — sous-traitance](https://www.edoeb.admin.ch/fr/externalisation-sous-traitance) : responsabilités et contrats.
- [Google — politique de consentement](https://www.google.com/about/company/user-consent-policy/) : couvre aussi la Suisse, notamment la personnalisation publicitaire.
- [Resend — sécurité](https://resend.com/security), [DPA](https://resend.com/legal/dpa), [TLS](https://resend.com/docs/dashboard/domains/tls).
- [Vercel — DPA](https://vercel.com/legal/dpa), [limitation WAF](https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting).
- [Infomaniak — Service Mail](https://www.infomaniak.com/fr/ksuite/service-mail).

Ces contrôles ne constituent pas une certification juridique ou un test d’intrusion. L’application du RGPD doit être appréciée selon le ciblage et les traitements réels, pas la seule accessibilité du site depuis l’Union européenne.

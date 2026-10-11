# FIDUCONNECT — procédures internes pour les données

Préparation locale mise à jour le 11 octobre 2026. Responsable : Damien Lopez, Smart Administration. Contact : contact@smartadministration.ch.

Ces procédures sont préparées, mais leur application dans les comptes doit encore être vérifiée avant publication. Aucun e-mail n’a été supprimé, aucun compte modifié et aucun abonnement souscrit pendant cette préparation. Ne pas conserver de données réelles de prospects dans ce dépôt Git.

## 1. Réception et suivi

- Réserver l’accès à la boîte aux personnes qui traitent effectivement les demandes ; vérifier leurs droits et la double authentification.
- Ne copier dans un outil de suivi que les informations nécessaires : référence interne, date de réception, coordonnées, besoin, état de la demande et échéance de suppression. Éviter les copies supplémentaires du champ libre.
- Garder le suivi dans un espace professionnel à accès restreint, pas dans une feuille publique ou un compte personnel. Ne pas créer de nouvel outil sans vérifier son hébergement et ses conditions.
- Ne pas solliciter de pièces fiscales, salariales, bancaires ou d’identité pour cette simple orientation. Si un prospect envoie spontanément un document confidentiel, limiter son accès, ne pas le transférer et organiser sa suppression dès qu’il n’est plus nécessaire.
- Le rappel sous 24 heures est organisé par l’exploitant ; aucun automate de rappel n’est installé par le site.

## 2. Durée et suppression

Choix retenu après délégation de l’exploitant : **trois mois calendaires à compter de la réception initiale pour une demande sans rendez-vous**. Ce délai est une règle interne de minimisation, pas une durée légale universelle. Un rappel ne le renouvelle pas.

Pour un rendez-vous validé, conserver seulement les informations nécessaires au suivi de la mise en relation et supprimer celles-ci à sa clôture. Fixer dès la validation une date de réexamen et documenter tout maintien nécessaire ; ne pas conserver indéfiniment une demande simplement marquée « rendez-vous ».

Procédure à mettre en place avant ouverture :

1. Inscrire l’échéance lors de la réception. Prévoir une revue hebdomadaire et supprimer à cette revue les demandes dont l’échéance tombe avant la prochaine revue, afin de ne pas dépasser trois mois. Aucune règle de suppression automatique n’a été activée.
2. Retrouver les copies dans la réception, les archives, les messages envoyés, les dossiers partagés, les exports et l’outil de suivi. Supprimer uniquement les éléments du dossier identifié, après contrôle des obligations de conservation éventuelles.
3. Traiter aussi la corbeille : une simple mise à la corbeille ne prouve pas la suppression finale. Ne pas vider globalement une boîte ni sa corbeille pour supprimer un seul dossier.
4. Tenir compte des sauvegardes Infomaniak : le 10 octobre 2026, la console de la boîte indique une restauration jusqu'à trente jours maximum. Cette fenêtre n'établit pas la durée de toutes les copies internes ; les conditions publiques mentionnent une autre durée (voir section 6). Ne pas promettre un effacement instantané des sauvegardes non maîtrisées. Si une restauration réintroduit un dossier supprimé, appliquer de nouveau la suppression.
5. Garder une trace minimale de l’opération (référence interne non directement identifiante, date, périmètre et éventuelle limite technique), sans recopier le message ou les coordonnées supprimés. Réexaminer aussi l’utilité de cette trace.

Resend annonce une conservation de trente jours des e-mails et journaux sur les offres Free, Pro et Scale. Ce délai ne supprime pas les copies dans Infomaniak. Vérifier le plan réellement utilisé et ne pas importer les e-mails dans Git pour en garder une preuve.

Une exception pour une obligation légale ou un litige doit indiquer son motif, les informations strictement nécessaires, l’accès restreint et une date de réexamen. Les demandes commerciales infructueuses ne sont pas automatiquement des pièces comptables à conserver dix ans.

## 3. Accord avant transmission au partenaire

Après le rappel, identifier le partenaire et le rendez-vous envisagés. Expliquer au prospect quelles coordonnées et quelles informations utiles seront transmises, puis recueillir sa validation avant tout envoi. Le formulaire seul ne vaut pas validation d’un rendez-vous.

Noter dans le suivi : date, partenaire identifié, rendez-vous validé, portée des informations acceptées et manière dont la validation a été recueillie. Une note factuelle suffit par défaut ; aucun enregistrement audio n’est nécessaire. En cas de doute, demander confirmation avant de transmettre.

Transmettre uniquement les informations utiles au rendez-vous, pas le dossier complet ni les pièces confidentielles spontanément reçues. Vérifier le destinataire avant l’envoi. Ne pas utiliser de mailing à plusieurs fiduciaires ni de lien de partage public. Le partenaire doit informer le client de ses propres traitements.

## 4. Accès, rectification et suppression

Damien Lopez assure le traitement des demandes reçues à l’adresse de contact. Organiser effectivement la surveillance de cette boîte avant publication.

1. Enregistrer la réception, la demande et son échéance dans le suivi restreint ; accuser réception sans communiquer de données à une personne non vérifiée.
2. Vérifier l’identité proportionnellement au risque, par exemple avec les coordonnées déjà connues. Ne pas exiger systématiquement une copie d’identité. Toute pièce exceptionnellement nécessaire doit être limitée, protégée et supprimée dès que sa finalité est remplie.
3. Rechercher dans tous les emplacements concernés, y compris chez les prestataires lorsque nécessaire. Pour l’accès, réunir les données, les finalités, la conservation, l’origine disponible, les destinataires et les pays/garanties de transfert.
4. Fournir en principe gratuitement les renseignements d’accès dans les trente jours. En cas de retard ou de restriction, expliquer les raisons et le délai applicable ; faire valider une restriction juridiquement douteuse. Ce délai ne dispense pas de traiter rapidement une suppression ou une rectification.
5. Répondre par un canal approprié à la sensibilité des informations, sans URL publique contenant les coordonnées. Ne communiquer aucune donnée d’un tiers.
6. Pour la suppression, appliquer la procédure ci-dessus et indiquer précisément ce qui est supprimé et ce qui doit exceptionnellement être conservé. Si un partenaire détient déjà sa propre copie, identifier son rôle et coordonner la demande selon les obligations applicables ; ne pas affirmer pouvoir effacer sa boîte à distance.

[PFPDT — droit d’accès](https://www.edoeb.admin.ch/fr/droit-dacces).

## 5. Incident de sécurité

- Contenir rapidement l’incident : suspendre si nécessaire les envois ou les accès compromis, contacter le prestataire concerné et faire intervenir une personne compétente. La rotation d’une clé et la fermeture d’un compte restent des actions distinctes à autoriser et exécuter hors du dépôt.
- Préserver une chronologie et les éléments utiles dans un espace protégé, sans exposer les secrets ou les données client dans des journaux publics. Noter les systèmes, données et personnes potentiellement concernés ainsi que les mesures prises.
- Évaluer la gravité et les conséquences possibles. Sous la LPD suisse, une violation susceptible d’entraîner un risque élevé doit être annoncée au PFPDT ; les personnes sont informées si leur protection le nécessite. Demander immédiatement un avis spécialisé en cas d’incertitude, sans attendre la fin de l’enquête pour examiner les notifications requises.
- Vérifier séparément les autres règles applicables, notamment si le RGPD concerne les traitements. Ne pas présenter son délai de 72 heures comme une règle suisse universelle.
- Corriger la cause, tester la reprise, documenter la décision de notification ou de non-notification et revoir les accès et procédures.

[PFPDT — notification des violations](https://www.edoeb.admin.ch/fr/databreach-2).

## 6. Prestataires : état vérifié et contrôles restants

Lecture seule du compte Vercel le 9 octobre 2026 : deux projets existants, `fiduconnect.ch` (Next.js, Node 24.x) et `fiduconnect` (préréglage Other). Le tableau de bord de `fiduconnect.ch` affiche l’offre **Hobby**, aucune règle personnalisée et Bot Protection sur Off. La protection DDoS gérée par Vercel existe séparément ; l’absence de règle personnalisée ne signifie pas une absence de toute protection. Aucun rattachement du dépôt, déploiement ou réglage de compte effectué.

**Blocage contractuel avant lancement commercial :** Vercel réserve Hobby à un usage personnel non commercial. Une landing SEA destinée à acquérir des clients relève de l’usage commercial ; prévoir une offre autorisant cet usage (Pro/Enterprise chez Vercel), ou réexaminer l’hébergement avec l’exploitant. Aucun changement d’offre ni engagement financier n’a été effectué. [Vercel — usage commercial](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage).

Identifier le projet retenu avant toute activation : une protection publiée sur un projet existant peut toucher le site déjà en ligne.

Lecture seule Resend le 9 octobre 2026 : domaine `fiduconnect.ch` Verified, région d’envoi Ireland / eu-west-1, TLS **Opportunistic**, offre transactionnelle **Free**. Settings → Documents présente le DPA signé par Resend et indique son application dès l’inscription. Le contenu et les garanties de la version contractuelle applicable doivent encore être relus ; sa présence ne suffit pas à valider l’ensemble des transferts. Aucun contrat accepté ni réglage modifié pendant ce contrôle.

Infomaniak : console accessible, boîte vérifiée en lecture seule le 10 octobre 2026. Un utilisateur actif, aucune invitation en attente, un appareil configuré ; permissions détaillées encore à vérifier. Lors du contrôle précédent, aucune redirection n'était configurée, la double authentification du compte était active par SMS et le nettoyage de la corbeille/des indésirables affichait trente jours. Le nettoyage de ces dossiers ne supprime pas automatiquement les demandes présentes dans la réception ou les archives.

La fenêtre de restauration affiche **30 jours maximum**, avec une sauvegarde datée du 10 octobre 2026 à 04:30. Consultation annulée, aucune restauration effectuée. La [FAQ de restauration](https://www.infomaniak.com/fr/support/faq/1203/restaurer-un-compte-mail-recuperer-des-e-mails-supprimes) décrit des sauvegardes quotidiennes et cette fenêtre selon l'offre. Les [conditions particulières Service Mail](https://welcome.infomaniak.com/api/web-components/1/cgu/latest?id=38&locale=fr_FR), révision du 27 mai 2026, mentionnent sept jours au §7.2 et une responsabilité du client pour sa sauvegarde au §5.3. Ne pas confondre fenêtre proposée par l'interface, conservation de toutes les copies et contrat applicable. Clarifier la différence avec le fournisseur si une durée contractuelle exacte ou une garantie d'effacement est nécessaire ; aucun nouveau service de sauvegarde installé.

Transport : MX `mta-gw.infomaniak.ch` identifié. La tentative STARTTLS sur le port 25 avec vérification du certificat/nom n'a pas obtenu de réponse et a été arrêtée après 25 secondes, sans envoi d'e-mail ni authentification. Résultat **non concluant**, pas une preuve que la réception est dépourvue de TLS. Un contrôle ultérieur distinct du 10 octobre sur le test autorisé `FC-TLS-20261010-A` a confirmé dans les en-têtes Infomaniak une réception ESMTPS depuis Amazon SES eu-west-1 et des résultats SPF/DKIM/DMARC réussis. Cela établit le transport constaté pour ce message, pas une garantie sur tous les futurs envois. Resend reste en mode Opportunistic, observé à nouveau le 10 octobre ; aucun réglage modifié. TLS Enforced est une option à décider séparément : il empêche le repli non chiffré mais peut refuser une livraison si TLS échoue.

Parcours formulaire vérifié le 11 octobre : une seule demande fictive autorisée `FC-MOBILE-20261011-A`, marquée « ne pas rappeler, ne pas transmettre à un partenaire », a conduit à la page Merci. L’exploitant confirme la réception du message. Aucun nouveau contrôle d’en-têtes effectué pour ce second message ; aucune coordonnée de prospect réel utilisée.

Ces contrôles techniques sont des moyens de vérifier une protection proportionnée, pas des obligations légales universelles imposant une double authentification précise, un nouveau service de sauvegarde ou TLS Enforced à tout formulaire. Les conditions des fournisseurs doivent être examinées séparément par l'exploitant.

À vérifier dans les comptes concernés :

- Accords de sous-traitance effectivement applicables, versions et date, sous-traitants, pays et garanties de transfert. Les pages publiques des fournisseurs ne prouvent pas les réglages ni les accords du compte.
- Liste des personnes autorisées, double authentification, récupération des comptes et permissions limitées de la clé Resend. Ne pas copier les secrets dans ce document.
- Possibilité d’activer TLS Enforced dans Resend à décider séparément, avec nouveau test autorisé si le réglage change. La réception TLS d’un message est déjà constatée ; le réglage Opportunistic reste le dernier observé.
- Conservation réelle des journaux, sauvegardes et e-mails, procédures de suppression et d’incident du prestataire.

## 7. Protection Vercel à préparer, pas encore activée

Point de départ proposé pour une règle dédiée : méthode **POST**, chemin exactement **/api/lead**, comptage par IP, fenêtre fixe de dix minutes, plafond de dix requêtes par IP, réponse 429. Ajuster après des tests, notamment pour les bureaux qui partagent une adresse IP. Cette règle ne remplace pas la validation du formulaire ni une stratégie contre des attaques distribuées ; les compteurs Vercel sont régionaux.

Avant activation : confirmer le projet cible, lire les règles déjà présentes, vérifier le plan et la tarification, puis valider toute facturation et toute application au site existant avec l’exploitant. La commande Publish du tableau de bord applique les changements à la production : **ne pas l’utiliser sans autorisation explicite**. Aucun changement WAF n’a été effectué.

Tester ensuite les requêtes autorisées/refusées, la réponse 429, les réessais côté formulaire et l’absence de blocage des pages ou autres services. Ne pas envoyer de vrais e-mails en boucle pour tester la limite.

[Vercel — limitation WAF](https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting).

Le verrou `PRODUCTION_LEADS_ENABLED = false` reste en place. Cette préparation n’est ni une certification de conformité ni une autorisation de publication.

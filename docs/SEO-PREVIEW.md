# Accueil SEO — première version locale

Copie de travail séparée : seo-geneve. Aucun push ni déploiement.

Lancement local (dépendances partagées avec le dépôt SEA, aucun secret copié) :

`npm run dev -- --webpack --hostname 127.0.0.1 --port 3002`

Accueil : http://127.0.0.1:3002/

Cette version comprend l'accueil, un répertoire des besoins et quatre pages dédiées : comptabilité, fiscalité & TVA, salaires & administration et changement de fiduciaire. Les anciennes adresses correspondantes sont conservées : /services/comptabilite, /services/tva, /services/charges-salaires et /services/changer-fiduciaire. Cela ne constitue pas encore un audit exhaustif de migration des anciennes URL.

### Complément de préparation à la publication

Confirmation ultérieure : le site principal est hébergé sur Vercel. Configuration vercel.json préparée sans déploiement ni association de projet. Les passages antérieurs proposant Netlify pour le SEO sont historiques et ne décrivent pas la cible retenue. L’exploitant valide trois mois sans rendez-vous et six mois après le dernier échange pour les mises en relation suivies, avec suppression manuelle hors obligation légale justifiée ; confidentialité actualisée. Régions Vercel, journaux, sauvegardes et réception réelle du formulaire SEO restent à vérifier.

Le périmètre local compte maintenant 16 pages : ajout de /a-propos, /comment-ca-marche, /services/pilotage, /tva-suisse, /ressources et /ressources/changer-fiduciaire-geneve. Navigation mise à jour, 404 dédiée, trois redirections historiques exactes et contrôles hors ligne du HTML compilé. Le futur sitemap de 13 URL est préparé derrière SEO_PUBLICATION_APPROVED=false ; aucune indexation activée. Le build Netlify préparé appelle un contrôle bloquant tant que l’accord et le formulaire ne sont pas validés. Les informations antérieures sur l’absence de ces pages décrivent les étapes précédentes.

Le point global et les contrôles restant à mener sur l’hébergement réel sont détaillés dans SEO-AVANT-PUBLICATION.md. Aucun push, déploiement, envoi réel, changement DNS ou secret pendant cette préparation. Les validations d’hébergement, de conservation et de livraison ne sont pas acquises.

Navigation et pied de page sont partagés entre l'accueil et les nouvelles pages. Chaque page dispose d'un titre, d'une description et d'un canonical propres, d'un fil d'Ariane et de contenu distinct. Les boutons de demande mènent maintenant à /contact, avec un formulaire SEO distinct du composant SEA et sans intégration publicitaire.

La configuration et la validation de livraison du formulaire SEO, la migration complète des anciennes URL et la validation des informations légales restent à réaliser avant publication. Les pages légales ont été adaptées au fonctionnement SEO mais restent des projets explicitement signalés, pas une validation juridique. Confirmer les domaines effectivement couverts par les partenaires avant finalisation du contenu.

## Pages légales SEO — adaptation du 15 octobre

Mentions et confidentialité utilisent désormais la navigation SEO. Retrait des contrôles de consentement Ads hérités ; absence de mesure sur cette version SEO, périmètre distinct de contact.fiduconnect.ch, marqueur de session non personnel expliqué. Le marqueur expire fonctionnellement après 30 minutes mais sa valeur peut rester stockée dans la session : le texte distingue les deux. Le formulaire reste bloqué et toutes les pages légales restent noindex/nofollow.

Avant ouverture, faire confirmer par l’exploitant :

- Identité et adresse reprises des mentions existantes, engagement de rappel sous 24 h et modalités de transmission au partenaire.
- Hébergeur SEO et régions réellement choisies ; fournisseur d’envoi, messagerie destinataire, pays de stockage, sous-traitants et garanties contractuelles effectivement applicables. Ne pas transposer automatiquement la configuration SEA.
- Procédure de suppression des demandes sans rendez-vous (proposition : trois mois), délai maximal pour les dossiers avec rendez-vous, journaux, corbeilles et sauvegardes, responsable de l’opération et traitement des restaurations.
- HTTPS public et protection des comptes d’administration. Ne pas réutiliser une confirmation ancienne concernant le SEA comme preuve de configuration SEO.

Source officielle consultée : https://www.edoeb.admin.ch/fr/communication-de-donnees-a-letranger (devoir d’informer, pays et garanties). Les points inconnus sont identifiés dans les textes de travail, sans garantir de conformité. Supprimer les avertissements seulement après validation de ces informations et mise à jour des textes ; garder les envois désactivés jusque-là. Aucun déploiement ni e-mail réel effectué dans cette étape.

## Formulaire SEO — version du 15 octobre

- /contact : coordonnées, situation, besoin et message facultatif. Validation des champs obligatoires, erreurs lisibles, verrou anti-double clic et saisie conservée en cas d'échec.
- /api/lead : protections existantes conservées (origine, corps limité, validation serveur, honeypot, limiteur par processus, réponses sans cache, échappement de l'e-mail). Le sujet et les corps du message identifient le site SEO, pas la landing SEA.
- Verrou supplémentaire SEO_FORM_SENDS_ENABLED = false dans lib/seo-form-config.ts : aucun envoi possible en développement ou production, même avec des secrets présents. L'interface annonce ce blocage. Aucun secret copié ni fichier d'environnement modifié.
- /merci : confirmation uniquement après réponse HTTP réussie et JSON ok strictement vrai. Un accès direct ne prétend pas qu'une demande a été envoyée. Un horodatage de confirmation, sans donnée du formulaire, est conservé dans l'onglet pour 30 minutes au maximum. Le stockage bloqué est toléré pour la navigation courante. Ce marqueur n'est pas une preuve de livraison en boîte de réception et ne déclenche aucune mesure publicitaire.
- Aucun envoi réel effectué. Le fournisseur d'e-mail et les réponses réseau sont simulés dans les tests. Un test de livraison distinct, explicitement autorisé, restera nécessaire après validation des informations de confidentialité et du futur hébergement.
- Vérifications du 15 octobre : 55 tests ciblés réussis (serveur SEO avec fournisseur simulé, transport/confirmation et pages de services). Dans le navigateur : champs vides signalés et focus sur le premier champ invalide ; soumission fictive locale refusée par le verrou, saisie conservée, bouton réactivé et message d'erreur focalisé ; accès direct à /merci sans fausse confirmation ; pas de débordement horizontal à 390 px et pas de script Ads sur /contact. Le succès du transport est testé avec une réponse simulée, pas avec un e-mail réellement livré.

L'accueil ne monte pas le consentement Ads et ne charge pas de balise publicitaire. Toutes les pages portent noindex pendant la préparation. Le sitemap reste vide volontairement. Ne pas publier cette prévisualisation telle quelle.

Contrôles : lint et build webpack réussis ; aperçu mobile 390 px sans débordement horizontal ; un H1, canonical www.fiduconnect.ch et noindex/nofollow constatés ; aucun script Google Ads sur l'accueil. Aucun formulaire réel envoyé.

Contrôles des pages de services : six tests ciblés réussis, compilation des cinq nouvelles routes réussie. Les quatre pages et le répertoire ont été ouverts en aperçu mobile 390 px : un seul H1, canonical distinct, noindex/nofollow, aucun script Ads et aucun débordement horizontal. Navigation depuis une carte de l'accueil, dépliage d'une FAQ et retour au contact testés. Les tests hérités spécifiques à la landing SEA ne valent pas validation de cette refonte et n'ont pas été présentés comme exécutés ici.

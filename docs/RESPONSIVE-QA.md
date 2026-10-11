# FIDUCONNECT — contrôle responsive du 11 octobre 2026

Version locale uniquement, sans déploiement ni modification des secrets.

## Modifications

Fichiers concernés : `app/page.tsx`, `app/globals.css`, `components/SeaLeadForm.tsx`, `components/PremiumReveal.tsx`, `components/LegalPage.tsx`, `app/merci/page.tsx`, `tests/privacy.test.mjs` et ce compte rendu.

- En-tête compact sur téléphone, lien « Ma demande » avec une cible de 44 px.
- Titre principal fluide et équilibré, introduction resserrée et accès au formulaire plus visible sur téléphone/tablette. La flèche éditoriale et le premier écran pleine hauteur restent sur desktop.
- À 390 px, le formulaire commence à environ 434 px du haut, contre 578 px auparavant. À 320 px : environ 486 px, contre 695 px. La totalité du formulaire reste accessible par défilement naturel, sans fenêtre de défilement interne.
- Champs et menus tactiles de 48 px minimum, texte de saisie de 16 px jusqu’à 1023 px, bouton d’envoi de 52 px. Les longs besoins peuvent prendre plusieurs lignes.
- Prénom/nom en une colonne sous 360 px, deux colonnes au-delà. E-mail/téléphone et listes de choix en une colonne sur téléphone, deux colonnes à partir de 640 px.
- Claviers et remplissage automatique déclarés pour e-mail/téléphone ; action « suivant » pour les champs de coordonnées. Pas de clavier déclenché automatiquement au chargement.
- Étapes plus compactes, réassurances en deux colonnes sur téléphone, titres secondaires proportionnés. Pages légales et confirmation adaptées au petit format.
- Suppression des animations qui rendaient le contenu initial transparent. Le contenu des wrappers est visible dans le HTML initial ; cela ne signifie pas que l’envoi du formulaire fonctionne sans JavaScript.

## Contrôles réalisés dans le navigateur intégré

- Dimensions : 320 × 568, 360 × 780, 390 × 844, 430 × 932, 640 × 900, 768 × 1024, 844 × 390, 1024 × 600, 1024 × 768, 1440 × 900.
- Sur les dix formats : largeur du document égale à celle du viewport, aucun élément du contenu principal ne déborde horizontalement.
- À 1024 × 768 et 1440 × 900 : le premier formulaire est entier dans la fenêtre, la séparation est sous le viewport. Une fenêtre desktop courte conserve le défilement naturel, sans découper les contrôles.
- Choix « Administration d’entreprise » et « Comparer ou changer de fiduciaire » ouverts et sélectionnés à 320 px ; texte non tronqué et menu défilable.
- Soumission d’un formulaire incomplet : erreurs visibles, focus et défilement vers le premier champ à corriger. Aucune demande complète ni aucun e-mail envoyé pendant cette passe responsive.
- Navigation au clavier de Prénom vers Nom contrôlée.
- Pages `/confidentialite`, `/mentions-legales` et `/merci` contrôlées à 320 px sans débordement horizontal. La page Merci a été ouverte directement pour contrôler son affichage, pas à la suite d’un nouvel envoi.
- Lien Cookies : navigation vers `/confidentialite#cookies` et arrivée sur la section correspondante vérifiées sur téléphone.
- Relecture visuelle de toute la landing en capture complète à 390 px.

## Vérifications automatiques

`npm run lint`, 46 tests avec `npm test`, et `npm run build -- --webpack` réussis. Les tests supplémentaires couvrent les attributs de saisie mobile et la visibilité initiale des wrappers.

## Limites et prochaine vérification

Le réglage du viewport ne remplace pas un téléphone physique. Tester encore sur Safari iOS et Chrome Android réels : clavier virtuel, remplissage automatique, zoom/agrandissement du texte et barres du navigateur. Aucun score Lighthouse, test de débit réseau ou audit exhaustif d’accessibilité n’est revendiqué. Le nouveau test réel de livraison reste distinct. Les points de publication et le verrou de production sont inchangés.

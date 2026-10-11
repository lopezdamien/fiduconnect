# FIDUCONNECT

Landing SEA locale : orientation vers une fiduciaire adaptée à l’entreprise à Genève. Next.js, TypeScript, Tailwind ; envoi des demandes par Resend.

## Travail local

```bash
npm run dev -- --webpack --hostname 127.0.0.1 --port 3001
```

Ouvrir http://127.0.0.1:3001/. Le port 3000 est utilisé par une autre application.

## Vérifications

```bash
npm run lint
npm test
npm run build -- --webpack
```

Le formulaire fonctionne en développement avec la configuration Resend existante. En production, le verrou `PRODUCTION_LEADS_ENABLED = false` bloque l’envoi : cela concerne aussi `npm run start` en local.

## Hébergement prévu : Netlify Free

Configuration préparée dans `netlify.toml`, sans déploiement. Ne pas importer le dépôt ni lancer un téléversement : ces actions peuvent publier immédiatement le site.

Adresse prévue et confirmée : **https://contact.fiduconnect.ch/** pour cette landing. Le domaine principal et `www.fiduconnect.ch` restent réservés au futur site SEO. Aucun sous-domaine créé ni DNS modifié par la préparation locale.

Voir [la préparation Netlify](docs/NETLIFY.md), [les contrôles avant publication](docs/AVANT-PUBLICATION.md), [les procédures de données](docs/PROCEDURES-DONNEES.md) et [les contrôles responsive](docs/RESPONSIVE-QA.md).

Ne pas modifier les fichiers `.env` ou les secrets. Ne pas lever le verrou ni publier sans validation explicite de l’exploitant.

L’ancien site est conservé dans la branche `archive/pre-landing-sea`. La nouvelle version est travaillée sur `landing-sea`.

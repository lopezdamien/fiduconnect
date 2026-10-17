import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

// Do not print environment values: only report names of missing requirements.
export function deploymentProblems({ approved, sendsEnabled, env }) {
    const problems = [];
    if (!approved) problems.push('Accord de publication absent : présenter le point global et obtenir la validation de l’exploitant.');
    if (!sendsEnabled) problems.push('Formulaire SEO désactivé : valider la confidentialité et la livraison avant le lancement.');
    if (env.BRANCH === 'landing-sea' || env.VERCEL_GIT_COMMIT_REF === 'landing-sea') problems.push('Branche SEA interdite pour publier le site SEO.');
    if (env.NETLIFY === 'true') problems.push('Hébergement SEO confirmé sur Vercel : ne pas publier cette refonte sur Netlify.');
    if (env.SITE_NAME === 'fiduconnect-sea') problems.push('Projet SEA interdit pour publier le site SEO.');
    for (const name of ['NEXT_PUBLIC_SITE_URL', 'SITE_URL']) {
        if (env[name] && env[name].replace(/\/$/, '') !== 'https://www.fiduconnect.ch') problems.push(name + ' ne correspond pas au domaine SEO attendu.');
    }
    for (const name of ['RESEND_API_KEY', 'LEAD_FROM_EMAIL', 'LEAD_TO_EMAIL']) {
        if (!env[name]?.trim()) problems.push('Configuration serveur manquante : ' + name + '.');
    }
    return problems;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    const release = readFileSync(new URL('../lib/seo-release.ts', import.meta.url), 'utf8');
    const form = readFileSync(new URL('../lib/seo-form-config.ts', import.meta.url), 'utf8');
    const problems = deploymentProblems({
        approved: /^export const SEO_PUBLICATION_APPROVED = true;/m.test(release),
        sendsEnabled: /^export const SEO_FORM_SENDS_ENABLED = true;/m.test(form),
        env: process.env,
    });
    if (problems.length) {
        console.error('Publication SEO bloquée :\n' + problems.map(problem => '- ' + problem).join('\n'));
        process.exitCode = 1;
    } else console.log('Précontrôles locaux réussis. Ils ne remplacent pas les vérifications du projet, des domaines et du retour arrière sur l’hébergement.');
}

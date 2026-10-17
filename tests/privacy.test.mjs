import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

test('dedicated SEA cookie page describes real storage, recipients and withdrawal without changing consent', () => {
    const Cookies = loadComponent('app/cookies/page.tsx', true).default;
    const html = renderToStaticMarkup(React.createElement(Cookies));
    for (const value of ['contact.fiduconnect.ch', 'fiduconnect.ads-consent', '180 jours', '_gcl_*',
        '90 jours', '__oppref', '30 jours', '__obref', '365 jours', 'ne sont pas anonymes',
        'Gérer mes cookies', 'États-Unis']) assert.ok(html.includes(value), value);
    assert.match(html, /stockage local/);
    assert.match(html, /href="\/confidentialite#cookies"/);
    assert.doesNotMatch(html, /<script|<iframe|pil_consent|Supabase|Meta/);
    const shell = readFileSync(resolve(root, 'components/LegalPage.tsx'), 'utf8');
    const home = readFileSync(resolve(root, 'app/page.tsx'), 'utf8');
    for (const content of [shell, home]) assert.match(content, /href="\/cookies"/);
});

test('privacy summary anchors resolve and legal page keeps each domain explicit', () => {
    const Privacy = loadComponent('app/confidentialite/page.tsx').default;
    const html = renderToStaticMarkup(React.createElement(Privacy));
    for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(html.includes(`id="${anchor}"`), anchor);
    const Mentions = loadComponent('app/mentions-legales/page.tsx').default;
    const mentions = renderToStaticMarkup(React.createElement(Mentions));
    assert.match(mentions, /contact\.fiduconnect\.ch/);
    assert.match(mentions, /<dl/);
    assert.match(mentions, /href="\/cookies"/);
    assert.match(mentions, /FIDUCONNECT est rémunéré par ses partenaires fiduciaires pour son service de mise en relation/);
    assert.match(mentions, /restent gratuits pour vous/);
    assert.doesNotMatch(mentions, /sans surcoût|rémunération n’influence pas|commission de|uniquement si vous signez/);
});

// Render the real form and privacy content without a browser, secrets or sending.
// Only Next routing/metadata and the surrounding legal-page layout are stubbed.
function loadComponent(path, openAiEnabled = false) {
    const cjsModule = { exports: {} };
    let source = readFileSync(resolve(root, path), 'utf8');
    if (path === 'lib/openai-ads.ts') source = source.replace(/OPENAI_ADS_ENABLED = (true|false)/, `OPENAI_ADS_ENABLED = ${openAiEnabled}`);
    const compiled = ts.transpileModule(source, {
        compilerOptions: {
            module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022,
            jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
        },
    }).outputText;
    const customRequire = name => {
        if (name === 'next/navigation') return { useRouter: () => ({ push: () => { throw new Error('No navigation expected'); } }) };
        if (name === '@/lib/seo') return { pageMetadata: value => value };
        if (name === '@/components/LegalPage') return {
            LegalPage: ({ children }) => React.createElement('main', null, children),
        };
        if (name.startsWith('@/')) {
            const base = name.slice(2);
            return loadComponent(existsSync(resolve(root, `${base}.ts`)) ? `${base}.ts` : `${base}.tsx`, openAiEnabled);
        }
        return require(name);
    };
    runInNewContext(compiled, { module: cjsModule, exports: cjsModule.exports, require: customRequire }, { filename: path });
    return cjsModule.exports;
}

test('lead form keeps a short purpose notice and an accessible privacy link before submission', () => {
    const { SeaLeadForm } = loadComponent('components/SeaLeadForm.tsx');
    for (const idPrefix of ['hero']) {
        const html = renderToStaticMarkup(React.createElement(SeaLeadForm, { idPrefix }));
        const noticeStart = html.indexOf('<p aria-label="Utilisation de vos données"');
        const submitStart = html.indexOf('<button type="submit"');
        assert.ok(noticeStart >= 0 && noticeStart < submitStart);
        const notice = html.slice(noticeStart, html.indexOf('</p>', noticeStart) + 4);
        assert.match(notice, /vous rappeler et vous orienter/);
        assert.match(notice, /href="\/confidentialite" target="_blank" rel="noopener noreferrer"/);
        assert.match(notice, /Confidentialité/);
        assert.match(notice, /s’ouvre dans un nouvel onglet/);
        assert.ok(notice.replace(/<[^>]*>/g, '').length < 200);
        assert.doesNotMatch(html, /<details|<summary|Vercel|Netlify|Resend|Infomaniak|Smart Administration|newsletter/);
    }
});

test('prepared OpenAI notice discloses advanced matching and cookie lifetimes only when enabled', () => {
    const disabled = loadComponent('app/confidentialite/page.tsx').default;
    assert.doesNotMatch(renderToStaticMarkup(React.createElement(disabled)), /Mesure ChatGPT Ads/);
    const enabled = loadComponent('app/confidentialite/page.tsx', true).default;
    const html = renderToStaticMarkup(React.createElement(enabled));
    for (const text of ['Mesure ChatGPT Ads', 'hachage n’est pas une anonymisation',
        '__oppref', '__obref', '30 jours', '365 jours', 'Un ancien accord à Google seul',
        'OpenAI Ireland Limited', 'conditions de conversion']) assert.ok(html.includes(text), text);
    const banner = readFileSync(resolve(root, 'components/AdsConsent.tsx'), 'utf8');
    assert.match(banner, /Google Ads et OpenAI \(ChatGPT Ads\)/);
    assert.match(banner, /Vos préférences de cookies/);
    assert.match(banner, /Personnaliser/);
    assert.match(banner, /Ces empreintes ne sont pas anonymes/);
    const csp = readFileSync(resolve(root, 'next.config.ts'), 'utf8');
    for (const [directive, origins] of [
        ['script-src', ['https://bzrcdn.openai.com']],
        ['connect-src', ['https://bzr.openai.com', 'https://bzrcdn.openai.com']],
        ['img-src', ['https://bzr.openai.com']],
    ]) {
        const line = csp.split('\n').find(line => line.includes(`${directive} 'self'`));
        for (const origin of origins) assert.ok(line.includes(origin), `${directive} ${origin}`);
    }
});

test('privacy page explains transfers without claiming European-only storage or completed validation', () => {
    const { default: PrivacyPage } = loadComponent('app/confidentialite/page.tsx');
    const html = renderToStaticMarkup(React.createElement(PrivacyPage));
    assert.match(html, /Smart Administration – Damien Lopez/);
    assert.match(html, /mailto:contact@fiduconnect\.ch/);
    assert.match(html, /vous rappeler gratuitement sous 24 heures/);
    assert.match(html, /après l’appel et votre validation d’un rendez-vous avec le partenaire concerné/);
    assert.match(html, /ne vous inscrit pas à une newsletter/);
    for (const text of ['Netlify', 'Resend', 'Infomaniak', 'États-Unis', 'Irlande', 'Suisse']) assert.ok(html.includes(text), text);
    assert.match(html, /6\. Conservation/);
    assert.match(html, /9\. Vos droits/);
    assert.match(html, /id="prestataires"/);
    assert.match(html, /id="garanties"/);
    assert.match(html, /clauses contractuelles types/);
    assert.match(html, /depuis la Suisse/);
    assert.match(html, /ne signifie donc pas que les données restent en Europe/);
    assert.match(html, /conditions standard des prestataires/);
    assert.match(html, /traitements complémentaires reste à confirmer avant l’ouverture au public/);
    for (const url of ['https://www.netlify.com/pdf/netlify-dpa.pdf', 'https://resend.com/legal/dpa']) assert.ok(html.includes(url));
    assert.doesNotMatch(html, /Vercel|vercel\.com/);
    assert.doesNotMatch(html, /commission|rémunération|\bHobby\b|\bPro\b|\bScale\b|\$|CHF/);
    assert.doesNotMatch(readFileSync(resolve(root, 'components/LegalPage.tsx'), 'utf8'), /Version de préparation au lancement|contrôle anti-abus/);
});

test('retention reflects the operator-confirmed Friday procedure without promising immediate backup erasure', () => {
    const { default: PrivacyPage } = loadComponent('app/confidentialite/page.tsx');
    const html = renderToStaticMarkup(React.createElement(PrivacyPage));
    assert.match(html, /au plus tard trois mois après sa réception/);
    assert.match(html, /Un rappel ne remet pas ce délai à zéro/);
    assert.match(html, /La suppression est assurée manuellement/);
    assert.match(html, /y compris dans la corbeille/);
    assert.doesNotMatch(html, /chaque vendredi/);
    const procedure = readFileSync(resolve(root, 'docs/PROCEDURES-DONNEES.md'), 'utf8');
    assert.match(procedure, /Chaque vendredi, Damien Lopez/);
    assert.match(procedure, /avant le vendredi suivant/);
    assert.match(html, /ne signifie pas l’effacement immédiat des sauvegardes/);
    assert.match(html, /sept jours pour ses sauvegardes/);
    assert.match(html, /restent à préciser avant l’ouverture au public/);
    assert.match(html, /nous la supprimons de nouveau/);
});

test('legal content reflects verified private hosting without promising complete security or retention validation', () => {
    const { default: PrivacyPage } = loadComponent('app/confidentialite/page.tsx');
    const { default: MentionsPage } = loadComponent('app/mentions-legales/page.tsx');
    const privacy = renderToStaticMarkup(React.createElement(PrivacyPage));
    const mentions = renderToStaticMarkup(React.createElement(MentionsPage));
    for (const html of [privacy, mentions]) {
        assert.match(html, /Ohio/);
        assert.doesNotMatch(html, /hébergeur prévu|prestataires prévus|version locale de travail/);
    }
    assert.match(privacy, /HTTPS/);
    assert.match(privacy, /confirmée par l’exploitant/);
    assert.match(privacy, /ne garantit pas le chiffrement de bout en bout/);
    assert.match(privacy, /Le site ne supprime pas automatiquement les e-mails/);
    assert.doesNotMatch(privacy, /Le contrôle effectif du limiteur/);
    assert.match(privacy, /Cette région ne couvre pas nécessairement tous les traitements/);
    const layout = readFileSync(resolve(root, 'components/LegalPage.tsx'), 'utf8');
    assert.match(layout, /version = '11 octobre 2026'/);
    assert.doesNotMatch(layout, /avant l’ouverture au public/);
});

test('public contacts use the dedicated mailbox while the operator and email configuration remain unchanged', () => {
    for (const path of ['app/confidentialite/page.tsx', 'app/mentions-legales/page.tsx', 'lib/seo.ts', 'app/api/lead/route.ts']) {
        const source = readFileSync(resolve(root, path), 'utf8');
        assert.ok(source.includes('contact@fiduconnect.ch'), path);
        assert.ok(!source.includes('contact@smartadministration.ch'), path);
    }
    const { default: LegalPage } = loadComponent('app/mentions-legales/page.tsx');
    const html = renderToStaticMarkup(React.createElement(LegalPage));
    assert.match(html, /Smart Administration – Damien Lopez/);
    assert.match(html, /mailto:contact@fiduconnect\.ch/);
    const handler = readFileSync(resolve(root, 'app/api/lead/route.ts'), 'utf8');
    assert.match(handler, /process\.env\.LEAD_FROM_EMAIL/);
    assert.match(handler, /process\.env\.LEAD_TO_EMAIL/);
});

test('footer Cookies opens real optional measurement preferences, explained in privacy', () => {
    const page = readFileSync(resolve(root, 'app/page.tsx'), 'utf8');
    assert.match(page, /<nav aria-label="Informations légales et cookies" className="flex flex-wrap/);
    assert.match(page, /<CookiePreferencesButton className="[^\"]*min-h-11/);
    const { default: PrivacyPage } = loadComponent('app/confidentialite/page.tsx');
    const html = renderToStaticMarkup(React.createElement(PrivacyPage));
    assert.match(html, /<section id="cookies" class="scroll-mt-8">/);
    assert.match(html, /aucune balise ni requête de mesure Google n’est chargée avant votre accord/);
    assert.match(html, /Votre demande ne vaut pas consentement publicitaire/);
    assert.match(html, /180 jours/);
    assert.match(html, /90 jours/);
    assert.match(html, /ne transmettons pas à Google le nom/);
    assert.doesNotMatch(page, /document\.cookie|localStorage|sessionStorage|gtag\(|dataLayer\.push/);
});

test('desktop compaction preserves all form fields and avoids an inner scroll area', () => {
    const { SeaLeadForm } = loadComponent('components/SeaLeadForm.tsx');
    for (const idPrefix of ['hero', 'final']) {
        const html = renderToStaticMarkup(React.createElement(SeaLeadForm, { idPrefix }));
        for (const name of ['firstName', 'lastName', 'email', 'phone', 'company', 'situation', 'mainNeed', 'message']) {
            assert.ok(html.includes(`name="${name}"`), name);
        }
        assert.match(html, /sea-contact-fields/);
        assert.match(html, /sea-need-fields/);
        assert.match(html, /type="submit"/);
        assert.match(html, /<textarea\b[^>]*maxlength="2000"/i);
        assert.doesNotMatch(html, /2 000 caractères maximum|N’indiquez pas de données|message-help/);
        assert.match(html, /Confidentialité/);
    }
    const styles = readFileSync(resolve(root, 'app/globals.css'), 'utf8');
    const desktop = styles.slice(styles.indexOf('@media (min-width: 1024px)'), styles.indexOf('@media (prefers-reduced-motion'));
    assert.match(desktop, /\.sea-hero\s*\{ flex: 1 0 auto; display: flex; align-items: center/);
    assert.match(desktop, /\.sea-form-card\s*\{ padding: 20px/);
    assert.match(desktop, /\.sea-textarea\s*\{ min-height: 52px/);
    assert.match(desktop, /\.sea-contact-fields > :not\(legend\), \.sea-need-fields > :not\(legend\)\s*\{ margin-block: 0/);
    assert.doesNotMatch(desktop, /max-height|overflow-y|overflow:\s*(auto|scroll)/);
    assert.doesNotMatch(desktop, /\.(sea-contact-fields|sea-need-fields|sea-input|sea-submit)[^{]*\{[^}]*display:\s*none/);
    const mobile = styles.slice(0, styles.indexOf('@media (min-width: 640px)'));
    assert.match(mobile, /\.sea-input\s*\{[^}]*min-height: 44px[^}]*font-size: 16px/s);
});

test('landing header contains only the logo, with calls to action kept in the page', () => {
    const page = readFileSync(resolve(root, 'app/page.tsx'), 'utf8');
    const header = page.match(/<header className="sea-header">[\s\S]*?<\/header>/)?.[0];
    assert.ok(header);
    assert.match(header, /<Link href="\/"[^>]*><FiduLogo/);
    assert.match(header, /min-h-11/);
    assert.doesNotMatch(header, /Ma demande|Trouver ma fiduciaire|#demande|<button/);
    assert.match(page, /<a href="#demande" className="sea-form-guide">/);
    assert.equal((page.match(/<SeaLeadForm /g) || []).length, 1);
    assert.doesNotMatch(page, /idPrefix="final"/);
    const finalCta = page.slice(page.indexOf('<Eyebrow light>Votre demande</Eyebrow>'));
    assert.match(finalCta, /<a href="#demande"/);
    assert.match(finalCta, /Trouver ma fiduciaire/);
    assert.doesNotMatch(finalCta, /<SeaLeadForm/);
});

test('desktop first screen includes the header and keeps following content below the viewport without clipping', () => {
    const page = readFileSync(resolve(root, 'app/page.tsx'), 'utf8');
    assert.match(page, /<div className="sea-first-screen">\s*<header className="sea-header">/);
    assert.match(page, /<section className="sea-hero">[\s\S]*?<\/section>\s*<\/div>\s*<section/);
    const styles = readFileSync(resolve(root, 'app/globals.css'), 'utf8');
    const desktopStart = styles.indexOf('@media (min-width: 1024px)');
    const desktop = styles.slice(desktopStart, styles.indexOf('@media (prefers-reduced-motion'));
    assert.doesNotMatch(styles.slice(0, desktopStart), /\.sea-first-screen\s*\{/);
    assert.match(desktop, /\.sea-first-screen\s*\{[^}]*min-height: calc\(100vh \+ 2px\); min-height: calc\(100dvh \+ 2px\)/);
    assert.match(desktop, /\.sea-hero > div\s*\{ width: 100%; align-items: center/);
    assert.match(desktop, /@media \(min-width: 1024px\) and \(min-height: 800px\)/);
    assert.match(desktop, /\.sea-hero \.sea-input\s*\{ min-height: 44px/);
    for (const selector of ['sea-first-screen', 'sea-hero']) {
        const rule = desktop.match(new RegExp(`\\.${selector}\\s*\\{[^}]*\\}`))?.[0];
        assert.ok(rule);
        assert.doesNotMatch(rule, /(?<!-)\bheight:|overflow:|position:\s*(fixed|sticky)/);
    }
});

test('hero guide points to the form without a duplicate filled button, with a downward arrow on mobile', () => {
    const page = readFileSync(resolve(root, 'app/page.tsx'), 'utf8');
    const guide = page.match(/<a href="#demande" className="sea-form-guide">[\s\S]*?<\/a>/)?.[0];
    assert.ok(guide);
    assert.match(guide, /Trouver ma fiduciaire/);
    assert.doesNotMatch(guide, /sea-button/);
    for (const name of ['sea-form-guide-arrow', 'sea-form-guide-mobile']) {
        assert.match(guide, new RegExp(`<svg className="${name}"[^>]*aria-hidden="true"[^>]*focusable="false"`));
    }
    const styles = readFileSync(resolve(root, 'app/globals.css'), 'utf8');
    const mobile = styles.slice(0, styles.indexOf('@media (min-width: 640px)'));
    const desktop = styles.slice(styles.indexOf('@media (min-width: 1024px)'), styles.indexOf('@media (prefers-reduced-motion'));
    assert.match(mobile, /\.sea-form-guide-arrow\s*\{ display: none/);
    assert.match(mobile, /\.sea-form-guide-mobile\s*\{ width: 28px; height: 36px/);
    assert.match(desktop, /\.sea-form-guide-arrow\s*\{ display: block/);
    assert.match(desktop, /\.sea-form-guide-mobile\s*\{ display: none/);
    assert.match(styles, /\.sea-form-guide:focus-visible\s*\{ outline:/);
});

test('touch forms preserve keyboard hints, autocomplete and all fields at narrow widths', () => {
    const { SeaLeadForm } = loadComponent('components/SeaLeadForm.tsx');
    for (const idPrefix of ['hero', 'final']) {
        const html = renderToStaticMarkup(React.createElement(SeaLeadForm, { idPrefix }));
        assert.match(html, /inputMode="email"/i);
        assert.match(html, /autoCapitalize="none"/i);
        assert.match(html, /spellCheck="false"/i);
        assert.match(html, /inputMode="tel"/i);
        assert.match(html, /enterKeyHint="next"/i);
        for (const value of ['given-name', 'family-name', 'email', 'tel', 'organization']) assert.ok(html.includes(`autoComplete="${value}"`), value);
        assert.ok(html.includes('min-[360px]:grid-cols-2'));
        assert.doesNotMatch(html, /autofocus|<details/i);
    }
    const styles = readFileSync(resolve(root, 'app/globals.css'), 'utf8');
    const touch = styles.slice(styles.indexOf('@media (max-width: 1023px)'), styles.indexOf('/* Compact desktop layout'));
    assert.match(touch, /\.sea-input\s*\{ min-height: 48px/);
    assert.match(touch, /\.sea-select-item\s*\{ min-height: 48px; font-size: 16px/);
    assert.match(touch, /\.sea-submit\s*\{ min-height: 52px/);
    assert.doesNotMatch(touch, /position:\s*(fixed|sticky)|font-size:\s*13px[^}]*\.sea-input/);
});

test('content wrappers are visible in initial HTML without viewport animations or client JavaScript', () => {
    const { PremiumReveal } = loadComponent('components/PremiumReveal.tsx');
    const html = renderToStaticMarkup(React.createElement(PremiumReveal, { id: 'demande', className: 'sea-form-card', delay: 0.1 }, 'Formulaire visible'));
    assert.equal(html, '<div class="sea-form-card" id="demande">Formulaire visible</div>');
    const source = readFileSync(resolve(root, 'components/PremiumReveal.tsx'), 'utf8');
    assert.doesNotMatch(source, /framer-motion|use client|opacity|whileInView/);
});

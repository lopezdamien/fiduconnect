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

// Render the real form and privacy content without a browser, secrets or sending.
// Only Next routing/metadata and the surrounding legal-page layout are stubbed.
function loadComponent(path) {
    const cjsModule = { exports: {} };
    const compiled = ts.transpileModule(readFileSync(resolve(root, path), 'utf8'), {
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
            return loadComponent(existsSync(resolve(root, `${base}.ts`)) ? `${base}.ts` : `${base}.tsx`);
        }
        return require(name);
    };
    runInNewContext(compiled, { module: cjsModule, exports: cjsModule.exports, require: customRequire }, { filename: path });
    return cjsModule.exports;
}

test('both form instances keep a short purpose notice and an accessible privacy link before submission', () => {
    const { SeaLeadForm } = loadComponent('components/SeaLeadForm.tsx');
    for (const idPrefix of ['hero', 'final']) {
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
        assert.doesNotMatch(html, /<details|<summary|Vercel|Resend|Infomaniak|Smart Administration|newsletter/);
    }
});

test('privacy page explains transfers without claiming European-only storage or completed validation', () => {
    const { default: PrivacyPage } = loadComponent('app/confidentialite/page.tsx');
    const html = renderToStaticMarkup(React.createElement(PrivacyPage));
    assert.match(html, /Smart Administration – Damien Lopez/);
    assert.match(html, /contact@smartadministration.ch/);
    assert.match(html, /vous rappeler gratuitement sous 24 heures/);
    assert.match(html, /après l’appel et votre validation d’un rendez-vous avec le partenaire concerné/);
    assert.match(html, /ne vous inscrit pas à une newsletter/);
    for (const text of ['Vercel', 'Resend', 'Infomaniak', 'États-Unis', 'Irlande', 'Suisse']) assert.ok(html.includes(text), text);
    assert.match(html, /6\. Conservation/);
    assert.match(html, /9\. Vos droits/);
    assert.match(html, /id="prestataires"/);
    assert.match(html, /id="garanties"/);
    assert.match(html, /clauses contractuelles types/);
    assert.match(html, /depuis la Suisse/);
    assert.match(html, /ne signifie donc pas que les données restent en Europe/);
    assert.match(html, /doivent encore être confirmées avant publication/);
    for (const url of ['https://vercel.com/legal/dpa', 'https://resend.com/legal/dpa']) assert.ok(html.includes(url));
    assert.doesNotMatch(html, /commission|rémunération|\bHobby\b|\bPro\b|\bScale\b|\$|CHF/);
    assert.match(readFileSync(resolve(root, 'components/LegalPage.tsx'), 'utf8'), /Version locale de travail/);
});

test('footer Cookies link reaches the information section without pretending to manage inactive trackers', () => {
    const page = readFileSync(resolve(root, 'app/page.tsx'), 'utf8');
    assert.match(page, /<nav aria-label="Informations légales et cookies" className="flex flex-wrap/);
    assert.match(page, /<Link href="\/confidentialite#cookies"[^>]*min-h-11[^>]*>Cookies<\/Link>/);
    const { default: PrivacyPage } = loadComponent('app/confidentialite/page.tsx');
    const html = renderToStaticMarkup(React.createElement(PrivacyPage));
    assert.match(html, /<section id="cookies" class="scroll-mt-8">/);
    assert.match(html, /ni mesure de conversion Google, ni cookies publicitaires/);
    assert.match(html, /Votre demande ne vaut pas consentement à une future publicité/);
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
    assert.equal((page.match(/<SeaLeadForm /g) || []).length, 2);
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

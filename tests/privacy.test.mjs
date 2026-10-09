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

test('both form instances disclose purpose, partners and countries before submission', () => {
    const { SeaLeadForm } = loadComponent('components/SeaLeadForm.tsx');
    for (const idPrefix of ['hero', 'final']) {
        const html = renderToStaticMarkup(React.createElement(SeaLeadForm, { idPrefix }));
        const notice = html.slice(html.indexOf('<section aria-label="Utilisation de vos données"'), html.indexOf('<button type="submit"'));
        assert.match(notice, /Smart Administration – Damien Lopez/);
        assert.match(notice, /vous rappeler et vous orienter/);
        assert.match(notice, /après l’appel et votre validation d’un rendez-vous avec ce partenaire/);
        for (const text of ['Vercel', 'Resend', 'Infomaniak', 'États-Unis', 'Irlande', 'Suisse']) assert.ok(notice.includes(text), text);
        assert.match(notice, /<details[^>]*><summary/);
        assert.match(notice, /href="\/confidentialite#garanties"/);
        assert.match(notice, /ne vous inscrit pas à une newsletter/);
    }
});

test('privacy page explains transfers without claiming European-only storage or completed validation', () => {
    const { default: PrivacyPage } = loadComponent('app/confidentialite/page.tsx');
    const html = renderToStaticMarkup(React.createElement(PrivacyPage));
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

import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync, existsSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

function load(path, approved = false) {
    let source = readFileSync(new URL('../' + path, import.meta.url), 'utf8');
    if (path === 'lib/seo-release.ts') source = source.replace(/SEO_PUBLICATION_APPROVED = (true|false)/, 'SEO_PUBLICATION_APPROVED = ' + approved);
    const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
    const cjsModule = { exports: {} };
    runInNewContext(compiled, { module: cjsModule, exports: cjsModule.exports,
        require: name => load(name.replace('@/', '') + '.ts', approved),
    });
    return cjsModule.exports;
}

test('publication remains explicitly blocked, independently of email sending', () => {
    const release = load('lib/seo-release.ts');
    assert.equal(release.SEO_PUBLICATION_APPROVED, false);
    assert.equal(release.seoRobots().index, false);
    assert.equal(release.seoRobots().follow, false);
    assert.equal(load('lib/seo-form-config.ts').SEO_FORM_SENDS_ENABLED, true);
    assert.equal(load('app/sitemap.ts').default().length, 0);
});

test('approved release would expose only genuine content URLs; thank-you remains excluded', () => {
    const release = load('lib/seo-release.ts', true);
    assert.equal(release.seoRobots().index, true);
    assert.equal(release.seoRobots(false).index, false);
    const urls = load('app/sitemap.ts', true).default().map(entry => entry.url);
    assert.equal(urls.length, 13);
    assert.equal(new Set(urls).size, urls.length);
    for (const url of urls) {
        assert.ok(url.startsWith('https://www.fiduconnect.ch'));
        assert.doesNotMatch(url, /\/api|\/merci|\/lp\/|\/diagnostic|\/cookies|confidentialite|mentions-legales/);
    }
});

test('known historic URLs are retained or redirected once to equivalent content', () => {
    const release = load('lib/seo-release.ts');
    const redirects = load('lib/seo-redirects.ts').seoRedirects;
    const destinations = new Set([...release.SEO_INDEXABLE_PATHS, '/mentions-legales', '/confidentialite', '/cookies', '/merci']);
    const historic = ['/', '/a-propos', '/contact', '/diagnostic', '/services', '/services/comptabilite', '/services/tva', '/services/charges-salaires', '/services/pilotage', '/services/changer-fiduciaire', '/ressources', '/ressources/changer-fiduciaire-geneve', '/tva-suisse', '/cookies', '/mentions-legales', '/confidentialite', '/merci', '/lp/changer-fiduciaire-geneve'];
    for (const path of historic) {
        const redirect = redirects.find(item => item.source === path);
        if (redirect) {
            assert.equal(redirect.permanent, true);
            assert.ok(destinations.has(redirect.destination.split('#')[0]));
            assert.notEqual(redirect.destination, '/');
        } else {
            assert.ok(destinations.has(path));
            assert.ok(existsSync(new URL('../app' + (path === '/' ? '' : path) + '/page.tsx', import.meta.url)));
        }
    }
    assert.ok(redirects.every(item => !item.source.includes(':')));
});

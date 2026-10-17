// Offline inspection of the actual production build. No browser, network,
// credentials, real leads or email provider calls are used by this test.
import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync, existsSync } from 'node:fs';
import { SEO_INDEXABLE_PATHS } from '../lib/seo-release.ts';
import { seoRedirects } from '../lib/seo-redirects.ts';
import { seoResources } from '../lib/seo-resources.ts';

const paths = [...SEO_INDEXABLE_PATHS, '/mentions-legales', '/confidentialite', '/cookies', '/merci'];
const html = new Map(paths.map(path => [path, readFileSync(new URL('../.next/server/app/' + (path === '/' ? 'index' : path.slice(1)) + '.html', import.meta.url), 'utf8')]));

test('resource cards expose existing content with headings, summaries and one whole-card link', () => {
    for (const [path, resources] of [['/ressources', seoResources], ['/', seoResources.slice(0, 3)]]) {
        const page = html.get(path);
        const cards = [...page.matchAll(/<a\b[^>]*class="seo-resource-card [^"]*"[^>]*>(.*?)<\/a>/gs)];
        assert.equal(cards.length, resources.length, path);
        for (const [index, [card, body]] of cards.entries()) {
            assert.ok(card.includes('href="' + resources[index].href + '"'));
            assert.match(body, /<h3 class="sea-title">/);
            assert.match(body, /class="seo-resource-description"/);
            assert.doesNotMatch(body, /<a\b|<button\b/);
            assert.ok(html.has(resources[index].href));
        }
    }
});

test('all SEO pages expose Resources in desktop and mobile header navigation', () => {
    for (const [path, page] of html) {
        const header = page.match(/<header class="seo-header">(.*?)<\/header>/s)?.[1];
        assert.ok(header, path);
        for (const label of ['Navigation principale', 'Navigation mobile']) {
            const nav = header.match(new RegExp('<nav aria-label="' + label + '">(.*?)</nav>', 's'))?.[1];
            assert.ok(nav?.includes('href="/ressources"'), path + ' ' + label);
            assert.ok(nav?.includes('Ressources'), path + ' ' + label);
        }
    }
});

test('operator identity remains in legal pages only, including metadata and structured data', () => {
    for (const [path, page] of html) {
        if (['/mentions-legales', '/confidentialite'].includes(path)) {
            assert.match(page, /Smart Administration/);
            assert.match(page, /Damien Lopez/);
        } else {
            assert.doesNotMatch(page, /Smart Administration|Damien Lopez|Avenue d’Aïre|Avenue d&#x27;Aïre/, path);
        }
    }
});

test('all built pages have a unique title, one H1, canonical and correct indexation', () => {
    const titles = new Set();
    for (const [path, page] of html) {
        assert.equal((page.match(/<h1[ >]/g) || []).length, 1, path);
        const title = page.match(/<title>(.*?)<\/title>/)?.[1];
        assert.ok(title, path);
        assert.ok(!titles.has(title), path + ' duplicate title');
        titles.add(title);
        assert.match(page, SEO_INDEXABLE_PATHS.includes(path) ? /name="robots" content="index, follow"/ : /name="robots" content="noindex/, path);
        assert.ok(page.includes('rel="canonical" href="https://www.fiduconnect.ch' + (path === '/' ? '' : path)), path);
        assert.match(page, /id="contenu"/, path);
        assert.doesNotMatch(page, /<script[^>]+src="https?:\/\//, path);
    }
});

test('choosing a fiduciary article has sources, navigable sections and accurate article metadata', () => {
    const path = '/ressources/choisir-fiduciaire-geneve';
    const page = html.get(path);
    assert.ok(page);
    assert.match(page, /Sommaire de l’article/);
    assert.match(page, /Sources et repères officiels/);
    assert.match(page, /www\.kmu\.admin\.ch/);
    assert.match(page, /www\.ge\.ch/);
    assert.match(page, /dateTime="2026-10-17"/i);
    assert.match(page, /<ul class="seo-article-questions"/);
    assert.ok(html.get('/ressources').includes('href="' + path + '"'));
    const schemas = [...page.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)].map(([, value]) => JSON.parse(value));
    const article = schemas.find(schema => schema['@type'] === 'Article');
    assert.equal(article.headline, 'Comment choisir une fiduciaire à Genève ?');
    assert.equal(article.datePublished, '2026-10-17');
    assert.equal(article.mainEntityOfPage, 'https://www.fiduconnect.ch' + path);
    assert.equal(article.author.name, 'FIDUCONNECT');
    const breadcrumbs = schemas.find(schema => schema['@type'] === 'BreadcrumbList');
    assert.ok(breadcrumbs.itemListElement.some(item => item.name === 'Ressources'));
});

test('built internal links and fragments point to real pages, anchors or assets', () => {
    for (const [path, page] of html) for (const [, href] of page.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
        if (/^(https?:|mailto:|tel:)/.test(href)) continue;
        const [target, fragment] = href.split('#');
        const destination = target || path;
        const redirect = seoRedirects.find(item => item.source === destination);
        if (redirect) continue;
        const targetHtml = html.get(destination);
        if (targetHtml) {
            if (fragment) assert.ok(targetHtml.includes('id="' + fragment + '"'), path + ' -> ' + href);
        } else assert.ok(existsSync(new URL('../public' + destination, import.meta.url)), path + ' -> ' + href);
    }
});

test('built structured data is valid JSON and contains no invented reviews', () => {
    let count = 0;
    for (const page of html.values()) for (const [, value] of page.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)) {
        const data = JSON.parse(value);
        assert.ok(data['@context']);
        assert.doesNotMatch(value, /aggregateRating|reviewRating/);
        count++;
    }
    assert.ok(count >= 10);
});

test('production route manifest contains exact permanent historical redirects', () => {
    const manifest = JSON.parse(readFileSync(new URL('../.next/routes-manifest.json', import.meta.url), 'utf8'));
    for (const redirect of seoRedirects) {
        const rule = manifest.redirects.find(item => item.source === redirect.source);
        assert.ok(rule, redirect.source);
        assert.equal(rule.destination, redirect.destination);
        assert.equal(rule.statusCode, 308);
    }
});

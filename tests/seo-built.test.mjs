// Offline inspection of the actual production build. No browser, network,
// credentials, real leads or email provider calls are used by this test.
import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync, existsSync } from 'node:fs';
import { SEO_INDEXABLE_PATHS } from '../lib/seo-release.ts';
import { seoRedirects } from '../lib/seo-redirects.ts';

const paths = [...SEO_INDEXABLE_PATHS, '/mentions-legales', '/confidentialite', '/cookies', '/merci'];
const html = new Map(paths.map(path => [path, readFileSync(new URL('../.next/server/app/' + (path === '/' ? 'index' : path.slice(1)) + '.html', import.meta.url), 'utf8')]));

test('all 17 built pages have a unique title, one H1, canonical and preview noindex', () => {
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

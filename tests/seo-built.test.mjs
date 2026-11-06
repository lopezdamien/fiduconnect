// Offline inspection of the actual production build. No browser, network,
// credentials, real leads or email provider calls are used by this test.
import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync, existsSync } from 'node:fs';
import { SEO_INDEXABLE_PATHS } from '../lib/seo-release.ts';
import { seoRedirects, canonicalHostRedirects } from '../lib/seo-redirects.ts';
import { seoServices } from '../lib/seo-services.ts';
import { seoResources } from '../lib/seo-resources.ts';

const paths = [...SEO_INDEXABLE_PATHS, '/mentions-legales', '/confidentialite', '/cookies', '/merci'];
const html = new Map(paths.map(path => [path, readFileSync(new URL('../.next/server/app/' + (path === '/' ? 'index' : path.slice(1)) + '.html', import.meta.url), 'utf8')]));

test('honoraires guide publishes only the approved body with accessible comparison and incoming links', () => {
    const path = '/ressources/honoraires-devis-fiduciaire-geneve';
    const page = html.get(path);
    assert.ok(page);
    assert.doesNotMatch(page, /Fiche de publication|Contrôle avant intégration|Fenêtre proposée|Aucune publication automatique/);
    assert.doesNotMatch(page.replace(/<script\b[^>]*>.*?<\/script>/gs, ''), /\]\(\//);
    assert.match(page, /Grille de comparaison des devis fiduciaires/);
    assert.match(page, /role="region"[^>]*tabindex="0"/i);
    assert.equal((page.match(/scope="row"/g) || []).length, 8);
    assert.match(page, /Exemple fictif/);
    assert.match(page, /ne présente pas de tarif moyen/);
    assert.match(page, /href="https:\/\/www.kmu.admin.ch\/fr\/tenir-soi-meme-la-comptabilite-ou-la-sous-traiter"/);
    for (const source of ['/ressources', '/services/comptabilite', '/ressources/choisir-fiduciaire-geneve']) {
        assert.ok(html.get(source).includes('href="' + path + '"'), source);
    }
    const schemas = [...page.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)].map(([, value]) => JSON.parse(value));
    const article = schemas.find(schema => schema['@type'] === 'Article');
    assert.equal(article.datePublished, '2026-10-26');
    assert.equal(article.author.name, 'FIDUCONNECT');
    assert.equal(article.mainEntityOfPage, 'https://www.fiduconnect.ch' + path);
});

test('payroll guide publishes approved content with source links, accessible table and incoming links', () => {
    const path = '/ressources/externaliser-salaires-geneve';
    const page = html.get(path);
    assert.ok(page);
    assert.doesNotMatch(page, /Fiche de publication interne|Contrôles internes|Statut : rédigé|URL proposée/);
    assert.match(page, /Grille de comparaison des prestations de gestion des salaires/);
    assert.match(page, /role="region"[^>]*tabindex="0"/i);
    assert.equal((page.match(/scope="row"/g) || []).length, 9);
    assert.match(page, /nous ne préparons pas les fiches de paie/);
    assert.match(page, /Exemple fictif/);
    for (const source of ['/ressources', '/services/charges-salaires', '/ressources/honoraires-devis-fiduciaire-geneve']) {
        assert.ok(html.get(source).includes('href="' + path + '"'), source);
    }
    for (const url of ['https://www.edoeb.admin.ch/fr/externalisation-sous-traitance', 'https://www.ge.ch/impot-source-employeurs-assureurs-dpis', 'https://www.ocas.ch/demarches-et-formulaires/declaration-des-salaires-annuels']) {
        assert.ok(page.includes('href="' + url + '"'), url);
    }
    const schemas = [...page.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)].map(([, value]) => JSON.parse(value));
    const article = schemas.find(schema => schema['@type'] === 'Article');
    assert.equal(article.datePublished, '2026-11-06');
    assert.equal(article.author.name, 'FIDUCONNECT');
    assert.equal(article.mainEntityOfPage, 'https://www.fiduconnect.ch' + path);
});

test('indexable pages have page-specific sharing titles and the branded sharing image', () => {
    const titles = new Set();
    for (const path of SEO_INDEXABLE_PATHS) {
        const page = html.get(path);
        const og = page.match(/property="og:title" content="([^"]+)"/)?.[1];
        const twitter = page.match(/name="twitter:title" content="([^"]+)"/)?.[1];
        assert.ok(og, path);
        assert.equal(twitter, og, path);
        assert.ok(!titles.has(og), path + ' duplicate sharing title');
        titles.add(og);
        assert.match(page, /property="og:image" content="https:\/\/www\.fiduconnect\.ch\/partage"/, path);
        assert.match(page, /name="twitter:image" content="https:\/\/www\.fiduconnect\.ch\/partage"/, path);
    }
});

test('TVA preparation guide has a checklist, official source and honest update date', () => {
    const page = html.get('/tva-suisse');
    assert.match(page, /Informations à préparer pour votre rendez-vous TVA/);
    assert.match(page, /Votre checklist avant le premier échange/);
    assert.match(page, /www\.estv\.admin\.ch\/fr\/taxe-sur-la-valeur-ajoutee/);
    assert.match(page, /dateModified[^<]*2026-10-17/);
    assert.doesNotMatch(page, /datePublished|100.?000|8,1\s*%/);
});

test('funding is transparent on home and about pages without implying exhaustive comparison', () => {
    for (const path of ['/', '/a-propos']) {
        const page = html.get(path);
        assert.match(page, /rémunéré par ses partenaires fiduciaires/, path);
        assert.match(page, /ne représente pas l’ensemble/, path);
    }
});

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

test('service pages link directly to their practical resources and clarify the local need', () => {
    for (const service of seoServices) {
        const page = html.get('/services/' + service.slug);
        const resources = page.match(/<nav aria-label="Ressources pour ce besoin">(.*?)<\/nav>/s)?.[1];
        assert.ok(resources, service.slug);
        for (const resource of service.resources) assert.ok(resources.includes('href="' + resource.href + '"'), resource.href);
        assert.match(page.match(/<h1\b[^>]*>(.*?)<\/h1>/s)[1], /Genève/);
    }
});

test('transition guide provides an accessible inventory, checklist, sources and an honest update date', () => {
    const path = '/ressources/changer-fiduciaire-geneve';
    const page = html.get(path);
    assert.match(page, /Sommaire de l’article/);
    assert.match(page, /Inventaire de reprise à adapter avec les professionnels/);
    assert.match(page, /scope="col"/);
    assert.match(page, /scope="row"/);
    assert.match(page, /Exemple fictif/);
    assert.match(page, /La checklist avant de valider le changement/);
    assert.match(page, /Mis à jour le/);
    assert.match(page, /www\.kmu\.admin\.ch/);
    assert.ok(page.includes('href="/services/changer-fiduciaire"'));
    const article = [...page.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)].map(([, value]) => JSON.parse(value)).find(schema => schema['@type'] === 'Article');
    assert.equal(article.dateModified, '2026-10-17');
    assert.ok(!('datePublished' in article), 'Original publication date is unknown, not invented');
    assert.equal(article.mainEntityOfPage, 'https://www.fiduconnect.ch' + path);
});

test('canonical redirect is permanent and strictly limited to the SEO apex host', () => {
    const manifest = JSON.parse(readFileSync(new URL('../.next/routes-manifest.json', import.meta.url), 'utf8'));
    const expected = canonicalHostRedirects[0];
    const rule = manifest.redirects.find(item => item.source === expected.source && item.destination === expected.destination);
    assert.ok(rule);
    assert.equal(rule.statusCode, 308);
    assert.deepEqual(rule.has, expected.has);
    const host = new RegExp('^' + rule.has[0].value + '$');
    assert.ok(host.test('fiduconnect.ch'));
    for (const other of ['www.fiduconnect.ch', 'contact.fiduconnect.ch', 'fiduconnectXch', 'fiduconnect.ch.example.org', 'localhost', 'preview.vercel.app']) assert.ok(!host.test(other), other);
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


test('paid sitelink destinations expose one accessible inline lead form without spreading it to other pages', () => {
    const inline = ['/services', '/services/changer-fiduciaire', '/tva-suisse'];
    for (const path of inline) {
        const page = html.get(path);
        assert.equal((page.match(/<form\b/g) || []).length, 1, path);
        assert.match(page, /<section[^>]*aria-labelledby="[^"]+"/, path);
        assert.match(page, /id="demande" class="sea-form-card/, path);
        assert.match(page, /href="#demande"/, path);
        for (const field of ['firstName', 'lastName', 'email', 'phone', 'situation', 'mainNeed']) {
            assert.ok(page.includes('name="' + field + '"'), path + ' ' + field);
        }
        const ids = [...page.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
        assert.equal(new Set(ids).size, ids.length, path + ' duplicate IDs');
        assert.match(page, /Envoyer ma demande/, path);
        assert.ok(page.includes('href="/confidentialite"'), path);
    }
    for (const path of ['/a-propos', '/services/comptabilite', '/services/tva', '/services/charges-salaires', '/ressources/choisir-fiduciaire-geneve']) {
        assert.doesNotMatch(html.get(path), /<form\b/, path);
    }
});

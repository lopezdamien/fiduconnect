import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { seoServices, getSeoService } from '../lib/seo-services.ts';

test('four services retain the planned historical paths and have unique metadata', () => {
  assert.deepEqual(seoServices.map(s => s.slug), ['comptabilite', 'tva', 'charges-salaires', 'changer-fiduciaire']);
  for (const field of ['title', 'description', 'heading']) {
    assert.equal(new Set(seoServices.map(s => s[field])).size, 4);
  }
});

for (const service of seoServices) {
  test(service.slug + ': complete content and dedicated route', async () => {
    assert.equal(getSeoService(service.slug), service);
    assert.equal(service.situations.length, 3);
    assert.equal(service.preparation.length, 5);
    assert.equal(service.criteria.length, 3);
    assert.equal(service.faq.length, 3);
    assert.match(service.title, /Genève/);
    const route = await readFile(new URL('../app/services/' + service.slug + '/page.tsx', import.meta.url), 'utf8');
    assert.ok(route.includes("getSeoService('" + service.slug + "')"));
    assert.ok(route.includes('serviceMetadata(service)'));
    assert.ok(route.includes('<SeoServicePage service={service}'));
  });
}

test('service preview retains noindex and does not mount Ads or a submission form', async () => {
  const template = await readFile(new URL('../components/SeoServicePage.tsx', import.meta.url), 'utf8');
  const layout = await readFile(new URL('../app/layout.tsx', import.meta.url), 'utf8');
  assert.match(template, /robots: seoRobots\(\)/);
  assert.match(layout, /robots: seoRobots\(\)/);
  assert.doesNotMatch(template + layout, /<AdsConsent|<SeaLeadForm|<form[ >]/);
  assert.match(template, /aria-label="Fil d’Ariane"/);
  assert.match(template, /<h1 /);
});

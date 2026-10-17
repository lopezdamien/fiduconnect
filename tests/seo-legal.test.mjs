import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const source = path => readFile(new URL('../' + path, import.meta.url), 'utf8');

test('SEO legal pages share navigation, visibly remain drafts and mount no Ads controls', async () => {
  const shell = await source('components/LegalPage.tsx');
  assert.match(shell, /<SeoHeader/);
  assert.match(shell, /<SeoFooter/);
  assert.match(shell, /id="contenu"/);
  assert.match(shell, /Mise à jour le/);
  assert.doesNotMatch(shell, /Version de travail|non publiée/);
  for (const path of ['app/mentions-legales/page.tsx', 'app/confidentialite/page.tsx']) {
    const page = await source(path);
    assert.match(page, /index: false, follow: false/);
    assert.match(page, /www\.fiduconnect\.ch/);
    assert.doesNotMatch(page + shell, /import.*AdsConsent|CookiePreferencesButton|<script/);
  }
});

test('privacy describes receipt accurately without claiming deployment or verified retention', async () => {
  const privacy = await source('app/confidentialite/page.tsx');
  const client = await source('lib/seo-lead-client.ts');
  assert.match(client, /fiduconnect\.seo-receipt/);
  assert.match(privacy, /fiduconnect\.seo-receipt/);
  assert.match(privacy, /trente minutes/);
  assert.match(privacy, /au-delà de ce délai/);
  assert.match(privacy, /Lorsque vous confirmez le formulaire/);
  assert.match(privacy, /Conservation et suppression/);
  assert.match(privacy, /six mois après le dernier échange/);
  assert.match(privacy, /L’exploitant assure manuellement/);
  assert.match(privacy, /Prestataires et traitements à l’étranger/);
  assert.match(privacy, /offre Hobby/);
  assert.match(privacy, /pas de balise Google Ads/);
  assert.doesNotMatch(privacy, /configurée dans la région Ohio|Les accès.*confirmée par l’exploitant/);
});

test('legal work leaves server sending gate closed', async () => {
  assert.match(await source('lib/seo-form-config.ts'), /SEO_FORM_SENDS_ENABLED = true/);
});

test('SEO has its own cookie information page without mounting advertising controls', async () => {
  const cookies = await source('app/cookies/page.tsx');
  assert.match(cookies, /index: false, follow: false/);
  assert.match(cookies, /www\.fiduconnect\.ch/);
  assert.match(cookies, /fiduconnect\.seo-receipt/);
  assert.match(cookies, /trente minutes/);
  assert.match(cookies, /marqueur technique de confirmation/);
  assert.doesNotMatch(cookies, /import.*AdsConsent|CookiePreferencesButton|<script|<iframe/);
  for (const path of ['components/LegalPage.tsx', 'components/SeoChrome.tsx']) {
    assert.match(await source(path), /href="\/cookies"/);
  }
  assert.doesNotMatch(await source('lib/seo-redirects.ts'), /source: '\/cookies'/);
});

test('SEO privacy summary has matching anchors without erasing unresolved hosting facts', async () => {
  const privacy = await source('app/confidentialite/page.tsx');
  for (const [, anchor] of privacy.matchAll(/href="#([^"]+)"/g)) assert.ok(privacy.includes(`id="${anchor}"`), anchor);
  const mentions = await source('app/mentions-legales/page.tsx');
  assert.match(mentions, /<dl/);
  assert.match(mentions, /Vercel/);
  assert.match(mentions, /région américaine iad1/);
  assert.doesNotMatch(mentions, /hébergé par.*Netlify/);
  assert.match(mentions, /FIDUCONNECT est rémunéré par ses partenaires fiduciaires pour son service de mise en relation/);
  assert.match(mentions, /restent gratuits pour vous/);
  assert.doesNotMatch(mentions, /sans surcoût|rémunération n’influence pas|commission de|uniquement si vous signez/);
});

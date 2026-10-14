// Explicit local-only E2E recipe. Requires Playwright (can be provided by the
// desktop bundled runtime using FIDU_PLAYWRIGHT_PATH). No real email or Ads event.
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.FIDU_PLAYWRIGHT_PATH || 'playwright');
const base = process.env.FIDU_E2E_BASE || 'http://127.0.0.1:3100';
if (!['127.0.0.1', 'localhost'].includes(new URL(base).hostname)) throw new Error('This fixture is local-only.');
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const results = [];
const reports = [];
async function scenario(name, callback, options = {}) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, ...options });
    const page = await context.newPage();
    const requests = [];
    const errors = [];
    let leadRequests = 0;
    let events = 0;
    let responseStatus = 200;
    let delay = 0;
    let blocked = false;
    await page.exposeFunction('fiduRecordConversion', () => { events += 1; });
    await context.route('**/*', async route => {
        const url = new URL(route.request().url());
        if (!['127.0.0.1', 'localhost'].includes(url.hostname)) {
            requests.push(url.href);
            if (url.hostname === 'www.googletagmanager.com' && url.pathname === '/gtag/js') {
                if (blocked) return route.abort();
                return route.fulfill({ contentType: 'application/javascript', body: `
                    window.fiduTagCalls = Array.from(window.dataLayer || []);
                    window.gtag = function () {
                        const args = Array.from(arguments);
                        window.fiduTagCalls.push(args);
                        if (args[0] === 'event' && args[1] === 'conversion') {
                            window.fiduRecordConversion();
                            args[2].event_callback();
                        }
                    };
                    for (const args of window.fiduTagCalls) {
                        if (args[0] === 'event') { window.fiduRecordConversion(); args[2].event_callback(); }
                    }
                ` });
            }
            return route.abort();
        }
        if (url.pathname === '/api/lead') {
            leadRequests += 1;
            if (delay) await new Promise(resolve => setTimeout(resolve, delay));
            return route.fulfill({ status: responseStatus, contentType: 'application/json',
                body: JSON.stringify(responseStatus === 200 ? { ok: true } : { ok: false, error: 'Erreur simulée' }) });
        }
        return route.continue();
    });
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(() => {
        window.fiduCspViolations = [];
        document.addEventListener('securitypolicyviolation', event => {
            window.fiduCspViolations.push({ directive: event.violatedDirective, uri: event.blockedURI });
        });
    });
    async function fill() {
        await page.getByLabel('Prénom', { exact: true }).fill('Test');
        await page.getByLabel('Nom', { exact: true }).fill('Fictif');
        await page.getByLabel('E-mail', { exact: true }).fill('test@example.invalid');
        await page.getByLabel('Téléphone', { exact: true }).fill('+41 79 000 00 00');
        await page.getByRole('combobox', { name: 'Votre situation' }).click();
        await page.getByRole('option', { name: 'Indépendant', exact: true }).click();
        await page.getByRole('combobox', { name: 'Besoin principal' }).click();
        await page.getByRole('option', { name: 'Comptabilité', exact: true }).click();
    }
    const state = { page, context, requests, errors, fill,
        counts: () => ({ leads: leadRequests, events }),
        status: value => { responseStatus = value; }, delay: value => { delay = value; }, block: () => { blocked = true; } };
    try {
        await page.goto(base);
        await page.getByRole('button', { name: 'Refuser', exact: true }).waitFor();
        await callback(state);
        assert.deepEqual(errors, []);
        results.push({ name, passed: true, ...state.counts() });
    } finally { await context.close(); }
}
try {
    await scenario('no choice, refusal and mocked form success: no Google request', async s => {
        assert.equal(s.requests.length, 0);
        await s.page.getByRole('button', { name: 'Refuser', exact: true }).click();
        await s.fill();
        await s.page.getByRole('button', { name: 'Trouver ma fiduciaire', exact: true }).click();
        await s.page.waitForURL('**/merci');
        assert.deepEqual(s.counts(), { leads: 1, events: 0 });
        assert.equal(s.requests.length, 0);
        await s.page.reload();
        assert.equal(s.requests.length, 0);
    });
    await scenario('accepted success, Merci reload and return: one conversion', async s => {
        await s.page.getByRole('button', { name: 'Accepter', exact: true }).click();
        await s.fill();
        await s.page.getByRole('button', { name: 'Trouver ma fiduciaire', exact: true }).click();
        await s.page.waitForURL('**/merci');
        assert.deepEqual(s.counts(), { leads: 1, events: 1 });
        await s.page.reload();
        await s.page.getByRole('link', { name: 'Retour à l’accueil', exact: true }).click();
        assert.equal(s.counts().events, 1);
        assert.ok(s.requests.every(url => new URL(url).hostname === 'www.googletagmanager.com'));
        assert.deepEqual(await s.page.evaluate(() => window.fiduCspViolations), []);
    });
    await scenario('server error and retry, accepted: no error conversion', async s => {
        await s.page.getByRole('button', { name: 'Accepter', exact: true }).click();
        await s.fill(); s.status(502);
        await s.page.getByRole('button', { name: 'Trouver ma fiduciaire', exact: true }).click();
        await s.page.getByRole('alert').waitFor();
        assert.equal(s.counts().events, 0);
        s.status(200);
        await s.page.getByRole('button', { name: 'Trouver ma fiduciaire', exact: true }).click();
        await s.page.waitForURL('**/merci');
        assert.deepEqual(s.counts(), { leads: 2, events: 1 });
    });
    await scenario('Google blocked: still navigates to Merci', async s => {
        s.block();
        await s.page.getByRole('button', { name: 'Accepter', exact: true }).click();
        await s.fill();
        await s.page.getByRole('button', { name: 'Trouver ma fiduciaire', exact: true }).click();
        await s.page.waitForURL('**/merci');
        assert.deepEqual(s.counts(), { leads: 1, events: 0 });
    });
    await scenario('withdrawal during send: no lost request and no conversion', async s => {
        await s.page.getByRole('button', { name: 'Accepter', exact: true }).click();
        await s.fill(); s.delay(800);
        await s.page.getByRole('button', { name: 'Cookies', exact: true }).click();
        await s.page.getByRole('button', { name: 'Trouver ma fiduciaire', exact: true }).click();
        await s.page.getByRole('button', { name: 'Refuser', exact: true }).click();
        await s.page.waitForURL('**/merci');
        assert.deepEqual(s.counts(), { leads: 1, events: 0 });
        const before = s.requests.length;
        await s.page.reload();
        assert.equal(s.requests.length, before);
    });
    await scenario('mobile, equal touch choices, no horizontal overflow', async s => {
        const refuse = await s.page.getByRole('button', { name: 'Refuser', exact: true }).boundingBox();
        const accept = await s.page.getByRole('button', { name: 'Accepter', exact: true }).boundingBox();
        assert.ok(refuse.height >= 44 && accept.height >= 44);
        assert.equal(refuse.width, accept.width);
        assert.ok(await s.page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
        await s.page.screenshot({ path: '/private/tmp/fiduconnect-consent-mobile.png', fullPage: true });
        await s.page.getByRole('button', { name: 'Refuser', exact: true }).click();
        await s.page.getByRole('button', { name: 'Cookies', exact: true }).click();
        await s.page.waitForFunction(() => document.activeElement.textContent === 'Refuser');
        assert.equal(await s.page.evaluate(() => document.activeElement.textContent), 'Refuser');
    }, { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    await scenario('desktop initial consent screenshot', async s => {
        await s.page.screenshot({ path: '/private/tmp/fiduconnect-consent-desktop.png', fullPage: true });
        reports.push({ controls: await s.page.locator('.ads-consent button').allTextContents() });
    });
    console.log(JSON.stringify({ results, reports }, null, 2));
} finally { await browser.close(); }

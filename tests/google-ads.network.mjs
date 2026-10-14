// Local-only real tag smoke test: never fills/sends the lead form and never
// emits the labelled conversion. Records endpoint names, not user identifiers.
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.FIDU_PLAYWRIGHT_PATH || 'playwright');
const base = process.env.FIDU_E2E_BASE || 'http://127.0.0.1:3100';
if (!['127.0.0.1', 'localhost'].includes(new URL(base).hostname)) throw new Error('Local only');
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const context = await browser.newContext();
const page = await context.newPage();
const requests = [];
const violations = [];
const failures = [];
const attemptedAnalytics = [];
await page.exposeFunction('fiduAnalyticsAttempt', info => attemptedAnalytics.push(info));
await page.exposeFunction('fiduCsp', (directive, uri) => violations.push({ directive, uri: uri.split('?')[0] }));
await page.addInitScript(() => {
    function inspect(input, body) {
        try {
            const url = new URL(typeof input === 'string' ? input : input.url);
            if (!url.hostname.endsWith('google-analytics.com')) return;
            const params = typeof body === 'string' ? new URLSearchParams(body) : new URLSearchParams();
            window.fiduAnalyticsAttempt({ path: url.pathname,
                tagId: url.searchParams.get('tid') || params.get('tid'),
                eventName: url.searchParams.get('en') || params.get('en') });
        } catch { /* URL may be relative or a non-text request */ }
    }
    const originalFetch = window.fetch;
    window.fetch = function (input, init) { inspect(input, init?.body); return originalFetch.apply(this, arguments); };
    const originalBeacon = navigator.sendBeacon;
    navigator.sendBeacon = function (url, body) { inspect(url, body); return originalBeacon.apply(this, arguments); };
    document.addEventListener('securitypolicyviolation', event => window.fiduCsp(event.violatedDirective, event.blockedURI));
});
page.on('request', request => {
    const url = new URL(request.url());
    if (!['localhost', '127.0.0.1'].includes(url.hostname)) requests.push({ host: url.hostname, path: url.pathname });
    if (url.hostname.endsWith('google-analytics.com')) console.log(JSON.stringify({ linkedAnalyticsId: url.searchParams.get('tid') }));
    if (url.pathname === '/api/lead' || request.url().includes('BQ99CODZ8pwdEK2qpNlB')) throw new Error('No lead conversion allowed');
});
page.on('requestfailed', request => {
    const url = new URL(request.url());
    failures.push({ host: url.hostname, path: url.pathname, error: request.failure()?.errorText });
});
try {
    await page.goto(base);
    await page.getByRole('button', { name: 'Refuser', exact: true }).waitFor();
    await page.waitForTimeout(600);
    assert.equal(requests.length, 0);
    await page.getByRole('button', { name: 'Accepter', exact: true }).click();
    await page.waitForFunction(() => !!window.google_tag_manager?.['AW-17635546413'], { timeout: 20000 });
    await page.waitForTimeout(2000);
    console.log(JSON.stringify({ tagIds: await page.evaluate(() => Object.keys(window.google_tag_manager || {}).filter(key => /^(G-|GT-|AW-)/.test(key))) }));
    assert.ok(requests.some(item => item.host === 'www.googletagmanager.com' && item.path === '/gtag/js'));
    const cookies = await context.cookies();
    const firstParty = cookies.filter(cookie => cookie.name.startsWith('_gcl_')).map(cookie => ({
        name: cookie.name, domain: cookie.domain,
        lifetimeDays: Math.round((cookie.expires - Date.now() / 1000) / 86400),
    }));
    await page.getByRole('button', { name: 'Cookies', exact: true }).click();
    await page.getByRole('button', { name: 'Refuser', exact: true }).click();
    await page.waitForFunction(() => !document.getElementById('fiduconnect-google-ads'));
    const afterWithdrawal = requests.length;
    await page.waitForTimeout(1200);
    assert.equal(requests.length, afterWithdrawal);
    assert.equal((await context.cookies()).filter(cookie => cookie.name.startsWith('_gcl_')).length, 0);
    console.log(JSON.stringify({ noRequestsBeforeChoice: true, tagExecuted: true,
        noLabelledConversionSent: true, noRequestsAfterWithdrawal: true,
        endpoints: requests, firstParty, violations, failures, attemptedAnalytics }, null, 2));
    assert.deepEqual(violations, []);
} finally { await browser.close(); }

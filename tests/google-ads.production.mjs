// Production smoke check: no form submission, no labelled conversion. Isolated
// Chrome profile; consent is changed only for this automated test visitor.
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.FIDU_PLAYWRIGHT_PATH || 'playwright');
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
const page = await context.newPage();
const external = [];
const violations = [];
const errors = [];
let forbidden = 0;
await context.route('**/*', route => {
    const url = new URL(route.request().url());
    if (url.pathname === '/api/lead' || route.request().method() === 'POST' && url.hostname === 'contact.fiduconnect.ch'
        || route.request().url().includes('BQ99CODZ8pwdEK2qpNlB')) {
        forbidden += 1;
        return route.abort();
    }
    return route.continue();
});
page.on('request', request => {
    const url = new URL(request.url());
    if (url.hostname !== 'contact.fiduconnect.ch') external.push({ host: url.hostname, path: url.pathname });
});
page.on('pageerror', error => errors.push(error.message));
await page.exposeFunction('fiduViolation', (directive, uri) => violations.push({ directive, uri: uri.split('?')[0] }));
await page.addInitScript(() => {
    document.addEventListener('securitypolicyviolation', event => window.fiduViolation(event.violatedDirective, event.blockedURI));
});
try {
    const response = await page.goto('https://contact.fiduconnect.ch/', { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200);
    await page.getByRole('button', { name: 'Refuser', exact: true }).waitFor({ timeout: 15000 });
    assert.equal(external.length, 0);
    await page.getByRole('button', { name: 'Refuser', exact: true }).click();
    await page.reload({ waitUntil: 'networkidle' });
    assert.equal(external.length, 0);
    await page.getByRole('button', { name: 'Cookies', exact: true }).click();
    await page.getByRole('button', { name: 'Accepter', exact: true }).click();
    await page.waitForFunction(() => !!window.google_tag_manager?.['AW-17635546413'], undefined, { timeout: 20000 });
    await page.waitForTimeout(2000);
    assert.equal(await page.evaluate(() => window['ga-disable-G-TRG36EY6PG']), true);
    const cookies = (await context.cookies()).filter(cookie => cookie.name.startsWith('_gcl_'));
    assert.ok(cookies.some(cookie => cookie.name === '_gcl_au'));
    assert.ok(cookies.every(cookie => cookie.domain.replace(/^\./, '') === 'contact.fiduconnect.ch'));
    assert.ok(external.every(item => !item.host.endsWith('google-analytics.com')));
    await page.getByRole('button', { name: 'Cookies', exact: true }).click();
    await page.getByRole('button', { name: 'Refuser', exact: true }).click();
    await page.waitForFunction(() => !document.getElementById('fiduconnect-google-ads'));
    await page.waitForLoadState('networkidle');
    assert.equal((await context.cookies()).filter(cookie => cookie.name.startsWith('_gcl_')).length, 0);
    assert.deepEqual(violations, []);
    assert.deepEqual(errors, []);
    assert.equal(forbidden, 0);
    await page.screenshot({ path: '/private/tmp/fiduconnect-consent-production.png', fullPage: true });
    console.log(JSON.stringify({ production: true, status: 200,
        noRequestsBeforeConsentOrAfterRefusal: true, tagExecutedAfterConsent: true,
        analyticsDisabled: true, hostScopedCookies: cookies.map(cookie => ({ name: cookie.name, domain: cookie.domain })),
        cookiesRemovedAfterWithdrawal: true, formSubmissions: 0, labelledConversions: 0,
        cspViolations: violations, errors }, null, 2));
} finally { await browser.close(); }

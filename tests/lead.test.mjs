import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const validLead = {
    firstName: 'Alice', lastName: 'Exemple', email: 'alice@example.invalid',
    phone: '+41 79 000 00 00', company: '', situation: 'Indépendant',
    mainNeed: 'Comptabilité', message: '', website: '',
};

// Compile the real handler and helpers, but replace Resend entirely. These
// tests neither read .env files nor make any network requests/send real emails.
function fixture({ production = false, configured = true, providerError = false, throws = false } = {}) {
    const sent = [];
    const logs = [];
    const cache = new Map();
    const environment = { NODE_ENV: production ? 'production' : 'test' };
    if (configured) Object.assign(environment, {
        RESEND_API_KEY: 'test-only-not-a-real-key',
        LEAD_FROM_EMAIL: 'test@example.invalid', LEAD_TO_EMAIL: 'inbox@example.invalid',
    });
    class MockResend {
        emails = { send: async payload => {
            sent.push(payload);
            if (throws) throw new Error('Private provider content must not be logged');
            return { error: providerError ? { message: 'Private provider error' } : null };
        } };
    }
    function load(path) {
        if (cache.has(path)) return cache.get(path);
        const cjsModule = { exports: {} };
        cache.set(path, cjsModule.exports);
        const source = readFileSync(resolve(root, path), 'utf8');
        const compiled = ts.transpileModule(source, {
            compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
        }).outputText;
        const customRequire = name => {
            if (name === 'resend') return { Resend: MockResend };
            if (name === 'next/server') return { NextResponse: { json: (body, init) => Response.json(body, init) } };
            if (name.startsWith('@/')) return load(`${name.slice(2)}.ts`);
            return require(name);
        };
        runInNewContext(compiled, {
            module: cjsModule, exports: cjsModule.exports, require: customRequire,
            process: { env: environment }, console: { error: (...args) => logs.push(args) },
            URL, TextDecoder, Uint8Array, setTimeout, clearTimeout,
        }, { filename: path });
        cache.set(path, cjsModule.exports);
        return cjsModule.exports;
    }
    return { POST: load('app/api/lead/route.ts').POST, security: load('lib/lead-security.ts'), sent, logs };
}

function request(payload = validLead, { origin = 'http://localhost:3000', contentType = 'application/json', rawBody, headers = {} } = {}) {
    const values = { ...headers };
    if (origin !== null) values.Origin = origin;
    if (contentType !== null) values['Content-Type'] = contentType;
    return new Request('http://localhost:3000/api/lead', {
        method: 'POST', headers: values,
        body: rawBody ?? JSON.stringify(payload),
    });
}

test('valid request is normalized, escaped, sent once and never echoed', async () => {
    const f = fixture();
    const response = await f.POST(request({ ...validLead, firstName: ' Alice ', company: '<Entreprise>', message: '<script>alert("x")</script>' }));
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true });
    assert.equal(response.headers.get('cache-control'), 'no-store');
    assert.equal(f.sent.length, 1);
    assert.match(f.sent[0].html, /Alice Exemple/);
    assert.match(f.sent[0].html, /&lt;Entreprise&gt;/);
    assert.doesNotMatch(f.sent[0].html, /<script>/);
    assert.match(f.sent[0].text, /validation du rendez-vous/);
    assert.equal(f.sent[0].subject, 'Nouvelle demande FIDUCONNECT');
    assert.equal(f.logs.length, 0);
});

for (const mainNeed of ['Domiciliation', 'Administration d’entreprise']) {
    test(`new need ${mainNeed} is accepted and included in the lead email`, async () => {
        const f = fixture();
        const response = await f.POST(request({ ...validLead, mainNeed }));
        assert.equal(response.status, 200);
        assert.deepEqual(await response.json(), { ok: true });
        assert.equal(f.sent.length, 1);
        assert.ok(f.sent[0].text.includes(`Besoin : ${mainNeed}`));
        assert.ok(f.sent[0].html.includes(mainNeed));
        assert.equal(f.logs.length, 0);
    });
}

test('landing and shared form choices use the same new need labels', () => {
    const page = readFileSync(resolve(root, 'app/page.tsx'), 'utf8');
    const fields = readFileSync(resolve(root, 'lib/lead-fields.ts'), 'utf8');
    const form = readFileSync(resolve(root, 'components/SeaLeadForm.tsx'), 'utf8');
    for (const label of ['Domiciliation', 'Administration d’entreprise']) {
        assert.ok(page.includes(`'${label}'`));
        assert.ok(fields.includes(`'${label}'`));
    }
    assert.match(form, /name="mainNeed"[^>]*options=\{needs\}/);
    assert.doesNotMatch(page + fields, /Domiciliation à Genève|Administration de société/);
});

test('mobile select labels wrap and menu items remain touch friendly', () => {
    const styles = readFileSync(resolve(root, 'app/globals.css'), 'utf8');
    const label = styles.match(/\.sea-select-trigger > span:first-child\s*\{([^}]+)\}/)?.[1];
    const item = styles.match(/\.sea-select-item\s*\{([^}]+)\}/)?.[1];
    assert.ok(label && item);
    assert.match(label, /min-width:\s*0/);
    assert.match(label, /white-space:\s*normal/);
    assert.match(label, /overflow-wrap:\s*anywhere/);
    assert.doesNotMatch(label, /nowrap|ellipsis/);
    assert.match(item, /min-height:\s*44px/);
});

test('invalid fields do not reach the provider', async t => {
    const cases = [
        ['empty first name', { firstName: '   ' }], ['empty last name', { lastName: '' }],
        ['invalid email', { email: 'not-an-email' }], ['blank phone', { phone: '   ' }],
        ['phone without sufficient digits', { phone: '+41' }], ['phone with letters', { phone: 'call me please' }],
        ['unknown situation', { situation: 'arbitrary' }], ['unknown need', { mainNeed: 'arbitrary' }],
        ['overlong first name', { firstName: 'a'.repeat(81) }], ['overlong last name', { lastName: 'a'.repeat(81) }],
        ['overlong company', { company: 'a'.repeat(161) }], ['overlong message', { message: 'a'.repeat(2001) }],
        ['control characters in name', { firstName: 'Alice\nInjected' }], ['control characters in message', { message: 'a\u0000b' }],
    ];
    for (const [name, changes] of cases) await t.test(name, async () => {
        const f = fixture();
        assert.equal((await f.POST(request({ ...validLead, ...changes }))).status, 400);
        assert.equal(f.sent.length, 0);
    });
    for (const payload of [null, [], 123, {}]) await t.test(`invalid body ${JSON.stringify(payload)}`, async () => {
        const f = fixture();
        assert.equal((await f.POST(request(payload))).status, 400);
        assert.equal(f.sent.length, 0);
    });
});

test('message limit accepts 2000 characters', async () => {
    const f = fixture();
    assert.equal((await f.POST(request({ ...validLead, message: 'a'.repeat(2000) }))).status, 200);
});

test('foreign, absent and null origins are refused', async () => {
    for (const origin of ['https://example.org', null, 'null', 'http://localhost:3001']) {
        const f = fixture();
        assert.equal((await f.POST(request(validLead, { origin }))).status, 403);
        assert.equal(f.sent.length, 0);
    }
});

test('wrong format and malformed JSON are refused', async () => {
    const f = fixture();
    assert.equal((await f.POST(request(validLead, { contentType: 'text/plain' }))).status, 415);
    assert.equal((await f.POST(request(validLead, { rawBody: '{bad json' }))).status, 400);
    assert.equal((await f.POST(request(validLead, { rawBody: new Uint8Array([0xff]) }))).status, 400);
    assert.equal(f.sent.length, 0);
});

test('same-origin local IP works despite NextURL localhost normalization', async () => {
    const f = fixture();
    const response = await f.POST(request({ website: 'test-bot.invalid' }, {
        origin: 'http://127.0.0.1:3000', headers: { Host: '127.0.0.1:3000' },
    }));
    assert.equal(response.status, 200);
    assert.equal(f.sent.length, 0);
    for (const origin of ['https://localhost:3000', 'http://localhost:3000/', 'http://user:password@localhost:3000', 'not-an-origin']) {
        assert.equal((await f.POST(request(validLead, { origin }))).status, 403);
    }
    assert.equal((await f.POST(request(validLead, { headers: { Host: 'another.invalid' } }))).status, 403);
});

test('body limit works without or despite a misleading Content-Length', async () => {
    for (const headers of [{}, { 'Content-Length': '1' }, { 'Content-Length': '999999' }]) {
        const f = fixture();
        assert.equal((await f.POST(request({ ...validLead, message: 'a'.repeat(100000) }, { headers }))).status, 413);
        assert.equal(f.sent.length, 0);
    }
    const f = fixture();
    assert.equal((await f.POST(request(validLead, { headers: { 'Content-Length': 'not-a-number' } }))).status, 400);
});

test('honeypot returns silently without any configured secret or email', async () => {
    const f = fixture({ configured: false });
    assert.equal((await f.POST(request({ website: 'bot.example' }))).status, 200);
    assert.equal(f.sent.length, 0);
});

test('a stalled body times out without awaiting a stalled cancellation', async () => {
    const f = fixture();
    const stream = new ReadableStream({ cancel: () => new Promise(() => {}) });
    const stalled = new Request('http://localhost:3000/api/lead', {
        method: 'POST', headers: { Origin: 'http://localhost:3000', 'Content-Type': 'application/json' },
        body: stream, duplex: 'half',
    });
    assert.equal((await f.POST(stalled)).status, 408);
    assert.equal(f.sent.length, 0);
});

test('fourth request for the same email is limited', async () => {
    const f = fixture();
    for (let i = 0; i < 3; i++) assert.equal((await f.POST(request())).status, 200);
    const response = await f.POST(request({ ...validLead, email: 'ALICE@example.invalid' }));
    assert.equal(response.status, 429);
    assert.ok(Number(response.headers.get('retry-after')) > 0);
    assert.equal(f.sent.length, 3);
});

test('global per-process cap and window expiration', () => {
    const { security } = fixture();
    const limiter = security.createLeadLimiter();
    for (let i = 0; i < 30; i++) assert.equal(limiter.consume(`person${i}@example.invalid`, 1000), null);
    assert.equal(limiter.consume('another@example.invalid', 1000), 900);
    assert.equal(limiter.consume('another@example.invalid', 901000), null);
});

test('production sending can still be stopped with the server-side switch', async () => {
    const f = fixture({ production: true });
    f.security.PRODUCTION_LEADS_ENABLED = false;
    assert.equal((await f.POST(request())).status, 503);
    assert.equal(f.sent.length, 0);
});

test('authorized production sends once with mocked provider and keeps no-store response', async () => {
    const f = fixture({ production: true });
    const response = await f.POST(request());
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('cache-control'), 'no-store');
    assert.equal(f.sent.length, 1);
    assert.equal(f.sent[0].to, 'inbox@example.invalid');
    assert.equal(f.logs.length, 0);
});

test('enabled production still rejects foreign origins and invalid requests without sending', async () => {
    const f = fixture({ production: true });
    assert.equal((await f.POST(request(validLead, { origin: 'https://foreign.example.invalid' }))).status, 403);
    assert.equal((await f.POST(request({ ...validLead, email: 'invalid' }))).status, 400);
    assert.equal(f.sent.length, 0);
});

test('enabled production without configuration fails safely without sending', async () => {
    const f = fixture({ production: true, configured: false });
    assert.equal((await f.POST(request())).status, 503);
    assert.equal(f.sent.length, 0);
    assert.deepEqual(f.logs, [['lead.configuration_missing']]);
});

test('missing configuration fails safely', async () => {
    const f = fixture({ configured: false });
    assert.equal((await f.POST(request())).status, 503);
    assert.deepEqual(f.logs, [['lead.configuration_missing']]);
});

test('provider errors and exceptions never expose private error content', async () => {
    for (const [options, status, event] of [
        [{ providerError: true }, 502, 'lead.send_failed'],
        [{ throws: true }, 500, 'lead.unexpected_failure'],
    ]) {
        const f = fixture(options);
        const response = await f.POST(request());
        assert.equal(response.status, status);
        assert.doesNotMatch(await response.text(), /Private provider/);
        assert.deepEqual(f.logs, [[event]]);
    }
});

test('no advertising tag is shipped in the layout or form', () => {
    for (const path of ['app/layout.tsx', 'components/SeaLeadForm.tsx']) {
        assert.doesNotMatch(readFileSync(resolve(root, path), 'utf8'), /googletagmanager\.com|google-analytics\.com|window\.gtag|GTM-W4QKQ8GH/);
    }
});

test('production headers block third-party scripts and framing', async () => {
    const source = readFileSync(resolve(root, 'next.config.ts'), 'utf8');
    const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
    const cjsModule = { exports: {} };
    runInNewContext(compiled, { module: cjsModule, exports: cjsModule.exports, process: { cwd: () => root, env: { NODE_ENV: 'production' } } });
    const rules = await cjsModule.exports.default.headers();
    const headers = Object.fromEntries(rules[0].headers.map(({ key, value }) => [key, value]));
    assert.equal(headers['X-Content-Type-Options'], 'nosniff');
    assert.equal(headers['X-Frame-Options'], 'DENY');
    assert.match(headers['Content-Security-Policy'], /frame-ancestors 'none'/);
    assert.doesNotMatch(headers['Content-Security-Policy'], /unsafe-eval|google|localhost|127\.0\.0\.1/);
    assert.deepEqual(Array.from(cjsModule.exports.default.images.remotePatterns), []);
});

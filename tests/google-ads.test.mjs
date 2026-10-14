import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import { randomUUID } from 'node:crypto';
import test from 'node:test';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const root = new URL('../', import.meta.url);

// Execute the real client runtime and real form handler. Google and /api/lead
// are entirely mocked: these tests send neither email nor advertising events.
function fixture({ storageThrows = false, googleBlocked = false, callback = true, host = 'contact.fiduconnect.ch' } = {}) {
    const storage = new Map();
    const commands = [];
    const scripts = [];
    const navigations = [];
    const events = [];
    const cookies = [];
    const cache = new Map();
    const window = {
        location: { hostname: host, href: `https://${host}/?gclid=test-click&email=private@example.invalid`,
            reload: () => navigations.push('reload'), assign: path => navigations.push(path) },
        crypto: { randomUUID },
        dispatchEvent: event => events.push(event.type),
        localStorage: {
            getItem: key => { if (storageThrows) throw new Error('Storage unavailable'); return storage.get(key) ?? null; },
            setItem: (key, value) => { if (storageThrows) throw new Error('Storage unavailable'); storage.set(key, value); },
        },
    };
    const document = {
        cookie: '_gcl_aw=old; unrelated=keep',
        createElement: () => ({}),
        getElementById: () => ({ remove: () => {} }),
        head: { appendChild: script => {
            scripts.push(script);
            if (googleBlocked) { script.onerror(); return; }
            commands.push(...window.dataLayer);
            window.gtag = (...args) => {
                commands.push(args);
                if (args[0] === 'event' && callback) args[2].event_callback();
            };
        } },
    };
    Object.defineProperty(document, 'cookie', {
        get: () => '_gcl_aw=old; unrelated=keep', set: value => cookies.push(value),
    });
    let response = async () => Response.json({ ok: true });
    const requests = [];
    function load(path) {
        if (cache.has(path)) return cache.get(path);
        const m = { exports: {} };
        const code = ts.transpileModule(readFileSync(new URL(path, root), 'utf8'), {
            compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022,
                jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
        }).outputText;
        const customRequire = name => {
            if (name === 'react') return { ...require('react'), useState: () => [false, () => {}], useRef: () => ({ current: false }) };
            if (name === 'next/navigation') return { useRouter: () => ({ push: path => navigations.push(path) }) };
            if (name.startsWith('@/')) {
                const base = name.slice(2);
                return load(existsSync(new URL(`${base}.ts`, root)) ? `${base}.ts` : `${base}.tsx`);
            }
            return require(name);
        };
        runInNewContext(code, { module: m, exports: m.exports, require: customRequire,
            window, document, URL, Event, Date, Promise,
            setTimeout: (fn, ms) => setTimeout(fn, Math.min(ms, 15)), clearTimeout,
            fetch: async (url, init) => { requests.push({ url, init }); return response(); },
        }, { filename: path });
        cache.set(path, m.exports);
        return m.exports;
    }
    const ads = load('lib/google-ads.ts');
    const form = () => load('components/SeaLeadForm.tsx').SeaLeadForm({ idPrefix: 'test' }).props.onFormSubmit;
    return { ads, window, storage, commands, scripts, navigations, requests, cookies, form,
        setResponse: fn => { response = fn; }, conversions: () => commands.filter(args => args[0] === 'event') };
}

test('no tag or conversion without consent, refusal does not block success', async () => {
    const f = fixture();
    f.ads.syncAdsConsent();
    await f.form()({ website: '' });
    assert.equal(f.scripts.length, 0);
    assert.equal(f.conversions().length, 0);
    assert.deepEqual(f.navigations, ['/merci']);
    f.ads.saveAdsConsent(false);
    assert.equal(f.ads.hasAdsConsent(), false);
    assert.equal(f.scripts.length, 0);
});

test('accepted success sends one zero-value event, no form fields or URL email', async () => {
    const f = fixture();
    f.ads.saveAdsConsent(true);
    f.ads.startAdsTracking();
    assert.equal(f.scripts.length, 1);
    assert.equal(f.window['ga-disable-G-TRG36EY6PG'], true);
    assert.match(f.scripts[0].src, /gtag\/js\?id=AW-17635546413$/);
    assert.equal(f.commands[0][1], 'default');
    assert.equal(f.commands[0][2].ad_storage, 'denied');
    assert.equal(f.commands[1][2].ad_storage, 'granted');
    assert.equal(f.commands[1][2].ad_personalization, 'denied');
    assert.equal(f.commands[1][2].analytics_storage, 'denied');
    await f.form()({ website: '', firstName: 'Private Alice', email: 'private@example.invalid', phone: '+41790000000', message: 'Private message' });
    assert.equal(f.conversions().length, 1);
    const event = f.conversions()[0][2];
    assert.equal(event.send_to, 'AW-17635546413/BQ99CODZ8pwdEK2qpNlB');
    assert.equal(event.value, 0);
    assert.equal(event.currency, 'CHF');
    assert.match(event.transaction_id, /^[\da-f-]{36}$/);
    assert.doesNotMatch(JSON.stringify(f.commands), /private|Alice|41790000000/i);
    assert.equal(new URL(event.page_location).search, '?gclid=test-click');
    assert.deepEqual(f.navigations, ['/merci']);
});

test('blocked Google and missing callback never prevent Merci', async () => {
    for (const settings of [{ googleBlocked: true }, { callback: false }]) {
        const f = fixture(settings);
        f.ads.saveAdsConsent(true);
        await f.form()({ website: '' });
        assert.deepEqual(f.navigations, ['/merci']);
    }
});

test('errors, rate limiting, malformed or false JSON never count conversions; retries work', async () => {
    for (const response of [() => Response.json({ error: 'Error' }, { status: 502 }),
        () => Response.json({}, { status: 429 }), () => new Response('broken'),
        () => Response.json({ ok: false }), () => { throw new Error('Offline'); }]) {
        const f = fixture();
        f.ads.saveAdsConsent(true);
        f.setResponse(response);
        const submit = f.form();
        await submit({ website: '' });
        assert.equal(f.conversions().length, 0);
        assert.equal(f.navigations.length, 0);
        f.setResponse(() => Response.json({ ok: true }));
        await submit({ website: '' });
        assert.equal(f.conversions().length, 1);
    }
});

test('honeypot fake success is not measured', async () => {
    const f = fixture();
    f.ads.saveAdsConsent(true);
    await f.form()({ website: 'robot' });
    assert.equal(f.conversions().length, 0);
    assert.deepEqual(f.navigations, ['/merci']);
});

test('immediate lock prevents double click requests and events', async () => {
    const f = fixture();
    f.ads.saveAdsConsent(true);
    f.setResponse(() => new Promise(resolve => setTimeout(() => resolve(Response.json({ ok: true })), 10)));
    const submit = f.form();
    await Promise.all([submit({ website: '' }), submit({ website: '' })]);
    assert.equal(f.requests.length, 1);
    assert.equal(f.conversions().length, 1);
});

test('withdrawal blocks new conversions and stops the loaded tag with document replacement', async () => {
    const f = fixture();
    f.ads.saveAdsConsent(true);
    f.ads.saveAdsConsent(false);
    await f.ads.measureLeadSuccess('');
    assert.equal(f.conversions().length, 0);
    assert.deepEqual(f.navigations, ['reload']);
    assert.ok(f.cookies.every(cookie => cookie.startsWith('_gcl_aw=')));
    assert.equal(f.ads.hasAdsConsent(), false);
});

test('withdrawal while email request is pending waits for success, without counting it', async () => {
    const f = fixture();
    f.ads.saveAdsConsent(true);
    let deliver;
    f.setResponse(() => new Promise(resolve => { deliver = resolve; }));
    const pending = f.form()({ website: '' });
    f.ads.saveAdsConsent(false);
    assert.equal(f.navigations.length, 0);
    deliver(Response.json({ ok: true }));
    await pending;
    assert.equal(f.conversions().length, 0);
    assert.deepEqual(f.navigations, ['/merci']);
});

test('storage unavailable, malformed, expired, future or old-version preferences fail closed', () => {
    const unavailable = fixture({ storageThrows: true });
    assert.equal(unavailable.ads.saveAdsConsent(true), false);
    assert.equal(unavailable.scripts.length, 0);
    for (const raw of ['bad JSON', JSON.stringify({ version: 0, accepted: true, savedAt: Date.now() }),
        JSON.stringify({ version: 1, accepted: true, savedAt: Date.now() - 181 * 86400000 }),
        JSON.stringify({ version: 1, accepted: true, savedAt: Date.now() + 100000 }),
        JSON.stringify({ version: 1, accepted: 'true', savedAt: Date.now() })]) {
        const f = fixture();
        f.storage.set(f.ads.CONSENT_KEY, raw);
        f.ads.syncAdsConsent();
        assert.equal(f.scripts.length, 0);
    }
});

test('stored agreement can resume, other hosts never load Google, Merci has no event', () => {
    const f = fixture();
    f.storage.set(f.ads.CONSENT_KEY, JSON.stringify({ version: 1, accepted: true, savedAt: Date.now() }));
    f.ads.syncAdsConsent();
    assert.equal(f.scripts.length, 1);
    const other = fixture({ host: 'www.fiduconnect.ch' });
    other.ads.saveAdsConsent(true);
    assert.equal(other.scripts.length, 0);
    assert.doesNotMatch(readFileSync(new URL('app/merci/page.tsx', root), 'utf8'), /gtag|measureLeadSuccess|conversion/);
});

test('a readable but unwritable old acceptance cannot resume after a failed withdrawal', () => {
    const f = fixture();
    f.ads.saveAdsConsent(true);
    f.window.localStorage.setItem = () => { throw new Error('Now unwritable'); };
    assert.equal(f.ads.saveAdsConsent(false), false);
    assert.equal(f.ads.readAdsConsent(), null);
    assert.equal(f.ads.hasAdsConsent(), false);
});

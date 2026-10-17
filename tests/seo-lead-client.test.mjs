import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const payload = { firstName: 'Alice', lastName: 'Exemple', email: 'alice@example.invalid', phone: '+41 79 000 00 00', company: 'Test fictif', situation: 'Indépendant', mainNeed: 'Comptabilité', message: 'Test uniquement', website: '' };
function fixture({ blockedStorage = false } = {}) {
    const values = new Map();
    const window = { sessionStorage: {
        getItem(key) { if (blockedStorage) throw new Error('blocked'); return values.get(key) ?? null; },
        setItem(key, value) { if (blockedStorage) throw new Error('blocked'); values.set(key, value); },
        removeItem(key) { values.delete(key); },
    } };
    const cache = new Map();
    function load(file) {
        if (cache.has(file)) return cache.get(file);
        const cjsModule = { exports: {} };
        const source = readFileSync(new URL('../lib/' + file + '.ts', import.meta.url), 'utf8');
        const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
        runInNewContext(compiled, {
            module: cjsModule, exports: cjsModule.exports, require: name => name === './lead-response' ? load('lead-response') : require(name),
            window, setTimeout, clearTimeout, AbortController, Date,
        });
        cache.set(file, cjsModule.exports);
        return cjsModule.exports;
    }
    return { client: load('seo-lead-client'), values };
}
test('confirmed response posts the allowlisted payload and stores only a short-lived timestamp', async () => {
    const { client, values } = fixture();
    assert.equal(client.hasSeoReceipt(), false);
    assert.equal(client.serverSeoReceipt(), false);
    let calls = 0;
    await client.submitSeoLead(payload, async (url, init) => {
        calls++;
        assert.equal(url, '/api/lead');
        assert.equal(init.method, 'POST');
        assert.deepEqual(JSON.parse(init.body), payload);
        assert.ok(init.signal instanceof AbortSignal);
        return Response.json({ ok: true });
    });
    assert.equal(calls, 1);
    assert.equal(client.hasSeoReceipt(), true);
    assert.equal(values.size, 1);
    assert.match(values.get('fiduconnect.seo-receipt'), /^\d+$/);
    assert.doesNotMatch(JSON.stringify([...values]), /Alice|alice@|Test fictif/);
});
test('blocked browser storage does not break confirmation', async () => {
    const { client } = fixture({ blockedStorage: true });
    await client.submitSeoLead(payload, async () => Response.json({ ok: true }));
    assert.equal(client.hasSeoReceipt(), true);
});
test('errors, malformed replies and false success never confirm receipt', async () => {
    for (const respond of [
        async () => Response.json({ error: 'Envoi désactivé' }, { status: 503 }),
        async () => Response.json({ ok: false }),
        async () => Response.json({ ok: 'true' }),
        async () => Response.json(null),
        async () => new Response('not JSON', { status: 200 }),
        async () => { throw new Error('private network details'); },
    ]) {
        const { client, values } = fixture();
        await assert.rejects(client.submitSeoLead(payload, respond));
        assert.equal(client.hasSeoReceipt(), false);
        assert.equal(values.size, 0);
    }
});
test('rate-limit errors are readable, no response HTML is exposed', async () => {
    const { client } = fixture();
    await assert.rejects(client.submitSeoLead(payload, async () => new Response('<html>private</html>', { status: 429 })), /Patientez quelques minutes/);
    await assert.rejects(client.submitSeoLead(payload, async () => new Response('<html>private</html>', { status: 502 })), /Veuillez réessayer/);
    await assert.rejects(client.submitSeoLead(payload, async () => { throw new Error('secret'); }), error => !error.message.includes('secret'));
});
test('a new unsuccessful attempt clears previous confirmation', async () => {
    const { client } = fixture();
    let notices = 0;
    const unsubscribe = client.subscribeSeoReceipt(() => notices++);
    await client.submitSeoLead(payload, async () => Response.json({ ok: true }));
    assert.equal(client.hasSeoReceipt(), true);
    await assert.rejects(client.submitSeoLead(payload, async () => Response.json({ ok: false })));
    assert.equal(client.hasSeoReceipt(), false);
    assert.equal(notices, 3);
    unsubscribe();
});
test('honeypot silent success cannot create an actual receipt', async () => {
    const { client } = fixture();
    await assert.rejects(client.submitSeoLead({ ...payload, website: 'bot.example.invalid' }, async () => Response.json({ ok: true })));
    assert.equal(client.hasSeoReceipt(), false);
});
test('SEO form transport and confirmation have no advertising integration', () => {
    for (const path of ['lib/seo-lead-client.ts', 'components/SeoLeadForm.tsx', 'components/SeoLeadConfirmation.tsx', 'app/contact/page.tsx', 'app/merci/page.tsx']) {
        const source = readFileSync(new URL('../' + path, import.meta.url), 'utf8');
        assert.doesNotMatch(source, /google-ads|gtag|dataLayer|measureLeadSuccess|localStorage/);
    }
    const form = readFileSync(new URL('../components/SeoLeadForm.tsx', import.meta.url), 'utf8');
    assert.match(form, /sending\.current = true/);
    assert.match(form, /sending\.current = false/);
    assert.match(form, /disabled=\{loading\}/);
    assert.ok(form.indexOf('await submitSeoLead(payload)') < form.indexOf("router.replace('/merci')"));
});

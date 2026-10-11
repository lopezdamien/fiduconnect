import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

function loadModule(path) {
    const source = readFileSync(new URL(path, import.meta.url), 'utf8');
    const compiled = ts.transpileModule(source, {
        compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    }).outputText;
    const cjsModule = { exports: {} };
    runInNewContext(compiled, { module: cjsModule, exports: cjsModule.exports });
    return cjsModule.exports;
}

test('Netlify preparation keeps a server-capable Next build without secrets or SPA rewrites', () => {
    const config = readFileSync(new URL('../netlify.toml', import.meta.url), 'utf8');
    assert.match(config, /command = "npm run build -- --webpack"/);
    assert.match(config, /publish = "\.next"/);
    assert.match(config, /NODE_VERSION = "24"/);
    assert.doesNotMatch(config, /RESEND_API_KEY|re_[A-Za-z0-9]+|redirects|index\.html|NODE_ENV|plugin-nextjs/);
    const security = readFileSync(new URL('../lib/lead-security.ts', import.meta.url), 'utf8');
    assert.match(security, /PRODUCTION_LEADS_ENABLED = false/);
});

test('edge limiter targets only the lead endpoint with Free-compatible IP/domain aggregation', () => {
    const { config, default: handler } = loadModule('../netlify/edge-functions/lead-rate-limit.js');
    assert.equal(config.path, '/api/lead');
    assert.equal(config.rateLimit.windowLimit, 10);
    assert.equal(config.rateLimit.windowSize, 60);
    assert.deepEqual(Array.from(config.rateLimit.aggregateBy), ['ip', 'domain']);
    assert.equal(config.cache, undefined);
    // Returning undefined is Netlify's documented pass-through, not a new endpoint.
    const unreadable = new Proxy({}, { get() { throw new Error('Request/context must not be read'); } });
    assert.equal(handler(unreadable, unreadable), undefined);
});

test('hosting-level 429 errors have a helpful message without parsing or exposing their body', async () => {
    const { getLeadErrorMessage } = loadModule('../lib/lead-response.ts');
    const response = { status: 429, json() { throw new Error('Must not read the body'); } };
    assert.match(await getLeadErrorMessage(response), /Patientez quelques minutes/);
    const form = readFileSync(new URL('../components/SeaLeadForm.tsx', import.meta.url), 'utf8');
    assert.match(form, /throw new Error\(await getLeadErrorMessage\(response\)\)/);
});

test('non-JSON hosting errors never expose technical content', async () => {
    const { getLeadErrorMessage } = loadModule('../lib/lead-response.ts');
    const response = new Response('<html>private upstream diagnostics</html>', { status: 502 });
    assert.equal(await getLeadErrorMessage(response), 'Votre demande n’a pas pu être envoyée. Veuillez réessayer dans quelques instants.');
});

test('API validation messages remain readable and malformed JSON errors fail safely', async () => {
    const { getLeadErrorMessage } = loadModule('../lib/lead-response.ts');
    assert.equal(await getLeadErrorMessage(Response.json({ error: 'Vérifiez votre téléphone.' }, { status: 400 })), 'Vérifiez votre téléphone.');
    for (const value of [null, [], { error: 123 }, { error: '' }, { error: 'x'.repeat(241) }]) {
        assert.match(await getLeadErrorMessage(Response.json(value, { status: 400 })), /Veuillez réessayer/);
    }
});

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const sample = { leaseId: 'test-lease', lead: { id: 'test-lead', first_name: 'Test', last_name: 'Exemple',
    email: 'test@example.invalid', phone: '+41 79 000 00 00', company: '', situation: 'Indépendant',
    main_need: 'Comptabilité', message: 'Test', form_source: 'landing_ads' } };

function fixture({ fail = false, acknowledge = true, configured = true } = {}) {
    const sent = [], calls = [], logs = [];
    const env = { CRM_INTAKE_ENABLED: 'true', CRM_NOTIFICATION_SECRET: 'x'.repeat(40) };
    if (configured) Object.assign(env, { RESEND_API_KEY: 'fake', LEAD_FROM_EMAIL: 'from@example.invalid', LEAD_TO_EMAIL: 'to@example.invalid' });
    async function crmRpc(name, data) {
        calls.push({ name, data });
        if (name === 'crm_claim_notifications') return [sample];
        return acknowledge;
    }
    const modules = new Map();
    function load(path) {
        if (modules.has(path)) return modules.get(path);
        const m = { exports: {} };
        const code = ts.transpileModule(readFileSync(new URL(`../${path}`, import.meta.url), 'utf8'),
            { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
        runInNewContext(code, { module: m, exports: m.exports, process: { env }, Response, Buffer,
            console: { error: (...args) => logs.push(args) }, require: name => {
                if (name === '@/lib/crm-intake' || name === './crm-intake') return { crmRpc, crmIntakeEnabled: () => env.CRM_INTAKE_ENABLED === 'true' };
                if (name === '@/lib/crm-notifications') return load('lib/crm-notifications.ts');
                if (name === 'resend') return { Resend: class { emails = { send: async (message, options) => {
                    sent.push({ message, options });
                    if (fail) throw new Error('private provider error');
                    return { data: { id: 'provider-test' }, error: null };
                } }; } };
                return require(name);
            } });
        modules.set(path, m.exports);
        return m.exports;
    }
    return { env, sent, calls, logs, worker: load('lib/crm-notifications.ts').processCrmNotifications,
        POST: load('app/api/internal/lead-notifications/route.ts').POST };
}

test('notification uses stable idempotency key and acknowledges only confirmed provider result', async () => {
    const f = fixture();
    assert.equal((await f.worker()).sent, 1);
    assert.equal(f.sent[0].options.idempotencyKey, 'crm-lead/test-lead');
    assert.equal(f.calls[1].data.p_provider_id, 'provider-test');
    assert.equal(f.sent[0].message.to, 'to@example.invalid');
    assert.equal(f.logs.length, 0);
});

test('email failure keeps pending job; no provider details are logged', async () => {
    const f = fixture({ fail: true });
    assert.equal((await f.worker()).pending, 1);
    assert.equal(f.calls[1].data.p_provider_id, null);
    assert.equal(f.logs.length, 0);
});

test('configuration failure never claims jobs; stale acknowledgement does not count as sent', async () => {
    const f = fixture({ configured: false });
    await assert.rejects(f.worker());
    assert.equal(f.calls.length, 0);
    assert.equal((await fixture({ acknowledge: false }).worker()).sent, 0);
});

test('worker endpoint denies missing/wrong credentials, requires enablement, reveals only totals', async () => {
    const f = fixture();
    const req = auth => new Request('https://example.invalid/api/internal/lead-notifications', {
        method: 'POST', headers: auth ? { authorization: auth } : {},
    });
    for (const authorization of ['', 'Bearer wrong', `Bearer ${'é'.repeat(40)}`, `Bearer ${'a'.repeat(2000)}`]) {
        assert.equal((await f.POST(req(authorization))).status, 401);
    }
    assert.equal(f.calls.length, 0);
    f.env.CRM_INTAKE_ENABLED = 'false';
    assert.equal((await f.POST(req(`Bearer ${f.env.CRM_NOTIFICATION_SECRET}`))).status, 503);
    assert.equal(f.calls.length, 0);
    f.env.CRM_INTAKE_ENABLED = 'true';
    const response = await f.POST(req(`Bearer ${f.env.CRM_NOTIFICATION_SECRET}`));
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true, sent: 1, pending: 0 });
    assert.equal(response.headers.get('cache-control'), 'no-store');
});

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

test('Netlify preparation keeps a server-capable Next build without secrets or SPA rewrites', () => {
    const config = readFileSync(new URL('../netlify.toml', import.meta.url), 'utf8');
    assert.match(config, /command = "npm run build -- --webpack"/);
    assert.match(config, /publish = "\.next"/);
    assert.match(config, /NODE_VERSION = "24"/);
    assert.doesNotMatch(config, /RESEND_API_KEY|re_[A-Za-z0-9]+|redirects|index\.html|NODE_ENV|plugin-nextjs/);
    const security = readFileSync(new URL('../lib/lead-security.ts', import.meta.url), 'utf8');
    assert.match(security, /PRODUCTION_LEADS_ENABLED = false/);
});

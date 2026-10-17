import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { deploymentProblems } from '../scripts/check-seo-deploy.mjs';

const env = { BRANCH: 'seo-release-test', SITE_NAME: 'seo-test', NEXT_PUBLIC_SITE_URL: 'https://www.fiduconnect.ch', RESEND_API_KEY: 'fake-not-a-key', LEAD_FROM_EMAIL: 'from@example.invalid', LEAD_TO_EMAIL: 'to@example.invalid' };

test('deployment preparation cannot enable itself', () => {
    const config = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
    assert.equal(config.framework, 'nextjs');
    assert.equal(config.buildCommand, 'npm run check:seo-deploy && npm run build -- --webpack');
    assert.equal(config.regions, undefined);
    assert.equal(config.alias, undefined);
    assert.equal(config.env, undefined);
    assert.ok(deploymentProblems({ approved: false, sendsEnabled: false, env }).length >= 2);
    assert.deepEqual(deploymentProblems({ approved: true, sendsEnabled: true, env }), []);
});

test('SEA branch, SEA project, wrong host or missing secrets block configured build', () => {
    for (const change of [{ BRANCH: 'landing-sea' }, { VERCEL_GIT_COMMIT_REF: 'landing-sea' }, { NETLIFY: 'true' }, { SITE_NAME: 'fiduconnect-sea' }, { SITE_URL: 'https://contact.fiduconnect.ch' }, { NEXT_PUBLIC_SITE_URL: 'https://other.invalid' }, { RESEND_API_KEY: '' }, { LEAD_FROM_EMAIL: '' }, { LEAD_TO_EMAIL: '' }]) {
        const problems = deploymentProblems({ approved: true, sendsEnabled: true, env: { ...env, ...change } });
        assert.ok(problems.length);
        assert.ok(!problems.join(' ').includes('fake-not-a-key'));
    }
});

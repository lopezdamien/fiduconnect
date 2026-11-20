import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

function fixture({ hostname = 'www.fiduconnect.ch', blockedStorage = false } = {}) {
    const values = new Map();
    const scripts = [];
    const cookies = [];
    const document = {
        title: 'FiduConnect', referrer: 'https://www.google.ch/search?q=private',
        head: { appendChild: script => scripts.push(script) },
        createElement: () => ({}),
        get cookie() { return '_ga=example; _ga_MQMDRTXM65=example; functional=keep'; },
        set cookie(value) { cookies.push(value); },
    };
    const window = {
        location: { hostname, pathname: '/contact', search: '?email=private@example.invalid', hash: '#private' },
        localStorage: {
            getItem: key => { if (blockedStorage) throw Error('blocked'); return values.get(key) ?? null; },
            setItem: (key, value) => { if (blockedStorage) throw Error('blocked'); values.set(key, value); },
        }, dispatchEvent() {},
    };
    const source = readFileSync(new URL('../lib/seo-analytics.ts', import.meta.url), 'utf8');
    const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
    const module = { exports: {} };
    runInNewContext(compiled, { module, exports: module.exports, window, document, Event, URL, Date, Set,
        require: () => ({ SEO_INDEXABLE_PATHS: ['/', '/contact', '/services/comptabilite'] }),
    });
    return { api: module.exports, window, values, scripts, cookies, commands: () => (window.dataLayer ?? []).map(item => Array.from(item)) };
}

test('no consent, refusal, malformed or expired consent send no requests and no events', () => {
    const f = fixture();
    for (const choice of [null, 'not-json', '{}', JSON.stringify({ version: 1, accepted: true, expires: Date.now() - 1 }), JSON.stringify({ version: 1, accepted: true, expires: Date.now() + 999999999999 })]) {
        if (choice === null) f.values.delete(f.api.ANALYTICS_CHOICE_KEY);
        else f.values.set(f.api.ANALYTICS_CHOICE_KEY, choice);
        f.api.trackSeoPage('/contact');
        f.api.trackSeoAction('form_start');
        f.api.trackSeoLead('not-sent');
    }
    f.api.saveAnalyticsChoice(false);
    f.api.trackSeoPage('/contact');
    assert.equal(f.scripts.length, 0);
    assert.equal(f.commands().length, 0);
});

test('acceptance loads once, measures client navigation once and strips private URLs', () => {
    const f = fixture();
    f.api.saveAnalyticsChoice(true);
    f.api.trackSeoPage('/contact?email=private@example.invalid#message');
    f.api.trackSeoPage('/contact');
    f.api.trackSeoPage('/services/comptabilite');
    assert.equal(f.scripts.length, 1);
    assert.match(f.scripts[0].src, /G-MQMDRTXM65$/);
    const pageviews = f.commands().filter(item => item[0] === 'event' && item[1] === 'page_view');
    assert.equal(pageviews.length, 2);
    assert.equal(pageviews[0][2].page_location, 'https://www.fiduconnect.ch/contact');
    assert.equal(pageviews[0][2].page_referrer, 'https://www.google.ch/');
    assert.equal(pageviews[1][2].page_referrer, 'https://www.fiduconnect.ch/contact');
    assert.equal(f.api.analyticsLocation('/unknown-personal-name'), 'https://www.fiduconnect.ch/404');
    assert.doesNotMatch(JSON.stringify(f.commands()), /private|email=|search\?q=/);
    const config = f.commands().find(item => item[0] === 'config')[2];
    assert.equal(config.send_page_view, false);
    assert.equal(config.cookie_update, false);
    assert.equal(config.cookie_domain, 'www.fiduconnect.ch');
    assert.equal(config.allow_google_signals, false);
});

test('confirmed leads are deduplicated without sending request IDs or form contents', () => {
    const f = fixture();
    f.api.saveAnalyticsChoice(true);
    f.api.trackSeoLead('private-request-id');
    f.api.trackSeoLead('private-request-id');
    assert.equal(f.commands().filter(item => item[1] === 'generate_lead').length, 1);
    assert.doesNotMatch(JSON.stringify(f.commands()), /private-request-id/);
    const form = readFileSync(new URL('../components/SeoLeadForm.tsx', import.meta.url), 'utf8');
    const confirmed = form.indexOf('await submitSeoLead(');
    const measured = form.indexOf('trackSeoLead(submission.current.id)');
    assert.ok(confirmed > 0 && measured > confirmed && measured < form.indexOf("router.replace('/merci')"));
    assert.doesNotMatch(readFileSync(new URL('../components/SeoLeadConfirmation.tsx', import.meta.url), 'utf8'), /trackSeoLead|generate_lead/);
});

test('withdrawal stops events, removes only GA cookies, and reacceptance resumes', () => {
    const f = fixture();
    f.api.saveAnalyticsChoice(true);
    f.api.trackSeoPage('/');
    f.api.saveAnalyticsChoice(false);
    const count = f.commands().length;
    f.api.trackSeoPage('/contact');
    f.api.trackSeoLead('not-collected');
    assert.equal(f.commands().length, count);
    assert.equal(f.window['ga-disable-G-MQMDRTXM65'], true);
    assert.ok(f.cookies.some(cookie => cookie.includes('Domain=fiduconnect.ch')));
    assert.ok(f.cookies.every(cookie => !cookie.startsWith('functional=')));
    f.api.saveAnalyticsChoice(true);
    f.api.trackSeoPage('/contact');
    assert.equal(f.window['ga-disable-G-MQMDRTXM65'], false);
    assert.equal(f.scripts.length, 1);
    assert.ok(f.commands().length > count);
});

test('corrupted persisted choice cannot reuse an earlier acceptance', () => {
    const f = fixture();
    f.api.saveAnalyticsChoice(true);
    f.api.trackSeoPage('/');
    const count = f.commands().length;
    f.values.set(f.api.ANALYTICS_CHOICE_KEY, '{broken');
    f.api.trackSeoAction('form_start');
    assert.equal(f.commands().length, count);
    assert.equal(f.api.readAnalyticsChoice(), null);
});

test('blocked storage, script failures and preview hosts do not break site behavior', () => {
    const blocked = fixture({ blockedStorage: true });
    blocked.api.saveAnalyticsChoice(true);
    blocked.api.trackSeoPage('/');
    assert.equal(blocked.scripts.length, 1);
    blocked.scripts[0].onerror();
    const count = blocked.commands().length;
    assert.doesNotThrow(() => blocked.api.trackSeoLead('test'));
    assert.equal(blocked.commands().length, count);
    for (const hostname of ['localhost', 'preview.vercel.app', 'contact.fiduconnect.ch', 'crm.fiduconnect.ch']) {
        const f = fixture({ hostname });
        f.api.saveAnalyticsChoice(true);
        f.api.trackSeoPage('/');
        assert.equal(f.scripts.length, 0);
    }
});

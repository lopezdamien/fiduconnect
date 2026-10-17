import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ts from 'typescript';

const require = createRequire(import.meta.url);

// Run the real consent component's handlers with an isolated hook harness.
// No SDK, network, browser profile or real visitor preference is touched.
function fixture({ choice = null, storageWorks = true } = {}) {
    const slots = [];
    const effects = [];
    const saved = [];
    let cursor = 0;
    let firstRender = true;
    const consent = {
        CONSENT_KEY: 'test', CONSENT_OPEN_EVENT: 'open-test',
        readAdsConsent: () => choice,
        syncAdsConsent: () => {},
        saveAdsConsent: value => { saved.push(value); return storageWorks; },
    };
    const hooks = {
        ...React,
        useState(initial) {
            const index = cursor++;
            if (!(index in slots)) slots[index] = initial;
            return [slots[index], value => { slots[index] = value; }];
        },
        useRef(initial) {
            const index = cursor++;
            if (!(index in slots)) slots[index] = { current: initial };
            return slots[index];
        },
        useEffect(fn) { if (firstRender) effects.push(fn); },
    };
    const m = { exports: {} };
    const source = readFileSync(new URL('../components/AdsConsent.tsx', import.meta.url), 'utf8');
    const code = ts.transpileModule(source, { compilerOptions: {
        module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022,
    } }).outputText;
    runInNewContext(code, {
        module: m, exports: m.exports,
        require: name => name === 'react' ? hooks : name === '@/lib/google-ads' ? consent
            : name === '@/lib/openai-ads' ? { OPENAI_ADS_ENABLED: true } : require(name),
        window: { addEventListener() {}, removeEventListener() {}, setInterval() {}, clearInterval() {} },
        document: { activeElement: null },
    });
    function render() { cursor = 0; return m.exports.AdsConsent(); }
    render();
    firstRender = false;
    effects.forEach(fn => fn());
    function find(predicate, node = render()) {
        if (!React.isValidElement(node)) return undefined;
        if (predicate(node)) return node;
        for (const child of React.Children.toArray(node.props.children)) {
            const found = find(predicate, child);
            if (found) return found;
        }
    }
    function button(label) { return find(node => node.type === 'button' && node.props.children === label); }
    return { render, button, find, saved, html: () => renderToStaticMarkup(render()) };
}

test('first cookie layer is plain-language with equally available Accept, Refuse and Customize', () => {
    const f = fixture();
    const html = f.html();
    assert.match(html, /Vos préférences de cookies/);
    assert.match(html, /mesurer l’efficacité de nos publicités/);
    assert.doesNotMatch(html, /Google|OpenAI|ChatGPT|hachées/);
    for (const name of ['Accepter', 'Refuser', 'Personnaliser']) assert.ok(f.button(name));
    assert.equal(f.find(node => node.type === 'input'), undefined);
    assert.deepEqual(f.saved, []);
});

test('Customize reveals recipients and advanced matching before consent, unchecked by default', () => {
    const f = fixture();
    f.button('Personnaliser').props.onClick();
    assert.equal(f.button('Réduire').props['aria-expanded'], true);
    const html = f.html();
    for (const text of ['Google Ads', 'OpenAI (ChatGPT Ads)', 'empreintes hachées', 'ne sont pas anonymes', 'États-Unis']) {
        assert.ok(html.includes(text), text);
    }
    assert.equal(f.find(node => node.type === 'input').props.checked, false);
    assert.deepEqual(f.saved, []);
    f.button('Enregistrer mes choix').props.onClick();
    assert.deepEqual(f.saved, [false]);
    assert.equal(f.render(), null);
});

test('Customize can save measurement opt-in, and global refusal never depends on the checkbox', () => {
    for (const refuse of [false, true]) {
        const f = fixture();
        f.button('Personnaliser').props.onClick();
        f.find(node => node.type === 'input').props.onChange({ target: { checked: true } });
        f.button(refuse ? 'Refuser' : 'Enregistrer mes choix').props.onClick();
        assert.deepEqual(f.saved, [!refuse]);
        assert.equal(f.render(), null);
    }
});

test('Accept saves a choice; failed storage leaves the explanation and no-tracking exit available', () => {
    const f = fixture();
    f.button('Accepter').props.onClick();
    assert.deepEqual(f.saved, [true]);
    assert.equal(f.render(), null);
    const failed = fixture({ storageWorks: false });
    failed.button('Accepter').props.onClick();
    assert.match(failed.html(), /La mesure reste désactivée/);
    failed.button('Fermer sans suivi').props.onClick();
    assert.equal(failed.render(), null);
});

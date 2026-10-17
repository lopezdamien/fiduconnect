// Run against `next start --port 3100`. Local GET requests only: no forms,
// secrets, live hosting changes or external redirects are followed.
import assert from 'node:assert/strict';
import test from 'node:test';
import { request } from 'node:http';

function localGet(host, path) {
    return new Promise((resolve, reject) => {
        const req = request({ hostname: '127.0.0.1', port: 3100, path, headers: { Host: host } }, res => {
            res.resume();
            res.on('end', () => resolve({ status: res.statusCode, location: res.headers.location }));
        });
        req.setTimeout(5000, () => req.destroy(new Error('Local SEO test server timed out')));
        req.on('error', reject);
        req.end();
    });
}

test('SEO apex redirects preserve deep paths and query parameters', async () => {
    for (const [path, location] of [
        ['/', 'https://www.fiduconnect.ch'],
        ['/services/comptabilite?utm_source=audit&test=1', 'https://www.fiduconnect.ch/services/comptabilite?utm_source=audit&test=1'],
        ['/ressources/changer-fiduciaire-geneve', 'https://www.fiduconnect.ch/ressources/changer-fiduciaire-geneve'],
    ]) assert.deepEqual(await localGet('fiduconnect.ch', path), { status: 308, location });
});

test('canonical www, SEA, local and preview hosts do not match the apex rule', async () => {
    for (const host of ['www.fiduconnect.ch', 'contact.fiduconnect.ch', 'localhost', 'preview.vercel.app', 'fiduconnect.ch.example.org', 'fiduconnectXch']) {
        assert.deepEqual(await localGet(host, '/services/comptabilite'), { status: 200, location: undefined }, host);
    }
});

test('historical redirects and genuine 404s still work', async () => {
    assert.deepEqual(await localGet('www.fiduconnect.ch', '/changer-fiduciaire?test=1'), { status: 308, location: '/services/changer-fiduciaire?test=1' });
    assert.deepEqual(await localGet('www.fiduconnect.ch', '/diagnostic'), { status: 308, location: '/contact' });
    assert.equal((await localGet('www.fiduconnect.ch', '/page-inexistante-seo')).status, 404);
});

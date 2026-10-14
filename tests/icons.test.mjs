import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import sharp from 'sharp';

const appDirectory = new URL('../app/', import.meta.url);

async function expectedPixels(size) {
    return sharp(await readFile(new URL('icon.svg', appDirectory)), { density: 288 })
        .resize(size, size).flatten({ background: '#f5f1e9' }).raw().toBuffer();
}

test('Safari and Apple raster icons use the real FIDUCONNECT vector mark', async () => {
    for (const [name, size] of [['icon1.png', 32], ['apple-icon.png', 180]]) {
        const file = await readFile(new URL(name, appDirectory));
        const metadata = await sharp(file).metadata();
        assert.equal(metadata.format, 'png');
        assert.equal(metadata.width, size);
        assert.equal(metadata.height, size);
        assert.equal(metadata.hasAlpha, false);
        assert.deepEqual(await sharp(file).raw().toBuffer(), await expectedPixels(size));
    }
});

test('favicon fallback contains FIDUCONNECT at every declared size', async () => {
    const icon = await readFile(new URL('favicon.ico', appDirectory));
    assert.equal(icon.readUInt16LE(0), 0);
    assert.equal(icon.readUInt16LE(2), 1);
    assert.equal(icon.readUInt16LE(4), 3);
    for (const [index, size] of [16, 32, 48].entries()) {
        const entry = 6 + index * 16;
        assert.equal(icon[entry], size);
        assert.equal(icon[entry + 1], size);
        const length = icon.readUInt32LE(entry + 8);
        const offset = icon.readUInt32LE(entry + 12);
        assert.ok(offset + length <= icon.length);
        const frame = icon.subarray(offset, offset + length);
        assert.deepEqual(await sharp(frame).raw().toBuffer(), await expectedPixels(size));
    }
});

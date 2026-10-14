import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

// Raster exports of our existing vector mark, not a new logo design.
const appDirectory = new URL('../app/', import.meta.url);
const source = await readFile(new URL('icon.svg', appDirectory));
const background = '#f5f1e9';
const raster = size => sharp(source, { density: 288 })
    .resize(size, size)
    .flatten({ background })
    .png()
    .toBuffer();

const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(raster));
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2); // ICO image type.
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
for (const [index, size] of sizes.entries()) {
    const entry = 6 + index * 16;
    header[entry] = size;
    header[entry + 1] = size;
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(images[index].length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += images[index].length;
}

await writeFile(new URL('favicon.ico', appDirectory), Buffer.concat([header, ...images]));
// The new PNG URL also avoids relying only on an old cached /favicon.ico.
await writeFile(new URL('icon1.png', appDirectory), images[1]);
await writeFile(new URL('apple-icon.png', appDirectory), await raster(180));
console.log('FIDUCONNECT icons exported: favicon.ico, icon1.png, apple-icon.png.');

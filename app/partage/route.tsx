import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const dynamic = 'force-static';

export async function GET() {
    const logo = await readFile(join(process.cwd(), 'public/brand/fiduconnect-color.svg'));
    return new ImageResponse(
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', padding: '70px 80px', background: '#f7f4ed', color: '#292b25', justifyContent: 'space-between' }}>
            {/* The existing vector wordmark is rendered into the sharing image. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={'data:image/svg+xml;base64,' + logo.toString('base64')} width={340} height={49} alt="FIDUCONNECT" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ fontSize: 68, lineHeight: 1.1, maxWidth: 960 }}>Une fiduciaire adaptée à votre entreprise à Genève.</div>
                <div style={{ fontSize: 27, color: '#60574c' }}>Un besoin compris. Une orientation plus claire.</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, borderTop: '1px solid #cbc4b6', paddingTop: 24 }}>
                <span>Orientation gratuite · Sans engagement</span><span>fiduconnect.ch</span>
            </div>
        </div>,
        { width: 1200, height: 630 },
    );
}

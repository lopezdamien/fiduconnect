import { timingSafeEqual } from 'node:crypto';
import { crmIntakeEnabled } from '@/lib/crm-intake';
import { processCrmNotifications } from '@/lib/crm-notifications';

export const runtime = 'nodejs';
const headers = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' };

export async function POST(request: Request) {
    const secret = process.env.CRM_NOTIFICATION_SECRET;
    const authorization = request.headers.get('authorization') || '';
    const expected = `Bearer ${secret || ''}`;
    if (!secret || secret.length < 32 || authorization.length > 1024
        || Buffer.byteLength(authorization) !== Buffer.byteLength(expected)
        || !timingSafeEqual(Buffer.from(authorization), Buffer.from(expected))) {
        return Response.json({ ok: false }, { status: 401, headers });
    }
    if (!crmIntakeEnabled()) return Response.json({ ok: false }, { status: 503, headers });
    try {
        const result = await processCrmNotifications();
        return Response.json({ ok: true, ...result }, { headers });
    } catch {
        console.error('crm.notification_worker_failed');
        return Response.json({ ok: false }, { status: 503, headers });
    }
}

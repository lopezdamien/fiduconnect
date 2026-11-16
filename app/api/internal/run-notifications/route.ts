import { timingSafeEqual } from 'node:crypto';
import { crmIntakeEnabled } from '@/lib/crm-intake';
import { processCrmNotifications } from '@/lib/crm-notifications';

// Déclenché uniquement par le Cron Vercel (voir vercel.json). Non invocable
// publiquement : Vercel envoie « Authorization: Bearer <CRON_SECRET> ».
// Remplace la fonction planifiée Netlify crm-notifications.mts.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const headers = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' };

function authorized(request: Request): boolean {
    const secret = process.env.CRON_SECRET;
    if (!secret || secret.length < 16) return false;
    const authorization = request.headers.get('authorization') || '';
    const expected = `Bearer ${secret}`;
    if (authorization.length > 1024
        || Buffer.byteLength(authorization) !== Buffer.byteLength(expected)) {
        return false;
    }
    return timingSafeEqual(Buffer.from(authorization), Buffer.from(expected));
}

export async function GET(request: Request) {
    if (!authorized(request)) {
        return Response.json({ ok: false }, { status: 401, headers });
    }
    if (!crmIntakeEnabled()) {
        return Response.json({ ok: false }, { status: 503, headers });
    }
    try {
        const result = await processCrmNotifications();
        console.log('crm.notifications_processed', result.sent, result.pending);
        return Response.json({ ok: true, ...result }, { headers });
    } catch {
        console.error('crm.notification_retry_failed');
        return Response.json({ ok: false }, { status: 503, headers });
    }
}

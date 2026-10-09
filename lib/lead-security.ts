import { createHmac, randomBytes } from 'node:crypto';

// Fail closed in production until the account-level protections and privacy
// checklist have been validated. Local development remains usable.
export const PRODUCTION_LEADS_ENABLED = false;
export const MAX_BODY_BYTES = 16 * 1024;

export function hasAllowedLeadOrigin(request: Request): boolean {
    const origin = request.headers.get('origin');
    if (!origin) return false;
    try {
        const originUrl = new URL(origin);
        const requestUrl = new URL(request.url);
        // NextURL normalizes local IPs to localhost. The HTTP Host preserves
        // the actual browser-facing host; do not trust arbitrary forwarded hosts.
        const host = request.headers.get('host') ?? requestUrl.host;
        return originUrl.origin === origin
            && originUrl.protocol === requestUrl.protocol
            && originUrl.host === host.toLowerCase();
    } catch {
        return false;
    }
}

export class LeadRequestError extends Error {
    constructor(public status: number, message: string) {
        super(message);
    }
}

export async function readLeadBody(request: Request): Promise<unknown> {
    const contentType = request.headers.get('content-type')?.split(';')[0].trim().toLowerCase();
    if (contentType !== 'application/json') {
        throw new LeadRequestError(415, 'Le formulaire doit être envoyé au format JSON.');
    }
    const declaredLength = request.headers.get('content-length');
    if (declaredLength !== null) {
        const size = Number(declaredLength);
        if (!Number.isSafeInteger(size) || size < 0) {
            throw new LeadRequestError(400, 'La demande est invalide.');
        }
        if (size > MAX_BODY_BYTES) {
            throw new LeadRequestError(413, 'Votre demande est trop longue. Merci de la raccourcir.');
        }
    }
    if (!request.body) throw new LeadRequestError(400, 'La demande est vide.');

    const reader = request.body.getReader();
    const chunks: Uint8Array[] = [];
    let size = 0;
    let completed = false;
    const deadline = Date.now() + 5000;
    try {
        while (true) {
            let timer: ReturnType<typeof setTimeout> | undefined;
            const timeout = new Promise<never>((_, reject) => {
                timer = setTimeout(() => reject(new LeadRequestError(408, 'L’envoi a pris trop de temps. Merci de réessayer.')), Math.max(0, deadline - Date.now()));
            });
            const chunk = await Promise.race([reader.read(), timeout]).finally(() => clearTimeout(timer));
            if (chunk.done) {
                completed = true;
                break;
            }
            size += chunk.value.byteLength;
            if (size > MAX_BODY_BYTES) {
                throw new LeadRequestError(413, 'Votre demande est trop longue. Merci de la raccourcir.');
            }
            chunks.push(chunk.value);
        }
        const bytes = new Uint8Array(size);
        let offset = 0;
        for (const chunk of chunks) {
            bytes.set(chunk, offset);
            offset += chunk.byteLength;
        }
        try {
            return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes));
        } catch {
            throw new LeadRequestError(400, 'La demande est invalide.');
        }
    } finally {
        if (!completed) void reader.cancel().catch(() => undefined);
        reader.releaseLock();
    }
}

/** Best-effort per-process guard, NOT a distributed/serverless rate limiter. */
export function createLeadLimiter() {
    const salt = randomBytes(32);
    const counts = new Map<string, number>();
    const windowMs = 15 * 60 * 1000;
    let expiresAt = 0;
    let total = 0;

    return {
        consume(email: string, now = Date.now()): number | null {
            if (now >= expiresAt) {
                counts.clear();
                total = 0;
                expiresAt = now + windowMs;
            }
            // No raw e-mail or IP address is kept in the limiter.
            const key = createHmac('sha256', salt).update(email.toLowerCase()).digest('hex');
            const count = counts.get(key) ?? 0;
            if (count >= 3 || total >= 30) return Math.max(1, Math.ceil((expiresAt - now) / 1000));
            counts.set(key, count + 1);
            total += 1;
            return null;
        },
    };
}

import { getLeadErrorMessage } from './lead-response';

const receiptKey = 'fiduconnect.seo-receipt';
const receiptDuration = 30 * 60 * 1000;
let memoryReceipt = 0;
const listeners = new Set<() => void>();

// Only an expiry timestamp is kept for the confirmation screen. Never keep
// names, e-mail, phone, company or message in browser storage or the URL.
export function hasSeoReceipt(): boolean {
    if (typeof window === 'undefined') return false;
    let expiry = memoryReceipt;
    try { expiry = Math.max(expiry, Number(window.sessionStorage.getItem(receiptKey)) || 0); } catch {}
    const now = Date.now();
    return expiry > now && expiry <= now + receiptDuration;
}

export function subscribeSeoReceipt(listener: () => void): () => void {
    listeners.add(listener);
    return () => { listeners.delete(listener); };
}

export function serverSeoReceipt(): boolean { return false; }

function updateReceipt(expiry: number) {
    memoryReceipt = expiry;
    try {
        if (expiry) window.sessionStorage.setItem(receiptKey, String(expiry));
        else window.sessionStorage.removeItem(receiptKey);
    } catch {
        // A blocked sessionStorage must not turn an accepted request into an error.
    }
    listeners.forEach(listener => listener());
}

export async function submitSeoLead(payload: Record<string, unknown>, request: typeof fetch = fetch): Promise<void> {
    updateReceipt(0);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    let response: Response;
    try {
        response = await request('/api/lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            signal: controller.signal,
        });
    } catch {
        throw new Error('L’envoi n’a pas pu être confirmé. Votre saisie est conservée. En cas de doute, écrivez-nous avant de renvoyer votre demande.');
    } finally {
        clearTimeout(timer);
    }
    if (!response.ok) throw new Error(await getLeadErrorMessage(response));
    let result: unknown;
    try { result = await response.json(); } catch {
        throw new Error('L’envoi n’a pas pu être confirmé. Votre saisie est conservée.');
    }
    if (!result || typeof result !== 'object' || !('ok' in result) || result.ok !== true
        || (typeof payload.website === 'string' && payload.website.trim())) {
        throw new Error('L’envoi n’a pas pu être confirmé. Votre saisie est conservée.');
    }
    updateReceipt(Date.now() + receiptDuration);
}

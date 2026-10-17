// Publication authorized on 17 October 2026. Each visitor must still grant
// measurement consent. A Pixel ID is public, not an API key.
export const OPENAI_ADS_ENABLED = true;
export const OPENAI_PIXEL_ID = '6D5tyKYCNSbDkUQaLHpVbs';
const SCRIPT_ID = 'fiduconnect-openai-ads';

type Pixel = ((...args: unknown[]) => void) & { q?: unknown[][] };
declare global {
    interface Window { oaiq?: Pixel }
}

let started = false;
let failed = false;

function allowedHost() {
    return ['contact.fiduconnect.ch', 'localhost', '127.0.0.1'].includes(window.location.hostname);
}

export function startOpenAiTracking(hasConsent: () => boolean) {
    if (!OPENAI_ADS_ENABLED || typeof window === 'undefined' || !allowedHost() || !hasConsent() || started) return;
    try {
        // Do not take over a pixel installed by another integration.
        if (window.oaiq) return;
        const queue: Pixel = (...args) => { queue.q?.push(args); };
        queue.q = [];
        window.oaiq = queue;
        started = true;
        queue('consent', false);
        queue('init', { pixelId: OPENAI_PIXEL_ID, debug: false });
        queue('consent', true);
        const script = document.createElement('script');
        script.id = SCRIPT_ID;
        script.async = true;
        script.src = 'https://bzrcdn.openai.com/sdk/oaiq.min.js';
        script.onerror = () => {
            failed = true;
            if (queue.q) queue.q.length = 0;
            window.oaiq = () => {};
        };
        document.head.appendChild(script);
    } catch { failed = true; /* Measurement must not break the form. */ }
}

// Returns whether the document must be replaced to stop an executed SDK.
// The shared consent controller defers that replacement during a submission.
export function stopOpenAiTracking() {
    if (typeof window === 'undefined' || !started) return false;
    failed = true;
    try {
        if (window.oaiq?.q) window.oaiq.q.length = 0;
        window.oaiq?.('consent', false);
        document.getElementById(SCRIPT_ID)?.remove();
        for (const name of ['__oppref', '__obref']) {
            for (const domain of ['', window.location.hostname, 'fiduconnect.ch']) {
                document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ''}`;
            }
        }
    } catch { /* The consent controller still replaces the document. */ }
    return true;
}

export function measureOpenAiLeadSuccess(honeypot: unknown, hasConsent: () => boolean) {
    if (!OPENAI_ADS_ENABLED || (honeypot != null && (typeof honeypot !== 'string' || honeypot.trim()))) return;
    try {
        startOpenAiTracking(hasConsent);
        if (!started || failed || !hasConsent() || !window.oaiq) return;
        // Called only by the confirmed-success path, never on /merci mount.
        // No form data is explicitly passed. Automatic advanced matching is a
        // separate SDK feature disclosed in the revised consent/privacy copy.
        window.oaiq('measure', 'lead_created', { type: 'customer_action' }, {
            event_id: window.crypto.randomUUID(), opt_out: true,
        });
    } catch { /* A blocked SDK must never prevent the confirmation page. */ }
}

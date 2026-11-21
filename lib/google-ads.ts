import { OPENAI_ADS_ENABLED, startOpenAiTracking, stopOpenAiTracking, measureOpenAiLeadSuccess } from '@/lib/openai-ads';

// Google Ads: no Analytics destination, user-provided data or remarketing.
export const ADS_ID = 'AW-17635546413';
export const ADS_CONVERSION = `${ADS_ID}/BQ99CODZ8pwdEK2qpNlB`;
// Existing connected destination discovered by the real-tag network test.
// Disable it only on this site, without altering shared Google account settings.
export const LEGACY_ANALYTICS_ID = 'G-TRG36EY6PG';
export const CONSENT_KEY = 'fiduconnect.ads-consent';
// Version 1 covered Google only. Never reuse it for OpenAI measurement.
export const CONSENT_VERSION = OPENAI_ADS_ENABLED ? 2 : 1;
export const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000;
export const CONSENT_OPEN_EVENT = 'fiduconnect:open-cookies';
export const CONSENT_CHANGE_EVENT = 'fiduconnect:consent-change';
const SCRIPT_ID = 'fiduconnect-google-ads';

type Consent = { version: number; accepted: boolean; savedAt: number };
type Gtag = (...args: unknown[]) => void;
declare global {
    interface Window { dataLayer?: unknown[]; gtag?: Gtag; 'ga-disable-G-TRG36EY6PG'?: boolean }
}

let blocked = false;
// tagStarted: consent was granted and the gtag consent update was sent.
let tagStarted = false;
// consentBootstrapped: gtag script was added to the DOM in denied/cookieless mode.
let consentBootstrapped = false;
let tagFailed = false;
let submissions = 0;
let reloadNeeded = false;
const pendingEvents = new Set<() => void>();

export function readAdsConsent(): Consent | null {
    if (typeof window === 'undefined') return null;
    try {
        const raw = window.localStorage.getItem(CONSENT_KEY);
        const value = JSON.parse(raw || 'null');
        const age = Date.now() - value?.savedAt;
        if (value?.version !== CONSENT_VERSION || typeof value.accepted !== 'boolean'
            || !Number.isFinite(value.savedAt) || age < 0 || age >= CONSENT_MAX_AGE) return null;
        // A readable but unwritable stored acceptance must not reactivate after
        // a failed withdrawal and reload. Fail closed if choices cannot change.
        window.localStorage.setItem(CONSENT_KEY, raw!);
        return value;
    } catch { return null; }
}

export function hasAdsConsent() {
    return !blocked && readAdsConsent()?.accepted === true;
}

function allowedHost() {
    return ['contact.fiduconnect.ch', 'localhost', '127.0.0.1'].includes(window.location.hostname);
}

function clearAdsCookies() {
    // Only first-party measurement cookies accessible on this landing host.
    for (const item of document.cookie.split(';')) {
        const name = item.trim().split('=')[0];
        if (!/^_gcl_[\w-]+$/.test(name)) continue;
        for (const domain of ['', window.location.hostname]) {
            document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ''}`;
        }
    }
}

function measurementUrl() {
    const url = new URL(window.location.href);
    const safe = new URL(url.pathname, url.origin);
    for (const key of ['gclid', 'gclsrc', 'gbraid', 'wbraid']) {
        const value = url.searchParams.get(key);
        if (value && /^[\w-]{1,256}$/.test(value)) safe.searchParams.set(key, value);
    }
    return safe.href;
}

/**
 * Bootstrap the Google tag in denied/cookieless mode — Consent Mode v2.
 *
 * Called on every page load regardless of consent choice so that Google can
 * perform conversion modelling for visitors who have not (yet) consented.
 * No cookies are set while consent remains denied; only an anonymous cookieless
 * ping is sent. The function is idempotent: safe to call multiple times.
 */
export function bootstrapConsentMode() {
    if (typeof window === 'undefined' || !allowedHost() || consentBootstrapped) return;
    consentBootstrapped = true;
    window['ga-disable-G-TRG36EY6PG'] = true;
    window.dataLayer = window.dataLayer || [];
    // Match Google's official queue format (IArguments, not a dataLayer event array).
    // eslint-disable-next-line prefer-rest-params
    window.gtag = function () { window.dataLayer?.push(arguments); };
    // Set consent defaults BEFORE the script loads — required for Consent Mode v2.
    // wait_for_update gives the consent banner time to run before the first hit.
    window.gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500,
    });
    window.gtag('set', 'ads_data_redaction', true);
    window.gtag('set', 'allow_ad_personalization_signals', false);
    window.gtag('set', 'allow_google_signals', false);
    window.gtag('js', new Date());
    window.gtag('config', ADS_ID, {
        send_page_view: false,
        allow_ad_personalization_signals: false,
        // Keep measurement cookies on the SEA subdomain, not the future SEO site.
        cookie_domain: window.location.hostname,
        cookie_expires: 90 * 24 * 60 * 60,
        cookie_update: false,
        page_location: measurementUrl(), page_referrer: '',
    });
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
    script.onerror = () => {
        tagFailed = true;
        window.dataLayer = [];
        window.gtag = () => {};
        for (const finish of pendingEvents) finish();
    };
    document.head.appendChild(script);
}

export function stopAdsTracking() {
    blocked = true;
    const openAiStarted = stopOpenAiTracking();
    for (const finish of pendingEvents) finish();
    if (!allowedHost()) return;
    clearAdsCookies();
    if (tagStarted || openAiStarted) {
        // An already executed external script cannot be unloaded by removing its
        // element. Discard queued conversions and replace the document instead.
        window.dataLayer = [];
        window.gtag = () => {};
        document.getElementById(SCRIPT_ID)?.remove();
        reloadNeeded = true;
        // Never interrupt the email request already in progress.
        if (submissions === 0) window.location.reload();
    }
}

export function saveAdsConsent(accepted: boolean): boolean {
    let saved = true;
    try {
        window.localStorage.setItem(CONSENT_KEY, JSON.stringify({
            version: CONSENT_VERSION, accepted, savedAt: Date.now(),
        }));
    } catch { saved = false; }
    if (accepted && saved) { blocked = false; startAdsTracking(); }
    else stopAdsTracking();
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    return saved;
}

/**
 * Upgrade consent from denied to granted when the user accepts.
 * The gtag script is already loaded by bootstrapConsentMode(); this only
 * sends the consent update and records that cookies may now be set.
 */
export function startAdsTracking() {
    // Independent of Google SDK loading/failure, but shares the fresh consent.
    startOpenAiTracking(hasAdsConsent);
    if (typeof window === 'undefined' || !allowedHost() || !hasAdsConsent() || tagStarted) return;
    tagStarted = true;
    // Normally bootstrapped already by syncAdsConsent(); guard for edge cases.
    if (!consentBootstrapped) bootstrapConsentMode();
    // Upgrade consent: cookies and user data are now allowed.
    window.gtag?.('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
    });
}

export function beginLeadSubmission() { submissions += 1; }
export function endLeadSubmission(success: boolean) {
    submissions = Math.max(0, submissions - 1);
    if (reloadNeeded && submissions === 0) {
        // Preserve a successful email submission even if consent changed mid-send.
        // A hard navigation deliberately discards the already loaded Google tag.
        // eslint-disable-next-line @next/next/no-location-assign-relative-destination
        if (success) window.location.assign('/merci');
        else window.location.reload();
        return true;
    }
    return false;
}

export function syncAdsConsent() {
    // Bootstrap Consent Mode v2 on every page load — always, regardless of choice.
    // The tag runs in cookieless/denied mode until a consent update is explicitly sent.
    bootstrapConsentMode();
    if (readAdsConsent()?.accepted === true) {
        blocked = false;
        startAdsTracking();
    } else stopAdsTracking();
}

export async function measureLeadSuccess(honeypot: unknown) {
    // Reject spam submissions (non-empty honeypot field).
    if (honeypot != null && (typeof honeypot !== 'string' || honeypot.trim())) return;
    // OpenAI pixel still requires explicit consent — it does not support Consent Mode.
    measureOpenAiLeadSuccess(honeypot, hasAdsConsent);
    // Google conversion fires regardless of consent level: Consent Mode v2 sends a
    // cookieless ping for denied/unknown consent so Google can model conversions.
    // No personal data is transmitted when consent is denied.
    try {
        if (!consentBootstrapped) bootstrapConsentMode();
        if (!consentBootstrapped || tagFailed || !window.gtag) return;
        // Random per submission, never derived from a name, email or phone.
        const transactionId = window.crypto.randomUUID();
        await new Promise<void>(resolve => {
            let finished = false;
            const finish = () => {
                if (finished) return;
                finished = true;
                clearTimeout(timer);
                pendingEvents.delete(finish);
                resolve();
            };
            const timer = setTimeout(finish, 1000);
            pendingEvents.add(finish);
            window.gtag!('event', 'conversion', {
                send_to: ADS_CONVERSION, value: 0, currency: 'CHF',
                transaction_id: transactionId,
                page_location: measurementUrl(), page_referrer: '',
                event_callback: finish, event_timeout: 1000,
            });
        });
    } catch { /* Advertising failures must never prevent the thank-you page. */ }
}

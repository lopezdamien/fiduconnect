import { SEO_INDEXABLE_PATHS } from './seo-release';

// Public GA4 stream for www.fiduconnect.ch only. Never reuse the SEA Ads tag.
export const SEO_MEASUREMENT_ID = 'G-MQMDRTXM65';
export const ANALYTICS_CHOICE_KEY = 'fiduconnect.seo-analytics-consent';
export const ANALYTICS_CHOICE_EVENT = 'fiduconnect:seo-analytics-choice';
export const ANALYTICS_CHOICE_DURATION = 180 * 24 * 60 * 60 * 1000;
type Choice = { version: 1; accepted: boolean; expires: number };
type AnalyticsWindow = Window & { dataLayer?: unknown[]; 'ga-disable-G-MQMDRTXM65'?: boolean };
let memoryChoice: Choice | null = null;
let started = false;
let failed = false;
let lastPage = '';
let previousPage = '';
const leads = new Set<string>();
const measuredPaths = new Set([...SEO_INDEXABLE_PATHS, '/merci', '/cookies', '/confidentialite', '/mentions-legales']);

export function readAnalyticsChoice(): Choice | null {
    if (typeof window === 'undefined') return null;
    try {
        const value = window.localStorage.getItem(ANALYTICS_CHOICE_KEY);
        memoryChoice = null;
        if (value) { try { memoryChoice = JSON.parse(value); } catch {} }
    } catch { /* Memory choice still works if storage is blocked. */ }
    const choice = memoryChoice;
    return choice?.version === 1 && typeof choice.accepted === 'boolean'
        && Number.isFinite(choice.expires) && choice.expires > Date.now()
        && choice.expires <= Date.now() + ANALYTICS_CHOICE_DURATION ? choice : null;
}

function clearAnalyticsCookies() {
    // Remove only this site's GA cookies, including legacy parent-domain ones.
    for (const part of document.cookie.split(';')) {
        const name = part.trim().split('=')[0];
        if (name !== '_ga' && !name.startsWith('_ga_')) continue;
        for (const domain of ['', '; Domain=www.fiduconnect.ch', '; Domain=fiduconnect.ch']) {
            document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain}`;
        }
    }
}

export function stopSeoAnalytics() {
    if (typeof window === 'undefined') return;
    (window as AnalyticsWindow)['ga-disable-G-MQMDRTXM65'] = true;
    lastPage = '';
    clearAnalyticsCookies();
}

export function saveAnalyticsChoice(accepted: boolean) {
    memoryChoice = { version: 1, accepted, expires: Date.now() + ANALYTICS_CHOICE_DURATION };
    try { window.localStorage.setItem(ANALYTICS_CHOICE_KEY, JSON.stringify(memoryChoice)); } catch {}
    if (!accepted) stopSeoAnalytics();
    window.dispatchEvent(new Event(ANALYTICS_CHOICE_EVENT));
}

function permitted() {
    return typeof window !== 'undefined' && window.location.hostname === 'www.fiduconnect.ch'
        && readAnalyticsChoice()?.accepted === true && !failed;
}

// Query strings, hash fragments and free-text paths never enter measurement.
export function analyticsLocation(path: string) {
    const pathname = path.split(/[?#]/)[0];
    return 'https://www.fiduconnect.ch' + (measuredPaths.has(pathname) ? pathname : '/404');
}

function initialReferrer() {
    try {
        const referrer = new URL(document.referrer);
        return referrer.hostname === 'www.fiduconnect.ch' ? analyticsLocation(referrer.pathname) : referrer.origin + '/';
    } catch { return ''; }
}

function command(..._args: unknown[]) {
    // gtag's dataLayer contract uses the arguments object, not a normal array.
    (window as AnalyticsWindow).dataLayer?.push(arguments);
}

function start() {
    if (!permitted()) return false;
    const target = window as AnalyticsWindow;
    target['ga-disable-G-MQMDRTXM65'] = false;
    if (started) return true;
    started = true;
    target.dataLayer ??= [];
    command('consent', 'default', {
        analytics_storage: 'granted', ad_storage: 'denied',
        ad_user_data: 'denied', ad_personalization: 'denied',
    });
    command('set', 'allow_google_signals', false);
    command('set', 'allow_ad_personalization_signals', false);
    command('set', 'ads_data_redaction', true);
    command('set', 'page_location', analyticsLocation(window.location.pathname));
    command('set', 'page_referrer', initialReferrer());
    command('js', new Date());
    command('config', SEO_MEASUREMENT_ID, {
        send_page_view: false, cookie_domain: 'www.fiduconnect.ch',
        cookie_expires: ANALYTICS_CHOICE_DURATION / 1000, cookie_update: false,
        allow_google_signals: false, allow_ad_personalization_signals: false,
    });
    const script = document.createElement('script');
    script.id = 'seo-analytics-tag';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${SEO_MEASUREMENT_ID}`;
    script.onerror = () => { failed = true; stopSeoAnalytics(); };
    script.onload = () => { if (!readAnalyticsChoice()?.accepted) stopSeoAnalytics(); };
    document.head.appendChild(script);
    return true;
}

export function trackSeoPage(path: string) {
    try {
        if (!start()) return;
        const page = analyticsLocation(path);
        if (page === lastPage) return;
        previousPage = lastPage || initialReferrer();
        lastPage = page;
        command('set', 'page_location', page);
        command('set', 'page_referrer', previousPage);
        command('event', 'page_view', { send_to: SEO_MEASUREMENT_ID, page_location: page, page_referrer: previousPage, page_title: document.title });
    } catch { /* Analytics must never affect navigation or form submission. */ }
}

export function trackSeoAction(name: 'form_start' | 'contact_click') {
    try {
        if (!start()) return;
        command('event', name, { send_to: SEO_MEASUREMENT_ID, page_location: analyticsLocation(window.location.pathname) });
    } catch {}
}

export function trackSeoLead(submissionId: string) {
    try {
        // The ID is used only for in-memory deduplication. Never send it to Google.
        if (!submissionId || leads.has(submissionId) || !start()) return;
        if (leads.size >= 100) leads.clear();
        leads.add(submissionId);
        command('event', 'generate_lead', { send_to: SEO_MEASUREMENT_ID, page_location: analyticsLocation(window.location.pathname) });
    } catch {}
}

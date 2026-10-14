'use client';

import { useEffect, useRef, useState } from 'react';
import {
    CONSENT_KEY, CONSENT_OPEN_EVENT,
    readAdsConsent, saveAdsConsent, syncAdsConsent,
} from '@/lib/google-ads';

export function CookiePreferencesButton({ className = '' }: { className?: string }) {
    return <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}>Cookies</button>;
}

export function AdsConsent() {
    const [open, setOpen] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [storageError, setStorageError] = useState(false);
    const panel = useRef<HTMLElement>(null);
    const previousFocus = useRef<HTMLElement | null>(null);
    const focusRequested = useRef(false);

    useEffect(() => {
        if (open && focusRequested.current) {
            panel.current?.querySelector<HTMLButtonElement>('button')?.focus();
            focusRequested.current = false;
        }
    }, [open]);

    useEffect(() => {
        const sync = () => {
            const choice = readAdsConsent();
            setAccepted(choice?.accepted === true);
            setOpen(choice === null);
            syncAdsConsent();
        };
        const show = () => {
            previousFocus.current = document.activeElement as HTMLElement;
            setAccepted(readAdsConsent()?.accepted === true);
            setStorageError(false);
            focusRequested.current = true;
            setOpen(true);
            panel.current?.querySelector<HTMLButtonElement>('button')?.focus();
        };
        const storage = (event: StorageEvent) => {
            if (event.key === CONSENT_KEY || event.key === null) sync();
        };
        sync();
        window.addEventListener(CONSENT_OPEN_EVENT, show);
        window.addEventListener('storage', storage);
        window.addEventListener('pageshow', sync);
        const expire = window.setInterval(() => {
            if (readAdsConsent() === null) sync();
        }, 60_000);
        return () => {
            window.removeEventListener(CONSENT_OPEN_EVENT, show);
            window.removeEventListener('storage', storage);
            window.removeEventListener('pageshow', sync);
            window.clearInterval(expire);
        };
    }, []);

    function choose(value: boolean) {
        const saved = saveAdsConsent(value);
        setAccepted(value && saved);
        setStorageError(!saved);
        setOpen(!saved);
        if (saved) previousFocus.current?.focus();
    }

    // No modal overlay: the form stays usable without making a choice.
    if (!open) return null;
    return (
        <section ref={panel} aria-labelledby="ads-consent-title" className="ads-consent">
            <div className="ads-consent-copy">
                <h2 id="ads-consent-title">Mesure de nos publicités</h2>
                <p>Avec votre accord, Google Ads utilise des cookies et des informations techniques pour mesurer les demandes issues de nos publicités. Accepter ou refuser ne change pas l’utilisation du formulaire. <a href="/confidentialite#cookies">En savoir plus</a>.</p>
                {accepted && <p>Mesure actuellement acceptée. Refuser retire votre accord ; la page pourra se recharger pour arrêter la balise.</p>}
                {storageError && <p role="status">Votre navigateur ne permet pas de mémoriser ce choix. La mesure reste désactivée ; le formulaire reste utilisable.</p>}
            </div>
            <div className="ads-consent-actions">
                <button type="button" onClick={() => choose(false)}>Refuser</button>
                <button type="button" onClick={() => choose(true)}>Accepter</button>
                {storageError && <button type="button" onClick={() => setOpen(false)}>Fermer sans suivi</button>}
            </div>
        </section>
    );
}

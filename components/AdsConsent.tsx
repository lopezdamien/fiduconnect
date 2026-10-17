'use client';

import { useEffect, useRef, useState } from 'react';
import { OPENAI_ADS_ENABLED } from '@/lib/openai-ads';
import {
    CONSENT_KEY, CONSENT_OPEN_EVENT,
    readAdsConsent, saveAdsConsent, syncAdsConsent,
} from '@/lib/google-ads';

export function CookiePreferencesButton({ className = '', label = 'Cookies' }: { className?: string; label?: string }) {
    return <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}>{label}</button>;
}

export function AdsConsent() {
    const [open, setOpen] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [storageError, setStorageError] = useState(false);
    const [details, setDetails] = useState(false);
    const [measurement, setMeasurement] = useState(false);
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
            setMeasurement(choice?.accepted === true);
            setOpen(choice === null);
            syncAdsConsent();
        };
        const show = () => {
            previousFocus.current = document.activeElement as HTMLElement;
            setAccepted(readAdsConsent()?.accepted === true);
            setMeasurement(readAdsConsent()?.accepted === true);
            setDetails(false);
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
                <h2 id="ads-consent-title">Vos préférences de cookies</h2>
                <p>Avec votre accord, nous utilisons des cookies et technologies similaires pour mesurer l’efficacité de nos publicités et relier les demandes à leur origine publicitaire. Vous pouvez refuser sans modifier l’utilisation du formulaire. <a href="/confidentialite#cookies">En savoir plus</a>.</p>
                {details && <div id="ads-consent-details" className="ads-consent-details">
                    <p><strong>Fonctionnement du site — toujours actif.</strong> Le formulaire reste accessible sans suivi publicitaire. Votre choix est mémorisé dans ce navigateur pendant 180 jours au maximum.</p>
                    <label className="ads-consent-option">
                        <input type="checkbox" checked={measurement} onChange={event => setMeasurement(event.target.checked)} />
                        <span>Mesure de l’efficacité des publicités — facultative</span>
                    </label>
                    <p>{OPENAI_ADS_ENABLED
                        ? 'Prestataires : Google Ads et OpenAI (ChatGPT Ads). Ils utilisent des identifiants de clic, des cookies et des informations techniques pour attribuer les demandes à nos publicités. Le pixel OpenAI peut aussi détecter certaines coordonnées saisies et transmettre leurs empreintes hachées. Ces empreintes ne sont pas anonymes.'
                        : 'Prestataire : Google Ads. Il utilise des identifiants de clic, des cookies et des informations techniques pour attribuer les demandes à nos publicités. Nous ne lui transmettons pas les coordonnées du formulaire.'}</p>
                    <p>Des traitements peuvent avoir lieu à l’étranger, notamment aux États-Unis. Les durées, destinataires et informations de confidentialité sont détaillés dans <a href="/confidentialite#cookies">notre politique de cookies</a>. Vous pouvez retirer votre accord à tout moment avec le bouton Cookies.</p>
                </div>}
                {accepted && <p>Mesure actuellement acceptée. Refuser retire votre accord ; la page pourra se recharger pour arrêter la balise.</p>}
                {storageError && <p role="status">Votre navigateur ne permet pas de mémoriser ce choix. La mesure reste désactivée ; le formulaire reste utilisable.</p>}
            </div>
            <div className="ads-consent-actions">
                <button type="button" onClick={() => choose(false)}>Refuser</button>
                <button type="button" onClick={() => choose(true)}>Accepter</button>
                <button type="button" aria-expanded={details} aria-controls="ads-consent-details" onClick={() => setDetails(!details)}>{details ? 'Réduire' : 'Personnaliser'}</button>
                {details && <button type="button" onClick={() => choose(measurement)}>Enregistrer mes choix</button>}
                {storageError && <button type="button" onClick={() => setOpen(false)}>Fermer sans suivi</button>}
            </div>
        </section>
    );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ANALYTICS_CHOICE_EVENT, ANALYTICS_CHOICE_KEY, readAnalyticsChoice, saveAnalyticsChoice, stopSeoAnalytics, trackSeoAction, trackSeoPage } from '@/lib/seo-analytics';

export function SeoAnalytics() {
    const path = usePathname();
    const [visible, setVisible] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [ready, setReady] = useState(false);
    const decline = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        let expiry: ReturnType<typeof setTimeout>;
        function sync() {
            clearTimeout(expiry);
            const choice = readAnalyticsChoice();
            setAccepted(choice?.accepted === true);
            setVisible(!choice);
            setReady(true);
            if (choice) expiry = setTimeout(sync, Math.min(choice.expires - Date.now() + 10, 2_147_483_647));
            if (!choice?.accepted) stopSeoAnalytics();
        }
        function storage(event: StorageEvent) {
            if (event.key === ANALYTICS_CHOICE_KEY || event.key === null) sync();
        }
        function open() { setVisible(true); requestAnimationFrame(() => decline.current?.focus()); }
        function click(event: MouseEvent) {
            const target = event.target;
            if (!(target instanceof Element)) return;
            const link = target.closest('a');
            const href = link?.getAttribute('href');
            if (href?.startsWith('/contact') || href === '#formulaire' || href?.startsWith('mailto:') || href?.startsWith('tel:')) trackSeoAction('contact_click');
        }
        sync();
        window.addEventListener(ANALYTICS_CHOICE_EVENT, sync);
        window.addEventListener('storage', storage);
        window.addEventListener('fiduconnect:open-analytics-choice', open);
        document.addEventListener('click', click);
        return () => {
            clearTimeout(expiry);
            window.removeEventListener(ANALYTICS_CHOICE_EVENT, sync);
            window.removeEventListener('storage', storage);
            window.removeEventListener('fiduconnect:open-analytics-choice', open);
            document.removeEventListener('click', click);
        };
    }, []);

    useEffect(() => { if (ready && accepted) trackSeoPage(path); }, [path, accepted, ready]);

    if (!visible) return null;
    return <section className="seo-analytics-choice" aria-labelledby="seo-analytics-title">
        <div><h2 id="seo-analytics-title">Statistiques du site</h2>
            <p>Avec votre accord, Google Analytics nous aide à améliorer le site. Aucun contenu du formulaire n’est transmis. <a href="/cookies">En savoir plus</a>.</p></div>
        <div className="seo-analytics-actions">
            <button ref={decline} type="button" onClick={() => { saveAnalyticsChoice(false); setVisible(false); }}>Refuser</button>
            <button type="button" onClick={() => { saveAnalyticsChoice(true); setVisible(false); }}>Accepter</button>
        </div>
    </section>;
}

export function SeoAnalyticsPreferences() {
    return <button type="button" className="seo-analytics-preferences" onClick={() => window.dispatchEvent(new Event('fiduconnect:open-analytics-choice'))}>Gérer les statistiques</button>;
}

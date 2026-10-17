'use client';

import Link from 'next/link';
import { useSyncExternalStore } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { hasSeoReceipt, serverSeoReceipt, subscribeSeoReceipt } from '@/lib/seo-lead-client';

export function SeoLeadConfirmation() {
    const confirmed = useSyncExternalStore(subscribeSeoReceipt, hasSeoReceipt, serverSeoReceipt);
    return <section className="seo-wrap seo-confirmation">
        <p className="sea-eyebrow">{confirmed ? 'Demande transmise' : 'Votre demande'}</p>
        <h1 className="sea-title">{confirmed ? <>Merci pour<br /><em>votre confiance.</em></> : <>Parlons de<br /><em>votre besoin.</em></>}</h1>
        {confirmed ? <>
            <p className="seo-intro">L’envoi de votre demande a été confirmé. Nous vous rappelons gratuitement sous 24 heures pour préciser votre recherche de fiduciaire à Genève.</p>
            <div className="seo-receipt-note"><Check size={22} aria-hidden="true" /><p>Votre demande est sans engagement. Vos coordonnées ne sont transmises au partenaire concerné qu’après votre appel et votre validation du rendez-vous.</p></div>
            <Link className="seo-button" href="/">Retour à l’accueil <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </> : <>
            <p className="seo-intro">Aucun envoi récent n’est confirmé dans cet onglet. Si vous n’avez pas encore fait de demande, vous pouvez commencer par le formulaire.</p>
            <p className="seo-confirmation-hint">Si vous avez déjà reçu une confirmation après votre envoi, il n’est pas nécessaire de recommencer. Pour toute question : contact@fiduconnect.ch.</p>
            <Link className="seo-button" href="/contact">Accéder au formulaire <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </>}
    </section>;
}

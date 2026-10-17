import type { Metadata } from 'next';
import { SeoHeader, SeoFooter } from '@/components/SeoChrome';
import { SeoLeadConfirmation } from '@/components/SeoLeadConfirmation';

export const metadata: Metadata = {
    title: 'Votre demande FIDUCONNECT',
    description: 'Suivi de votre demande de mise en relation fiduciaire à Genève.',
    alternates: { canonical: 'https://www.fiduconnect.ch/merci' },
    robots: { index: false, follow: false },
};

export default function Merci() {
    return <div className="seo-site"><SeoHeader /><main id="contenu"><SeoLeadConfirmation /></main><SeoFooter /></div>;
}

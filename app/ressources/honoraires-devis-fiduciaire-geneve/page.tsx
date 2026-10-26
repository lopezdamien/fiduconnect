import { SeoEditorialPage, editorialMetadata } from '@/components/SeoEditorialPage';
import { getEditorial } from '@/lib/seo-editorial';

const page = getEditorial('/ressources/honoraires-devis-fiduciaire-geneve');
export const metadata = editorialMetadata(page);
export default function Page() { return <SeoEditorialPage page={page} />; }

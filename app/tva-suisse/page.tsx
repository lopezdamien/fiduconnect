import { SeoEditorialPage, editorialMetadata } from '@/components/SeoEditorialPage';
import { getEditorial } from '@/lib/seo-editorial';

const page = getEditorial('/tva-suisse');
export const metadata = editorialMetadata(page);
export default function Page() { return <SeoEditorialPage page={page} />; }

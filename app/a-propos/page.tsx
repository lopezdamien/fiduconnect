import { SeoEditorialPage, editorialMetadata } from '@/components/SeoEditorialPage';
import { getEditorial } from '@/lib/seo-editorial';

const page = getEditorial('/a-propos');
export const metadata = editorialMetadata(page);
export default function Page() { return <SeoEditorialPage page={page} />; }

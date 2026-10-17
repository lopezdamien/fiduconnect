import { SeoServicePage, serviceMetadata } from '@/components/SeoServicePage';
import { getSeoService } from '@/lib/seo-services';

const service = getSeoService('tva');
export const metadata = serviceMetadata(service);

export default function Page() {
  return <SeoServicePage service={service} />;
}

import { SeoServicePage, serviceMetadata } from '@/components/SeoServicePage';
import { getSeoService } from '@/lib/seo-services';

const service = getSeoService('comptabilite');
export const metadata = serviceMetadata(service);

export default function Page() {
  return <SeoServicePage service={service} />;
}

import { SeoServicePage, serviceMetadata } from '@/components/SeoServicePage';
import { getSeoService } from '@/lib/seo-services';

const service = getSeoService('changer-fiduciaire');
export const metadata = serviceMetadata(service);

export default function Page() {
  return <SeoServicePage service={service} />;
}

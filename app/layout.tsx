import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { AdsConsent } from '@/components/AdsConsent';

const DEFAULT_TITLE = "FiduConnect | Trouvez une fiduciaire adaptée à Genève";
const DEFAULT_DESCRIPTION =
  "FiduConnect aide les entreprises genevoises à identifier une fiduciaire partenaire adaptée, gratuitement et sans engagement.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "fr_CH",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className="antialiased font-sans bg-slate-50 text-slate-900 flex flex-col min-h-screen"
      >
        {children}
        <AdsConsent />
      </body>
    </html>
  );
}

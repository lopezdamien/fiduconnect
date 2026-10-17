import type { Metadata } from "next";
import "./globals.css";
import "./seo.css";
import "./seo-form.css";
import { SITE_NAME, SITE_URL, socialMetadata } from "@/lib/seo";
import { seoRobots } from '@/lib/seo-release';

const DEFAULT_TITLE = "FiduConnect | Trouvez une fiduciaire adaptée à Genève";
const DEFAULT_DESCRIPTION =
  "FiduConnect aide les entreprises genevoises à identifier une fiduciaire partenaire adaptée, gratuitement et sans engagement.";

export const metadata: Metadata = {
  robots: seoRobots(),
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  ...socialMetadata({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: '/' }),
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
      </body>
    </html>
  );
}

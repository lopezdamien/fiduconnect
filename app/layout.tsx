import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://www.fiduconnect.ch";
const SITE_URL = rawUrl.replace(/&$/, '').replace(/\/$/, '');

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "FIDUCONNECT | Expert Comptable & Fiscalité PME",
  description: "Une approche claire et structurée de votre comptabilité, TVA et obligations fiscales. Audit conformité gratuit pour PME. Partenaires experts-comptables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W4QKQ8GH');`
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased font-sans bg-slate-50 text-slate-900 flex flex-col min-h-screen`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4QKQ8GH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

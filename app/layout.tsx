import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fiduconnectch.vercel.app'),
  title: "FIDUCONNECT | Expert Comptable Genève & Fiscalité PME",
  description: "Une approche claire et structurée de votre comptabilité, TVA et obligations fiscales. Audit conformité gratuit pour PME à Genève. Partenaires experts-comptables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased font-sans bg-slate-50 text-slate-900 flex flex-col min-h-screen`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

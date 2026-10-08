import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FiduLogo } from "@/components/FiduLogo";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Merci pour votre demande",
    description: "Votre demande a bien été transmise. FIDUCONNECT vous rappelle gratuitement sous 24 heures, sans engagement.",
    path: "/merci",
    noIndex: true,
});

export default function Merci() {
    return (
        <main className="sea-page flex min-h-screen items-center justify-center px-5 py-12">
            <div className="sea-form-card w-full max-w-lg p-7 sm:p-10">
                <Link href="/" className="inline-block"><FiduLogo className="w-[180px]" /></Link>
                <p className="sea-eyebrow mt-10">Demande reçue</p>
                <h1 className="sea-title mt-4 text-4xl">Merci pour votre confiance.</h1>
                <p className="mt-6 text-base leading-7 text-[#605b54]">
                    Nous vous rappelons gratuitement sous 24 heures pour préciser votre besoin et vous orienter vers un partenaire adapté.
                </p>
                <p className="mt-4 text-sm text-[#605b54]">Votre demande est sans engagement.</p>
                <Link href="/" className="sea-button mt-8">Retour à l’accueil <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>
        </main>
    );
}

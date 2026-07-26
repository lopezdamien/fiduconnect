import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Diagnostic comptable gratuit pour PME à Genève",
    description: "Analyse gratuite de votre organisation comptable et de vos obligations fiscales, en 30 minutes avec un expert fiduciaire partenaire à Genève.",
    path: "/diagnostic",
});

export default function Diagnostic() {
    return (
        <>
            <JsonLd
                schema={[
                    serviceSchema({
                        name: "Diagnostic comptable et fiscal gratuit",
                        description:
                            "Analyse de 30 minutes de votre organisation comptable, de votre situation TVA et de vos obligations fiscales, avec un expert fiduciaire partenaire.",
                        path: "/diagnostic",
                        serviceType: "Diagnostic comptable",
                    }),
                    breadcrumbSchema([{ name: "Diagnostic gratuit", path: "/diagnostic" }]),
                ]}
            />
            <section className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                    Consultation gratuite (30 min)
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                    Analysez votre situation avec un expert fiduciaire partenaire.
                    Objectif : Clarifier vos obligations et identifier vos axes d'amélioration.
                </p>
            </section>

            <Section className="bg-white">
                <div className="max-w-2xl mx-auto">
                    <LeadForm />
                </div>
            </Section>
        </>
    );
}

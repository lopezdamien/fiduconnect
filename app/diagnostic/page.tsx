import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Diagnostic Gratuit | FIDUCONNECT",
    description: "Analyse de votre organisation comptable et de vos obligations fiscales.",
};

export default function Diagnostic() {
    return (
        <>
            <section className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                    Diagnostic Gratuit
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                    Analyse de votre organisation comptable et de vos obligations fiscales.
                    Objectif : Identifier d’éventuelles erreurs, retards ou incohérences.
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

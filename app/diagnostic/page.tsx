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

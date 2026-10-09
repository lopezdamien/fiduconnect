'use client';

import { useState, type ComponentProps } from 'react';
import { useRouter } from 'next/navigation';
import { Field } from '@base-ui/react/field';
import { Form } from '@base-ui/react/form';
import { Input } from '@base-ui/react/input';
import { Select } from '@base-ui/react/select';
import { ArrowRight, ChevronDown, LoaderCircle } from 'lucide-react';
import { leadLimits, needs, situations } from '@/lib/lead-fields';

type SeaLeadFormProps = { idPrefix: string };

function TextField({ label, optional, ...props }: ComponentProps<typeof Input> & { label: string; optional?: boolean }) {
    return (
        <Field.Root name={props.name} className="sea-field">
            <Field.Label className="sea-label">{label}{optional && <span className="sea-optional">Facultatif</span>}</Field.Label>
            <Input {...props} className="sea-input" />
            <Field.Error match="valueMissing" className="sea-field-error">Veuillez renseigner ce champ.</Field.Error>
            <Field.Error match="typeMismatch" className="sea-field-error">Veuillez saisir une adresse e-mail valide.</Field.Error>
        </Field.Root>
    );
}

function SelectField({ id, name, label, options }: { id: string; name: string; label: string; options: readonly string[] }) {
    return (
        <Field.Root name={name} className="sea-field">
            <Field.Label className="sea-label" nativeLabel={false} render={<div />}>{label}</Field.Label>
            <Select.Root name={name} id={id} required items={options.map(value => ({ value, label: value }))}>
                <Select.Trigger className="sea-input sea-select-trigger">
                    <Select.Value placeholder="Sélectionnez" />
                    <Select.Icon><ChevronDown aria-hidden="true" className="h-4 w-4" /></Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Positioner className="sea-select-positioner" sideOffset={6} alignItemWithTrigger={false}>
                        <Select.Popup className="sea-select-popup">
                            <Select.List>
                                {options.map(option => (
                                    <Select.Item key={option} value={option} className="sea-select-item">
                                        <Select.ItemText>{option}</Select.ItemText>
                                        <Select.ItemIndicator className="sea-select-mark"><span aria-hidden="true">—</span></Select.ItemIndicator>
                                    </Select.Item>
                                ))}
                            </Select.List>
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
            <Field.Error match="valueMissing" className="sea-field-error">Veuillez choisir une option.</Field.Error>
        </Field.Root>
    );
}

export function SeaLeadForm({ idPrefix }: SeaLeadFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(data: Record<string, unknown>) {
        if (loading) return;
        setLoading(true);
        setError(null);
        const payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            company: data.company,
            situation: data.situation,
            mainNeed: data.mainNeed,
            message: data.message,
            website: data.website,
        };
        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || 'Vérifiez vos informations, puis réessayez.');
            }
            router.push('/merci');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Une erreur est survenue.');
            setLoading(false);
        }
    }

    return (
        <Form onFormSubmit={handleSubmit} className="sea-lead-form" aria-busy={loading}>
            {error && <p role="alert" className="sea-submit-error">{error}</p>}
            <Field.Root name="website" className="hidden" aria-hidden="true">
                <Field.Control type="text" name="website" tabIndex={-1} autoComplete="off" />
            </Field.Root>
            <fieldset disabled={loading} className="space-y-4">
                <legend className="sea-form-legend">Vos coordonnées</legend>
                <div className="grid grid-cols-2 gap-3">
                    <TextField label="Prénom" id={`${idPrefix}-firstName`} name="firstName" maxLength={leadLimits.firstName} required autoComplete="given-name" />
                    <TextField label="Nom" id={`${idPrefix}-lastName`} name="lastName" maxLength={leadLimits.lastName} required autoComplete="family-name" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
                    <TextField label="E-mail" id={`${idPrefix}-email`} name="email" type="email" maxLength={leadLimits.email} required autoComplete="email" placeholder="vous@entreprise.ch" />
                    <TextField label="Téléphone" id={`${idPrefix}-phone`} name="phone" type="tel" maxLength={leadLimits.phone} required autoComplete="tel" placeholder="+41 79 000 00 00" />
                </div>
                <TextField label="Entreprise" optional id={`${idPrefix}-company`} name="company" maxLength={leadLimits.company} autoComplete="organization" />
            </fieldset>
            <fieldset disabled={loading} className="mt-6 space-y-4 border-t border-[#e5dfd5] pt-5">
                <legend className="sr-only">Votre besoin</legend>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
                    <SelectField id={`${idPrefix}-situation`} name="situation" label="Votre situation" options={situations} />
                    <SelectField id={`${idPrefix}-need`} name="mainNeed" label="Besoin principal" options={needs} />
                </div>
                <Field.Root name="message" className="sea-field">
                    <Field.Label className="sea-label">Quelques précisions <span className="sea-optional">Facultatif</span></Field.Label>
                    <Field.Control id={`${idPrefix}-message`} render={<textarea rows={2} maxLength={leadLimits.message} aria-describedby={`${idPrefix}-message-help`} />} className="sea-input sea-textarea" placeholder="Votre activité, vos attentes…" />
                    <p id={`${idPrefix}-message-help`} className="text-[11px] leading-5 text-[#6c665e]">2 000 caractères maximum. N’indiquez pas de données bancaires, salariales, fiscales confidentielles ou de pièces d’identité.</p>
                </Field.Root>
            </fieldset>
            <button type="submit" className="sea-button sea-submit mt-5" disabled={loading}>
                {loading ? 'Envoi en cours…' : 'Trouver ma fiduciaire'}
                {loading ? <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin motion-reduce:animate-none" /> : <ArrowRight aria-hidden="true" className="h-4 w-4" />}
            </button>
            <p className="mt-3 text-center text-xs font-medium text-[#223b4a]">Rappel gratuit sous 24 h · Sans engagement</p>
            <p className="mt-2 text-center text-[11px] leading-5 text-[#6c665e]">Smart Administration – Damien Lopez utilise vos informations pour vous rappeler et comprendre votre besoin. Elles ne sont transmises à un partenaire qu’après l’appel et votre validation du rendez-vous. <a href="/confidentialite" className="underline underline-offset-2">Confidentialité</a></p>
        </Form>
    );
}

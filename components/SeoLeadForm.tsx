'use client';

import { useRef, useState, type ComponentProps } from 'react';
import { useRouter } from 'next/navigation';
import { Field } from '@base-ui/react/field';
import { Form } from '@base-ui/react/form';
import { Input } from '@base-ui/react/input';
import { Select } from '@base-ui/react/select';
import { ArrowRight, ChevronDown, LoaderCircle } from 'lucide-react';
import { leadLimits, needs, situations } from '@/lib/lead-fields';
import { submitSeoLead } from '@/lib/seo-lead-client';
import { trackSeoAction, trackSeoLead } from '@/lib/seo-analytics';

type SeoLeadFormProps = { idPrefix: string };

function TextField({ label, optional, ...props }: ComponentProps<typeof Input> & { label: string; optional?: boolean }) {
    return (
        <Field.Root name={props.name} className="sea-field">
            <Field.Label className="sea-label">{label}{optional && <span className="sea-optional">Facultatif</span>}</Field.Label>
            <Input {...props} className="sea-input" />
            <Field.Error match="valueMissing" className="sea-field-error">Veuillez renseigner ce champ.</Field.Error>
            <Field.Error match="typeMismatch" className="sea-field-error">Veuillez saisir une adresse e-mail valide.</Field.Error>
            <Field.Error match="tooShort" className="sea-field-error">Veuillez saisir au moins 7 caractères pour le téléphone.</Field.Error>
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

export function SeoLeadForm({ idPrefix }: SeoLeadFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const sending = useRef(false);
    const formStarted = useRef(false);
    const submission = useRef<{ fingerprint: string; id: string } | null>(null);

    async function handleSubmit(data: Record<string, unknown>) {
        if (sending.current) return;
        sending.current = true;
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
            // Retry unchanged data with the same ID. Keep contact details in memory only.
            const fingerprint = JSON.stringify(payload);
            if (submission.current?.fingerprint !== fingerprint) {
                submission.current = { fingerprint, id: window.crypto.randomUUID() };
            }
            await submitSeoLead({ ...payload, submissionId: submission.current.id });
            trackSeoLead(submission.current.id);
            router.replace('/merci');
        } catch (err) {
            sending.current = false;
            setError(err instanceof Error ? err.message : 'L’envoi n’a pas pu être confirmé. Votre saisie est conservée.');
            setLoading(false);
        }
    }

    return (
        <Form onFormSubmit={handleSubmit} onChangeCapture={() => {
            if (!formStarted.current) { formStarted.current = true; trackSeoAction('form_start'); }
        }} className="sea-lead-form seo-lead-form" aria-busy={loading}>
            {error && <p role="alert" tabIndex={-1} ref={element => { element?.focus(); }} className="sea-submit-error">{error}</p>}
            <Field.Root name="website" className="hidden" aria-hidden="true">
                <Field.Control type="text" name="website" tabIndex={-1} autoComplete="off" />
            </Field.Root>
            <fieldset disabled={loading} className="sea-contact-fields space-y-4">
                <legend className="sea-form-legend">Vos coordonnées</legend>
                <div className="grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 min-[360px]:gap-3">
                    <TextField label="Prénom" id={`${idPrefix}-firstName`} name="firstName" maxLength={leadLimits.firstName} required autoComplete="given-name" enterKeyHint="next" />
                    <TextField label="Nom" id={`${idPrefix}-lastName`} name="lastName" maxLength={leadLimits.lastName} required autoComplete="family-name" enterKeyHint="next" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
                    <TextField label="E-mail" id={`${idPrefix}-email`} name="email" type="email" inputMode="email" autoCapitalize="none" spellCheck={false} enterKeyHint="next" maxLength={leadLimits.email} required autoComplete="email" placeholder="vous@entreprise.ch" />
                    <TextField label="Téléphone" id={`${idPrefix}-phone`} name="phone" type="tel" inputMode="tel" enterKeyHint="next" minLength={7} maxLength={leadLimits.phone} required autoComplete="tel" placeholder="+41 79 000 00 00" />
                </div>
                <TextField label="Entreprise" optional id={`${idPrefix}-company`} name="company" maxLength={leadLimits.company} autoComplete="organization" enterKeyHint="next" />
            </fieldset>
            <fieldset disabled={loading} className="sea-need-fields mt-6 space-y-4 border-t border-[#e5dfd5] pt-5">
                <legend className="sr-only">Votre besoin</legend>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
                    <SelectField id={`${idPrefix}-situation`} name="situation" label="Votre situation" options={situations} />
                    <SelectField id={`${idPrefix}-need`} name="mainNeed" label="Besoin principal" options={needs} />
                </div>
                <Field.Root name="message" className="sea-field">
                    <Field.Label className="sea-label">Quelques précisions <span className="sea-optional">Facultatif</span></Field.Label>
                    <Field.Control id={`${idPrefix}-message`} render={<textarea rows={2} maxLength={leadLimits.message} />} className="sea-input sea-textarea" placeholder="Votre activité, vos attentes… Sans document ni donnée confidentielle." aria-describedby={`${idPrefix}-message-help`} />
                </Field.Root>
            </fieldset>
            <p id={`${idPrefix}-message-help`} className="seo-form-help">N’indiquez pas de données bancaires, fiscales ou salariales confidentielles.</p>
            <p aria-label="Utilisation de vos données" className="sea-privacy-note mt-4 text-[11px] leading-5 text-[#6c665e]">
                Vos informations servent à préparer votre rappel et votre orientation par FIDUCONNECT. Elles ne sont transmises à un partenaire qu’après votre appel et votre validation du rendez-vous.{' '}
                <a href="/confidentialite" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Confidentialité<span className="sr-only"> (s’ouvre dans un nouvel onglet)</span></a>.
            </p>
            <button type="submit" className="sea-button sea-submit mt-4" disabled={loading}>
                {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
                {loading ? <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin motion-reduce:animate-none" /> : <ArrowRight aria-hidden="true" className="h-4 w-4" />}
            </button>
            <p className="sea-form-reassurance mt-3 text-center text-xs font-medium text-[#223b4a]">Rappel gratuit sous 24 h · Sans engagement</p>
        </Form>
    );
}

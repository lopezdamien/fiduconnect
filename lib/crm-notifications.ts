import { Resend } from 'resend';
import { crmRpc } from './crm-intake';

type Job = {
    leaseId: string;
    lead: { id: string; first_name: string; last_name: string; email: string; phone: string;
        company: string; situation: string; main_need: string; message: string; form_source: string };
};

export async function processCrmNotifications() {
    const { RESEND_API_KEY: key, LEAD_FROM_EMAIL: from, LEAD_TO_EMAIL: to } = process.env;
    if (!key || !from || !to) throw new Error('crm.notification_configuration_missing');
    const jobs = await crmRpc('crm_claim_notifications', {}) as Job[];
    if (!Array.isArray(jobs)) throw new Error('crm.invalid_notification_response');
    const resend = new Resend(key);
    let sent = 0;
    let pending = 0;
    for (const { lead, leaseId } of jobs) {
        let providerId: string | null = null;
        try {
            const result = await resend.emails.send({
                from, to, subject: 'Nouvelle demande FIDUCONNECT',
                text: `Nouvelle demande FIDUCONNECT\n\nNom : ${lead.first_name} ${lead.last_name}\nEntreprise : ${lead.company || 'Non renseignée'}\nE-mail : ${lead.email}\nTéléphone : ${lead.phone}\nSituation : ${lead.situation}\nBesoin : ${lead.main_need}\nPrécisions : ${lead.message || 'Non renseignées'}\nOrigine formulaire : ${lead.form_source}\n\nLe lead est enregistré dans le CRM. Ne transmettre ses coordonnées à aucun partenaire sans validation préalable.`,
            }, { idempotencyKey: `crm-lead/${lead.id}` });
            if (!result.error && result.data?.id) providerId = result.data.id;
        } catch { /* Retain the durable job. Never log the provider error or coordinates. */ }
        const acknowledged = await crmRpc('crm_finish_notification', {
            p_lead_id: lead.id, p_lease_id: leaseId, p_provider_id: providerId,
        });
        if (providerId && acknowledged === true) sent++;
        else pending++;
    }
    return { sent, pending };
}

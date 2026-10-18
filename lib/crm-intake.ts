// Server-only transport. Never import from a client component.
import { LeadRequestError } from './lead-security';

const projectUrl = 'https://nuhrxkwsqnbhzbbmdngy.supabase.co';
type RpcName = 'crm_receive_lead' | 'crm_claim_notifications' | 'crm_finish_notification';

export function crmIntakeEnabled() {
    return process.env.CRM_INTAKE_ENABLED === 'true';
}

export async function crmRpc(name: RpcName, parameters: Record<string, unknown>): Promise<unknown> {
    const key = process.env.CRM_SUPABASE_SECRET_KEY;
    // Intentionally restricted to the dedicated CRM project and modern server keys.
    if (!key?.startsWith('sb_secret_') || process.env.CRM_SUPABASE_URL !== projectUrl) {
        throw new LeadRequestError(503, 'Le formulaire est temporairement indisponible. Merci de réessayer.');
    }
    let response: Response;
    try {
        response = await fetch(`${projectUrl}/rest/v1/rpc/${name}`, {
            method: 'POST', cache: 'no-store', redirect: 'error',
            headers: { apikey: key, 'Content-Type': 'application/json' },
            body: JSON.stringify(parameters), signal: AbortSignal.timeout(8000),
        });
    } catch {
        throw new LeadRequestError(503, 'L’enregistrement n’a pas pu être confirmé. Merci de réessayer.');
    }
    if (!response.ok) {
        let message = '';
        try { message = (await response.json()).message; } catch { /* Never expose provider data. */ }
        if (message === 'submission_conflict') {
            throw new LeadRequestError(409, 'Cette demande a déjà été envoyée avec un autre contenu. Rechargez la page avant de réessayer.');
        }
        throw new LeadRequestError(503, 'L’enregistrement n’a pas pu être confirmé. Merci de réessayer.');
    }
    try { return await response.json(); } catch {
        throw new LeadRequestError(503, 'L’enregistrement n’a pas pu être confirmé. Merci de réessayer.');
    }
}

export async function receiveCrmLead(submissionId: string, formSource: 'landing_ads' | 'site_seo', payload: Record<string, string | undefined>) {
    const result = await crmRpc('crm_receive_lead', {
        p_submission_id: submissionId, p_form_source: formSource, p_payload: payload,
    });
    if (!result || typeof result !== 'object' || !('id' in result) || typeof result.id !== 'string'
        || !('created' in result) || typeof result.created !== 'boolean') {
        throw new LeadRequestError(503, 'L’enregistrement n’a pas pu être confirmé. Merci de réessayer.');
    }
}

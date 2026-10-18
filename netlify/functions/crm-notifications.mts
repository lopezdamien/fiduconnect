import { crmIntakeEnabled } from '../../lib/crm-intake';
import { processCrmNotifications } from '../../lib/crm-notifications';

// Native Netlify schedule: not invocable over a public URL. No second shared key.
// Retries queued notifications even when there are no new form submissions.
export const config = { schedule: '*/15 * * * *' };

export default async function scheduledNotifications() {
    if (!crmIntakeEnabled()) return;
    try {
        const result = await processCrmNotifications();
        console.log('crm.notifications_processed', result.sent, result.pending);
    } catch {
        console.error('crm.notification_retry_failed');
        throw new Error('Notification retry unavailable');
    }
}

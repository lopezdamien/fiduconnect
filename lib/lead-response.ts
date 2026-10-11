const fallback = 'Votre demande n’a pas pu être envoyée. Veuillez réessayer dans quelques instants.';

// Hosting-layer errors can be HTML or plain text instead of our API's JSON.
export async function getLeadErrorMessage(response: Response): Promise<string> {
    if (response.status === 429) {
        return 'Trop de demandes ont été envoyées. Patientez quelques minutes avant de réessayer.';
    }
    try {
        const result: unknown = await response.json();
        if (result && typeof result === 'object' && 'error' in result
            && typeof result.error === 'string' && result.error.length > 0 && result.error.length <= 240) {
            return result.error;
        }
    } catch {
        // Do not show proxy/server response bodies or parsing errors to visitors.
    }
    return fallback;
}

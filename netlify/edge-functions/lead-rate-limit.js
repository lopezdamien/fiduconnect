// Netlify applies this declarative rule before the Next.js request handler.
// This pass-through never reads, stores or logs the form body or credentials.
export default function leadRateLimit() {
    // Returning undefined continues the request chain to the existing /api/lead.
    return;
}

export const config = {
    path: '/api/lead',
    rateLimit: {
        windowLimit: 10,
        windowSize: 60,
        aggregateBy: ['ip', 'domain'],
    },
};

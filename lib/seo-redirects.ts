// Exact historical URLs only. No catch-all redirect masking missing content.
export const seoRedirects = [
    { source: '/changer-fiduciaire', destination: '/services/changer-fiduciaire', permanent: true },
    { source: '/diagnostic', destination: '/contact', permanent: true },
    { source: '/lp/changer-fiduciaire-geneve', destination: '/services/changer-fiduciaire', permanent: true },
];

// Only the SEO apex host is normalized. Preview hosts and the SEA subdomain
// must not match. Next.js preserves the path and query string on redirect.
export const canonicalHostRedirects = [{
    source: '/:path*',
    has: [{ type: 'host' as const, value: 'fiduconnect\\.ch' }],
    destination: 'https://www.fiduconnect.ch/:path*',
    permanent: true,
}];

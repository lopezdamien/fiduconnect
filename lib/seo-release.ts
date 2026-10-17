// Change only after the owner has received the global launch review and
// explicitly approved publication. This does not enable form submissions.
export const SEO_PUBLICATION_APPROVED = true;

export function seoRobots(indexable = true) {
    return { index: SEO_PUBLICATION_APPROVED && indexable, follow: SEO_PUBLICATION_APPROVED };
}

// Real content pages only; no API, thank-you, redirect or legal draft pages.
export const SEO_INDEXABLE_PATHS = [
    '/', '/services', '/services/comptabilite', '/services/tva',
    '/services/charges-salaires', '/services/changer-fiduciaire',
    '/services/pilotage', '/comment-ca-marche', '/a-propos', '/contact',
    '/ressources', '/ressources/choisir-fiduciaire-geneve', '/ressources/changer-fiduciaire-geneve', '/tva-suisse',
];

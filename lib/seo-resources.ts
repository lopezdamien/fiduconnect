export const seoResources = [
  { href: '/ressources/choisir-fiduciaire-geneve', theme: 'Choisir son partenaire', title: 'Comment choisir une fiduciaire à Genève\u00a0?', description: 'Les bonnes questions sur le mandat, les honoraires et la façon de travailler ensemble.', visual: 'compass', kind: 'Guide pratique' },
  { href: '/ressources/changer-fiduciaire-geneve', theme: 'Changer de partenaire', title: 'Changer de fiduciaire\u00a0: préparer la transition', description: 'Clarifiez vos attentes et préparez la reprise de votre dossier avec le nouveau partenaire.', visual: 'transition', kind: 'Repères' },
  { href: '/tva-suisse', theme: 'Fiscalité & TVA', title: 'TVA\u00a0: préparer votre échange', description: 'Rassemblez les informations sur votre activité et les questions à poser à un professionnel.', visual: 'files', kind: 'Repères' },
  { href: '/services/pilotage', theme: 'Comptabilité & suivi', title: 'Un suivi plus clair de votre activité', description: 'Précisez les chiffres utiles, la fréquence des échanges et le suivi que vous attendez.', visual: 'chart', kind: 'Explorer ce besoin' },
] as const;

export type SeoResource = (typeof seoResources)[number];

const feesGuide = { href: '/ressources/honoraires-devis-fiduciaire-geneve', theme: 'Honoraires & devis', title: 'Honoraires fiduciaires : comparer les devis', description: 'Forfait, temps passé, reprise et suppléments : une grille pour comparer un périmètre clair.', visual: 'files', kind: 'Guide pratique' } as const;

export const seoResources = [
  { href: '/ressources/choisir-fiduciaire-geneve', theme: 'Choisir son partenaire', title: 'Comment choisir une fiduciaire à Genève\u00a0?', description: 'Les bonnes questions sur le mandat, les honoraires et la façon de travailler ensemble.', visual: 'compass', kind: 'Guide pratique' },
  { href: '/ressources/changer-fiduciaire-geneve', theme: 'Changer de partenaire', title: 'Changer de fiduciaire\u00a0: préparer la transition', description: 'Une checklist, un inventaire de reprise et les étapes à convenir avec les professionnels.', visual: 'transition', kind: 'Guide pratique' },
  { href: '/tva-suisse', theme: 'Fiscalité & TVA', title: 'TVA\u00a0: préparer votre échange', description: 'Rassemblez les informations sur votre activité et les questions à poser à un professionnel.', visual: 'files', kind: 'Repères' },
  { href: '/services/pilotage', theme: 'Comptabilité & suivi', title: 'Un suivi plus clair de votre activité', description: 'Précisez les chiffres utiles, la fréquence des échanges et le suivi que vous attendez.', visual: 'chart', kind: 'Explorer ce besoin' },
  feesGuide,
  { href: '/ressources/externaliser-salaires-geneve', theme: 'Salaires & administration', title: 'Externaliser les salaires à Genève : choisir son prestataire', description: 'Prestations, fiches de paie, validations et confidentialité : une grille pour cadrer le mandat.', visual: 'files', kind: 'Guide pratique' },
] as const;

export type SeoResource = (typeof seoResources)[number];

export const seoHomeResources = [feesGuide, ...seoResources.slice(0, 2)] as const;

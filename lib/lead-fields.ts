export const situations = ['Création d’entreprise', 'Indépendant', 'Sàrl ou SA', 'Autre'] as const;
export const needs = ['Comptabilité', 'Fiscalité', 'TVA', 'Salaires', 'Comparer ou changer de fiduciaire', 'Autre'] as const;

export const leadLimits = {
    firstName: 80,
    lastName: 80,
    email: 254,
    phone: 40,
    company: 160,
    message: 2000,
} as const;

import { SeoEditorialPage, editorialMetadata, type Editorial } from '@/components/SeoEditorialPage';

const page: Editorial = {
    path: '/ressources', label: 'Ressources', title: 'Ressources pour préparer votre recherche de fiduciaire à Genève',
    description: 'Des repères pour préparer vos échanges avec une fiduciaire à Genève : changement de partenaire, suivi comptable et questions TVA.',
    heading: 'Quelques repères pour préparer vos échanges.',
    intro: 'Ces contenus vous aident à formuler votre besoin. Ils ne remplacent pas l’analyse de votre situation par un professionnel.',
    sections: [{ title: 'Partir de votre situation', paragraphs: ['Vous envisagez de changer de partenaire ou souhaitez mieux organiser votre suivi ? Commencez par préciser vos attentes, les tâches à confier et les échéances à signaler. Nos repères ci-dessous vous aident à préparer la conversation.'] }],
    related: [
        { href: '/ressources/choisir-fiduciaire-geneve', label: 'Comment choisir une fiduciaire à Genève ?' },
        { href: '/ressources/changer-fiduciaire-geneve', label: 'Changer de fiduciaire : préparer la transition' },
        { href: '/tva-suisse', label: 'Préparer une demande concernant la TVA' },
        { href: '/services/pilotage', label: 'Clarifier vos attentes de suivi et de pilotage' },
    ],
};
export const metadata = editorialMetadata(page);
export default function Ressources() { return <SeoEditorialPage page={page} />; }

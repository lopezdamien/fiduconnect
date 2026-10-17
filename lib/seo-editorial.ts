import type { Editorial } from '@/components/SeoEditorialPage';

export const editorialPages: Editorial[] = [
    {
        path: '/a-propos', label: 'À propos', title: 'À propos de FIDUCONNECT : la mise en relation fiduciaire à Genève',
        description: 'Découvrez le rôle de FIDUCONNECT, service de Smart Administration – Damien Lopez pour les entreprises et indépendants du canton de Genève.',
        heading: 'Un besoin compris. Une recherche plus claire.',
        intro: 'FIDUCONNECT aide les entreprises et les indépendants du canton de Genève à préciser leur recherche avant une mise en relation avec un partenaire fiduciaire.',
        sections: [
            { title: 'Un service porté à Genève', paragraphs: ['FIDUCONNECT est exploité par Smart Administration – Damien Lopez, Avenue d’Aïre 73C, 1203 Genève. Notre périmètre actuel est le canton de Genève.', 'Le premier échange sert à comprendre votre activité, votre organisation, vos attentes et les échéances à signaler. Il ne demande pas de documents comptables ou de dossiers confidentiels.'] },
            { title: 'Un intermédiaire, pas une fiduciaire', paragraphs: ['Nous ne tenons pas votre comptabilité, ne préparons pas vos déclarations et ne fournissons pas de conseil comptable, fiscal ou juridique personnalisé. Ces prestations relèvent du professionnel que vous choisissez de mandater.', 'Notre orientation porte sur des partenaires de notre réseau, sans comparaison exhaustive du marché. Nous ne promettons ni économie chiffrée ni résultat fiscal.'] },
            { title: 'Une décision qui vous appartient', paragraphs: ['Votre demande, le rappel et l’orientation FIDUCONNECT sont gratuits et sans engagement. Les honoraires et conditions d’un éventuel mandat sont à convenir directement avec la fiduciaire.', 'Nous échangeons avec vous avant toute transmission de coordonnées. Vous validez le rendez-vous avec le partenaire concerné et restez libre de ne pas poursuivre.'] },
        ], related: [{ href: '/comment-ca-marche', label: 'Comprendre les étapes' }, { href: '/mentions-legales', label: 'Identité et mentions légales' }],
    },
    {
        path: '/comment-ca-marche', label: 'Comment ça marche', title: 'Comment fonctionne la mise en relation FIDUCONNECT à Genève ?',
        description: 'Demande, rappel et orientation : les étapes pour rechercher un partenaire fiduciaire à Genève, sans transmission automatique de vos coordonnées.',
        heading: 'Un premier échange. Puis votre décision.',
        intro: 'Vous n’avez pas besoin de connaître le nom exact du mandat à confier. Quelques informations générales suffisent pour commencer.',
        sections: [
            { title: '1. Vous décrivez votre situation', paragraphs: ['Indiquez vos coordonnées, votre situation professionnelle et votre besoin principal. Vous pouvez préciser votre activité, votre organisation actuelle et une échéance à prendre en compte.', 'N’envoyez ni pièce d’identité, ni coordonnées bancaires, ni documents fiscaux ou salariaux confidentiels. Le premier contact ne nécessite pas de dossier complet.'] },
            { title: '2. Nous vous rappelons sous 24 heures', paragraphs: ['L’échange permet de préciser les tâches à confier, le suivi attendu, les outils utilisés et les particularités de votre entreprise. Le rappel et l’orientation FIDUCONNECT sont gratuits.', 'Signalez toute urgence, mais ne considérez pas votre demande comme une prise en charge d’échéance : seul le professionnel peut accepter un mandat et confirmer sa disponibilité.'] },
            { title: '3. Vous choisissez la suite', paragraphs: ['Nous vous orientons vers un partenaire de notre réseau selon le besoin exprimé. Vos coordonnées ne sont transmises au partenaire concerné qu’après l’appel et votre validation du rendez-vous.', 'Vous discutez ensuite avec la fiduciaire du périmètre, du calendrier et des honoraires. L’envoi du formulaire et la mise en relation ne vous engagent pas à signer un mandat.'] },
        ], related: [{ href: '/services', label: 'Explorer les besoins' }, { href: '/confidentialite', label: 'Comprendre le traitement des données' }],
    },
    {
        path: '/services/pilotage', label: 'Suivi et pilotage', title: 'Trouver un interlocuteur pour le suivi de votre entreprise à Genève',
        description: 'Tableaux de bord, échanges comptables et visibilité sur l’activité : préparez votre recherche de partenaire pour le suivi de votre entreprise à Genève.',
        heading: 'Des chiffres. Mais surtout des échanges utiles.',
        intro: 'Vous souhaitez mieux comprendre les informations de votre entreprise et convenir d’un suivi régulier avec un professionnel ? Commençons par préciser les décisions que vous devez préparer.',
        sections: [
            { title: 'Définir ce que vous souhaitez suivre', paragraphs: ['Votre demande peut concerner la fréquence des échanges, la compréhension des résultats, le suivi des factures ou la préparation d’un budget. Présentez les difficultés concrètes plutôt qu’une liste d’indicateurs imposés.', 'FIDUCONNECT vous aide à formuler la recherche. La disponibilité d’un accompagnement de pilotage et son périmètre restent à confirmer avec le partenaire ; nous ne produisons pas nous-mêmes de tableaux de bord.'] },
            { title: 'Préparer les bonnes questions', paragraphs: ['Quels chiffres sont disponibles et à quel rythme ? Qui prépare les informations et qui les commente ? Avec quels outils et quels délais ? Ces points permettent de mieux comprendre l’organisation proposée.', 'Demandez ce qui relève du suivi courant et ce qui constitue une prestation complémentaire. Comparez des périmètres et fréquences équivalents avant de vous engager.'] },
            { title: 'Garder une attente réaliste', paragraphs: ['Un tableau de bord n’est pas une garantie de rentabilité ni une recommandation d’investissement. Les analyses dépendent de la qualité des informations disponibles et du mandat accepté par le professionnel.', 'Pour la première demande, une description générale de votre activité suffit. Gardez vos comptes et documents confidentiels pour un échange adapté avec le partenaire.'] },
        ], related: [{ href: '/services/comptabilite', label: 'Comptabilité et organisation' }, { href: '/services/changer-fiduciaire', label: 'Repenser votre collaboration' }],
    },
    {
        path: '/tva-suisse', label: 'Préparer une demande TVA', title: 'TVA en Suisse : préparer votre échange avec un professionnel à Genève',
        description: 'Les informations générales à réunir pour discuter de la TVA de votre entreprise avec un professionnel à Genève, sans diagnostic fiscal en ligne.',
        heading: 'TVA : commencer par les bonnes informations.',
        intro: 'Cette page vous aide à préparer une demande de mise en relation. Elle ne détermine pas vos obligations fiscales et ne remplace pas un conseil adapté à votre activité.',
        sections: [
            { title: 'Décrire votre activité et vos échanges', paragraphs: ['Présentez les biens ou services proposés, les pays avec lesquels vous travaillez et votre organisation actuelle. Précisez si vous démarrez, si votre activité change ou si vous cherchez un suivi régulier.', 'Le professionnel pourra alors vous indiquer les éléments à examiner. Aucun seuil, taux ou traitement ne doit être appliqué à votre situation sur la seule base de cette page.'] },
            { title: 'Identifier la question et l’échéance', paragraphs: ['Votre besoin concerne-t-il un démarrage, une démarche existante, une demande de l’administration ou un changement d’organisation ? Signalez la date d’une éventuelle échéance dès le premier échange.', 'Pour consulter les règles et démarches officielles à jour, reportez-vous à l’Administration fédérale des contributions. Un professionnel doit apprécier leur application à votre cas.'] },
            { title: 'Clarifier le mandat avant de déléguer', paragraphs: ['Faites préciser les tâches prises en charge, les informations à fournir, les validations attendues et le calendrier. Vérifiez la disponibilité du professionnel avant de compter sur son intervention.', 'FIDUCONNECT organise l’orientation, sans effectuer de diagnostic TVA ni garantir une économie fiscale. Votre première demande ne vaut pas mandat ou prise en charge d’une échéance.'] },
        ], related: [{ href: '/services/tva', label: 'Rechercher un partenaire fiscalité & TVA' }, { href: 'https://www.estv.admin.ch/fr/taxe-sur-la-valeur-ajoutee', label: 'Informations officielles de l’AFC sur la TVA' }],
    },
    {
        path: '/ressources/changer-fiduciaire-geneve', label: 'Préparer un changement de fiduciaire', title: 'Changer de fiduciaire à Genève : préparer la transition',
        description: 'Attentes, mandat actuel, calendrier et reprise des dossiers : les points à clarifier avec les professionnels avant de changer de fiduciaire à Genève.',
        heading: 'Changer de fiduciaire : préparer, puis décider.',
        intro: 'Une nouvelle collaboration se prépare en identifiant ce qui doit changer et les points à organiser avec les professionnels concernés. Aucune continuité automatique n’est garantie par une simple mise en relation.',
        sections: [
            { title: 'Partir des difficultés concrètes', paragraphs: ['Distinguez le manque de disponibilité, la communication, le périmètre du mandat ou l’évolution de votre activité. Notez également ce qui fonctionne et que vous souhaitez conserver.', 'Présenter les mêmes attentes à plusieurs interlocuteurs permet de comparer des propositions sur une base plus claire, sans se limiter au montant des honoraires.'] },
            { title: 'Examiner le contrat avant une résiliation', paragraphs: ['Relisez les conditions de votre mandat actuel et faites confirmer les modalités applicables par le professionnel compétent. Il n’existe pas de délai de résiliation universel que FIDUCONNECT pourrait vous garantir.', 'Vous pouvez commencer à explorer une alternative sans résilier immédiatement. Précisez vos échéances et vérifiez la disponibilité du nouveau partenaire avant de décider.'] },
            { title: 'Cadrer la reprise des informations', paragraphs: ['Échangez sur l’inventaire des dossiers, les accès aux outils, les responsabilités de chacun et le calendrier de transmission. Les données salariales, comptables et fiscales nécessitent un moyen de transmission adapté.', 'Faites préciser les travaux de reprise inclus et leurs éventuels honoraires. FIDUCONNECT ne récupère pas votre dossier et ne contacte pas votre fiduciaire actuelle à la suite du formulaire.'] },
            { title: 'Confirmer la collaboration', paragraphs: ['Le périmètre du mandat, les modalités de suivi et les échéances doivent être convenus avec la fiduciaire. Ne considérez pas la mise en relation comme une promesse d’absence de risque ou de résultat fiscal.', 'La demande et l’orientation FIDUCONNECT restent gratuites et sans engagement. Vos coordonnées ne sont transmises au partenaire concerné qu’après l’appel et votre validation du rendez-vous.'] },
        ], related: [{ href: '/services/changer-fiduciaire', label: 'Votre recherche de nouveau partenaire' }, { href: '/services/comptabilite', label: 'Clarifier le suivi comptable attendu' }],
    },
];

export function getEditorial(path: string): Editorial {
    const page = editorialPages.find(page => page.path === path);
    if (!page) throw new Error('Unknown editorial path');
    return page;
}

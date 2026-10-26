import type { Editorial } from '@/components/SeoEditorialPage';

export const editorialPages: Editorial[] = [
{
    "path": "/ressources/honoraires-devis-fiduciaire-geneve",
    "label": "Comparer les honoraires fiduciaires",
    "title": "Honoraires fiduciaires à Genève : comparer les devis",
    "description": "Forfait, tarif horaire, reprise du dossier et suppléments : une grille pratique pour comparer des devis fiduciaires à Genève sur un périmètre clair.",
    "heading": "Honoraires d’une fiduciaire à Genève : comment comparer les devis ?",
    "intro": "Deux propositions peuvent afficher des montants différents sans couvrir le même travail. Avant de choisir une fiduciaire à Genève, il est utile de comprendre ce que chaque prix comprend, ce qui reste à votre charge et ce qui sera facturé séparément.",
    "introDetails": [
        "Ce guide vous propose une méthode de comparaison, une grille à remplir et des questions à poser. Il ne présente pas de tarif moyen : sans connaître les tâches confiées et l’état du dossier, un chiffre isolé ne permet pas de juger une offre."
    ],
    "sections": [
        {
            "title": "1. Donner la même description de votre besoin",
            "paragraphs": [
                "Commencez par une courte fiche que vous utiliserez pour chaque demande. Décrivez votre activité, votre forme d’entreprise, les outils en place et les tâches que vous souhaitez déléguer. Ajoutez un ordre de grandeur du volume de documents, l’effectif si les salaires sont concernés et la fréquence de suivi attendue.",
                "Précisez également la période à prendre en charge. Un dossier tenu à jour et une comptabilité comportant des périodes à reprendre ne correspondent pas à la même demande. Si vous ne connaissez pas encore l’état exact des travaux, indiquez-le au lieu de présenter une estimation comme une certitude.",
                "Décidez ce que vous souhaitez garder en interne : classement des pièces, facturation, préparation de certaines informations ou validation des travaux. Le Portail PME du SECO présente notamment la possibilité d’une organisation mêlant travail interne et intervention d’un spécialiste externe. Cette répartition doit être explicitée dans la proposition. [Source : Portail PME du SECO](https://www.kmu.admin.ch/fr/tenir-soi-meme-la-comptabilite-ou-la-sous-traiter).",
                "Au stade du premier contact FIDUCONNECT, une description générale suffit. Ne joignez pas de factures, de relevés bancaires ou de dossiers salariaux confidentiels. Le professionnel précisera ensuite les pièces dont il a besoin et le canal adapté pour les recevoir."
            ]
        },
        {
            "title": "2. Comprendre comment le prix est calculé",
            "paragraphs": [
                "Si une proposition prévoit un forfait, demandez les tâches et les hypothèses couvertes : période, volume de documents, nombre de collaborateurs concernés, échanges inclus ou état initial du dossier. Faites préciser ce qui se passe si ces hypothèses changent. Le mot « forfait » ne décrit pas, à lui seul, toutes les prestations comprises.",
                "Pour une facturation au temps passé, demandez comment les interventions sont comptabilisées, si les taux diffèrent selon les travaux et comment obtenir une estimation pour le périmètre envisagé. Distinguez cette estimation d’un plafond effectivement convenu. Demandez comment vous serez informé si le travail prévu augmente.",
                "Une proposition peut aussi associer un montant récurrent et des interventions ponctuelles. L’essentiel est de pouvoir identifier les deux, sans supposer qu’une formule est toujours plus avantageuse que l’autre.",
                "Questions à poser :"
            ],
            "questions": [
                "Le montant couvre-t-il une période définie et des volumes précis ?",
                "Quelles prestations sont incluses, exclues ou encore à chiffrer ?",
                "Quels changements peuvent conduire à revoir le prix ?",
                "Comment serai-je informé d’un supplément et comment sera-t-il validé ?",
                "Les montants sont-ils présentés hors taxes ou toutes taxes comprises ?"
            ]
        },
        {
            "title": "3. Utiliser une grille commune pour lire les devis",
            "paragraphs": [
                "Pour chaque ligne, relevez la réponse de chaque cabinet : « inclus », « en supplément », « non proposé » ou « à confirmer ». Une case vide est une question à poser ; ce n’est pas une prestation implicitement comprise.",
                "Cette grille est une aide à la lecture proposée par FIDUCONNECT. Elle ne décrit pas un mandat type obligatoire et ne signifie pas que chaque entreprise a besoin de toutes ces prestations."
            ],
            "table": {
                "caption": "Grille de comparaison des devis fiduciaires",
                "columns": [
                    "Point à comparer",
                    "Ce qu’il faut relever",
                    "Question à faire préciser"
                ],
                "rows": [
                    [
                        "Périmètre courant",
                        "Tâches, périodes et volumes pris en compte",
                        "Quelle partie du travail reste à mon entreprise ?"
                    ],
                    [
                        "Clôture et travaux annuels",
                        "Travaux explicitement nommés dans l’offre",
                        "Sont-ils compris dans le montant récurrent ou chiffrés à part ?"
                    ],
                    [
                        "TVA et fiscalité, si concernées",
                        "Démarches réellement acceptées",
                        "Qui prépare, contrôle, valide et transmet les éléments ?"
                    ],
                    [
                        "Salaires, si concernés",
                        "Effectif et opérations couverts",
                        "Les entrées, sorties ou demandes ponctuelles sont-elles prévues ?"
                    ],
                    [
                        "Échanges et suivi",
                        "Rendez-vous, réponses et comptes rendus prévus",
                        "Quels échanges sont compris et lesquels peuvent être facturés ?"
                    ],
                    [
                        "Outils et accès",
                        "Logiciels, abonnements et accès nécessaires",
                        "Qui règle chaque abonnement et quels accès est-ce que je conserve ?"
                    ],
                    [
                        "Mise en place et reprise",
                        "Analyse initiale, intégration ou travaux de reprise annoncés",
                        "Quels frais sont ponctuels et lesquels reviennent ensuite ?"
                    ],
                    [
                        "Travaux complémentaires",
                        "Mode de chiffrage et de validation",
                        "Quand m’informez-vous d’un besoin hors périmètre ?"
                    ]
                ]
            }
        },
        {
            "title": "4. Séparer démarrage et fonctionnement courant",
            "paragraphs": [
                "Faites distinguer les frais liés au lancement de la collaboration et ceux du suivi régulier. Une reprise de dossier, une mise en place d’outil ou un travail de remise en ordre mérite une ligne identifiable lorsqu’il est prévu.",
                "Un devis avec des frais de démarrage n’est pas automatiquement moins intéressant. À l’inverse, un montant mensuel plus bas ne suffit pas à établir que le coût total sera inférieur. La comparaison doit porter sur la même période et sur des prestations équivalentes.",
                "Pour préparer votre budget, regroupez les montants déjà chiffrés sur une période commune, puis notez séparément les travaux estimés et les éléments encore inconnus. Ne transformez pas une estimation en coût garanti, et n’additionnez pas des montants hors taxes et toutes taxes comprises sans clarification.",
                "Si vous changez de prestataire, faites aussi préciser qui termine les travaux en cours et qui prend en charge la première période du nouveau mandat. Le [guide pour préparer un changement de fiduciaire](/ressources/changer-fiduciaire-geneve) détaille les questions d’inventaire et de transition."
            ]
        },
        {
            "title": "5. Un exemple pour éviter une fausse comparaison",
            "paragraphs": [
                "Exemple fictif : une petite entreprise genevoise reçoit deux propositions pour sa comptabilité. La première présente un montant mensuel, mais renvoie les travaux annuels à une estimation séparée. La seconde présente une enveloppe annuelle comprenant certains de ces travaux, tandis que l’outil utilisé reste à la charge de l’entreprise.",
                "Comparer simplement le montant mensuel de la première offre avec l’enveloppe annuelle de la seconde ne permet pas de choisir. L’entreprise demande d’abord à chaque interlocuteur de préciser la même période, les travaux annuels, les outils et les échanges compris. Elle demande ensuite le chiffrage des lignes manquantes.",
                "La conclusion n’est pas que l’une des formules serait toujours préférable. Le point utile est d’obtenir des propositions comparables avant de décider. Cet exemple n’est ni un cas client ni une indication des pratiques de tous les cabinets."
            ]
        },
        {
            "title": "6. Faire confirmer les points encore flous",
            "paragraphs": [
                "Un terme comme « accompagnement » ou « suivi complet » peut recouvrir des attentes différentes. Demandez des exemples de tâches prises en charge et de demandes qui sortiraient du périmètre.",
                "Si une partie du dossier doit être examinée avant de pouvoir être chiffrée, demandez comment cet examen sera organisé et s’il est lui-même payant. Faites préciser le prochain point de décision avant de supposer qu’un travail complémentaire est accepté ou compris.",
                "Avant de vous engager, vérifiez que vous pouvez répondre à ces questions :"
            ],
            "questions": [
                "Est-ce que je sais ce que je confie et ce que je garde en interne ?",
                "Les prestations, les exclusions et les hypothèses de prix sont-elles écrites ?",
                "Les frais de démarrage sont-ils distincts du suivi courant ?",
                "Les travaux annuels et les outils ont-ils été clarifiés ?",
                "Le traitement des suppléments et des changements de volume est-il compréhensible ?",
                "L’interlocuteur, le démarrage et les échéances acceptées sont-ils confirmés ?"
            ]
        },
        {
            "title": "7. Où FIDUCONNECT intervient",
            "paragraphs": [
                "Vous pouvez nous décrire votre activité et les tâches que vous souhaitez confier. Nous clarifions votre recherche et vous orientons vers un partenaire de notre réseau à Genève. Nous ne fixons pas les honoraires des fiduciaires, ne garantissons pas une baisse de prix et ne comparons pas l’ensemble du marché.",
                "FIDUCONNECT est rémunéré par ses partenaires fiduciaires. Votre demande, le rappel et l’orientation restent gratuits et sans engagement pour vous. Le mandat, son périmètre et les honoraires sont à convenir directement avec le partenaire. Vos coordonnées ne lui sont transmises qu’après notre échange et votre validation du rendez-vous."
            ]
        }
    ],
    "related": [
        {
            "href": "/ressources/choisir-fiduciaire-geneve",
            "label": "Les critères pour choisir une fiduciaire à Genève"
        },
        {
            "href": "/services/comptabilite",
            "label": "Rechercher un partenaire pour votre comptabilité"
        },
        {
            "href": "/contact",
            "label": "Décrire votre besoin à FIDUCONNECT"
        }
    ],
    "article": {
        "published": "2026-10-26",
        "displayDate": "26 octobre 2026",
        "sources": [
            {
                "href": "https://www.kmu.admin.ch/fr/tenir-soi-meme-la-comptabilite-ou-la-sous-traiter",
                "label": "Portail PME du SECO — Tenir soi-même la comptabilité ou la sous-traiter ?",
                "context": "Repères sur la répartition des tâches entre une entreprise et un intervenant externe. Cette source ne constitue pas un barème d’honoraires et ne valide pas les devis d’un partenaire. La méthode de comparaison, la grille et l’exemple fictif sont proposés par FIDUCONNECT. Ce guide ne fournit pas de conseil comptable, fiscal ou juridique personnalisé et ne remplace pas l’examen de votre situation par le professionnel concerné."
            }
        ]
    }
},
    {
        path: '/ressources/choisir-fiduciaire-geneve', label: 'Choisir une fiduciaire à Genève',
        title: 'Choisir une fiduciaire à Genève : les critères',
        description: 'Mandat, interlocuteur, compétences, outils et honoraires : les critères et questions pour comparer des fiduciaires à Genève avant de vous engager.',
        heading: 'Comment choisir une fiduciaire à Genève ?',
        intro: 'Le bon partenaire n’est pas forcément celui qui propose le plus de prestations ou le prix le plus bas. C’est celui dont le mandat, les échanges et les méthodes correspondent à votre entreprise. Voici une démarche concrète pour comparer des propositions.',
        article: {
            published: '2026-10-17', displayDate: '17 octobre 2026',
            sources: [
                { href: 'https://www.kmu.admin.ch/fr/tenir-soi-meme-la-comptabilite-ou-la-sous-traiter', label: 'Portail PME du SECO — Tenir soi-même la comptabilité ou la sous-traiter ?', context: 'Pour réfléchir à la répartition du travail entre l’entreprise et un spécialiste externe. Le SECO souligne aussi l’importance de la confiance et des qualifications dans le choix du partenaire.' },
                { href: 'https://www.ge.ch/document/guide-entreprendre-geneve', label: 'Canton de Genève — Guide Entreprendre à Genève', context: 'Pour situer votre recherche dans le contexte genevois : le guide aborde notamment la comptabilité, la révision, la fiscalité et les assurances sociales. Les règles applicables à votre situation sont à vérifier avec le professionnel concerné.' },
            ],
        },
        sections: [
            { title: '1. Définir ce que vous souhaitez déléguer', paragraphs: [
                'Avant de demander un devis, notez ce que vous faites aujourd’hui et ce qui vous prend du temps. Cherchez-vous une tenue comptable régulière, une clôture annuelle, un accompagnement TVA, la gestion des salaires ou simplement des explications plus claires sur vos chiffres ?',
                'La répartition n’est pas forcément « tout en interne » ou « tout à la fiduciaire ». Le Portail PME du SECO présente aussi une organisation mixte. L’important est de décider qui prépare les pièces, qui les traite, qui effectue les contrôles et qui valide les démarches.',
                'Par exemple, un indépendant qui classe déjà ses justificatifs n’a pas les mêmes attentes qu’une Sàrl avec plusieurs salariés qui souhaite un suivi mensuel. Décrivez votre volume d’activité et votre organisation sans transmettre de documents confidentiels au stade de la première recherche.',
            ] },
            { title: '2. Identifier votre interlocuteur réel', paragraphs: [
                'Un premier rendez-vous convaincant ne suffit pas à décrire la relation au quotidien. Demandez qui suivra effectivement votre dossier, comment joindre cette personne et comment les échanges sont organisés pendant ses absences.',
                'Si vous souhaitez comprendre vos résultats régulièrement, faites préciser la fréquence des points de suivi et ce qu’ils comprennent. Un entretien annuel et un échange mensuel ne répondent pas au même besoin. Demandez aussi comment les demandes urgentes sont traitées, sans considérer qu’une disponibilité immédiate est acquise.',
            ], questions: ['Qui sera responsable de mon dossier au quotidien ?', 'Par quel canal communiquons-nous et dans quels délais habituels ?', 'Les rendez-vous de suivi sont-ils inclus dans le mandat ?'] },
            { title: '3. Vérifier les compétences adaptées à votre activité', paragraphs: [
                'Présentez ce qui rend votre activité particulière : type de clients, salariés, outils utilisés, opérations à l’étranger ou changement de structure envisagé. Demandez au professionnel de vous expliquer comment il aborderait ces sujets et quelles compétences il mobiliserait.',
                'Les diplômes annoncés et l’appartenance à une association professionnelle sont des éléments à vérifier, notamment dans les annuaires des organismes concernés. Ils ne remplacent pas un échange sur la personne qui interviendra et le périmètre qu’elle accepte. Une qualification mentionnée sur un site ne signifie pas que toutes les prestations vous sont proposées.',
                'Pour une entreprise genevoise, demandez notamment comment le cabinet organise les démarches cantonales pertinentes pour votre dossier. Une adresse proche peut faciliter les rendez-vous, mais elle ne suffit pas à établir la qualité ou l’adéquation du suivi.',
            ] },
            { title: '4. Comparer les honoraires sur le même périmètre', paragraphs: [
                'Deux montants ne sont comparables que si les tâches et les hypothèses sont comparables. Envoyez une description similaire à chaque interlocuteur : volume indicatif de pièces, nombre de salariés, état des dossiers, outils en place et rythme de suivi souhaité.',
                'Demandez une proposition écrite distinguant les prestations comprises, les travaux ponctuels et les suppléments possibles. Faites préciser le mode de facturation, les hypothèses du forfait éventuel et la façon dont un dépassement vous serait signalé. Il n’est pas utile de chercher un prix universel sans connaître votre dossier.',
            ], questions: ['La clôture, les échanges courants et les démarches discutées sont-ils inclus ?', 'La mise en place, la reprise du dossier ou le logiciel sont-ils facturés à part ?', 'Comment sont chiffrés et validés les travaux supplémentaires ?'] },
            { title: '5. Clarifier les outils et les accès aux informations', paragraphs: [
                'Expliquez si vous souhaitez garder votre logiciel, transmettre des pièces numérisées ou consulter vos chiffres à distance. Vérifiez la compatibilité réelle de l’organisation proposée, plutôt que de vous fier seulement à la promesse d’un service « digital ».',
                'Faites préciser qui possède les accès, ce que vous pouvez consulter, les possibilités d’export et la marche à suivre à la fin du mandat. Demandez aussi quel canal utiliser pour les informations sensibles. Évitez de partager des mots de passe ou des dossiers complets dans une simple demande de devis.',
            ] },
            { title: '6. Préparer le démarrage avant de signer', paragraphs: [
                'Un mandat clair doit permettre de comprendre les tâches confiées, les informations attendues de votre part, les validations, les honoraires et le calendrier convenu. Demandez quelles seront les premières étapes et ce qui pourrait retarder le démarrage.',
                'Si vous changez de fiduciaire, signalez les échéances connues et faites organiser la reprise avec les professionnels concernés. Vérifiez les modalités de votre contrat actuel avant toute résiliation. La disponibilité du nouveau cabinet et la transmission des dossiers doivent être confirmées : une prise de contact ne vaut pas prise en charge.',
            ] },
            { title: '7. La liste à garder pour votre premier entretien', paragraphs: [
                'Préparez une courte fiche identique pour chaque rendez-vous. Notez les réponses obtenues et les points encore flous. Vous pourrez ainsi comparer une manière de travailler, pas seulement une brochure ou un montant.',
            ], questions: ['Mon besoin principal et les tâches que je garde en interne sont-ils compris ?', 'L’interlocuteur et les modalités de suivi sont-ils identifiés ?', 'Le périmètre, les exclusions et les suppléments sont-ils écrits ?', 'Le fonctionnement des outils et mes accès sont-ils clairs ?', 'Le démarrage, les documents attendus et les échéances sont-ils convenus ?'] },
            { title: 'Comment FIDUCONNECT peut vous aider', paragraphs: [
                'Vous n’avez pas besoin de rédiger seul un cahier des charges complet. Décrivez votre activité et votre attente principale : nous vous rappelons gratuitement sous 24 heures pour clarifier votre recherche et vous orienter vers un partenaire de notre réseau à Genève.',
                'FIDUCONNECT n’est pas une fiduciaire et ne compare pas l’ensemble du marché. Notre service de mise en relation est rémunéré par les partenaires fiduciaires ; la demande, le rappel et l’orientation restent gratuits pour vous. Vos coordonnées ne sont transmises qu’après votre appel et votre validation du rendez-vous. Le mandat et les honoraires du partenaire restent à convenir directement avec lui.',
            ] },
        ],
        related: [{ href: '/ressources/honoraires-devis-fiduciaire-geneve', label: 'Comparer les honoraires et les devis' }, { href: '/services/comptabilite', label: 'Préciser votre besoin de suivi comptable' }, { href: '/ressources/changer-fiduciaire-geneve', label: 'Préparer un changement de fiduciaire' }, { href: '/contact', label: 'Décrire votre recherche à FIDUCONNECT' }],
    },
    {
        path: '/a-propos', label: 'À propos', title: 'La mise en relation fiduciaire à Genève',
        description: 'Découvrez le rôle de FIDUCONNECT : accompagner les entreprises et indépendants du canton de Genève dans leur recherche de fiduciaire.',
        heading: 'Un besoin compris. Une recherche plus claire.',
        intro: 'FIDUCONNECT aide les entreprises et les indépendants du canton de Genève à préciser leur recherche avant une mise en relation avec un partenaire fiduciaire.',
        sections: [
            { title: 'Une approche locale, à Genève', paragraphs: ['FIDUCONNECT accompagne les entreprises et les indépendants du canton de Genève dans leur recherche d’un partenaire fiduciaire adapté à leurs besoins.', 'Le premier échange sert à comprendre votre activité, votre organisation, vos attentes et les échéances à signaler. Il ne demande pas de documents comptables ou de dossiers confidentiels.'] },
            { title: 'Un intermédiaire, pas une fiduciaire', paragraphs: ['Nous ne tenons pas votre comptabilité, ne préparons pas vos déclarations et ne fournissons pas de conseil comptable, fiscal ou juridique personnalisé. Ces prestations relèvent du professionnel que vous choisissez de mandater.', 'Notre orientation porte sur des partenaires de notre réseau, sans comparaison exhaustive du marché. Nous ne promettons ni économie chiffrée ni résultat fiscal.'] },
            { title: 'Comment notre service est financé', paragraphs: ['FIDUCONNECT est rémunéré par ses partenaires fiduciaires. Votre demande, le rappel et l’orientation sont gratuits et sans engagement pour vous. Notre réseau ne représente pas l’ensemble des fiduciaires du marché genevois.', 'Cette rémunération ne remplace pas les honoraires du partenaire pour les prestations que vous décidez de lui confier. Demandez-lui un périmètre et des conditions clairs avant d’accepter un mandat.'] },
            { title: 'Une décision qui vous appartient', paragraphs: ['Votre demande, le rappel et l’orientation FIDUCONNECT sont gratuits et sans engagement. Les honoraires et conditions d’un éventuel mandat sont à convenir directement avec la fiduciaire.', 'Nous échangeons avec vous avant toute transmission de coordonnées. Vous validez le rendez-vous avec le partenaire concerné et restez libre de ne pas poursuivre.'] },
        ], related: [{ href: '/comment-ca-marche', label: 'Comprendre les étapes' }, { href: '/mentions-legales', label: 'Identité et mentions légales' }],
    },
    {
        path: '/comment-ca-marche', label: 'Comment ça marche', title: 'Mise en relation fiduciaire : comment ça marche ?',
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
        path: '/services/pilotage', label: 'Suivi et pilotage', title: 'Suivi comptable et pilotage à Genève',
        description: 'Tableaux de bord, échanges comptables et visibilité sur l’activité : préparez votre recherche de partenaire pour le suivi de votre entreprise à Genève.',
        heading: 'Suivi comptable à Genève : des échanges utiles.',
        intro: 'Vous souhaitez mieux comprendre les informations de votre entreprise et convenir d’un suivi régulier avec un professionnel ? Commençons par préciser les décisions que vous devez préparer.',
        sections: [
            { title: 'Définir ce que vous souhaitez suivre', paragraphs: ['Votre demande peut concerner la fréquence des échanges, la compréhension des résultats, le suivi des factures ou la préparation d’un budget. Présentez les difficultés concrètes plutôt qu’une liste d’indicateurs imposés.', 'FIDUCONNECT vous aide à formuler la recherche. La disponibilité d’un accompagnement de pilotage et son périmètre restent à confirmer avec le partenaire ; nous ne produisons pas nous-mêmes de tableaux de bord.'] },
            { title: 'Préparer les bonnes questions', paragraphs: ['Quels chiffres sont disponibles et à quel rythme ? Qui prépare les informations et qui les commente ? Avec quels outils et quels délais ? Ces points permettent de mieux comprendre l’organisation proposée.', 'Demandez ce qui relève du suivi courant et ce qui constitue une prestation complémentaire. Comparez des périmètres et fréquences équivalents avant de vous engager.'] },
            { title: 'Garder une attente réaliste', paragraphs: ['Un tableau de bord n’est pas une garantie de rentabilité ni une recommandation d’investissement. Les analyses dépendent de la qualité des informations disponibles et du mandat accepté par le professionnel.', 'Pour la première demande, une description générale de votre activité suffit. Gardez vos comptes et documents confidentiels pour un échange adapté avec le partenaire.'] },
        ], related: [{ href: '/services/comptabilite', label: 'Comptabilité et organisation' }, { href: '/services/changer-fiduciaire', label: 'Repenser votre collaboration' }],
    },
    {
        path: '/tva-suisse', label: 'Préparer une demande TVA', title: 'TVA : préparer un rendez-vous à Genève',
        description: 'Les informations générales à réunir pour discuter de la TVA de votre entreprise avec un professionnel à Genève, sans diagnostic fiscal en ligne.',
        heading: 'TVA : préparer votre rendez-vous à Genève.',
        intro: 'Cette page vous aide à préparer une demande de mise en relation. Elle ne détermine pas vos obligations fiscales et ne remplace pas un conseil adapté à votre activité.',
        article: {
            updated: '2026-10-17', displayUpdatedDate: '17 octobre 2026',
            sources: [{ href: 'https://www.estv.admin.ch/fr/taxe-sur-la-valeur-ajoutee', label: 'Administration fédérale des contributions — TVA', context: 'Point d’entrée officiel pour l’assujettissement, les décomptes, les paiements et les démarches TVA. La préparation de rendez-vous ci-dessous est proposée par FIDUCONNECT ; elle ne permet pas de trancher votre situation fiscale.' }],
        },
        sections: [
            { title: 'Décrire votre activité et vos échanges', paragraphs: ['Présentez les biens ou services proposés, les pays avec lesquels vous travaillez et votre organisation actuelle. Précisez si vous démarrez, si votre activité change ou si vous cherchez un suivi régulier.', 'Le professionnel pourra alors vous indiquer les éléments à examiner. Aucun seuil, taux ou traitement ne doit être appliqué à votre situation sur la seule base de cette page.'] },
            { title: 'Identifier la question et l’échéance', paragraphs: ['Votre besoin concerne-t-il un démarrage, une démarche existante, une demande de l’administration ou un changement d’organisation ? Signalez la date d’une éventuelle échéance dès le premier échange.', 'Pour consulter les règles et démarches officielles à jour, reportez-vous à l’Administration fédérale des contributions. Un professionnel doit apprécier leur application à votre cas.'] },
            { title: 'Préparer les informations, sans transmettre un dossier complet', paragraphs: [
                'Pour le premier appel, une synthèse de votre activité, des pays concernés et du sujet à résoudre suffit. Distinguez les informations que vous connaissez de celles que vous souhaitez faire vérifier. Ne déduisez pas un traitement TVA du seul pays de votre client ou du libellé d’une facture.',
                'Le tableau sert à préparer le rendez-vous avec le professionnel. Il ne s’agit ni d’une liste de pièces obligatoires, ni d’une demande de documents à envoyer au formulaire FIDUCONNECT. Conservez les justificatifs confidentiels jusqu’à ce que le partenaire confirme un canal adapté.',
            ], table: { caption: 'Informations à préparer pour votre rendez-vous TVA', columns: ['Sujet', 'À préparer pour le professionnel', 'Question à lui poser'], rows: [
                ['Votre activité', 'Une description des biens ou services, du type de clientèle et des pays concernés.', 'Quels points de mon activité devez-vous examiner en priorité ?'],
                ['Votre organisation actuelle', 'Qui établit les factures, tient la comptabilité et suit les démarches existantes.', 'Quelles tâches pouvez-vous reprendre, et lesquelles restent à ma charge ?'],
                ['Vos documents disponibles', 'Un inventaire des factures, décomptes ou courriers déjà en votre possession.', 'Quels justificatifs sont nécessaires, et comment les transmettre en sécurité ?'],
                ['Une demande ou une échéance', 'La date indiquée et une description générale de la demande reçue.', 'Pouvez-vous examiner la demande et confirmer votre disponibilité avant cette date ?'],
            ] } },
            { title: 'Poser les questions qui rendent le mandat clair', paragraphs: [
                'Deux propositions ne couvrent pas forcément les mêmes tâches. Faites distinguer l’examen de votre situation, la préparation des éléments, leur validation et les démarches auprès de l’administration. Ne présumez pas qu’une première conversation inclut toutes ces prestations.',
            ], questions: [
                'Qui analyse ma situation et m’explique les points à confirmer ?',
                'Quelles tâches sont comprises dans le prix, et lesquelles sont facturées séparément ?',
                'Qui prépare, vérifie et valide les informations avant une transmission ?',
                'Qui suit les demandes de l’administration et me signale les actions attendues ?',
                'Quelles sont vos disponibilités et à quelle fréquence devons-nous échanger ?',
                'Comment seront organisés les accès et la transmission sécurisée des documents ?',
            ] },
            { title: 'Clarifier le mandat avant de déléguer', paragraphs: ['Faites préciser les tâches prises en charge, les informations à fournir, les validations attendues et le calendrier. Vérifiez la disponibilité du professionnel avant de compter sur son intervention.', 'FIDUCONNECT organise l’orientation, sans effectuer de diagnostic TVA ni garantir une économie fiscale. Votre première demande ne vaut pas mandat ou prise en charge d’une échéance.'] },
            { title: 'Votre checklist avant le premier échange', paragraphs: [
                'L’objectif est de repartir avec un prochain pas explicite : un examen à réaliser, les documents à réunir, un devis à recevoir ou un mandat à discuter. Une mise en relation ne confirme pas votre assujettissement et ne suspend aucune échéance.',
            ], questions: [
                'J’ai résumé mon activité et les pays avec lesquels je travaille.',
                'J’ai identifié ma question principale et les informations encore incertaines.',
                'J’ai noté les échéances connues et qui les suit actuellement.',
                'J’ai préparé un inventaire des documents disponibles, sans envoyer de pièces confidentielles au premier contact.',
                'Je vais faire confirmer le périmètre, les honoraires, les responsabilités et la disponibilité du partenaire.',
            ] },
        ], related: [{ href: '/services/tva', label: 'Rechercher un partenaire fiscalité & TVA' }, { href: 'https://www.estv.admin.ch/fr/taxe-sur-la-valeur-ajoutee', label: 'Informations officielles de l’AFC sur la TVA' }],
    },
    {
        path: '/ressources/changer-fiduciaire-geneve', label: 'Préparer un changement de fiduciaire', title: 'Changer de fiduciaire : la checklist de transition',
        description: 'Changer de fiduciaire à Genève : checklist, dossiers, accès et étapes à organiser avec les professionnels pour préparer votre transition.',
        heading: 'Changer de fiduciaire à Genève : préparer la transition.',
        intro: 'Vous envisagez une nouvelle collaboration, mais ne savez pas par où commencer ? Cette méthode vous aide à organiser vos questions, la reprise des informations et les validations avec les professionnels, avant de décider du changement.',
        article: {
            updated: '2026-10-17', displayUpdatedDate: '17 octobre 2026',
            sources: [
                { href: 'https://www.kmu.admin.ch/fr/tenir-soi-meme-la-comptabilite-ou-la-sous-traiter', label: 'Portail PME du SECO — Tenir soi-même la comptabilité ou la sous-traiter ?', context: 'Pour réfléchir à la répartition des tâches et au choix d’un partenaire de confiance. La checklist de transition de ce guide est proposée par FIDUCONNECT, pas par le SECO.' },
                { href: 'https://www.ge.ch/document/guide-entreprendre-geneve', label: 'Canton de Genève — Guide Entreprendre à Genève', context: 'Un point d’entrée officiel sur la gestion d’entreprise, notamment la comptabilité, la fiscalité et les assurances sociales. Il ne fixe pas le calendrier de votre changement de prestataire.' },
            ],
        },
        sections: [
            { title: '1. Définir ce qui doit changer', paragraphs: [
                'Avant de comparer des cabinets, notez les difficultés que vous rencontrez : réponses peu claires, manque de disponibilité, outils inadaptés ou tâches qui ne correspondent plus à votre activité. Distinguez un incident ponctuel d’une attente durable.',
                'Transformez chaque difficulté en critère concret. « Je veux davantage de suivi » peut devenir « je souhaite un point trimestriel avec un interlocuteur identifié ». Notez aussi ce qui fonctionne et que vous voulez conserver. Une nouvelle fiduciaire ne peut pas deviner ces priorités.',
            ], questions: ['Quelles tâches est-ce que je souhaite déléguer ou garder en interne ?', 'Quel interlocuteur, quels outils et quelle fréquence d’échange me conviendraient ?', 'Quelles échéances dois-je signaler dès la première conversation ?'] },
            { title: '2. Clarifier le mandat avant de résilier', paragraphs: [
                'Vous pouvez explorer une alternative sans annoncer immédiatement une résiliation. Relisez votre accord actuel et faites confirmer les modalités de fin du mandat, les travaux encore prévus et les questions de facturation par les professionnels concernés. FIDUCONNECT ne peut pas déterminer le délai applicable à votre contrat.',
                'Avec le futur partenaire, demandez une proposition écrite précisant le périmètre, les exclusions, l’interlocuteur et les conditions de reprise. Faites distinguer les honoraires récurrents des travaux de démarrage ou de remise en ordre. Un prix annoncé ne permet pas, seul, de comparer deux offres.',
            ], questions: ['Qui termine les travaux déjà engagés et jusqu’à quelle période ?', 'Qui reprend le suivi, à partir de quand et sous quelles conditions ?', 'Quels coûts de reprise, exports ou logiciels doivent être clarifiés ?'] },
            { title: '3. Faire l’inventaire des dossiers et des accès', paragraphs: [
                'Préparez avec les interlocuteurs un inventaire des informations utiles à la reprise. Le tableau suivant est une base de discussion, à adapter à votre activité et au mandat : ce n’est ni une liste d’obligations ni une demande de nous envoyer vos dossiers.',
                'Pour chaque élément, identifiez qui le détient, le format disponible, le destinataire et la manière de confirmer sa réception. Un accès à un outil ne remplace pas toujours un export exploitable. Faites vérifier au nouveau partenaire ce dont il a réellement besoin.',
            ], table: { caption: 'Inventaire de reprise à adapter avec les professionnels', columns: ['Sujet', 'Éléments à identifier', 'Point à confirmer'], rows: [
                ['Comptabilité', 'Dossiers, pièces, derniers états disponibles et travaux en cours.', 'Période couverte, format des exports et informations manquantes.'],
                ['TVA et fiscalité', 'Démarches suivies, échanges en cours et échéances connues.', 'Interlocuteur responsable de chaque sujet avant et après la reprise.'],
                ['Salaires, si concernés', 'Organisation de la paie, travaux en cours et accès autorisés.', 'Canal sécurisé et périmètre strictement nécessaire des données transmises.'],
                ['Logiciels et accès', 'Outils comptables, facturation et droits accordés aux intervenants.', 'Propriétaire des comptes, accès à maintenir puis à retirer et possibilité d’export.'],
            ] } },
            { title: '4. Convenir d’un calendrier de transition', paragraphs: [
                'Il n’existe pas de calendrier universel de changement. Votre activité, les travaux en cours, les engagements contractuels et la disponibilité du nouveau cabinet déterminent l’organisation possible. Demandez un enchaînement d’étapes et des validations, plutôt qu’une date de bascule supposée acquise.',
                'Commencez par confirmer le périmètre et la disponibilité, puis faites préciser les modalités de fin de collaboration. Organisez ensuite la transmission et son contrôle avant de valider le démarrage effectif. Pour chaque échéance proche, faites nommer la personne qui accepte de s’en charger. Si une responsabilité reste floue, demandez sa clarification avant de compter sur une intervention.',
            ], questions: ['Avant la décision : attentes, proposition et disponibilité confirmées.', 'Avant la transmission : modalités de fin du mandat et responsabilités clarifiées.', 'Pendant la reprise : inventaire, réception et éléments manquants vérifiés.', 'Au démarrage : première période traitée et prochain point de suivi convenus.'] },
            { title: '5. Sécuriser la transmission et contrôler la reprise', paragraphs: [
                'Les dossiers comptables et salariaux peuvent contenir des informations sensibles. Faites convenir d’un canal adapté entre les destinataires autorisés. Évitez d’envoyer un dossier complet dans un formulaire de mise en relation ou de partager un mot de passe commun par e-mail.',
                'Quand l’outil le permet, privilégiez des accès individuels et vérifiez avec les professionnels les droits nécessaires. Le retrait d’un ancien accès doit être coordonné avec la continuité du travail et la vérification de vos propres accès : ne supprimez rien précipitamment.',
                'Prévoyez un point de contrôle après la transmission. Demandez quels éléments ont été reçus, lesquels restent manquants et qui doit les fournir. La réception d’un dossier ne signifie pas automatiquement que son contenu a déjà été analysé ou que toutes les échéances sont prises en charge.',
            ] },
            { title: '6. Un exemple pour préparer la discussion', paragraphs: [
                'Exemple fictif : une PME genevoise veut conserver son logiciel, déléguer le suivi courant et mieux comprendre ses chiffres. Elle identifie d’abord ses priorités et les dates qu’elle connaît. Le cabinet envisagé vérifie la compatibilité de l’outil et décrit son accompagnement ainsi que les travaux de reprise.',
                'L’entreprise fait ensuite clarifier avec les interlocuteurs la dernière période traitée par l’ancien partenaire, la première période du nouveau et le responsable des démarches en cours. Une transmission est organisée, suivie d’un contrôle des éléments reçus et d’un premier rendez-vous de suivi. Cet exemple illustre une démarche ; il ne fixe ni durée, ni prix, ni résultat garanti.',
            ] },
            { title: '7. La checklist avant de valider le changement', paragraphs: ['Gardez ces points à portée de main lors de vos échanges. Une case encore incertaine est une question à résoudre avec le professionnel, pas un motif pour supposer que la reprise est impossible.'], questions: [
                'Mes attentes et le périmètre du nouveau mandat sont écrits.',
                'La disponibilité, les honoraires et les travaux de reprise ont été précisés.',
                'Les modalités de fin du mandat actuel ont été clarifiées.',
                'Les périodes traitées et le responsable de chaque échéance sont identifiés.',
                'L’inventaire, les accès et le canal de transmission sont convenus.',
                'Les éléments reçus ou manquants seront vérifiés lors d’un point de reprise.',
                'Le premier échange de suivi avec le nouveau partenaire est prévu.',
            ] },
            { title: 'Comment FIDUCONNECT vous accompagne', paragraphs: [
                'Vous pouvez nous parler de votre recherche avant de prendre une décision de résiliation. Nous clarifions votre besoin et vous orientons vers un partenaire de notre réseau à Genève. Nous ne comparons pas toutes les fiduciaires du canton et ne réalisons pas la reprise de votre dossier.',
                'La demande, le rappel et l’orientation sont gratuits et sans engagement pour vous ; FIDUCONNECT est rémunéré par les partenaires fiduciaires. Vos coordonnées ne sont transmises qu’après l’appel et votre validation du rendez-vous. Le mandat, les honoraires et la disponibilité restent à convenir directement avec le partenaire. Le formulaire ne déclenche ni résiliation ni contact avec votre fiduciaire actuelle.',
            ] },
        ], related: [{ href: '/services/changer-fiduciaire', label: 'Rechercher un nouveau partenaire à Genève' }, { href: '/ressources/choisir-fiduciaire-geneve', label: 'Comparer les critères de choix d’une fiduciaire' }, { href: '/services/comptabilite', label: 'Clarifier le suivi comptable attendu' }],
    },
];

export function getEditorial(path: string): Editorial {
    const page = editorialPages.find(page => page.path === path);
    if (!page) throw new Error('Unknown editorial path');
    return page;
}

export type ServiceKey = 'comptabilite' | 'tva' | 'charges-salaires' | 'changer-fiduciaire';
type Section = { title: string; text: string };
export type SeoService = {
  slug: ServiceKey;
  label: string;
  title: string;
  description: string;
  heading: string;
  accent: string;
  intro: string;
  number: string;
  situations: Section[];
  preparation: string[];
  criteria: Section[];
  faq: { question: string; answer: string }[];
};
export const seoServices: SeoService[] = [
  {
    slug: 'comptabilite', label: 'Comptabilité', number: '01',
    title: 'Trouver une fiduciaire pour votre comptabilité à Genève',
    description: 'Vous recherchez un partenaire pour la comptabilité de votre entreprise à Genève ? FIDUCONNECT clarifie vos attentes et facilite la mise en relation.',
    heading: 'Votre comptabilité.', accent: 'Le bon interlocuteur.',
    intro: 'Vous souhaitez confier votre comptabilité, mieux organiser les échanges ou trouver un suivi adapté à votre activité ? Nous vous aidons à préciser ce que vous attendez d’un partenaire fiduciaire à Genève.',
    situations: [
      { title: 'Vous démarrez votre activité', text: 'Vous cherchez à définir ce que vous pouvez gérer vous-même et ce que vous souhaitez confier à une fiduciaire. Votre organisation de départ fait partie des éléments à discuter.' },
      { title: 'Votre entreprise évolue', text: 'Le volume de pièces augmente, les échanges prennent plus de temps ou votre organisation change. Vous recherchez un accompagnement qui tienne compte de cette nouvelle réalité.' },
      { title: 'Vous voulez un suivi plus clair', text: 'Vous souhaitez mieux comprendre les informations transmises, connaître votre interlocuteur et convenir d’un rythme d’échange. Ce sont des attentes à exprimer avant de choisir.' },
    ],
    preparation: ['Votre activité et la forme de votre entreprise', 'Votre organisation actuelle et les outils utilisés', 'Un ordre de grandeur du volume de documents à traiter', 'Les tâches à confier et celles que vous souhaitez conserver', 'Vos attentes de suivi et votre échéance de démarrage'],
    criteria: [
      { title: 'Un périmètre explicite', text: 'Échangez sur les tâches comprises dans le mandat et celles qui feront l’objet d’une demande distincte. Une proposition peut prévoir un suivi courant, une clôture ou des interventions ponctuelles : comparez des périmètres équivalents.' },
      { title: 'Une collaboration praticable', text: 'Précisez les formats de documents, les accès aux outils, le rythme de transmission et la personne à contacter. L’organisation quotidienne compte autant que la présentation de l’offre.' },
      { title: 'Des honoraires compréhensibles', text: 'Demandez ce qui est inclus dans le prix proposé et comment les travaux complémentaires sont facturés. FIDUCONNECT ne fixe pas les honoraires des partenaires.' },
    ],
    faq: [
      { question: 'FIDUCONNECT tient-il ma comptabilité ?', answer: 'Non. Nous clarifions votre besoin et organisons la mise en relation. Le partenaire fiduciaire reste responsable de ses prestations et du mandat convenu avec vous.' },
      { question: 'Puis-je garder mon logiciel actuel ?', answer: 'Indiquez-le dès le premier échange. La compatibilité avec vos outils et les modalités d’accès sont à confirmer directement avec le partenaire avant tout engagement.' },
      { question: 'Dois-je transmettre mes documents comptables pour la première demande ?', answer: 'Non. Une description générale de votre situation suffit pour commencer. N’envoyez pas de pièces comptables ni de documents confidentiels lors de ce premier contact.' },
    ],
  },
  {
    slug: 'tva', label: 'Fiscalité & TVA', number: '02',
    title: 'Trouver un partenaire en fiscalité d’entreprise et TVA à Genève',
    description: 'Identifiez un partenaire pour vos besoins de fiscalité d’entreprise et de TVA à Genève. FIDUCONNECT vous aide à clarifier la demande, sans conseil fiscal personnalisé.',
    heading: 'Fiscalité & TVA.', accent: 'Clarifier votre besoin.',
    intro: 'Vous recherchez un interlocuteur pour les questions fiscales de votre entreprise ou son suivi TVA ? Nous vous aidons à formuler votre demande avant de vous orienter vers un partenaire à Genève.',
    situations: [
      { title: 'Un besoin ponctuel', text: 'Vous avez une question précise ou un document à faire examiner. Présentez le sujet, le contexte et votre échéance pour rechercher un interlocuteur en mesure d’étudier la demande.' },
      { title: 'Un suivi à organiser', text: 'Vous souhaitez confier certaines démarches à un partenaire et mieux coordonner les informations avec votre comptabilité. Le périmètre et la fréquence de son intervention sont à définir.' },
      { title: 'Une activité qui change', text: 'De nouveaux clients, des échanges à l’étranger ou une évolution de votre organisation soulèvent des questions. Signalez ces particularités pour que le partenaire puisse apprécier le besoin.' },
    ],
    preparation: ['La nature de votre activité et les pays avec lesquels vous travaillez', 'Le sujet à examiner : fiscalité d’entreprise, TVA ou coordination avec la comptabilité', 'Votre organisation actuelle et les intervenants déjà impliqués', 'L’existence d’une échéance à signaler, sans document sensible joint', 'Le type d’accompagnement recherché : ponctuel ou régulier'],
    criteria: [
      { title: 'Les compétences recherchées', text: 'Décrivez les particularités de votre activité et demandez au partenaire s’il peut prendre en charge votre sujet. Une question transfrontalière ou inhabituelle doit être identifiée dès le départ.' },
      { title: 'La répartition des responsabilités', text: 'Clarifiez qui prépare les informations, qui les vérifie et qui effectue les démarches convenues. Le mandat doit permettre de comprendre les rôles de chacun.' },
      { title: 'La disponibilité et les délais', text: 'Signalez une échéance dès votre demande et faites confirmer la disponibilité du professionnel. Une mise en relation ne garantit pas qu’un partenaire pourra intervenir dans le délai souhaité.' },
    ],
    faq: [
      { question: 'Puis-je obtenir un conseil fiscal de FIDUCONNECT ?', answer: 'Non. FIDUCONNECT ne détermine pas votre situation fiscale et ne fournit pas de conseil comptable, fiscal ou juridique personnalisé. L’analyse est réalisée par le professionnel que vous mandatez.' },
      { question: 'Cette page concerne-t-elle les déclarations privées ?', answer: 'Cette démarche est centrée sur les besoins des entreprises et indépendants du canton de Genève. Présentez le contexte professionnel de votre demande pour que nous puissions en clarifier le périmètre.' },
      { question: 'Que faire si mon échéance est proche ?', answer: 'Précisez la date et le sujet dès le premier échange. Ne considérez pas l’envoi d’une demande à FIDUCONNECT comme une prise en charge de l’échéance ou un mandat accepté par un professionnel.' },
    ],
  },
  {
    slug: 'charges-salaires', label: 'Salaires & administration', number: '03',
    title: 'Trouver un partenaire pour les salaires de votre entreprise à Genève',
    description: 'Recherchez un partenaire pour la gestion des salaires et l’administration de votre entreprise à Genève. FIDUCONNECT vous aide à définir les tâches à confier.',
    heading: 'Vos salaires.', accent: 'Une organisation plus claire.',
    intro: 'Vous souhaitez confier la préparation des salaires ou certaines tâches administratives à un partenaire ? Commençons par comprendre votre fonctionnement, vos outils et ce que vous voulez déléguer.',
    situations: [
      { title: 'Votre équipe s’agrandit', text: 'Vous préparez une première embauche ou votre effectif évolue. Vous cherchez un interlocuteur pour discuter de l’organisation de la paie et des tâches qui pourraient lui être confiées.' },
      { title: 'Vous souhaitez déléguer', text: 'La préparation des informations prend du temps. Vous voulez préciser ce qui restera en interne et ce qui sera traité par un partenaire, sans perdre la visibilité sur les échanges.' },
      { title: 'Vous cherchez plus de continuité', text: 'Vous souhaitez identifier une personne de contact, convenir d’un calendrier et organiser la transmission des éléments variables. Ces points permettent de mieux cadrer la collaboration.' },
    ],
    preparation: ['Votre activité et un ordre de grandeur de l’effectif', 'Les tâches de paie ou d’administration que vous souhaitez confier', 'Les outils utilisés et l’organisation actuelle', 'La fréquence des échanges souhaitée et les changements envisagés', 'La date à laquelle vous aimeriez commencer'],
    criteria: [
      { title: 'Les tâches comprises', text: 'Discutez de la préparation des bulletins, des démarches administratives envisagées et des demandes ponctuelles. Le partenaire doit préciser les tâches qu’il accepte réellement de prendre en charge.' },
      { title: 'Le circuit de validation', text: 'Définissez comment les informations variables sont transmises et validées, qui répond aux questions et à quel moment les éléments doivent être disponibles.' },
      { title: 'La confidentialité des échanges', text: 'Faites préciser les accès nécessaires et les moyens de transmission des données du personnel. Le premier contact avec FIDUCONNECT ne nécessite ni fiche de salaire ni dossier de collaborateur.' },
    ],
    faq: [
      { question: 'FIDUCONNECT prépare-t-il les fiches de salaire ?', answer: 'Non. FIDUCONNECT facilite la mise en relation. Les travaux de paie ou d’administration sont réalisés par le partenaire selon le périmètre du mandat accepté.' },
      { question: 'Puis-je ne déléguer qu’une partie de l’administration ?', answer: 'Vous pouvez présenter une demande limitée à certaines tâches. La faisabilité, la répartition du travail et les honoraires seront à convenir directement avec le partenaire.' },
      { question: 'Faut-il envoyer des informations sur mes salariés ?', answer: 'Non pour la première demande. Décrivez uniquement votre besoin et l’effectif approximatif. Les données individuelles seront, si nécessaire, échangées ensuite avec le professionnel dans un cadre adapté.' },
    ],
  },
  {
    slug: 'changer-fiduciaire', label: 'Changer de fiduciaire', number: '04',
    title: 'Changer de fiduciaire à Genève : préparer votre recherche',
    description: 'Vous envisagez de changer de fiduciaire à Genève ? Clarifiez vos attentes et préparez vos échanges avec un nouveau partenaire grâce à FIDUCONNECT.',
    heading: 'Changer de fiduciaire.', accent: 'Avec un besoin bien défini.',
    intro: 'Vous manquez de visibilité, les échanges sont difficiles ou votre entreprise a évolué ? Avant de chercher un nouveau partenaire à Genève, prenons le temps de préciser ce que vous souhaitez voir changer.',
    situations: [
      { title: 'La communication ne vous convient plus', text: 'Vous aimeriez des réponses plus compréhensibles, un interlocuteur identifié ou des échanges plus réguliers. Décrire ces attentes aide à cadrer votre prochaine collaboration.' },
      { title: 'Le mandat ne correspond plus à votre activité', text: 'Votre organisation a changé et les tâches à confier ne sont plus les mêmes. Une nouvelle recherche commence par un inventaire concret de vos besoins actuels.' },
      { title: 'Vous souhaitez comparer une autre proposition', text: 'Vous pouvez explorer une alternative sans décider immédiatement de changer. Le périmètre des prestations, l’organisation et les honoraires sont des points à examiner ensemble.' },
    ],
    preparation: ['Les points satisfaisants et les difficultés de la collaboration actuelle', 'Les prestations à conserver, à ajouter ou à réorganiser', 'Les outils et documents dont vous disposez', 'Les échéances à prendre en compte pour envisager une transition', 'Votre calendrier souhaité, sans résiliation précipitée'],
    criteria: [
      { title: 'Exprimer ce qui doit changer', text: 'Distinguez un problème de communication, un besoin de compétences ou une évolution de mandat. Une description concrète sera plus utile qu’une recherche fondée uniquement sur le prix.' },
      { title: 'Comparer sur une base commune', text: 'Présentez le même périmètre aux interlocuteurs et demandez des précisions sur les prestations, les délais et les frais complémentaires. FIDUCONNECT ne garantit pas une baisse d’honoraires.' },
      { title: 'Préparer la transition avec les professionnels', text: 'Avant une résiliation, vérifiez votre accord actuel et échangez sur la reprise des dossiers, les accès et le calendrier. Les modalités contractuelles et techniques doivent être confirmées par les personnes concernées.' },
    ],
    faq: [
      { question: 'Dois-je résilier avant de contacter FIDUCONNECT ?', answer: 'Non. Vous pouvez commencer par clarifier votre besoin et explorer une mise en relation. Une éventuelle résiliation se prépare ensuite en tenant compte de votre accord actuel et des échéances à gérer.' },
      { question: 'FIDUCONNECT contacte-t-il ma fiduciaire actuelle ?', answer: 'La première étape est un échange avec vous pour comprendre votre recherche. Elle ne déclenche pas de démarche de résiliation ni de transfert de dossier auprès de votre prestataire actuel.' },
      { question: 'La reprise de mon dossier est-elle comprise ?', answer: 'Les modalités de reprise, les travaux nécessaires et leurs honoraires sont à définir directement avec le nouveau partenaire. Notre orientation gratuite ne vaut pas acceptation d’un mandat de reprise.' },
    ],
  },
];
export function getSeoService(slug: ServiceKey): SeoService {
  return seoServices.find(service => service.slug === slug)!;
}

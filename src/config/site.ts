/**
 * SOURCE UNIQUE des informations de l'entreprise.
 *
 * Tout ce qui est affiché sur le site (en-tête, pied de page, contact,
 * mentions légales, données structurées) vient d'ici. Pour passer de la
 * démo à la V1, on remplit ce fichier avec les vraies informations : voir
 * docs/passage-demo-v1.md.
 *
 * Une valeur vide ('') ou null signifie « pas encore fournie par le client ».
 * Les composants affichent alors « [… à compléter] » grâce à `aCompleter()`.
 */

export const site = {
  /**
   * Mode démonstration.
   * true  = bandeau « site de démonstration », noindex sur toutes les pages,
   *         robots.txt qui bloque l'exploration, formulaire sans envoi réel.
   * false = site de production. NE PASSER À false QU'APRÈS la checklist V1.
   */
  demo: true,

  url: 'https://decorconcept.fr',
  name: 'Decor Concept',
  baseline: 'Entreprise générale de rénovation à Paris',
  description:
    "Rénovation complète d'appartements à Paris et dans l'ouest parisien. 30 ans de métier, notre propre équipe, un interlocuteur unique du devis à la réception.",

  /** Chiffres affichés. À confirmer avec le client. */
  facts: {
    yearsOfExperience: 30,
    teamSize: 'une dizaine de compagnons', // à confirmer
    foundedYear: null as number | null, // année de création, à demander
  },

  contact: {
    // Numéros fictifs pour la démo. Format WhatsApp : indicatif sans « + » ni espaces.
    phoneDisplay: '06 00 00 00 00',
    phoneHref: '+33600000000',
    whatsapp: '33600000000',
    email: 'contact@decorconcept.fr',
    hours: 'Du lundi au vendredi, de 8 h à 18 h', // à confirmer
    responseDelay: 'sous 24 h ouvrées', // promesse de rappel, à valider avec le client
  },

  address: {
    street: '', // à demander (siège ou dépôt)
    postalCode: '',
    city: 'Paris',
    /** true si l'entreprise reçoit des clients à cette adresse (sinon on ne l'affiche pas). */
    showOnSite: false,
  },

  /** Zones desservies, utilisées dans le pied de page et les données structurées. */
  areaServed: [
    'Paris 7e',
    'Paris 8e',
    'Paris 15e',
    'Paris 16e',
    'Paris 17e',
    'Neuilly-sur-Seine',
    'Boulogne-Billancourt',
    'Levallois-Perret',
    'Saint-Cloud',
  ],

  legal: {
    companyName: '', // dénomination sociale
    legalForm: '', // SARL, SAS…
    capital: '',
    siret: '',
    registration: '', // RCS Paris xxx ou Répertoire des métiers
    vatNumber: '',
    publicationDirector: '',
    insurance: {
      insurer: '', // assureur décennale
      policyNumber: '',
      coverage: '', // zone géographique couverte
    },
    mediator: {
      name: '',
      address: '',
      url: '',
    },
  },

  hosting: {
    name: 'Cloudflare, Inc.',
    details: 'Adresse et contact de l’hébergeur à reprendre des conditions de Cloudflare au moment de la mise en ligne',
    url: 'https://www.cloudflare.com',
  },

  links: {
    googleBusiness: '', // URL de la fiche Google
    googleReview: '', // lien direct « laisser un avis »
    instagram: '',
    houzz: '',
  },

  form: {
    // Web3Forms : la clé est publique par nature, elle est liée à l'email de réception.
    accessKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
    endpoint: 'https://api.web3forms.com/submit',
  },

  analytics: {
    umamiWebsiteId: import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '',
    umamiSrc: import.meta.env.PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js',
  },
} as const;

/** Affiche la valeur, ou « [libellé à compléter] » si elle est vide. */
export function aCompleter(value: string | number | null | undefined, label: string): string {
  if (value === null || value === undefined || value === '') return `[${label} à compléter]`;
  return String(value);
}

/** Le formulaire n'envoie réellement que hors démo ET avec une clé configurée. */
export const formIsLive = !site.demo && site.form.accessKey !== '';

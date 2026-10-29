/**
 * FAQ générale (accueil et contact).
 * Les réponses marquées « à valider » doivent être relues avec le client
 * avant la mise en production (voir docs/passage-demo-v1.md).
 */
import { site } from '../config/site';

export const faqGenerale = [
  {
    q: 'Quels types de projets prenez-vous en charge ?',
    // à valider : seuil de chantier minimum
    a: "Nous sommes organisés pour les rénovations complètes d'appartements et les projets d'envergure : appartement entier, cuisine, salle de bain, agencement sur mesure. Pour de petits travaux isolés, nous ne sommes pas toujours le bon interlocuteur, mais nous vous orientons volontiers.",
  },
  {
    q: 'Comment se passe la prise de contact ?',
    a: `Vous nous écrivez sur WhatsApp, vous appelez ou vous remplissez le formulaire de devis. Nous vous rappelons ${site.contact.responseDelay} pour comprendre votre projet, puis nous organisons une visite sur place. Le devis détaillé suit la visite.`,
  },
  {
    q: "Combien de temps dure la rénovation complète d'un appartement ?",
    // à valider avec le client
    a: "Comptez en général de trois à six mois pour un appartement de 100 à 200 m², selon l'état existant, l'ampleur des travaux et les délais de livraison des matériaux. Le planning est établi semaine par semaine avant le démarrage.",
  },
  {
    q: 'Gérez-vous les démarches avec la copropriété ?',
    a: "Oui. Nous préparons les éléments techniques à transmettre au syndic, nous vous indiquons quand une autorisation de l'assemblée générale est nécessaire (travaux touchant les parties communes ou la structure), et nous protégeons les parties communes pendant le chantier.",
  },
  {
    q: 'Travaillez-vous avec des architectes et des décorateurs ?',
    a: "Oui, régulièrement. Nous réalisons les projets conçus par des architectes d'intérieur et des décorateurs, en respectant leurs plans et en les tenant informés à chaque étape.",
  },
  {
    q: 'Êtes-vous assurés ?',
    a: 'Oui. Nous sommes couverts par une assurance décennale et une responsabilité civile professionnelle. Les attestations sont jointes à chaque devis.',
  },
  {
    q: 'Pouvez-vous suivre le chantier si je ne suis pas à Paris ?',
    a: "Oui. Vous recevez chaque semaine un point d'avancement avec photos sur WhatsApp, et nous organisons des visites en visio quand c'est utile. Vous gardez un interlocuteur unique du début à la fin.",
  },
];

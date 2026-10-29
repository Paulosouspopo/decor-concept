import { site } from '../config/site';

/**
 * Lien WhatsApp (wa.me) avec un message pré-rempli.
 * Le message indique la page d'origine : le client sait d'où vient le contact.
 */
export function whatsappLink(message?: string): string {
  const text = message ?? 'Bonjour, je souhaite échanger sur un projet de rénovation.';
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const phoneLink = `tel:${site.contact.phoneHref}`;
export const emailLink = `mailto:${site.contact.email}`;

/** Messages WhatsApp pré-remplis selon le contexte. */
export const whatsappMessages = {
  default: 'Bonjour, je souhaite échanger sur un projet de rénovation.',
  devis: 'Bonjour, je souhaite un devis pour la rénovation de mon appartement.',
  architecte:
    "Bonjour, je suis architecte / décorateur et je cherche une entreprise pour réaliser un projet.",
  service: (serviceName: string) =>
    `Bonjour, je vous contacte depuis votre page « ${serviceName} » au sujet d'un projet.`,
  realisation: (projectTitle: string) =>
    `Bonjour, j'ai vu votre réalisation « ${projectTitle} » et j'ai un projet comparable.`,
  zone: (zoneName: string) =>
    `Bonjour, j'ai un projet de rénovation à ${zoneName}.`,
};

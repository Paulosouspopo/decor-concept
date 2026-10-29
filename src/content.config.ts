/**
 * Collections de contenu (Astro Content Layer).
 *
 * Chaque contenu est un fichier dans src/content/<collection>/.
 * Ajouter une réalisation = ajouter un fichier .md + ses photos.
 *
 * Le champ `fictif: true` marque les contenus inventés pour la démo.
 * Tant qu'il en reste un, le site ne doit pas passer en production
 * (voir docs/passage-demo-v1.md).
 */
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const faqItem = z.object({ q: z.string(), a: z.string() });

/** Identifiants des services (= noms des fichiers dans src/content/services). */
export const serviceIds = [
  'appartement-complet',
  'appartement-haussmannien',
  'cuisine',
  'salle-de-bain',
  'menuiserie-sur-mesure',
] as const;

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(), // H1 de la page
      navTitle: z.string(), // libellé court (cartes, menus)
      order: z.number(),
      summary: z.string(), // une phrase pour les listes
      metaTitle: z.string().max(65),
      metaDescription: z.string().max(170),
      intro: z.string(), // chapeau sous le H1
      includes: z.array(z.string()).default([]), // ce qui est pris en charge
      duration: z.string().optional(), // durée type
      cover: image().optional(),
      faq: z.array(faqItem).default([]),
    }),
});

const realisations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/realisations' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      fictif: z.boolean().default(false),
      summary: z.string(),
      order: z.number().default(100),
      featured: z.boolean().default(false), // affichée sur l'accueil
      services: z.array(z.enum(serviceIds)).min(1), // pages services liées
      zone: z.string().optional(), // identifiant d'une page de src/content/zones
      location: z.string(), // ex. « Paris 16e »
      surface: z.number(), // m²
      duration: z.string(), // ex. « 5 mois »
      year: z.number(),
      building: z.string().optional(), // ex. « Immeuble haussmannien »
      trades: z.array(z.string()).default([]), // corps d'état coordonnés
      architect: z.string().optional(),
      cover: image().optional(),
      before: image().optional(),
      after: image().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      testimonial: z
        .object({
          text: z.string(),
          author: z.string(),
          fictif: z.boolean().default(false),
        })
        .optional(),
    }),
});

const zones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/zones' }),
  schema: z.object({
    name: z.string(), // ex. « Paris 16e »
    title: z.string(), // H1
    order: z.number(),
    metaTitle: z.string().max(65),
    metaDescription: z.string().max(170),
    intro: z.string(),
    nearby: z.array(z.string()).default([]), // secteurs voisins (texte libre)
  }),
});

const conseils = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/conseils' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    service: z.enum(serviceIds).optional(), // page service liée
    draft: z.boolean().default(false),
  }),
});

/**
 * Avis clients. Un seul fichier JSON (src/content/avis.json).
 * source : 'google' (copié d'un avis Google réel, avec sa date),
 *          'client' (témoignage validé par écrit par le client),
 *          'exemple' (fictif, démo uniquement).
 */
const avis = defineCollection({
  loader: file('src/content/avis.json'),
  schema: z.object({
    // chaque objet du JSON doit avoir un "id" unique (lu par le loader, accessible via entry.id)
    text: z.string(),
    author: z.string(),
    location: z.string().optional(),
    project: z.string().optional(),
    date: z.string().optional(), // AAAA-MM, pour les avis Google
    source: z.enum(['google', 'client', 'exemple']),
    order: z.number().default(100),
  }),
});

export const collections = { services, realisations, zones, conseils, avis };

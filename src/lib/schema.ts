import { site } from '../config/site';

/**
 * Données structurées JSON-LD (schema.org).
 * Ne JAMAIS ajouter de AggregateRating / Review basés sur nos propres avis :
 * Google ignore les avis auto-publiés et cela peut être considéré comme trompeur.
 */

export function localBusinessSchema() {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${site.url}/#entreprise`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phoneHref,
    email: site.contact.email,
    areaServed: site.areaServed.map((name) => ({ '@type': 'Place', name })),
    knowsAbout: [
      "Rénovation complète d'appartement",
      'Rénovation d’appartement haussmannien',
      'Rénovation de cuisine',
      'Rénovation de salle de bain',
      'Menuiserie et agencement sur mesure',
    ],
  };

  if (site.address.showOnSite && site.address.street) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: 'FR',
    };
  } else {
    schema.address = {
      '@type': 'PostalAddress',
      addressLocality: site.address.city,
      addressCountry: 'FR',
    };
  }

  const sameAs = [site.links.googleBusiness, site.links.instagram, site.links.houzz].filter(Boolean);
  if (sameAs.length) schema.sameAs = sameAs;
  if (site.facts.foundedYear) schema.foundingDate = String(site.facts.foundedYear);

  return schema;
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.href, site.url).toString(),
    })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: new URL(path, site.url).toString(),
    provider: { '@id': `${site.url}/#entreprise` },
    areaServed: site.areaServed.map((area) => ({ '@type': 'Place', name: area })),
  };
}

export function articleSchema(opts: { title: string; description: string; path: string; date: Date; updated?: Date }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date.toISOString(),
    dateModified: (opts.updated ?? opts.date).toISOString(),
    mainEntityOfPage: new URL(opts.path, site.url).toString(),
    publisher: { '@id': `${site.url}/#entreprise` },
  };
}

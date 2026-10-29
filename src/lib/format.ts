const dateFormatter = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}

export function formatSurface(m2: number): string {
  return `${m2} m²`;
}

/** Libellés lisibles des types de projet utilisés dans les filtres et les fiches. */
export const projectTypeLabels: Record<string, string> = {
  'appartement-complet': 'Rénovation complète',
  'appartement-haussmannien': 'Haussmannien',
  cuisine: 'Cuisine',
  'salle-de-bain': 'Salle de bain',
  'menuiserie-sur-mesure': 'Sur mesure',
};

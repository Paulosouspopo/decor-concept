# Photos du site

Les photos sont importées par les contenus (frontmatter des fichiers Markdown) et optimisées
automatiquement par Astro (AVIF/WebP, plusieurs tailles). Ne jamais les mettre dans `public/`.

## Organisation

Un dossier par réalisation, du même nom que le fichier Markdown :

```
src/assets/photos/
  realisations/
    haussmannien-passy-200m2/
      avant.jpg       ← même cadrage que apres.jpg (curseur avant/après)
      apres.jpg
      cover.jpg       ← photo de la carte (optionnelle, sinon apres.jpg)
      salon.jpg       ← galerie
      cuisine.jpg
  services/
    appartement-complet.jpg
    cuisine.jpg
    ...
  equipe/
    fondateur.jpg
```

## Brancher une photo

Dans `src/content/realisations/haussmannien-passy-200m2.md` :

```yaml
before: ../../assets/photos/realisations/haussmannien-passy-200m2/avant.jpg
after: ../../assets/photos/realisations/haussmannien-passy-200m2/apres.jpg
gallery:
  - src: ../../assets/photos/realisations/haussmannien-passy-200m2/salon.jpg
    alt: "Salon rénové, parquet point de Hongrie restauré, Paris 16e"
```

Les chemins sont relatifs au fichier Markdown.

## Règles

- **Démo** : des photos libres de droits (Unsplash, Pexels) sont acceptées pour illustrer,
  à condition que la réalisation reste marquée `fictif: true`.
- **Production** : uniquement les vraies photos des chantiers de Decor Concept, avec l'accord
  écrit des clients. Jamais de photo de banque d'images présentée comme une réalisation.
- Format : JPG, au moins 2000 px de large, sans élément identifiant (adresse, photos de famille).
- Texte alternatif (`alt`) descriptif : pièce, type de travaux, secteur.

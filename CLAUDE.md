# CLAUDE.md — Site Decor Concept

Ce fichier donne à Claude Code le contexte du projet. Lis-le en entier avant toute modification,
puis `docs/cahier-des-charges.md` pour le détail des choix.

## Le projet en bref

- **Client** : Decor Concept, entreprise générale de rénovation à Paris (une dizaine de compagnons,
  fondateur avec 30 ans de métier, parti de l'ouvrier). Clientèle : particuliers aisés qui rénovent
  entièrement un appartement (Paris ouest, 16e, 17e, Neuilly, Boulogne…), et architectes d'intérieur.
- **Objectif du site** : passer du bouche-à-oreille à des demandes de devis qualifiées
  (WhatsApp, téléphone, formulaire) et ressortir sur Google en local.
- **Mainteneur** : Paul (développeur, React/TypeScript/Java). C'est lui qui ajoute les chantiers.
- **Langue** : tout le site est en français, vouvoiement. Le code et les commentaires aussi.
- **État actuel** : **démo**. Contenus partiellement fictifs, en attente des vraies infos du client.
  La démo sert à présenter le site au client avant la V1.

## Commandes

```bash
npm install          # installer
npm run dev          # serveur local http://localhost:4321
npm run build        # build de production dans dist/
npm run preview      # servir dist/ en local
npm run check        # vérification TypeScript / Astro
```

Node 20.3 minimum (`.nvmrc` = 22).

## ⚠️ Le code n'a jamais été compilé

Ce projet a été écrit sans pouvoir lancer `npm install` (registre npm inaccessible depuis
l'environnement de génération). **La première tâche est donc de l'installer, de le builder et de
corriger les erreurs**, puis de vérifier le rendu dans le navigateur. Voir `docs/prompt-demarrage.md`.

Points à surveiller en priorité :
- versions des dépendances dans `package.json` (Astro 5, Tailwind 4 via `@tailwindcss/vite`) ;
- API Content Layer d'Astro 5 (`src/content.config.ts`, `glob`/`file` loaders, `render()`) ;
- styles scopés vs composants enfants (`:global(...)` utilisé quand nécessaire) ;
- rendu mobile (barre de contact fixe, menu) et curseur avant/après.

## Stack

| Brique | Choix |
| --- | --- |
| Framework | Astro 5, sortie statique, TypeScript strict |
| Styles | Tailwind CSS 4 (plugin Vite) + CSS de composants dans `src/styles/global.css` et blocs `<style>` scopés |
| Contenus | Content Collections (Markdown + JSON) validées par Zod |
| Images | `astro:assets` via le composant `Photo` (AVIF/WebP, `widths` + `sizes`) |
| Polices | Fontsource auto-hébergées : Marcellus (titres), Hanken Grotesk Variable (texte) |
| SEO | `@astrojs/sitemap`, JSON-LD maison (`src/lib/schema.ts`), `robots.txt` généré |
| Formulaire | Web3Forms (clé dans `PUBLIC_WEB3FORMS_KEY`) |
| Audience | Umami sans cookies, optionnel (`PUBLIC_UMAMI_WEBSITE_ID`) |
| Hébergement | Cloudflare Pages, build `npm run build`, sortie `dist` |

Pas de framework JS côté client : les quelques interactions (menu, curseur, filtres, formulaire
démo) sont des `<script>` Astro en TypeScript. Garder ça ainsi : le site doit rester très rapide.

## Où modifier quoi

| Je veux… | Fichier |
| --- | --- |
| Changer téléphone, WhatsApp, email, SIRET, adresse, assurance, médiateur… | `src/config/site.ts` (source unique) |
| Passer de la démo à la production | `site.demo` dans `src/config/site.ts` + `docs/passage-demo-v1.md` |
| Ajouter une réalisation | un `.md` dans `src/content/realisations/` + photos dans `src/assets/photos/realisations/<id>/` |
| Modifier une prestation | `src/content/services/*.md` |
| Ajouter une page locale | `src/content/zones/*.md` (règle : seulement avec un vrai chantier dans le secteur) |
| Écrire un article | `src/content/conseils/*.md` |
| Avis clients | `src/content/avis.json` |
| FAQ générale | `src/data/faq.ts` |
| Étapes de la méthode, charte chantier | `src/data/methode.ts` |
| Menu | `src/data/navigation.ts` |
| Couleurs, typo, composants CSS | `src/styles/global.css` |
| Messages WhatsApp pré-remplis | `src/lib/contact.ts` |
| Données structurées | `src/lib/schema.ts` |

Les schémas des contenus sont dans `src/content.config.ts`. Un champ manquant ou mal typé fait
échouer le build : c'est voulu.

## Arborescence

```
src/
  config/site.ts          infos entreprise (source unique), mode démo
  content.config.ts       schémas des collections
  content/
    services/             5 prestations (= pages /renovation/<id>/)
    realisations/         études de cas (= /realisations/<id>/)
    zones/                pages locales (= /zones/<id>/)
    conseils/             articles (= /conseils/<id>/)
    avis.json             avis clients
  components/             Header, Footer, ContactBar (mobile), Photo, BeforeAfter,
                          QuoteForm, ProjectCard, ProjectFacts, Faq, Testimonials, CtaBlock…
  data/                   faq, méthode, navigation
  layouts/BaseLayout.astro
  lib/                    contact (WhatsApp), schema (JSON-LD), format
  pages/                  routes
  styles/global.css       tokens + composants CSS
  assets/photos/          photos (voir README dedans)
public/                   favicon, _headers Cloudflare
docs/                     cahier des charges, passage démo → V1, prompt de démarrage
```

## Règles non négociables

1. **Jamais de faux avis.** Les avis viennent de clients réels (Google ou témoignage validé par
   écrit). Les exemples de la démo ont `source: "exemple"` et s'affichent avec le marqueur
   « Exemple ». Publier de faux avis est une pratique commerciale trompeuse (sanction pénale).
   Ne jamais ajouter de `AggregateRating` / `Review` en JSON-LD sur nos propres avis.
2. **Tout contenu inventé est marqué.** Réalisation fictive → `fictif: true` (+ commentaire en tête
   du fichier). Témoignage fictif → `testimonial.fictif: true`. Le site ne passe pas en production
   tant qu'il en reste (`grep -r "fictif: true" src/content`).
3. **Photos** : en démo, photos libres de droits acceptées sur les réalisations fictives. En
   production, uniquement les vraies photos de chantiers, avec accord des clients.
4. **Mode démo** (`site.demo = true`) : bandeau visible, `noindex` partout, `robots.txt` bloquant,
   formulaire qui n'envoie rien. Ne passer à `false` qu'après la checklist `docs/passage-demo-v1.md`.
5. **Pas de cookies tiers ni de traceur publicitaire** (pas de Google Analytics, pas de carte Google
   intégrée, pas de vidéo YouTube chargée sans clic). Sinon il faut un bandeau de consentement.
6. **Pages locales** : une page `zones/` seulement si un vrai chantier l'illustre, avec un texte
   propre au secteur. Jamais de pages ville dupliquées (spam pour Google).
7. **Informations entreprise** : jamais en dur dans un gabarit, toujours depuis `src/config/site.ts`.
8. **Accessibilité** : un seul H1 par page, focus visible, textes alternatifs descriptifs,
   `prefers-reduced-motion` respecté, contrastes AA.

## Identité visuelle

Inspirée des matériaux de l'immeuble parisien. Ne pas dériver vers un template générique.

| Token | Valeur | Usage |
| --- | --- | --- |
| `--platre` | `#f2f2ee` | fond principal |
| `--pierre` | `#e3dfd5` | sections alternées, surfaces |
| `--ardoise` | `#1e2428` | texte, sections sombres |
| `--gris` | `#59656d` | texte secondaire |
| `--vert` | `#234038` | couleur de marque (« porte cochère »), boutons principaux |
| `--laiton` | `#a88452` | détails fins : filets, soulignés, focus. Jamais en texte sur fond clair |

- **Typo** : Marcellus (titres, évoque la lettre gravée des façades) + Hanken Grotesk (texte).
  Échelle fluide définie dans `global.css` (h1, h2, h3).
- **Composants CSS** : `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-light`, `.btn-outline-light`,
  `.link`, `.lead`, `.meta`, `.section`, `.section-pierre`, `.section-ardoise`, `.section-vert`,
  `.container-site`, `.prose-site`, `.tag-exemple`, `.input`, `.choice`, `.field`.
- **Éléments signature** : le curseur avant/après en hero ; la fiche technique des réalisations
  dessinée comme un cartouche de plan (`ProjectFacts`) ; les emplacements photo (moulure pour
  « après », hachures de plan pour « avant »).
- **À éviter** : libellés en capitales au-dessus des titres, un mot isolé en couleur dans un titre,
  flèches « → » ajoutées aux liens, cartes identiques avec ombre partout, animations d'entrée sur
  chaque section. Numérotation seulement pour les vraies séquences (les étapes de la méthode).
- **Ton** : sobre, concret, des faits plutôt que des superlatifs. Verbes d'action sur les boutons
  (« Demander un devis », « Écrire sur WhatsApp »).

## Conventions

- URLs en français, minuscules, avec slash final (`trailingSlash: 'always'`). Les liens internes
  s'écrivent toujours avec le slash final.
- Identifiant d'un contenu = nom du fichier (ex. `realisations/plaine-monceau-120m2.md` →
  `/realisations/plaine-monceau-120m2/`).
- Chaque page : `title` < 60 caractères et `description` ≈ 155 caractères (via `BaseLayout`).
- Événements d'audience : attribut `data-umami-event="..."` sur les liens de contact (déjà en place).
- Commits en français, petits et descriptifs.

## Prochaines étapes

1. **Session de démarrage** (`docs/prompt-demarrage.md`) : installer, builder, corriger, vérifier le
   rendu mobile et desktop, ajouter des photos libres de droits sur les réalisations fictives.
2. **Déploiement de la démo** sur Cloudflare Pages (voir `README.md`), URL `*.pages.dev` à montrer.
3. **Itérations avec le client** sur le design et les textes.
4. **Passage en V1** dès réception des vraies infos : `docs/passage-demo-v1.md`.
5. **Après le lancement** : fiche Google Business Profile, collecte d'avis, un article et une
   réalisation par mois, suivi Search Console (voir cahier des charges).

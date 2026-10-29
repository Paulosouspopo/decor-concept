# Passage de la démo à la V1

Le site a été construit pour que le passage en production consiste à **remplacer des données**,
pas à réécrire des gabarits. Cette checklist liste chaque endroit à toucher.

## Prompt pour Claude Code

> Voici les vraies informations du client : [coller ici les infos, ou indiquer le dossier où sont
> les photos et documents]. Suis `docs/passage-demo-v1.md` étape par étape : remplace les données,
> supprime les contenus fictifs, branche les photos, puis vérifie la checklist finale. Ne passe
> `site.demo` à `false` que lorsque tous les points sont cochés, et liste-moi ceux qui manquent.

## 1. Informations entreprise — `src/config/site.ts`

- [ ] `contact` : vrai téléphone (affichage + format international), numéro WhatsApp, email,
      horaires, délai de rappel réellement tenable
- [ ] `address` : adresse du siège ; `showOnSite: true` seulement s'il reçoit des clients
- [ ] `facts` : années d'expérience, taille de l'équipe, année de création
- [ ] `legal` : dénomination, forme juridique, capital, SIRET, RCS ou Répertoire des métiers,
      TVA intracommunautaire, directeur de la publication
- [ ] `legal.insurance` : assureur décennale, numéro de contrat, zone couverte
- [ ] `legal.mediator` : nom, adresse postale, site du médiateur de la consommation
      (obligatoire pour une clientèle de particuliers, convention signée avec le médiateur)
- [ ] `hosting.details` : coordonnées de Cloudflare à reprendre de leurs conditions
- [ ] `links` : fiche Google Business Profile, lien direct « laisser un avis », Instagram, Houzz
- [ ] `areaServed` : zones réellement couvertes

Vérification : `grep -rn "à compléter" dist/` après build ne doit plus rien renvoyer.

## 2. Réalisations — `src/content/realisations/`

- [ ] Créer un fichier `.md` par vrai chantier (4 à 6), avec photos avant/après réelles
      (voir `src/assets/photos/README.md`)
- [ ] Supprimer les 4 réalisations d'exemple et leurs photos libres de droits
- [ ] Témoignages : uniquement des textes validés par écrit par les clients (`fictif: false`)
- [ ] Vérifier qu'aucun fichier ne contient `fictif: true` : `grep -rn "fictif: true" src/content`

## 3. Pages locales — `src/content/zones/`

- [ ] Garder une page seulement si au moins un vrai chantier y est rattaché (`zone:` dans la
      réalisation). Supprimer les autres.
- [ ] Ajouter les secteurs illustrés par les nouveaux chantiers, avec un texte propre à chacun.

## 4. Avis — `src/content/avis.json`

- [ ] Supprimer les 3 avis `"source": "exemple"`
- [ ] Ajouter les avis Google réels (texte, prénom ou initiale tel qu'affiché sur Google, date
      `AAAA-MM`, `"source": "google"`) et les témoignages validés (`"source": "client"`)
- [ ] Renseigner `links.googleReview` pour afficher le bouton « Laisser un avis »

## 5. Textes à valider avec le client

- [ ] `src/data/faq.ts` : seuil de chantier, durées types, délai de rappel
- [ ] `src/content/services/*.md` : durées types, liste des prestations réellement faites en
      interne (menuiserie sur mesure : atelier propre ou partenaire ?)
- [ ] `src/pages/entreprise.astro` : histoire du fondateur (prénom, parcours, date de création,
      mention ou non de ses origines), rôles de l'équipe, labels et adhésions
- [ ] `src/pages/index.astro` : section fondateur, bandeau de preuves
- [ ] `src/pages/architectes.astro` : plaquette PDF (déposer dans `public/` et ajouter le lien)
- [ ] `src/components/QuoteForm.astro` : tranches de budget adaptées à son seuil
- [ ] Hero : accroche validée

## 6. Photos de l'entreprise

- [ ] Portrait du fondateur sur chantier (accueil, page entreprise)
- [ ] Photos d'équipe (page entreprise)
- [ ] Une photo par prestation (`cover` des services)
- [ ] Accord écrit des clients et des employés photographiés

## 7. Technique

- [ ] Créer le compte Web3Forms avec l'email de réception du client, renseigner
      `PUBLIC_WEB3FORMS_KEY` dans Cloudflare Pages (Production et Preview)
- [ ] Tester un envoi réel du formulaire et la page /contact/merci/
- [ ] Optionnel : Umami (`PUBLIC_UMAMI_WEBSITE_ID`) et vérifier les événements de clic
- [ ] Image de partage (Open Graph) 1200 × 630 dans `public/`, passée à `BaseLayout` (prop `image`)
- [ ] Brancher le domaine decorconcept.fr sur Cloudflare Pages **en vérifiant d'abord les
      enregistrements MX** (emails existants sur le domaine)
- [ ] Rediriger ou laisser en 404 les anciennes URL WordPress

## 8. Bascule

- [ ] `site.demo = false` dans `src/config/site.ts`
- [ ] Build, vérification de `robots.txt` (doit autoriser + pointer le sitemap) et de la balise
      `robots` des pages (doit être `index, follow`)
- [ ] Déployer, puis Google Search Console : ajouter le domaine, soumettre `sitemap-index.xml`
- [ ] Bing Webmaster Tools
- [ ] Mettre le lien du site sur la fiche Google Business Profile

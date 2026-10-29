# Decor Concept — site vitrine

Site de Decor Concept, entreprise générale de rénovation d'appartements à Paris.
Astro 5 + Tailwind 4, site statique hébergé sur Cloudflare Pages.

> **État : démo.** Contenus partiellement fictifs, en attente des informations du client.
> Le passage en production est décrit dans [`docs/passage-demo-v1.md`](docs/passage-demo-v1.md).

## Démarrer

Prérequis : Node 20.3 ou plus récent (22 recommandé), npm.

```bash
npm install
npm run dev       # http://localhost:4321
```

Première fois ? Ouvre le dossier dans VS Code, lance Claude Code et colle le prompt de
[`docs/prompt-demarrage.md`](docs/prompt-demarrage.md) : le projet n'a encore jamais été compilé.

## Documentation

| Fichier | Contenu |
| --- | --- |
| [`CLAUDE.md`](CLAUDE.md) | Contexte, règles, structure du code, identité visuelle (lu automatiquement par Claude Code) |
| [`docs/cahier-des-charges.md`](docs/cahier-des-charges.md) | Positionnement, cibles, arborescence, SEO, conformité, planning |
| [`docs/passage-demo-v1.md`](docs/passage-demo-v1.md) | Checklist pour remplacer les contenus de démo par les vrais |
| [`docs/prompt-demarrage.md`](docs/prompt-demarrage.md) | Prompt pour la première session Claude Code |
| [`src/assets/photos/README.md`](src/assets/photos/README.md) | Organisation et règles des photos |

## Ajouter une réalisation

1. Créer `src/content/realisations/<identifiant>.md` en copiant un fichier existant.
2. Déposer les photos dans `src/assets/photos/realisations/<identifiant>/`.
3. Renseigner les chemins des photos dans le frontmatter (`before`, `after`, `cover`, `gallery`).
4. `npm run build` pour vérifier, puis commit et push : le site se redéploie tout seul.

## Déployer sur Cloudflare Pages

### 1. Mettre le code sur GitHub

```bash
git init
git add .
git commit -m "Démo du site Decor Concept"
git branch -M main
git remote add origin git@github.com:<ton-compte>/decor-concept-site.git
git push -u origin main
```

Créer le dépôt GitHub en **privé** au préalable.

### 2. Créer le projet Cloudflare Pages

1. Sur [dash.cloudflare.com](https://dash.cloudflare.com), menu **Workers & Pages**, créer une
   application **Pages** et choisir **Connecter à Git**.
2. Sélectionner le dépôt `decor-concept-site`.
3. Réglages de build :
   - Preset : **Astro**
   - Commande de build : `npm run build`
   - Dossier de sortie : `dist`
   - Variable d'environnement : `NODE_VERSION` = `22`
4. Lancer le déploiement. L'URL de la démo est du type `https://decor-concept-site.pages.dev`.

Chaque push sur `main` redéploie le site ; chaque autre branche obtient sa propre URL de
prévisualisation (pratique pour montrer une variante au client).

### 3. Protéger la démo (recommandé)

Dans les paramètres du projet Pages, activer une politique d'accès (Cloudflare Access) pour
restreindre la démo à quelques adresses email. À défaut, la démo reste en `noindex` et n'est
connue que de ceux qui ont le lien.

### 4. Variables d'environnement (V1)

À déclarer dans **Settings > Environment variables** du projet Pages (voir `.env.example`) :

| Variable | Rôle |
| --- | --- |
| `PUBLIC_WEB3FORMS_KEY` | Clé Web3Forms : active l'envoi réel du formulaire (hors mode démo) |
| `PUBLIC_UMAMI_WEBSITE_ID` | Optionnel : mesure d'audience sans cookies |
| `PUBLIC_UMAMI_SRC` | Optionnel : URL du script Umami |

### 5. Brancher le domaine decorconcept.fr (V1 seulement)

1. **Avant tout**, relever les enregistrements DNS actuels du domaine, en particulier les **MX**
   (emails) : il ne faut pas couper les adresses email existantes.
2. Dans le projet Pages, **Custom domains** : ajouter `decorconcept.fr` et `www.decorconcept.fr`,
   puis suivre les instructions DNS de Cloudflare.
3. Rediriger `www` vers le domaine nu (ou l'inverse), une seule version doit exister.
4. Résilier l'ancien hébergement WordPress une fois le nouveau site en ligne.

## Structure

```
src/
  config/site.ts      ← toutes les infos de l'entreprise + mode démo
  content/            ← prestations, réalisations, zones, articles, avis
  components/         ← composants Astro
  pages/              ← routes du site
  styles/global.css   ← identité visuelle
docs/                 ← cahier des charges et procédures
public/               ← favicon, en-têtes Cloudflare
```

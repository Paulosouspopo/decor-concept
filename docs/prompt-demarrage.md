# Prompt de démarrage pour Claude Code

À coller tel quel dans Claude Code, une fois le dossier ouvert dans VS Code.

---

Lis `CLAUDE.md` et `docs/cahier-des-charges.md`. Ce projet Astro a été écrit sans jamais être compilé :
ta mission dans cette session est de le rendre fonctionnel et présentable pour une démo client.

1. Lance `npm install`. Si une version de dépendance pose problème, ajuste `package.json` en restant
   sur Astro 5 et Tailwind 4 (plugin `@tailwindcss/vite`), et dis-moi ce que tu as changé.
2. Lance `npm run build` et corrige toutes les erreurs, une par une, jusqu'à un build propre.
   Puis lance `npm run check` et corrige les erreurs de types.
3. Lance `npm run dev` et vérifie chaque page (accueil, /renovation/ et ses 5 pages, /realisations/
   et ses 4 pages, /zones/ et ses 4 pages, /methode/, /entreprise/, /architectes/, /conseils/ et ses
   articles, /contact/, /mentions-legales/, /confidentialite/, une URL inexistante pour la 404).
   Si tu as un outil de navigateur ou de capture d'écran, regarde le rendu en 390 px et en 1440 px
   de large. Corrige les problèmes de mise en page.
4. Vérifie en particulier : le curseur avant/après (souris, tactile, clavier), le menu mobile, la
   barre de contact fixe en bas sur mobile, les filtres de /realisations/, le formulaire en mode démo
   (il ne doit rien envoyer et afficher le message de démonstration).
5. Télécharge des photos libres de droits (Unsplash ou Pexels) pour illustrer les 4 réalisations
   fictives : pour chacune une paire avant/après au même ratio, une photo de carte, deux photos de
   galerie. Range-les comme indiqué dans `src/assets/photos/README.md` et branche-les dans le
   frontmatter. Ajoute aussi une photo par prestation (`cover` dans `src/content/services/`).
   Ces réalisations doivent rester `fictif: true`.
6. Ne modifie pas les règles de `CLAUDE.md` (avis, contenus fictifs, mode démo). Ne passe pas
   `site.demo` à `false`.
7. À la fin, fais un récapitulatif : ce qui a été corrigé, ce qui reste à améliorer, et ce dont tu as
   besoin de ma part.

---

## Après cette session

- Pousser sur GitHub et déployer sur Cloudflare Pages (voir `README.md`).
- Présenter la démo au client avec la liste « Informations à récupérer » du cahier des charges.
- Quand les vraies infos arrivent : nouvelle session avec le prompt de `docs/passage-demo-v1.md`.

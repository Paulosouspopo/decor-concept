# Cahier des charges — Site Decor Concept

29 octobre 2026 · Paul

> Version Markdown du cahier des charges rédigé en amont du projet. La version de référence
> (éditable, avec schémas) est le document Claude Docs partagé par Paul. En cas d'écart, demander
> à Paul laquelle fait foi.

## Synthèse

Le site doit transformer 30 ans de bouche-à-oreille en demandes de devis qualifiées pour des
rénovations complètes haut de gamme à Paris et dans l'ouest parisien.

- **Positionnement** : entreprise générale de rénovation tous corps d'état, spécialiste des
  appartements parisiens haut de gamme, avec un seul interlocuteur du devis à la réception.
- **Promesse** : 30 ans de métier, un fondateur qui a commencé ouvrier, sa propre équipe (une
  dizaine de compagnons, à confirmer), une transparence totale sur le prix, le planning et
  l'avancement.
- **Cibles** : les propriétaires qui rénovent entièrement un appartement, souvent juste après
  l'achat, et les architectes d'intérieur qui cherchent une entreprise fiable pour exécuter leurs
  projets.
- **Ce que le site doit produire** : des contacts WhatsApp, appel, email et formulaire, filtrés par
  type de projet, surface et budget.
- **Leviers SEO** : fiche Google Business Profile, avis Google réels, pages par arrondissement
  adossées à de vrais chantiers, pages expertise (haussmannien, cuisine, salle de bain).
- **Techno** : site statique Astro, hébergement gratuit, maintenu par Paul.
- **Bloquant pour la production, pas pour la démo** : les vraies photos de chantiers et les vrais
  avis clients.

## Contexte et objectifs

Decor Concept vit du bouche-à-oreille depuis 30 ans. Le marché ralentit et ce seul canal ne remplit
plus le planning d'une équipe d'une dizaine de personnes.

**Situation actuelle**

- Aucune présence en ligne exploitable. decorconcept.fr affiche un thème WordPress de démonstration
  (Orakus) : textes lorem ipsum, faux téléphone américain, faux avis. La page est indexable par Google.
- Aucun avis en ligne. Fiche Google Business Profile inconnue, à vérifier.
- Un actif inexploité : 30 ans de chantiers, des photos avant/après et des clients satisfaits.

**Action immédiate** : passer la page actuelle en noindex ou la remplacer par une page d'attente
propre. Une page lorem ipsum indexée sous son nom décrédibilise l'entreprise.

**Objectifs proposés, à valider avec lui**

| Objectif | Indicateur | Cible |
| --- | --- | --- |
| Remplir le planning avec de gros chantiers | Demandes qualifiées par mois (projet complet, budget au-dessus de son seuil) | À fixer avec lui, voir le calcul ci-dessous |
| Être trouvé localement | Position dans le pack local Google et clics Search Console sur 10 à 15 requêtes cibles | Top 3 local sur son secteur de base à 6-12 mois |
| Rassurer avant le premier appel | Nombre d'avis Google réels et note moyenne | 15 avis réels dans les 3 mois après le lancement |
| Mesurer ce qui marche | Clics WhatsApp, appel, email et envois de formulaire suivis | 100 % des contacts tracés dès la V1 |

**Calcul de la cible de demandes** : si un devis sur 4 est signé et qu'il lui faut 2 nouveaux
chantiers par mois, le site doit apporter environ 8 demandes qualifiées par mois. Les deux chiffres
sont à lui demander.

## Positionnement et messages clés

Decor Concept se positionne comme l'entreprise de rénovation complète des beaux appartements
parisiens, menée par un homme de métier et sa propre équipe.

**La concurrence tient le même discours.** Les annuaires listent des dizaines d'entreprises « tous
corps d'état » par arrondissement, avec le même discours sur la rigueur et les finitions. Certaines
visent déjà le haut de gamme dans le 16e, ou revendiquent 35 ans d'expérience. La différence doit
donc être prouvée, pas affirmée.

| Différenciateur | Comment le prouver sur le site |
| --- | --- |
| 30 ans de métier, fondateur passé par l'ouvrier | Page histoire, photo du fondateur sur chantier, années d'expérience dans le header |
| Sa propre équipe, pas de sous-traitance en cascade (à confirmer) | Photos d'équipe, prénoms et métiers, « les mêmes compagnons du début à la fin » |
| Transparence | Exemple de devis détaillé anonymisé, planning partagé, point hebdomadaire avec photos par WhatsApp, charte chantier |
| Gros chantiers haut de gamme | Études de cas avec surface, durée, corps d'état coordonnés, avant/après |
| Un seul interlocuteur | Le nom et la photo de la personne qui suit le chantier, joignable en direct |

**Accroche proposée** : « Rénovation complète d'appartements à Paris. 30 ans de métier, une seule
équipe, aucune surprise. »

**Le nom prête à confusion.** « Decor Concept » évoque un décorateur, pas une entreprise de travaux.
Le logo doit toujours être accompagné d'une baseline : « Entreprise générale de rénovation à Paris ».

**Ton** : vouvoiement, sobre, concret. Des chiffres et des preuves plutôt que des superlatifs. Les
photos portent le haut de gamme, pas les adjectifs.

**Identité visuelle (retenue pour la démo)** : palette tirée des matériaux de l'immeuble parisien
(plâtre, pierre de taille, ardoise, vert « porte cochère », laiton). Titres en Marcellus, texte en
Hanken Grotesk. Détail dans `CLAUDE.md`.

**À valider avec lui** : souhaite-t-il évoquer ses origines polonaises dans son histoire ? Cela peut
enrichir le récit de son parcours, mais c'est entièrement son choix.

## Cibles et parcours client

Le site vise d'abord les propriétaires qui rénovent entièrement un appartement, ensuite les
architectes d'intérieur qui peuvent apporter des chantiers réguliers.

| Cible | Situation | Ce qu'elle craint | Ce qui la convainc |
| --- | --- | --- | --- |
| Acheteur qui rénove avant d'emménager | Appartement ancien de 80 à 250 m², ouest parisien, calendrier serré (crédit et loyer en parallèle) | Dérapage du budget et des délais, chantier abandonné, finitions bâclées | Réalisations comparables, devis détaillé, planning ferme, avis |
| Propriétaire qui transforme son logement | Famille installée, projet mûri depuis longtemps, budget important | Conflits avec la copropriété, chantier sale, interlocuteur injoignable | Méthode claire, charte chantier, une personne dédiée |
| Propriétaire à distance (expatrié, non-résident, investisseur) | Achète ou loue à Paris sans y vivre | Ne rien voir de l'avancement, découvrir les problèmes trop tard | Suivi photo hebdomadaire par WhatsApp, version anglaise du site (V2) |
| Architecte d'intérieur, décorateur, maître d'œuvre | Conçoit des projets haut de gamme, cherche une entreprise d'exécution | Plans mal respectés, finitions insuffisantes, retards qui l'exposent face à son client | Page dédiée, références, assurances, plaquette PDF, contact direct |

**Prescripteurs à activer ensuite** : agents immobiliers et chasseurs d'appartements, qui
recommandent des entreprises à leurs acheteurs.

**Parcours type d'un particulier**

1. Il cherche sur Google (« rénovation appartement Paris 16 ») ou vérifie le nom qu'on lui a recommandé.
2. Il regarde la fiche Google : avis, photos, distance.
3. Il parcourt les réalisations, puis la méthode et l'histoire de l'entreprise.
4. Il contacte par WhatsApp, appel ou formulaire.
5. Visite technique, devis, signature : le site a fini son travail à l'étape 4.

**Point clé** : même les clients venus par recommandation tapent le nom sur Google avant d'appeler.
Aujourd'hui ils tombent sur une page lorem ipsum. Le site protège donc aussi le bouche-à-oreille
existant.

## Arborescence du site

Huit rubriques sous l'accueil, toutes menant au devis.

```
Accueil
├── Rénovation ............ Complète, Haussmannien, Cuisine, Salle de bain, Menuiserie sur mesure
├── Réalisations .......... liste filtrable, puis une page par étude de cas
├── Zones d'intervention .. Paris 16, 17, 8, 7, 15, Neuilly, Boulogne (une page seulement avec un vrai chantier)
├── Notre méthode ......... étapes, exemple de devis, charte chantier
├── L'entreprise .......... histoire du fondateur, équipe, assurances
├── Architectes ........... offre prescripteurs et plaquette PDF
├── Conseils .............. un article par mois, lié aux pages services
└── Contact et devis ...... WhatsApp, téléphone, formulaire qualifiant
Sur chaque page : barre de contact mobile, mentions légales, confidentialité
```

## Contenu page par page

Chaque page a un seul objectif et se termine par le même appel à l'action : demander un devis par
WhatsApp, téléphone ou formulaire.

**Accueil**, dans l'ordre de défilement :

1. **Hero** : H1 « Rénovation complète d'appartements à Paris », l'accroche, boutons « Demander un
   devis » et « WhatsApp », curseur avant/après d'une réalisation phare.
2. **Bandeau de preuves** : 30 ans de métier, équipe, interlocuteur unique, assurance décennale.
3. **Services** : les 5 prestations.
4. **Réalisations phares** : 3 études de cas.
5. **Méthode** : les étapes, du premier appel à la réception.
6. **Le fondateur** : photo, quelques lignes sur son parcours, lien vers l'histoire.
7. **Avis clients**.
8. **Zones d'intervention** : arrondissements et communes, liens vers les pages locales.
9. **Bloc architectes** : 2 lignes et un lien vers leur page.
10. **FAQ** : 7 questions.
11. **Appel final** : WhatsApp, téléphone, formulaire.

**Autres pages**

| Page | Objectif | Contenu clé |
| --- | --- | --- |
| Rénovation complète d'appartement | Page mère, la plus importante pour le SEO | Ce qui est pris en charge (tous corps d'état), déroulé, durées types, réalisations liées, FAQ |
| Appartement haussmannien | Capter la cible la plus haut de gamme | Parquets, moulures, cheminées, redistribution, mise aux normes dans l'ancien |
| Cuisine, Salle de bain | Requêtes à fort volume, porte d'entrée vers des projets plus larges | Exemples, matériaux, contraintes en copropriété (évacuations, étanchéité) |
| Menuiserie et agencement sur mesure | Mettre en valeur le « sur-mesure » (à confirmer en interne ou partenaire) | Dressings, bibliothèques, verrières, cuisines |
| Réalisations (liste) | Preuve n°1 | Grille filtrable par type et secteur |
| Étude de cas | Convaincre avec un projet comparable | Fiche (surface, durée, corps d'état, architecte), besoin, contraintes, solution, avant/après, témoignage |
| Pages locales | SEO local | Type de bâti du secteur, chantiers réalisés sur place, avis locaux. Une page seulement si un vrai chantier l'illustre |
| Notre méthode | Rassurer sur le déroulé | Étapes, exemple de devis anonymisé, charte chantier, suivi WhatsApp hebdomadaire |
| L'entreprise | Incarner | Histoire du fondateur, équipe, chiffres, assurances et garanties |
| Architectes et décorateurs | Ouvrir le canal prescripteurs | Respect des plans, chef de chantier dédié, reporting, références, plaquette PDF |
| Conseils | SEO de fond et crédibilité | 1 article par mois, voir la stratégie SEO |
| Contact et devis | Convertir | WhatsApp, téléphone, email, formulaire, zone, horaires |

**Réalisations de démonstration** (fictives, uniquement pour la démo, toutes remplacées par de vrais
chantiers avant la production) :

- Haussmannien de 200 m², Paris 16e : rénovation complète, redistribution, parquet point de Hongrie
  restauré, moulures, cuisine ouverte, 2 salles de bain, 5 mois.
- 120 m², Paris 17e : rénovation complète avec cuisine sur mesure, 3 mois.
- 85 m², Neuilly-sur-Seine : cuisine et salle de bain haut de gamme, 6 semaines.
- 150 m² années 30, Boulogne-Billancourt : verrière atelier, dressing sur mesure, sols et électricité,
  4 mois.

## Fonctionnalités

La démo doit déjà montrer les trois fonctions qui font vendre : contacter en un geste, voir des
avant/après, qualifier la demande.

| Fonctionnalité | Pourquoi | Phase |
| --- | --- | --- |
| Barre de contact fixe sur mobile : Appeler, WhatsApp, Devis | La majorité des visites se fera sur téléphone, le contact doit être à un pouce | Démo |
| Bouton WhatsApp avec message pré-rempli selon la page (lien wa.me) | Le client parle déjà par WhatsApp. Le message indique d'où vient le contact | Démo |
| Formulaire de devis qualifiant | Trier les gros chantiers des petits travaux avant le premier appel | Démo (interface), V1 (envoi réel) |
| Envoi de plans et photos avec la demande | Un devis plus rapide et plus juste | Renvoi vers WhatsApp (l'offre gratuite de Web3Forms ne gère pas les fichiers) |
| Accusé de réception automatique par email | Rassurer et fixer un délai de rappel | V1 |
| Curseur avant/après | Le contenu le plus convaincant en rénovation | Démo |
| Galerie de réalisations filtrable (type, secteur) | Le visiteur cherche un projet qui ressemble au sien | Démo |
| Avis Google affichés et bouton « Laisser un avis » | Preuve sociale, et collecte facilitée | V1 (mise à jour manuelle au début) |
| Liste des zones (sans carte Google intégrée) | Montrer la zone sans cookies tiers | Démo |
| Suivi des clics WhatsApp, appel, email et formulaire | Savoir quelles pages et quelles requêtes rapportent des contacts | V1 |
| Plaquette PDF pour architectes | Un document à transmettre en rendez-vous ou par email | V1 |
| Version anglaise | Expatriés et acheteurs étrangers, nombreux dans l'ouest parisien | V2 |
| Bandeau « Site de démonstration » et noindex | Éviter qu'un contenu fictif soit indexé ou pris pour vrai | Démo uniquement |

**Champs du formulaire de devis** : type de projet, type de bien, surface en m², arrondissement ou
commune, budget envisagé (moins de 20 k€, 20 à 50 k€, 50 à 100 k€, 100 à 200 k€, plus de 200 k€,
je ne sais pas), date de démarrage souhaitée, architecte impliqué (oui / non), message, nom,
téléphone, email, moyen de contact préféré. Les tranches de budget sont à ajuster à son seuil de
rentabilité.

**Côté entreprise** : passer son numéro sur WhatsApp Business (profil pro, message d'absence,
réponses rapides, étiquettes « nouvelle demande », « devis envoyé », « signé »). Fixer un délai de
rappel tenable, par exemple 24 h ouvrées. Un contact sans réponse est un client perdu et souvent un
avis négatif.

## Stratégie SEO

Le SEO de Decor Concept se joue d'abord sur Google Maps (fiche Google et avis), ensuite sur des pages
expertise et locales nourries de vrais chantiers.

**Mots-clés cibles.** Les volumes sont à mesurer avec Google Keyword Planner avant la V1, puis avec
Search Console après le lancement.

| Groupe | Exemples de requêtes | Page cible |
| --- | --- | --- |
| Rénovation complète | rénovation appartement Paris, entreprise rénovation appartement Paris, entreprise générale rénovation Paris | Rénovation complète |
| Haussmannien | rénovation appartement haussmannien, rénovation parquet point de Hongrie Paris, restauration moulures Paris | Haussmannien |
| Pièces | rénovation cuisine Paris, rénovation salle de bain Paris 16 | Cuisine, Salle de bain |
| Local | rénovation appartement Paris 16, entreprise rénovation Neuilly-sur-Seine, rénovation appartement Boulogne-Billancourt | Pages locales |
| Prescripteurs | entreprise tous corps d'état architecte d'intérieur Paris | Architectes |
| Marque | Decor Concept rénovation, Decor Concept Paris | Accueil |

**Google Business Profile, priorité n°1**

- Créer ou revendiquer la fiche. Catégorie principale du type « Entreprise de rénovation », à choisir
  dans la liste Google.
- Déclarer une zone desservie (arrondissements et communes). Masquer l'adresse s'il ne reçoit pas de
  clients sur place.
- Ajouter au moins 30 vraies photos, la liste des services, une description, le lien vers le site.
- Publier une réalisation par mois. Répondre à chaque avis.
- Garder exactement le même nom, la même adresse et le même téléphone partout : site, fiche,
  PagesJaunes, Houzz, autres annuaires.

**Pages locales** : une page par secteur seulement quand un vrai chantier l'illustre, avec un texte
propre à ce secteur. Google traite comme du spam les pages ville identiques où seul le nom change.

**Contenus « Conseils »**, 6 articles sur les 6 premiers mois, chacun lié à une page service :

1. Rénover un appartement haussmannien : étapes, contraintes et pièges
2. Travaux en copropriété à Paris : autorisations, horaires, voisinage *(rédigé dans la démo)*
3. Combien de temps dure la rénovation complète d'un appartement ?
4. Comment lire un devis de rénovation poste par poste *(rédigé dans la démo)*
5. Rénovation complète : faut-il un architecte d'intérieur ?
6. Parquet ancien : rénover, restaurer ou remplacer ?

**SEO technique**

- Site statique, Core Web Vitals au vert, images en AVIF ou WebP redimensionnées, chargement différé.
- Un H1 par page, balise title de moins de 60 caractères, meta description d'environ 155 caractères,
  URL courtes en français.
- Données structurées JSON-LD : entreprise locale (GeneralContractor, zone desservie, téléphone, lien
  vers la fiche Google), fil d'Ariane, FAQ, service, article. Ne pas baliser ses propres avis en note
  étoilée : Google ignore les avis auto-publiés d'une entreprise sur son propre site.
- sitemap.xml, robots.txt, balises canonical, page 404, HTTPS, une seule version du domaine (avec ou
  sans www).
- Maillage interne : chaque réalisation pointe vers sa page service et sa page locale.
- Textes alternatifs descriptifs sur les photos, par exemple « Cuisine rénovée, appartement
  haussmannien, Paris 16 ».
- Google Search Console et Bing Webmaster Tools dès la mise en production. Redirection ou suppression
  des anciennes URL WordPress.

**Liens entrants** : annuaires professionnels cohérents, profil Houzz, architectes partenaires qui
citent l'entreprise sur leurs projets, fédération professionnelle s'il est adhérent.

## Avis clients et preuves de confiance

Decor Concept a 30 ans de clients derrière lui : les avis doivent venir d'eux, jamais être inventés.

**La règle.** Publier ou commander de faux avis est une pratique commerciale trompeuse, punie de 2 ans
de prison et 300 000 € d'amende. Un professionnel qui affiche des avis doit aussi indiquer comment il
vérifie qu'ils viennent de vrais clients. Google peut en plus restreindre une fiche qui triche.

**Plan de collecte**

1. Lister avec lui tous les clients des 2 ou 3 dernières années encore joignables, pas seulement les
   plus contents : Google interdit de ne solliciter que les avis positifs.
2. Leur envoyer personnellement, par WhatsApp, le lien direct vers la fiche Google (modèle ci-dessous).
3. Ensuite, demander un avis à chaque réception de chantier : message WhatsApp et QR code sur la
   facture finale.
4. Pour les études de cas, recueillir des témoignages longs : 10 minutes d'échange avec le client,
   Paul rédige, le client valide par écrit le texte, la mention de son prénom ou de ses initiales,
   l'arrondissement et les photos.
5. Sur le site, afficher les avis Google réels avec leur date et leur source.

**Modèle de message** : « Bonjour [Prénom], c'est [Nom] de Decor Concept. Nous avions rénové votre
appartement [rue] en [année]. Nous lançons notre site et notre fiche Google : votre avis, quel qu'il
soit, nous aiderait beaucoup. Voici le lien direct : [lien]. Merci ! »

**Pour la démo** : 3 témoignages fictifs, signés « Exemple de client » et marqués « Exemple, à
remplacer ». Ils disparaissent avant la mise en production.

**Autres preuves à afficher**

- Assurance décennale et RC professionnelle : assureur, numéro de contrat, zone couverte, attestation
  téléchargeable.
- Labels et adhésions s'il en a (Qualibat, RGE, CAPEB, FFB).
- Chiffres réels : années d'activité, nombre de chantiers, taille de l'équipe.
- Exemple de devis détaillé anonymisé.
- Photos de l'équipe au travail.
- Architectes partenaires, avec leur accord.

## Stack technique, hébergement et maintenance

Astro et Tailwind en site statique, hébergé sur Cloudflare Pages, contenus en Markdown dans un repo
GitHub : rapide pour le SEO, gratuit à héberger, simple à maintenir pour Paul.

| Brique | Choix | Pourquoi |
| --- | --- | --- |
| Framework | Astro + TypeScript | HTML statique très rapide, syntaxe de composants proche de React |
| Styles | Tailwind CSS | Itération rapide sur le design de la démo |
| Contenus | Content Collections Astro (Markdown, schémas validés) pour réalisations, services, zones, articles, avis | Ajouter un chantier = un fichier Markdown et ses photos |
| Images | Composant image d'Astro (AVIF, WebP, tailles adaptées) | Les photos sont le poids principal du site |
| Interactivité | Curseur avant/après et filtres en JavaScript léger, sans framework lourd | Garder un site ultra rapide sur mobile |
| Hébergement | Cloudflare Pages | Gratuit, CDN, HTTPS, une URL de prévisualisation par branche pour montrer les versions au client |
| Formulaire | Web3Forms | Pas de serveur à maintenir ; clé liée à l'email de réception |
| Mesure d'audience | Outil sans cookies (Umami, ou Cloudflare Web Analytics pour les visites) | Mesurer les conversions sans bandeau cookies, à vérifier selon la configuration |
| SEO | Intégration sitemap d'Astro, JSON-LD maison, Search Console | Voir la stratégie SEO |
| Code | Repo GitHub privé, déploiement automatique à chaque push | Historique complet, et le repo sert de sauvegarde |
| Édition par le client | Aucune au départ. Option V2 : Decap CMS ou Keystatic | Seulement s'il veut publier ses chantiers lui-même |

**Pourquoi pas WordPress, déjà installé sur le domaine** : plus lent, plus exposé aux failles, avec
des extensions à mettre à jour en permanence. Il n'a d'intérêt que si le client doit tout gérer seul,
ce qui n'est pas le cas.

**Domaine decorconcept.fr**

- Il pointe aujourd'hui vers un WordPress. Identifier le registrar, l'hébergeur et qui en détient les
  accès.
- Vérifier les enregistrements MX avant de toucher aux DNS : s'il reçoit des emails sur ce domaine,
  il ne faut pas les couper.
- Démo sur l'URL Cloudflare (par exemple decor-concept-site.pages.dev).
- Production : faire pointer le domaine vers Cloudflare Pages, puis résilier l'ancien hébergement.

**Coûts récurrents** : nom de domaine (déjà payé), hébergement 0 €, formulaire 0 € en offre gratuite,
mesure d'audience de 0 à quelques euros par mois selon l'outil.

**Maintenance** : Paul ajoute les réalisations et les articles, met à jour les dépendances chaque
trimestre et suit Search Console chaque mois.

## Mentions légales et conformité

Quatre pages ou blocs sont obligatoires dès que le site est public : mentions légales, médiateur de la
consommation, politique de confidentialité, information sur les avis.

**Mentions légales** (obligatoires pour tout site public, même en construction) : dénomination, forme
juridique, capital, adresse du siège, téléphone et email, numéro RCS ou Répertoire des métiers, SIRET,
TVA intracommunautaire, directeur de la publication, nom et coordonnées de l'hébergeur.

**Médiateur de la consommation** : comme il travaille pour des particuliers, il doit afficher sur son
site le nom, l'adresse postale et le site internet de son médiateur. Il ne peut citer qu'un médiateur
avec lequel il a signé une convention. À lui demander : en a-t-il un ?

**Assurances** : afficher l'assurance décennale et la RC professionnelle (assureur, numéro de contrat,
zone couverte). Elles figurent déjà sur ses devis et factures.

**Données personnelles (RGPD)** : une politique de confidentialité qui précise le responsable, la
finalité (répondre aux demandes de devis), la durée de conservation, le prestataire du formulaire,
les droits des personnes et le contact. Une phrase d'information sous le formulaire, sans case
pré-cochée. Point à vérifier en V1 : Web3Forms est un service hors UE, à mentionner dans la politique.

**Cookies** : aucun traceur publicitaire ni carte Google intégrée, donc pas de bandeau si l'outil
d'audience est configuré sans cookies. Toute vidéo ou carte externe ajoutée plus tard se charge au clic.

**Avis** : une mention qui explique d'où viennent les avis affichés et comment ils sont contrôlés.

**Droit à l'image** : accord écrit des clients pour publier les photos de leur appartement, sans
élément qui les identifie (adresse, photos de famille). Accord des employés photographiés.

**Démo** : la protéger par mot de passe (Cloudflare Access) ou au minimum la garder en noindex avec un
bandeau « Site de démonstration ». Les photos libres de droits sont acceptables pour la démo, jamais
présentées comme ses réalisations en production.

## Planning

Les durées sont indicatives et dépendent de la disponibilité de Paul.

| Phase | Durée indicative | Contenu | Feu vert pour passer à la suite |
| --- | --- | --- | --- |
| Démo (en cours) | 2 à 3 semaines | Design et pages clés, contenus fictifs marqués, formulaire en façade, protégée et en noindex | Présentation au client : positionnement et design validés |
| V1 en production | 3 à 4 semaines après réception des infos | Vraies photos et textes, mentions légales complètes, formulaire et suivi actifs, fiche Google, Search Console, domaine branché | Mise en ligne : 4 vrais chantiers, mentions légales, tests mobile |
| Croissance | Mois 1 à 6 après la mise en ligne | Collecte d'avis réels, 1 article et 1 chantier par mois, pages locales progressives, bilan Search Console mensuel, V2 (anglais, CMS éventuel) | — |

## Informations à récupérer auprès du client

La démo peut partir sans rien de plus. La production attend les huit premiers points.

**Bloquant pour la production**

- [ ] Photos avant/après de 4 à 6 chantiers, avec arrondissement, surface, durée et travaux réalisés
- [ ] Dénomination, forme juridique, SIRET, RCS ou Répertoire des métiers, TVA, adresse du siège
- [ ] Attestations d'assurance décennale et de RC professionnelle
- [ ] Nom de son médiateur de la consommation, ou en choisir un
- [ ] Numéro WhatsApp, email de contact et délai de rappel qu'il peut tenir
- [ ] Accès au registrar et à l'hébergement de decorconcept.fr, adresses email existantes sur le domaine
- [ ] Fiche Google Business Profile : existe-t-elle, qui y a accès ?
- [ ] Liste des clients des 2 ou 3 dernières années à solliciter pour un avis

**Pour affiner le contenu**

- [ ] Corps d'état réalisés en interne ou sous-traités, menuiserie sur mesure en interne ou en partenariat
- [ ] Taille exacte de l'équipe et rôles (conducteur de travaux, chefs d'équipe, métiers)
- [ ] Montant minimum de chantier accepté, budget moyen, durée moyenne
- [ ] Nombre de chantiers par mois souhaités et part de devis signés
- [ ] Arrondissements et communes prioritaires, adresse du dépôt ou du siège
- [ ] Son histoire : date de création, parcours, raison de la création, évoquer ou non ses origines
- [ ] Labels et adhésions (Qualibat, RGE, CAPEB, FFB)
- [ ] Architectes partenaires qui accepteraient d'être cités
- [ ] Logo, couleurs, flocage des véhicules s'ils existent
- [ ] Concurrents qu'il croise le plus souvent
- [ ] Portrait du fondateur et photos d'équipe sur chantier

## Sources

- [Service-public.fr — médiateur de la consommation](https://entreprendre.service-public.gouv.fr/vosdroits/F33338?profil=tout)
- [CAPEB — fiche pratique médiation de la consommation (novembre 2025)](https://www.capeb.fr/www/capeb/media//eure/document/fiche-pratique-mediation-de-la-consommation_novembre-2025.pdf)
- [LegalPlace — mentions légales obligatoires](https://www.legalplace.fr/guides/mentions-legales/)
- [Kohen Avocats — faux avis et sanctions](https://kohenavocats.fr/?p=1985685)
- [La Lettre des Réseaux — obligations d'information sur les avis](https://www.lettredesreseaux.com/?p=22581)

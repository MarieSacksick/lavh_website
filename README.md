# Site Web de Littérature à Voix Haute

Ce projet est un site web moderne pour l'association Littérature à Voix Haute, développé avec Next.js 14 et TypeScript.

## 🛠️ Structure du Projet

Voilà la structure globale du projet :

```
app/
├── components/          # Les composants utilisés dans les pages
├── types/               # Les types utilisés
├── data/                # Les données textuelles, comme la description des comédiens
├── comediens/           # La page comédien
├── cgu/                 # La page des conditions d'utilisation
├── public/              # Dossier contenant les images et les fichiers PDF
├── globals.css          # Le fichier des variables css globales de l'application
└── page.tsx             # La page d'accueil
```

Pour créer une nouvelle page, il suffit de :

1. Créer un dossier dans `app` avec le nom de cette page.
2. Créer le fichier page.tsx à l'intérieur de ce dossier.

Pour en savoir plus, [https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages](cliquez-ici.).

## 🎨 Design

- **Variables CSS** dans le fichier `app/globals.css`

- **Breakpoints** :
  - Mobile : < 768px
  - Desktop : ≥ 768px

## Installation

1. Cloner le repository :

```bash
git clone [URL_DU_REPO]
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer le serveur de développement :

```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000)

## 🚀 Déploiement

Pour créer le dossier `out` contenant les fichiers HTML/CSS/JS statiques, lancer :

```bash
npm run build
```

# Fisheye 📸

Plateforme de photographes freelances permettant de découvrir des photographes,
consulter leurs albums (photos et vidéos) et les contacter.

Projet réalisé dans le cadre du parcours **Développeur Front-End** d'OpenClassrooms,
avec un accent particulier sur l'**accessibilité**.

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- [Prisma 7](https://www.prisma.io) avec une base **SQLite**
- CSS Modules

## Installation

```bash
# Installer les dépendances
npm install

# Créer un fichier .env à la racine avec l'URL de la base
echo 'DATABASE_URL="file:./dev.db"' > .env

# Générer le client Prisma et créer la base
npx prisma generate
npx prisma migrate dev
```

## Lancer le projet

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

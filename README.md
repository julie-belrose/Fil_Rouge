# Fill_Rouge - Application de signalement de déchets

## Structure du projet

```
src/
├── domains/            # Tous les domaines de l'application
│   ├── auth/           # Authentification et autorisation
│   ├── user/           # Fonctionnalités utilisateur
│   ├── agent/          # Fonctionnalités agent
│   ├── admin/          # Fonctionnalités administrateur
│   └── report/         # Gestion des signalements
├── routes/             # Fichiers de routes
└── database/           # Connexions aux bases de données

config/                 # Fichiers de configuration
├── mongodb/            # Configuration MongoDB
└── mysql/              # Configuration MySQL
``"

## Installation

1. Cloner le dépôt
2. Installer les dépendances : `npm install`
3. Copier `.env.example` vers `.env` et configurer les variables d'environnement
4. Lancer le serveur : `npm start`

## Variables d'environnement

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/fill_rouge
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=fill_rouge
JWT_SECRET=votre_secret_jwt
``"


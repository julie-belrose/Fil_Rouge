# Fill_Rouge - Application de signalement de déchets

## Structure du projet

```
src/
├── domains/            # All domains of the application
│   ├── auth/           # Authentication and authorization
│   ├── user/           # User features
│   ├── agent/          # Agent features
│   ├── admin/          # Admin features
│   └── report/         # Report features
├── routes/             # Routes
└── database/           # Database connections

config/                 # Configuration
├── mongodb/            # MongoDB configuration
└── mysql/              # MySQL configuration
``"

## Installation

1. Clone the repository
2. Install dependencies : `pnpm install`
3. Copy `.env.example` to `.env` and configure the environment variables
4. Launch the server : `pnpm start`

## Environment variables

Create a file `.env` at the root of the project with the following variables :

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


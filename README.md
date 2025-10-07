# Hello World :earth_americas:

<img src="https://media.giphy.com/media/3oz8xSjBmD1ZyELqW4/giphy.gif" alt="hello" width="400"/><br>

 [![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

# ♻️ Fil_Rouge – Waste Reporting Application

A fullstack Node.js + HTML/CSS/JS application allowing **citizens**, **municipal agents**, and **administrators** to report and manage urban waste issues efficiently.

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, MySQL
- **Frontend**: HTML5, CSS3 (Custom + Variables), Vanilla JS
- **Dev Tools**: PNPM, Nodemon, Commitizen, dotenv
- **Architecture**: Domain-Driven Design (DDD)

---

## 📁 Project Structure

```

Fill\_Rouge/
├── backend/
│   ├── app.js                   # Main Express server entry point
│   └── src/
│       ├── config/              # Environment configuration
│       ├── database/           # MongoDB & MySQL connections
│       ├── middleware/         # Error and 404 handlers
│       ├── routes/             # Express route definitions
│       └── domains/            # Domain-driven feature logic
│           └── <entity>/       # (auth, user, agent, admin, report)
│               ├── controller/
│               ├── dto/
│               ├── entity/
│               ├── mapper/
│               ├── model/
│               ├── schema/
│               └── service/
│
├── frontend/
│   ├── dist/                   # Static HTML/CSS/JS (used in prod)
│   └── src/
│       ├── components/         # UI components
│       │   └── ui/buttons/
│       ├── pages/              # HTML views (home, login, report...)
│       ├── styles/             # Global styling
│       │   └── base/           # Reset, typography, variables
│       └── utils/              # Utility JS files
│
├── .env                        # Environment config (dev)
├── .env.prod                  # Environment config (prod)
├── .env.example               # Template for env variables
├── package.json
└── README.md

````

---

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/Fill_Rouge.git
   cd Fill_Rouge
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Setup environment variables**

   ```bash
   cp .env.example .env
   ```

---

## 🚀 Run the Application

### In development mode

```bash
pnpm dev
```

Frontend is served from `frontend/src` (live HTML/CSS/JS source).

### In production mode

```bash
pnpm build:frontend
pnpm start
```

Frontend will be copied into `frontend/dist` and served statically.

---

## 🌐 Environment Variables

Create a `.env` file at the root with the following content:

```env
NODE_ENV=local
PORT=3000

MONGODB_URI=mongodb://localhost:27017/fil_rouge

MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=fil_rouge

JWT_SECRET=your_super_secret
```

---

## 📜 Available Scripts

| Command               | Description                                 |
| --------------------- | ------------------------------------------- |
| `pnpm dev`            | Run Express server with nodemon             |
| `pnpm start`          | Run production server                       |
| `pnpm build:frontend` | Build frontend to `/dist`                   |
| `pnpm commit`         | Use Commitizen to make conventional commits |

---

## ✅ Commit Convention

This project uses **Commitizen** for standard commit messages:

```bash
pnpm commit
```

You’ll be guided through prompts to ensure semantic commit format.

---

## 👥 Contributors

* **Julie Belrose** – Dev (`julieanani`)
* **Ibrahim BOUKLIKHA** – Dev (`ibrahim-boukligha`)
* **Cédric PAULIN** – Dev (`cedric-paulin`)
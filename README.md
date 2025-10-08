# Hello World :earth_americas:

<img src="https://media.giphy.com/media/3oz8xSjBmD1ZyELqW4/giphy.gif" alt="hello" width="400"/><br>

 [![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

# ♻️ Fill_Rouge – Waste Reporting Application

A fullstack Node.js + HTML/CSS/JS application allowing **citizens**, **municipal agents**, and **administrators** to report and manage urban waste issues efficiently.

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, MySQL
- **Frontend**: HTML5, CSS3 (Tailwind CSS), Vanilla JS (ES6 Modules)
- **Dev Tools**: PNPM, Nodemon, Commitizen, dotenv
- **Architecture**: Domain-Driven Design (DDD), Web Components

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
│       ├── core/               # Core application layer
│       │   ├── constants/      # Routes, API endpoints
│       │   └── api/           # Base API configuration
│       ├── domains/           # Domain-driven feature logic
│       │   ├── auth/          # Authentication domain
│       │   │   ├── pages/     # Login, logout HTML pages
│       │   │   └── services/  # AuthService, SessionService
│       │   ├── dashboard/     # User/Agent/Admin dashboards
│       │   ├── profile/       # User profile management
│       │   └── report/        # Waste report management
│       │       ├── pages/     # Report creation, list, details
│       │       ├── services/  # Report data services
│       │       └── usecases/  # Business logic layer
│       ├── shared/            # Shared application layer
│       │   ├── components/    # Reusable web components
│       │   ├── services/      # Cross-domain services
│       │   └── icons/         # SVG sprite system
│       ├── styles/            # Global Tailwind CSS
│       └── tests/             # Mock data and test utilities
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
# Run both frontend and backend in parallel
pnpm dev

# Or run separately:
pnpm run dev:front  # Frontend only (port 3000)
pnpm run dev:back   # Backend only (port 3001)
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
| `pnpm dev`            | Run both frontend and backend in parallel  |
| `pnpm run dev:front`  | Run frontend development server only       |
| `pnpm run dev:back`   | Run backend development server only        |
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
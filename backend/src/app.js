import "dotenv/config";
import express, { response } from "express";
import { registerStatic } from "#loader/static.loader.js";
import { registerMiddlewares } from "#loader/middleware.loader.js";
import { registerRoutes } from "#loader/routes.loader.js";
import { bootstrap } from "#backend/bootstrap.js";

const app = express();

// Static files depending on env
registerStatic(app);

// API Routes
registerRoutes(app);

// Middlewares (including error handlers)
registerMiddlewares(app, express);

bootstrap(app).then(() => {
    console.log("Server started");
}).catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
});

export default app;

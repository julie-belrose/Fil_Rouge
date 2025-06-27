import express from "express";
import { join, resolve } from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Recreate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Configure static files depending on the environment
 */
export const registerStatic = (app) => {
    const env = process.env.NODE_ENV?.toLowerCase() || "development";
    const rootPath = resolve(__dirname, "../../..");
    const frontendPath = join(rootPath, "frontend");

    if (env === "development") {
        // Files statics in src
        app.use(express.static(join(frontendPath, "src")));

        // Routes specifics
        app.use('/domains', express.static(join(frontendPath, 'src/domains')));
        app.use('/static', express.static(join(frontendPath, 'static')));
        app.use('/public', express.static(join(frontendPath, 'public')));
        app.use('/infrastructure', express.static(join(frontendPath, 'src/infrastructure')));
        app.use('/tests', express.static(join(frontendPath, 'tests')));

        app.get('/', (req, res) => {
            res.sendFile(join(frontendPath, 'src/index.html'));
        });

        console.log(`Serveur en mode ${env} - fichiers servis depuis frontend/src`);
    }

    else {
        const distPath = join(frontendPath, "dist");
        app.use(express.static(distPath));

        app.get('/', (req, res) => {
            res.sendFile(join(distPath, 'index.html'));
        });

        console.log(`Serveur en mode ${env} - fichiers servis depuis frontend/dist`);
    }
};
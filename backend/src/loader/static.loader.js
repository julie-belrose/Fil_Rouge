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

    // En développement, servir depuis le répertoire src
    if (env === "development") {
        // Fichiers statiques du répertoire src
        app.use(express.static(join(frontendPath, "src")));

        // Routes spécifiques
        app.use('/auth', express.static(join(frontendPath, 'src/pages/auth')));
        app.use('/dashbord', express.static(join(frontendPath, 'src/pages/dashbord')));

        // Page d'accueil par défaut
        app.get('/', (req, res) => {
            res.sendFile(join(frontendPath, 'src/index.html'));
        });

        console.log(`Serveur en mode ${env} - fichiers servis depuis frontend/src`);
    }
    // En production, servir depuis le répertoire dist
    else {
        const distPath = join(frontendPath, "dist");
        app.use(express.static(distPath));

        // Page d'accueil par défaut en production
        app.get('/', (req, res) => {
            res.sendFile(join(distPath, 'index.html'));
        });

        console.log(`Serveur en mode ${env} - fichiers servis depuis frontend/dist`);
    }
};
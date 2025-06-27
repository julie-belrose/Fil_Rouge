import express from "express";
import { join } from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
//import test from '../../../frontend/dist/index.html';


// Recréer __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Configure static files depending on the environment
 */
export const registerStatic = (app) => {
    const env = process.env.NODE_ENV || "DEV";

    if (env === "PROD") {
        app.use(express.static(join(__dirname, "../")));
        console.log(`Server in mode ${env} - static files: frontend/dist`);
    } else {
        app.use(express.static(join(__dirname, "../../../frontend/src")));
        console.log(`Server in mode ${env} - static files: frontend/src`);
    }
};
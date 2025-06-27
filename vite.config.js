import { defineConfig } from 'vite';
import path from 'node:path';
import pkg from './package.json';

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: './backend/src/app.js', //path to the entry point
            formats: ['es'] // compile in ESM (ECMAScript Modules)
        },
        rollupOptions: {
            output: {
                entryFileNames: 'app.js'
            },
            external: [...Object.keys(pkg.dependencies), 'path', 'fs', 'url'], // Externalize dependencies
        }
    },
    emptyOutDir: true,
    resolve: {
        alias: {
            '@backend': path.resolve(__dirname, './backend/src'),
            '@frontend': path.resolve(__dirname, './frontend/src'),
            '@config': path.resolve(__dirname, './backend/src/config'),
            '@utils': path.resolve(__dirname, './backend/src/utils'),
            '@scripts': path.resolve(__dirname, './backend/src/scripts'),
            '@domains': path.resolve(__dirname, './backend/src/domains'),
            '@database': path.resolve(__dirname, './backend/src/database'),
            '@middleware': path.resolve(__dirname, './backend/src/middleware')
        }
    }
});

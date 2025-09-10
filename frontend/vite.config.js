import { defineConfig } from 'vite';
import path from 'node:path';
import pkg from '../package.json';

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: './frontend/src/main.js', //path to the entry point
            formats: ['es'] // compile in ESM (ECMAScript Modules)
        },
        rollupOptions: {
            output: {
                entryFileNames: 'main.js'
            },
            external: [...Object.keys(pkg.dependencies), 'path', 'fs', 'url'], // Externalize dependencies
        }
    },
    emptyOutDir: true,
    resolve: {
        alias: {
            '@frontend': path.resolve(__dirname, './frontend/src'),
            '@core': path.resolve(__dirname, './frontend/src/core'),
            '@api': path.resolve(__dirname, './frontend/src/core/api'),
            '@constants': path.resolve(__dirname, './frontend/src/constants'),
            '@components': path.resolve(__dirname, './frontend/src/components'),
            '@utils-frontend': path.resolve(__dirname, './frontend/src/utils'),
            '@scripts': path.resolve(__dirname, './frontend/src/scripts'),
            '@views': path.resolve(__dirname, './frontend/src/views'),
        }
    }
});

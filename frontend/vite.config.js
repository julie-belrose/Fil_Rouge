import { defineConfig } from 'vite';
import path from 'node:path';
import pkg from '../package.json';

export default defineConfig({
    build: {
        outDir: 'frontend/dist',
        lib: {
            entry: path.resolve(__dirname, 'src/main.js'),
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
            '@core': path.resolve(__dirname, './src/core'),
            '@api': path.resolve(__dirname, './src/core/api'),
            '@constants': path.resolve(__dirname, './src/core/constants'),
            '@components': path.resolve(__dirname, './src/components'),
            '@utils-frontend': path.resolve(__dirname, './src/utils'),
            '@views': path.resolve(__dirname, './src/views'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@styles': path.resolve(__dirname, './src/styles'),
        }
    }
});

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  root: './frontend/src',
  resolve: {
    alias: {
      // ----------------------------------------------------
      // 1. BUSINESS ALIASES (IN THE SOURCE)
      // ----------------------------------------------------
      // Base for all in src/core
      '#core-frontend': path.resolve(__dirname, 'frontend/src/core'),
      '#constants': path.resolve(__dirname, 'frontend/src/core/constants'),
      '#api': path.resolve(__dirname, 'frontend/src/core/api'),

      // Base for all in src/domains (domains)
      '#domains-frontend': path.resolve(__dirname, 'frontend/src/domains'),
      '#dashboard': path.resolve(__dirname, 'frontend/src/domains/dashboard'),
      '#errors-frontend': path.resolve(__dirname, 'frontend/src/domains/errors'),
      '#profile': path.resolve(__dirname, 'frontend/src/domains/profile'),
      '#report-frontend': path.resolve(__dirname, 'frontend/src/domains/report'),

      // Base for all in src/shared (Composants, services generics)
      '#shared-frontend': path.resolve(__dirname, 'frontend/src/shared'),
      '#components': path.resolve(__dirname, 'frontend/src/shared/components'),

      // Dock utilitary
      '#styles': path.resolve(__dirname, 'frontend/src/styles'),
      '#public': path.resolve(__dirname, 'frontend/src/public'),

      // ----------------------------------------------------
      // 2. ALIASES OF DEV (OUT OF THE SOURCE)
      // ----------------------------------------------------
      '#tests-frontend': path.resolve(__dirname, 'frontend/tests'),
      '#mock-frontend': path.resolve(__dirname, 'frontend/tests/mock'),
    }
  },
  build: {
    outDir: '../../dist',
    emptyOutDir: true
  },
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  optimizeDeps: {
    // todo delete debore push
    force: true,
  }
})
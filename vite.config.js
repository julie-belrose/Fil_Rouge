import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  root: './frontend/src',
  resolve: {
    alias: {
      '/infrastructure': path.resolve(__dirname, 'frontend/src/infrastructure'),
      '/tests': path.resolve(__dirname, 'frontend/tests'),
      '/src': path.resolve(__dirname, 'frontend/src'),
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
  }
})
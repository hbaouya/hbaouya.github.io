import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Sets relative path for assets, essential for GitHub Pages
  build: {
    outDir: 'dist',
  }
})
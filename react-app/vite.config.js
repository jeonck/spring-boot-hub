import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/spring-boot-hub/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
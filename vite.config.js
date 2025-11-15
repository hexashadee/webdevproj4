import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/webdevproj4/',
  build: {
    assetsDir: ''
  },
  plugins: [react()]
})


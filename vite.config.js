import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/Frontend-Web-Application/',  // 👈 Ajusta esto con el nombre de tu repositorio
  plugins: [vue()],
})

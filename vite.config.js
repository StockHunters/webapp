import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/Frontend-Web-Application/', // 👈 Esta línea es clave
  plugins: [vue()],
});

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api/weather': {
        target: 'https://api.weather.yandex.ru/v2/forecast',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/weather/, ''),
        headers: {
          'X-Yandex-API-Key': 'db55f3b5-c953-47d6-b50c-7a1056bf2712', // Замените на ваш реальный API ключ
        },
      },
      '/api': {
        target: 'http://api.weatherapi.com/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/poderjudicial': {
        target: 'https://api.poderjudicial.gob.do',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/poderjudicial/, ''),
        secure: true,
      }
    }
  }
})

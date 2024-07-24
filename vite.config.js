import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/fintech/",
  plugins: [react()],
  optimizeDeps: {
    include: ['chart.js'] // Include chart.js for Vite to optimize
  },
  build: {
    rollupOptions: {
      external: ['chart.js']
    }
  }
})

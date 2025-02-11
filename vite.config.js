
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['2e1514c5-c1f8-4a42-bf48-ffafa29ba5e5-00-ob2vp21pdp6x.picard.replit.dev']
  }
})

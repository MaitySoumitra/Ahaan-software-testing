import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'lottie-vendor': ['@lottiefiles/dotlottie-react'],
          'bootstrap-vendor': ['bootstrap', 'react-bootstrap'],
          'map-vendor': ['leaflet', 'leaflet.markercluster'],
          'vendors': ['axios', 'react-router-dom', 'swiper'],
        },
      },
    },
    chunkSizeWarningLimit: 800, 
  },
})
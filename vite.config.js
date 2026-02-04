import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separates Bootstrap and UI logic from your main code
          'bootstrap-vendor': ['bootstrap', 'react-bootstrap'],
          // Separates heavy functional libraries
          'map-vendor': ['leaflet', 'leaflet.markercluster'],
          'vendors': ['axios', 'react-router-dom', 'swiper'],
        },
      },
    },
    // Increase the limit slightly since Bootstrap is naturally larger
    chunkSizeWarningLimit: 800, 
  },
})
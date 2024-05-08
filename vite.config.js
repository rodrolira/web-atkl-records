import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import flowbite from 'flowbite/plugin'
import autoprefixer from 'autoprefixer' // Importa autoprefixer

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), flowbite()],
  css: {
    postcss: {
      plugins: [
        autoprefixer() // Agrega autoprefixer a tus plugins de PostCSS
      ]
    }
  },

  server: {
    proxy: {
      // Proxy todas las solicitudes que comiencen con '/auth' al servidor Express en el puerto 9000
      '/auth': ' http://localhost:3000'
    }
  },

  build: {
    rollupOptions: {
      input: {
        main: './src/main.jsx',
        client: '/index.html'
      }
    }
  }
})

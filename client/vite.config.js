import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import flowbite from 'flowbite/plugin'
import autoprefixer from 'autoprefixer'; // Importa autoprefixer

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    flowbite()
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(), // Agrega autoprefixer a tus plugins de PostCSS
      ],
    },
  },

  server: {
    proxy: {
      // Proxy todas las solicitudes que comiencen con '/api' al servidor Express en el puerto 9000
      '/api': {
        target: 'http://localhost:5173',
        changeOrigin: true,
      },
      '/': {
        target: 'http://localhost:5173',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      input: '/src/main.jsx',
    },
  },
});


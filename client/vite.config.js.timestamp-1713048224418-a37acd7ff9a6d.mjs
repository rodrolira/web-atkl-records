// vite.config.js
import { defineConfig } from "file:///home/rodrolira/app/vite-projects/web-atkl/client/node_modules/vite/dist/node/index.js";
import react from "file:///home/rodrolira/app/vite-projects/web-atkl/client/node_modules/@vitejs/plugin-react-swc/index.mjs";
import flowbite from "file:///home/rodrolira/app/vite-projects/web-atkl/client/node_modules/flowbite/plugin.js";
import autoprefixer from "file:///home/rodrolira/app/vite-projects/web-atkl/client/node_modules/autoprefixer/lib/autoprefixer.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    flowbite()
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer()
        // Agrega autoprefixer a tus plugins de PostCSS
      ]
    }
  },
  server: {
    proxy: {
      // Proxy todas las solicitudes que comiencen con '/auth' al servidor Express en el puerto 9000
      "/auth": " http://localhost:9000"
    }
  },
  build: {
    rollupOptions: {
      input: "./src/main.jsx"
    },
    outDir: "dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9yb2Ryb2xpcmEvYXBwL3ZpdGUtcHJvamVjdHMvd2ViLWF0a2wvY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9yb2Ryb2xpcmEvYXBwL3ZpdGUtcHJvamVjdHMvd2ViLWF0a2wvY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3JvZHJvbGlyYS9hcHAvdml0ZS1wcm9qZWN0cy93ZWItYXRrbC9jbGllbnQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3YydcbmltcG9ydCBmbG93Yml0ZSBmcm9tICdmbG93Yml0ZS9wbHVnaW4nXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcic7IC8vIEltcG9ydGEgYXV0b3ByZWZpeGVyXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBmbG93Yml0ZSgpXG4gIF0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgYXV0b3ByZWZpeGVyKCksIC8vIEFncmVnYSBhdXRvcHJlZml4ZXIgYSB0dXMgcGx1Z2lucyBkZSBQb3N0Q1NTXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5cbiAgc2VydmVyOiB7XG4gICAgcHJveHk6IHtcbiAgICAgIC8vIFByb3h5IHRvZGFzIGxhcyBzb2xpY2l0dWRlcyBxdWUgY29taWVuY2VuIGNvbiAnL2F1dGgnIGFsIHNlcnZpZG9yIEV4cHJlc3MgZW4gZWwgcHVlcnRvIDkwMDBcbiAgICAgICcvYXV0aCc6ICcgaHR0cDovL2xvY2FsaG9zdDo5MDAwJyxcblxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6ICcuL3NyYy9tYWluLmpzeCcsXG4gICAgfSxcblxuICAgIG91dERpcjogJ2Rpc3QnLFxuICB9LFxufSk7XG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVUsU0FBUyxvQkFBb0I7QUFDbFcsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sY0FBYztBQUNyQixPQUFPLGtCQUFrQjtBQUd6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1AsYUFBYTtBQUFBO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUE7QUFBQSxNQUVMLFNBQVM7QUFBQSxJQUVYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUVBLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

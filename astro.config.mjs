import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

// Configuración de Astro
<<<<<<< HEAD

// https://astro.build/config
export default defineConfig({
  integrations: [react() // Debe ser una función llamada que devuelve un objeto
  ]
=======
export default defineConfig({
    integrations: [
        react(), // Debe ser una función llamada que devuelve un objeto
    ],
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
})

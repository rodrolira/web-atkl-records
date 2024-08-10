import { Logout } from '@mui/icons-material'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
        english: 'English',
        spanish: 'Spanish',
        logout: 'Logout',
        subscribe: 'Subscribe',
        name: 'Name',
        email: 'Email',
        description: 'Description (Optional)',
        submit: 'Submit',
        subscribe_message: 'Subscribe to receive the latest releases for free by email',
        description_optional: 'Description (Optional)',
        form_sent_success: 'Form successfully submitted'

    }
  },
  es: {
    translation: {
        english: 'Inglés',
        spanish: 'Español',
        logout: 'Cerrar sesión',
        subscribe: 'Suscribirse',
        name: 'Nombre',
        email: 'Correo electrónico',
        description: 'Descripción (Opcional)',
        submit: 'Enviar',
        subscribe_message: 'Suscribirse para recibir las últimas actualizaciones gratis por correo electrónico',
        description_optional: 'Descripción (Opcional)',
        form_sent_success: 'Formulario enviado con éxito'
        // Agrega más traducciones aquí
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // idioma por defecto
  interpolation: {
    escapeValue: false // React ya se encarga de esto
  }
})

export default i18n

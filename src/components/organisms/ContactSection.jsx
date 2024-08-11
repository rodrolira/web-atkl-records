<<<<<<< HEAD
import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
=======
import React, { Suspense } from 'react' // Importa React y Suspense
import { useLanguage } from '../../contexts/LanguageContext'
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
import Title from '../atoms/Title'

// Importa ContactForm usando importación dinámica
const ContactForm = React.lazy(() => import('../molecules/ContactForm'))

const ContactSection = () => {
<<<<<<< HEAD
  const { t } = useTranslation()
=======
  const { language } = useLanguage()
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96

  return (
    <div id='contact' className='py-12'>
      <div className='max-w-4xl mx-auto'>
<<<<<<< HEAD
        <Title>{t('contactSection.title')}</Title>
=======
        <Title>{language === 'en' ? 'Contact Us' : 'Contáctanos'}</Title>
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
        <div className='bg-slate-900 rounded shadow-md p-6 w-6/12 mx-auto'>
          <Suspense fallback={<div>Loading...</div>}>
            <ContactForm /> {/* Renderiza el componente ContactForm */}
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default ContactSection

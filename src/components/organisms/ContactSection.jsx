import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../atoms/Title'

// Importa ContactForm usando importación dinámica
const ContactForm = React.lazy(() => import('../molecules/ContactForm'))

const ContactSection = () => {
  const { t } = useTranslation()

  return (
    <div id='contact' className='py-12'>
      <div className='max-w-4xl mx-auto'>
        <Title>{t('contactSection.title')}</Title>
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

import React, { Suspense } from 'react' // Importa React y Suspense
import { useLanguage } from '../../contexts/LanguageContext'
import Title from '../atoms/Title'

// Importa ContactForm usando importación dinámica
const ContactForm = React.lazy(() => import('../molecules/ContactForm'))

const ContactSection = () => {
  const { language } = useLanguage()

  return (
    <div id='contact' className='py-12'>
      <div className='max-w-4xl mx-auto'>
        <Title>{language === 'en' ? 'Contact Us' : 'Contáctanos'}</Title>
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

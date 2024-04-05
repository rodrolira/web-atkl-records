import React from 'react'
import ContactForm from './ContactForm'
import { useLanguage } from '../../contexts/LanguageContext';
import Title from '../atoms/Title';

const ContactSection = () => {
  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto

  return (
    <div id='contact' className='py-12'>
      <div className='max-w-4xl mx-auto'>
        <Title children={language === 'en' ? 'Contact Us' : 'Contáctanos'} />
        <div className='bg-white rounded shadow-md p-6 w-6/12 mx-auto'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactSection

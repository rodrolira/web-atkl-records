import React from 'react'
import Button from '../atoms/Button'

import { useLanguage } from '../../contexts/LanguageContext'

const DemoButton = () => {
  const { language } = useLanguage()

  const handleButtonClick = () => {
    // Obtener la referencia a la sección de demos
    const demosSection = document.getElementById('demos')
    // Hacer scroll hacia la sección de demos
    demosSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='sm:h-full lg:h-auto mb-2 cursor-pointer'>
      <Button
        onClick={handleButtonClick} // Manejar el evento de clic
        className='justify-center sm:w-32 md:w-32 h-full md:font-normal lg:font-bold bg-green-600 hover:bg-green-700 focus:ring-4  focus:outline-none focus:ring-green-300 px-5 md:m-0 lg:mx-8 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 md:order-2'
      >
        {language === 'en' ? 'Send Demo' : 'Envía tu Demo'}
      </Button>
    </div>
  )
}

export default DemoButton

// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from '../atoms/Button'

import { useLanguage } from '../../contexts/LanguageContext'
import { useNavigate, useLocation } from 'react-router-dom'

const DemoButton = () => {
    const { language } = useLanguage()
    const navigate = useNavigate()
    const location = useLocation()

    const handleButtonClick = () => {
        // Verificar si estamos en la página principal
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollToDemos: true } })

            // Esperar un momento antes de hacer scroll para asegurar que la navegación ocurra primero
            setTimeout(() => {
                const demosSection = document.getElementById('demos')
                if (demosSection) {
                    demosSection.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100) // Ajusta este tiempo según sea necesario
        } else {
            // Estamos en la página principal, simplemente hacer scroll hacia la sección de demos
            const demosSection = document.getElementById('demos')
            if (demosSection) {
                demosSection.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <div className="sm:h-full lg:h-[60%] xl:h-auto cursor-pointer">
            <Button
                onClick={handleButtonClick} // Manejar el evento de clic
                className="justify-center sm:w-32 md:w-auto lg:text-sm md:text-xs h-full md:font-normal lg:font-bold bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 px-5 md:m-0 lg:mx-2 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 md:order-2"
            >
                {language === 'en' ? 'Send Demo' : 'Envía tu Demo'}
            </Button>
        </div>
    )
}

export default DemoButton

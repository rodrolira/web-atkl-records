import React, { useEffect, useState } from 'react'
import NavItem from '../atoms/NavItem'
import { useLanguage } from '../../contexts/LanguageContext'
import links from '../../utils/navbarLinks'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import { useAuth } from '../../contexts/AuthContext' // Asegúrate de importar el contexto de autenticación del usuario

const HomeNavbarLinks = () => {
    const { language } = useLanguage()
    const { isAuthenticated: userAuthenticated } = useAuth()
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()

    const [activeItem, setActiveItem] = useState('/') // Inicialmente ningún ítem está activo

    const handleItemClick = (to) => {
        setActiveItem(to) // Actualiza el estado activo con la nueva ruta
        const section = document.getElementById(to.replace('/', ''))
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            console.log('Scrolling detected')
            // Otras operaciones relacionadas con el scroll
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []) // Se ejecuta solo una vez al montar el componente

    const handleDiscographyClick = () => {
        console.log('Clicked on Discography link')
        window.location.href = '/discography' // Redirige a la página de discografía
    }

    return (
        <div className="bg-transparent border-gray-200 w-full h-full relative">
            <div className="flex flex-1 h-full justify-between mx-auto w-full items-center">
                <div className="flex items-center h-full w-full justify-end">
                    <div className="hidden lg:flex md:block md:w-auto md:order-1">
                        <div className="max-w-screen-xl mx-auto w-full">
                            <div className="flex items-center justify-center w-full">
                            <ul className="items-center md:bg-transparent bg-green-700 bg-opacity-75 text-green-50 font-semibold flex flex-col md:p-0 w-full sm:border md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-green-700">
                            {links.map((link) => {
                                        const showLink = link.authRequired
                                            ? adminAuthenticated || userAuthenticated // Muestra el enlace si el usuario o admin están autenticados
                                            : true

                                        return (
                                            showLink && (
                                                <NavItem
                                                    key={link.to}
                                                    to={`#${link.to}`} // Agregar un '#' para crear el selector de ID correcto
                                                    text={
                                                        language === 'en'
                                                            ? link.text_en
                                                            : link.text_es
                                                    } // Usa el estado del idioma para determinar el texto del enlace
                                                    isActive={
                                                        activeItem === link.to ||
                                                        (link.to === '/' &&
                                                            activeItem === '')
                                                    } // Verifica si el enlace es 'Home' y si el estado activo está vacío
                                                    onClick={
                                                        link.to === '/discography'
                                                            ? handleDiscographyClick
                                                            : () =>
                                                                handleItemClick(link.to)
                                                    }
                                                />
                                            )
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeNavbarLinks

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import NavItem from '../atoms/NavItem'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import links from '../../utils/navbarLinks'

const OtherPagesNavbarLinks = () => {
  const { language } = useLanguage()
  const [isNavbarOpen, setNavbarOpen] = useState(false)
  const location = useLocation()
  const [activeItem, setActiveItem] = useState(location.pathname)

  const handleItemClick = to => {
    setNavbarOpen(false)
    setActiveItem(to) // Actualiza el estado activo con la nueva ruta
    const section = document.getElementById(to.replace('/', ''))
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Actualiza el activeItem cuando cambia la location
  useEffect(() => {
    setActiveItem(location.pathname)
  }, [location.pathname])

  return (
    <div className='bg-transparent border-gray-200 w-full h-full relative'>
      <div className='max-w-screen-xl flex flex-1 h-full justify-between mx-auto w-full items-center'>
        <div className='flex items-center h-full w-full justify-end me-4 '>
          <div
            className={`${
              isNavbarOpen ? 'md:hidden absolute top-full w-full' : 'hidden'
            } items-center justify-between lg:flex md:block md:w-auto md:order-1`}
          >
            <div className='max-w-screen-xl mx-auto w-full'>
              <div className='flex items-center justify-center w-full'>
                <ul className='items-center md:bg-transparent bg-gray-700 bg-opacity-75 font-semibold flex flex-col md:p-0 w-full  sm:border md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700'>
                  {links.map(link => (
                    <NavItem
                      key={link.to}
                      to={link.to}
                      text={language === 'en' ? link.text_en : link.text_es} // Usa el estado del idioma para determinar el texto del enlace
                      isActive={
                        activeItem === link.to ||
                        (link.to === '/' && activeItem === '')
                      }
                      onClick={() => handleItemClick(link.to)}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherPagesNavbarLinks

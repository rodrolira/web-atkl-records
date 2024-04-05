import React, { useState } from 'react'
import NavItem from '../atoms/NavItem'
import { Dropdown } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom' // Importa Link desde react-router-dom
import { useLanguage } from '../../contexts/LanguageContext' // Importa el hook useLanguage

// Define el componente NavbarLinks
const HomeNavbarLinks = () => {
  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto
  // Define el estado para controlar la apertura y cierre del menú
  const [isNavbarOpen, setNavbarOpen] = useState(false)

  const location = useLocation()

  const handleItemClick = id => {
    setNavbarOpen(false)
    const section = document.getElementById(id)
    section.scrollIntoView({ behavior: 'smooth' }) // Hacer scroll suave hacia la sección
  }

  const deactivateOtherLinks = () => {
    // Obtener todos los elementos del navbar
    const navbarLinks = document.querySelectorAll('.navbar-link')

    // Iterar sobre cada enlace y desactivarlo
    navbarLinks.forEach(link => {
      link.classList.remove('text-red-700') // Quita la clase que hace que el enlace esté en rojo
    })
  }

  // Retorna la estructura del componente
  return (
    <div className='bg-transparent border-gray-200 w-full h-full relative'>
      <div className='max-w-screen-xl flex flex-1 h-full justify-between mx-auto w-full items-center'>
        <div className='flex items-center h-full w-full justify-end '>
          {/* Menu Desplegable */}
          <div className='items-center lg:hidden md:hidden sm:block md:w-0 !mt-0 md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse z-40'>
            <Dropdown label='Menu' dismissOnClick={false}>
              <Dropdown.Item>
                <NavItem
                  to='#'
                  text={language === 'en' ? 'Home' : 'Inicio'}
                  isActive={location.pathname === '#'}
                  onClick={handleItemClick}
                />
              </Dropdown.Item>
              {/* Agrega el idioma al texto de los enlaces */}
              <Dropdown.Item>
                <NavItem
                  to='#artists'
                  text={language === 'en' ? 'Artists' : 'Artistas'}
                  isActive={location.pathname === '#artists'}
                  onClick={() => handleItemClick('artists')}
                />
              </Dropdown.Item>
              <Dropdown.Item>
                <NavItem
                  to='#releases'
                  text={language === 'en' ? 'Releases' : 'Lanzamientos'}
                  isActive={location.pathname === '#releases'}
                  onClick={() => handleItemClick('releases')}
                />
              </Dropdown.Item>
              <Dropdown.Item>
                <NavItem
                  to='#about'
                  text={language === 'en' ? 'About' : 'Acerca de'}
                  isActive={location.pathname === '#about'}
                  onClick={() => handleItemClick('about')}
                />
              </Dropdown.Item>
              <Dropdown.Item>
                <NavItem
                  to='#demos'
                  text={language === 'en' ? 'Send Demo' : 'Enviar Demo'}
                  isActive={location.pathname === '#demo'}
                  onClick={() => handleItemClick('demo')}
                />
              </Dropdown.Item>
            </Dropdown>
          </div>
          {/* Menu */}
          <div
            className={`${
              isNavbarOpen ? 'md:hidden absolute top-full w-full' : 'hidden'
            } items-center justify-between lg:flex md:block md:w-auto md:order-1`}
          >
            <div className='max-w-screen-xl mx-auto w-full'>
              <div className='flex items-center justify-center w-full'>
                <ul className='items-center md:bg-transparent bg-gray-700 bg-opacity-75 font-semibold flex flex-col md:p-0 w-full z-10 sm:border md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700'>
                  {/* Agrega el idioma al texto de los enlaces */}
                  <NavItem
                    to='#home'
                    text={language === 'en' ? 'Home' : 'Inicio'}
                    isActive={location.pathname === '/'}
                    onClick={() => handleItemClick('home')}
                  />
                  <NavItem
                    to='#artists'
                    text={language === 'en' ? 'Artists' : 'Artistas'}
                    isActive={location.pathname === '/#artists'}
                    onClick={() => handleItemClick('artists')}
                  />
                  <NavItem
                    to='#releases'
                    text={language === 'en' ? 'Releases' : 'Lanzamientos'}
                    isActive={location.pathname === '#releases'}
                    onClick={() => handleItemClick('releases')}
                  />
                  <NavItem
                    to='#about'
                    text={language === 'en' ? 'About' : 'Acerca de'}
                    isActive={location.pathname === '/about'}
                    onClick={() => handleItemClick('about')}
                  />
                  <NavItem
                    to='#services'
                    text={language === 'en' ? 'Services' : 'Servicios'}
                    isActive={location.pathname === '/services'}
                    onClick={() => handleItemClick('services')}
                  />
                  <NavItem
                    to='#contact'
                    text={language === 'en' ? 'Contact' : 'Contacto'}
                    isActive={location.pathname === '/contact'}
                    onClick={() => handleItemClick('contact')}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const OtherPagesNavbarLinks = () => {
  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto
  const [isNavbarOpen, setNavbarOpen] = useState(false)
  const location = useLocation()

  const handleItemClick = page => {
    setNavbarOpen(false)
  }
  const deactivateOtherLinks = () => {
    // Obtener todos los elementos del navbar
    const navbarLinks = document.querySelectorAll('.navbar-link')

    // Iterar sobre cada enlace y desactivarlo
    navbarLinks.forEach(link => {
      link.classList.remove('text-red-700') // Quita la clase que hace que el enlace esté en rojo
    })
  }

  return (
    <div className='bg-transparent border-gray-200 w-full h-full relative'>
      <div className='max-w-screen-xl flex flex-1 h-full justify-between mx-auto w-full items-center'>
        <div className='flex items-center h-full w-full justify-end me-4 '>
          {/* Menu */}
          <div
            className={`${
              isNavbarOpen ? 'md:hidden absolute top-full w-full' : 'hidden'
            } items-center justify-between lg:flex md:block md:w-auto md:order-1`}
          >
            <div className='max-w-screen-xl mx-auto w-full'>
              <div className='flex items-center justify-center w-full'>
                <ul className='space-y-1 items-center md:bg-transparent bg-gray-700 bg-opacity-75 font-semibold flex flex-col md:p-0 w-full z-10 sm:border md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700'>
                  {/* Agrega el idioma al texto de los enlaces */}
                  <NavItem
                    to='/'
                    text={language === 'en' ? 'Home' : 'Inicio'}
                    isActive={location.pathname === '/'}
                    onClick={() => handleItemClick('/home')}
                  />

                  <NavItem
                    to='/artists'
                    text={language === 'en' ? 'Artists' : 'Artistas'}
                    isActive={location.pathname === '/artists'}
                    onClick={() => handleItemClick('/artists')}
                  />
                  <NavItem
                    to='/releases'
                    text={language === 'en' ? 'Releases' : 'Lanzamientos'}
                    isActive={location.pathname === '/releases'}
                    onClick={() => handleItemClick('/releases')}
                  />
                  <NavItem
                    to='/about'
                    text={language === 'en' ? 'About' : 'Acerca de'}
                    isActive={location.pathname === '/about'}
                    onClick={() => handleItemClick('/about')}
                  />
                  <NavItem
                    to='/services'
                    text={language === 'en' ? 'Services' : 'Servicios'}
                    isActive={location.pathname === '/services'}
                    onClick={() => handleItemClick('/services')}
                  />
                  <NavItem
                    to='/contact'
                    text={language === 'en' ? 'Contact' : 'Contacto'}
                    isActive={location.pathname === '/contact'}
                    onClick={() => handleItemClick('/contact')}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exporta el componente NavbarLinks
export { HomeNavbarLinks, OtherPagesNavbarLinks }

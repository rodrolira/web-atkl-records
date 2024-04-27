import React from 'react'
import LoginButton from './LoginButton'
import LanguageMenu from './LanguageMenu'
import { useLocation } from 'react-router-dom'
import DemoButton from './DemoButton'
import { useLanguage } from '../../contexts/LanguageContext'
import NavbarLinks from './NavbarLinks'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import { useAuth } from '../../contexts/AuthContext'
import LogoutButton from './LogoutButton'

function NavbarMenu () {
  const location = useLocation()
  const { language } = useLanguage()
  const { isAuthenticated: userAuthenticated } = useAuth()
  const { isAuthenticated: adminAuthenticated } = useAdminAuth()

  return (
    <div className='md:flex lg:block md:flex-row-reverse md:justify-around md:items-center  w-full'>
      <div className='flex items-center justify-end h-[50%]'>
        {/* Dropdown menu */}
        <div
          id='dropdownHover'
          className='z-10 hidden h-full bg-white divide-y rounded-lg shadow w-44 text-center dark:bg-red-900'
        >
          <ul
            className='py-2 text-sm text-white dark:text-white sm:font-normal'
            aria-labelledby='dropdownHoverButton'
          >
            <li>
              <a
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white divide-gray-900'
                data-remote='true'
                href='/artists/new'
              >
                {language === 'en' ? 'Add Artist' : 'Agregar Artista'}
              </a>
            </li>
            <li>
              <a
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white divide-gray-900'
                data-remote='true'
                href='/releases/new'
              >
                {language === 'en' ? 'Add Release' : 'Agregar Lanzamiento'}
              </a>
            </li>
          </ul>
        </div>
        <DemoButton />
        {/* user login button */}
        {!adminAuthenticated && !userAuthenticated && <LoginButton />}
        <LanguageMenu />
        {adminAuthenticated || (userAuthenticated && <LogoutButton />)}
      </div>
      <NavbarLinks />
    </div>
  )
}

export default NavbarMenu

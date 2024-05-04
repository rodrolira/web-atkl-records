import React from 'react'
import Button from '../atoms/Button'
import { useLanguage } from '../../contexts/LanguageContext'
import { useAuth, useAdminAuth } from '../../contexts/AuthContext'

const LogoutButton = () => {
  const { language } = useLanguage()

  const { logout } = useAuth()
  const { logout: logoutAdmin } = useAdminAuth()
  const handleLogout = () => {
    logout()
    logoutAdmin()

  }
  return (
    <div className='sm:h-full lg:h-[60%] xl:h-auto mb-2 cursor-pointer '>
      <Button
        href='/'
        className='justify-center lg:text-sm md:text-xs sm:w-32 md:w-auto h-full md:font-normal lg:font-bold bg-red-600 hover:bg-red-700 focus:ring-4  focus:outline-none focus:ring-red-300 px-5 md:m-0 lg:mx-2 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 md:order-2'
        onClick={handleLogout}
      >
        {language === 'en' ? 'Logout' : 'Salir'}
      </Button>
    </div>
  )
}

export default LogoutButton

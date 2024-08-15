import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import LoginButton from './LoginButton'
import LanguageMenu from './LanguageMenu'
import DemoButton from './DemoButton'
import NavbarLinks from './NavbarLinks'
import { useLanguage } from '../../contexts/LanguageContext'
import { useAuth } from '../../contexts/AuthContext'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import LogoutButton from './LogoutButton'
import Button from '../atoms/Button'
import AddArtistButton from './AddArtistButton'
import AddReleaseButton from './AddReleaseButton'
import AdminLogoutButton from './AdminLogoutButton'
// import { Button } from 'flowbite-react'

function NavbarMenu() {
    const location = useLocation()
    const { language } = useLanguage()
    const { isAuthenticated: userAuthenticated } = useAuth()
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()

    return (
        <div className='md:flex lg:block md:flex-row-reverse md:justify-around md:items-center w-full'>
            <div className='flex items-center justify-end h-[50%]'>
                <div className='z-10 flex divide-y rounded-lg text-center '>
                    <ul
                        className='py-2 text-sm  flex text-white dark:text-white sm:font-normal'
                        aria-labelledby='dropdownHoverButton'
                    >
                        {adminAuthenticated && !userAuthenticated && (
                            <>
                                <li className='mx-1'>
                                    <AddArtistButton className='!capitalize'>
                                        {language === 'en'
                                            ? 'Add Artist'
                                            : 'Agregar Artista'}
                                    </AddArtistButton>
                                </li>
                                <li className='mx-1'>
                                    <AddReleaseButton className='btn-add'>
                                        {language === 'en'
                                            ? 'Add Release'
                                            : 'Agregar Lanzamiento'}
                                    </AddReleaseButton>
                                </li>
                                <li>
                                    <Button href='/admin' className='mx-auto flex justify-center' colorClass='bg-[#22581d] text-white' >
                                        {language === 'en'
                                            ? 'Admin Dashboard'
                                            : 'Panel de Administrador'}
                                    </Button>
                                </li>
                            </>
                        )}
                        {userAuthenticated && (
                            <li>
                                <Button
                                    color='blue'
                                    href="/profile "// Usa user.id para la ruta del perfil
                                >
                                    {language === 'en' ? 'Profile' : 'Perfil'}
                                </Button>
                            </li>
                        )}
                        {!adminAuthenticated && <DemoButton />}
                        {!adminAuthenticated && !userAuthenticated && (
                            <LoginButton />
                        )}
                        <LanguageMenu />
                        {userAuthenticated && <LogoutButton />}
                        {adminAuthenticated && !userAuthenticated && (
                            <AdminLogoutButton />
                        )}
                    </ul>
                </div>
            </div>
            <NavbarLinks />
        </div>
    )
}

export default NavbarMenu

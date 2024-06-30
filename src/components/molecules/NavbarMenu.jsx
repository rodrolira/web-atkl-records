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

function NavbarMenu ({ userId }) {
    const location = useLocation()
    const { language } = useLanguage()
    const { isAuthenticated: userAuthenticated } = useAuth()
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()

    return (
        <div className='md:flex lg:block md:flex-row-reverse md:justify-around md:items-center w-full'>
            <div className='flex items-center justify-end h-[50%]'>
                <div className='z-10 flex divide-y rounded-lg text-center '>
                    <ul
                        className='py-2 text-sm flex text-white dark:text-white sm:font-normal'
                        aria-labelledby='dropdownHoverButton'
                    >
                        {adminAuthenticated && !userAuthenticated && (
                            <li>
                                <AddArtistButton className='btn-add !capitalize'>
                                    {language === 'en'
                                        ? 'Add Artist'
                                        : 'Agregar Artista'}
                                </AddArtistButton>
                            </li>
                        )}
                        {adminAuthenticated && !userAuthenticated && (
                            <li>
                                <AddReleaseButton className='btn-add'>
                                    {language === 'en'
                                        ? 'Add Release'
                                        : 'Agregar Lanzamiento'}
                                </AddReleaseButton>
                            </li>
                        )}
                        {adminAuthenticated && !userAuthenticated && (
                            <li>
                                <Button className='btn-dashboard' href='/admin'>
                                    {language === 'en'
                                        ? 'Admin Dashboard'
                                        : 'Panel de Administrador'}
                                </Button>
                            </li>
                        )}
                        {userAuthenticated && (
                            <li>
                                <Button
                                    href={`/users/${userId}`} // Asegúrate de tener la variable userId definida aquí
                                    className='btn-dashboard'
                                >
                                    {language === 'en' ? 'Profile' : 'Perfil'}
                                </Button>
                            </li>
                        )}

                        {!adminAuthenticated && <DemoButton />}
                        {/* user login button */}
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

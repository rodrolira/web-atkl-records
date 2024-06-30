import React from 'react'
import Logo from '../atoms/Logo'
import NavbarMenu from '../molecules/NavbarMenu'
import './Navbar.css'
import { useAuth } from '../../contexts/AuthContext'

function Navbar () {
    const { user } = useAuth()
    return (
        <nav className='shadow-lg navbar-wrapper lg:bg-transparent !border-gray-200  fixed top-0 w-full h-20 lg:h-24 z-10 md:bg-neutral-800 md:!bg-opacity-50 '>
            <div className='flex lg:flex-row h-full justify-between px-2 pt-2 md:pt-0 md:flex-col'>
                <div className='my-auto lg:ml-12'>
                    <Logo alt='Company Logo' />
                </div>
                <NavbarMenu userId={user ? user.userId : null} />
            </div>
        </nav>
    )
}

export default Navbar

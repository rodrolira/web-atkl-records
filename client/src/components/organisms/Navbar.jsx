import React from 'react'
import NavbarLogo from '../atoms/NavbarLogo'
import NavbarMenu from '../molecules/NavbarMenu'
import './Navbar.css'
import { useAuth } from '../../contexts/AuthContext'

function Navbar() {
    const { user } = useAuth()
    return (
<nav className='shadow-lg navbar-wrapper fixed top-0 w-full h-20 lg:h-24 z-10 bg-[#122e0f] !border-[#22581d]'>
<div className='flex lg:flex-row h-full justify-between px-2 pt-2 md:pt-0 md:flex-col'>
                <div className='my-auto h-full lg:ml-12'>
                    <NavbarLogo alt='Company Logo' />
                </div>
                <NavbarMenu userId={user ? user.userId : null} />
            </div>
        </nav>
    )
}

export default Navbar

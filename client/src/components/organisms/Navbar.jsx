import React from 'react'
import Logo from '../atoms/Logo'
import NavbarMenu from '../molecules/NavbarMenu'
import './Navbar.css'

function Navbar () {
  return (
    <nav className='shadow-lg navbar-wrapper bg-transparent !border-gray-200  fixed w-full sm:h-20 lg:h-[20vh]'>
      <div className='flex justify-between px-2 pt-2'>
        <Logo />
        <NavbarMenu />
      </div>
    </nav>
  )
}

export default Navbar

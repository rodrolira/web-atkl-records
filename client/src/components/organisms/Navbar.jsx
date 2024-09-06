import React from 'react';
import NavbarLogo from '../atoms/NavbarLogo';
import NavbarMenu from '../molecules/NavbarMenu';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='shadow-lg navbar-wrapper fixed top-0 w-full h-20 lg:h-24 z-10 bg-[#122e0f] border-b-2 border-[#22581d]'>
      <div className='flex h-full justify-between px-4 lg:px-12'>
        {/* Contenedor del logo, alineado a la izquierda */}
        <div className='w-1/2 h-full'>
          <NavbarLogo alt='Company Logo' />
        </div>
        {/* Menú de navegación */}
        <NavbarMenu />
      </div>
    </nav>
  );
}

export default Navbar;

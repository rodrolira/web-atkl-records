import React, { lazy, Suspense } from 'react' // Importa React, lazy y Suspense
import './Navbar.css'

// Importa Logo y NavbarMenu usando importación dinámica
const Logo = lazy(() => import('../atoms/Logo'))
const NavbarMenu = lazy(() => import('../molecules/NavbarMenu'))

function Navbar () {
  return (
    <nav className='shadow-lg navbar-wrapper bg-transparent !border-gray-200  fixed w-full z-40 sm:h-20 lg:h-[20vh]'>
      <div className='flex h-full justify-between px-2 pt-2'>
        <Suspense fallback={<div>Loading Logo...</div>}>
          <Logo /> {/* Renderiza Logo dentro de Suspense */}
        </Suspense>
        <Suspense fallback={<div>Loading NavbarMenu...</div>}>
          <NavbarMenu /> {/* Renderiza NavbarMenu dentro de Suspense */}
        </Suspense>
      </div>
    </nav>
  )
}

export default Navbar

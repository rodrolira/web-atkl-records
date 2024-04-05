import React, { useState } from 'react'

const NavItem = ({ to, text, isActive, onClick }) => {
  const [isActiveLink, setIsActiveLink] = useState(isActive)
  const isArtistsActive = to.startsWith('/artists') && window.location.pathname.startsWith('/artists')


  const handleClick = () => {
    setIsActiveLink(true) // Establece el enlace actual como activo
    onClick() // Llama a la función onClick proporcionada desde el padre
  }

  return (
    <li>
      <a
        className={`block lg:text-xl md:text-sm rounded ${isActiveLink ? 'text-red-700' : 'text-white'} hover:bg-gray-700 hover:text-red-600 md:hover:bg-transparent border-gray-700`}
        aria-current={isActive ? 'page' : undefined}
        data-controller='scroll-to'
        href={to}
        onClick={handleClick}
      >
        {text}
      </a>
    </li>
  )
}

export default NavItem

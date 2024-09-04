/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const NavItem = ({ to, text, isActive, onClick }) => {
  const [isActiveLink, setIsActiveLink] = useState(isActive)

  const handleClick = event => {
    event.preventDefault() // Prevents the browser route from changing when the link is clicked
    setIsActiveLink(true) // Sets the current link as active
    onClick() // Calls the onClick function provided from the parent
  }

  return (
    <li>
      <Link
        className={`block xl:text-xl lg:text-[100%] md:text-xs rounded ${isActive ? 'text-green-700' : 'text-white'
          } hover:bg-gray-700 hover:text-green-600 md:hover:bg-transparent border-gray-700`}
        aria-current={isActive ? 'page' : undefined}
        data-controller='scroll-to'
        to={to}
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  )
}

export default NavItem

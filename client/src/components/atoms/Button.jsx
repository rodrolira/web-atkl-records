/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
import { Link } from 'react-router-dom'

const Button = ({ href, onClick, children, className }) => {
  return (
    <div className='h-full mx-2'>
      <Link
        to={href}
        rel='noopener noreferrer'
        onClick={onClick}
        className={`h-full text-white font-medium rounded-lg text-sm inline-flex items-center ${className}`}
      >
        {children}
      </Link>
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
}

export default Button

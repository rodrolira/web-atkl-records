/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ href, onClick, children, className }) => (
    <div className='mx-2'>
<<<<<<< HEAD
        {href
? (
=======
        {href ? (
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
            <a
                href={href}
                rel='noopener noreferrer'
                className={`h-full text-white font-medium rounded-lg text-sm inline-flex items-center ${className}`}
            >
                {children}
            </a>
<<<<<<< HEAD
        )
: (
=======
        ) : (
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
            <button
                onClick={onClick}
                className={`h-full text-white font-medium rounded-lg text-sm text-center items-center ${className}`}
            >
                {children}
            </button>
        )}
    </div>
)

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

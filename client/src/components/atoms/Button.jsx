/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ href, onClick, children, className }) => {
    if (href) {
        return (
            <div className="h-full mx-2">
                <a
                    href={href}
                    rel="noopener noreferrer"
                    className={`h-full text-white font-medium rounded-lg text-sm inline-flex items-center ${className}`}
                >
                    {children}
                </a>
            </div>
        )
    } else {
        return (
            <div className="h-full mx-2">
                <button
                    onClick={onClick}
                    className={`h-full text-white font-medium rounded-lg text-sm inline-flex items-center ${className}`}
                >
                    {children}
                </button>
            </div>
        )
    }
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

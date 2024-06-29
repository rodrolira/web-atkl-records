// Modal.js

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './Modal.css'

const Modal = ({ onClose, children }) => {
    if (!onClose) return null

    // Manejar el click fuera del modal para cerrarlo
    const handleOutsideClick = e => {
        if (e.target.classList.contains('modal')) {
            onClose()
        }
    }

    return ReactDOM.createPortal(
        <div className='modal' onClick={handleOutsideClick}>
            <div className='modal-content'>
                <button className='close-btn' onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default Modal

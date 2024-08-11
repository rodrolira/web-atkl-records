// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD
import i18n from '../i18n' // Asegúrate de que la ruta sea correcta
=======
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96

const LanguageContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en')

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage)
<<<<<<< HEAD
        i18n.changeLanguage(newLanguage) // Cambia el idioma en i18next
=======
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

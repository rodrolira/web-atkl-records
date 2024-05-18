// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const LanguageContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en')

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage)
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

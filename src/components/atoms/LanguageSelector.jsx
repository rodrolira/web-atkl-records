import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const LanguageSelector = () => {
  const { changeLanguage } = useLanguage()

  const handleChangeLanguage = newLanguage => {
    changeLanguage(newLanguage)
  }

  return (
    <div>
      <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('es')}>Español</button>
    </div>
  )
}

export default LanguageSelector

import React from 'react'
<<<<<<< HEAD
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../contexts/LanguageContext'

const LanguageSelector = () => {
  const { t } = useTranslation()
=======
import { useLanguage } from '../../contexts/LanguageContext'

const LanguageSelector = () => {
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
  const { changeLanguage } = useLanguage()

  const handleChangeLanguage = newLanguage => {
    changeLanguage(newLanguage)
  }

  return (
    <div>
<<<<<<< HEAD
      <button onClick={() => handleChangeLanguage('en')}>{t('english')}</button>
      <button onClick={() => handleChangeLanguage('es')}>{t('spanish')}</button>
=======
      <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('es')}>Español</button>
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
    </div>
  )
}

export default LanguageSelector

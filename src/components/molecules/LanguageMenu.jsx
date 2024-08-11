<<<<<<< HEAD
import React, { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../contexts/LanguageContext'

const LanguageMenu = () => {
  const { t, i18n } = useTranslation()
  const { changeLanguage, language } = useLanguage()
  const [isMenuVisible, setMenuVisibility] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(language)

  const handleChangeLanguage = languageCode => {
    changeLanguage(languageCode)
    i18n.changeLanguage(languageCode) // Cambiar idioma en i18next
    setSelectedLanguage(languageCode)
=======
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import { useLanguage } from '../../contexts/LanguageContext'

const LanguageMenu = () => {
  const { changeLanguage, language } = useLanguage()
  const [isMenuVisible, setMenuVisibility] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(language) // Estado para almacenar el idioma seleccionado

  const handleChangeLanguage = languageCode => {
    changeLanguage(languageCode)
    setSelectedLanguage(languageCode) // Actualizar el idioma seleccionado
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
    setMenuVisibility(false)
  }

  return (
<<<<<<< HEAD
    <div className='relative max-[320px]:hidden z-50'>
      <div
        className='h-full'
=======
    <div className='relative max-[320px]:hidden z-50 '>
      {/* Language dropdown button */}
      <div className='h-full'
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
        onMouseEnter={() => setMenuVisibility(true)}
        onMouseLeave={() => setMenuVisibility(false)}
      >
        <button
          type='button'
          className='max-[320px]:ms-2 md:text-xs inline-flex items-center font-medium justify-center h-full px-4 py-2 lg:text-sm text-white rounded-t-lg cursor-pointer hover:bg-gray-700 hover:text-white'
        >
<<<<<<< HEAD
=======
          {/* Language icon here */}
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
          <ReactCountryFlag
            className='max-[320px]:ms-[0.5rem]'
            countryCode={selectedLanguage === 'en' ? 'US' : 'ES'}
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
              marginInlineEnd: '0.5rem'
            }}
            title={selectedLanguage === 'en' ? 'US' : 'ES'}
          />
          <span className='max-[320px]:hidden inline-block lg:text-sm md:text-xs'>
<<<<<<< HEAD
            {t('languageMenu.language')}
          </span>
        </button>

=======
            {selectedLanguage === 'en' ? 'English (US)' : 'Español (ES)'}
          </span>
        </button>

        {/* Language dropdown menu */}
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
        <div
          className={`${
            isMenuVisible ? 'block' : 'hidden'
          } lg:text-sm md:text-xs z-50 absolute top-0 text-base list-none w-full divide-y divide-gray-100 rounded-b-xl rounded-t-xl hover:rounded-t-xl shadow bg-gray-700 max-[320px]:ms-2`}
          role='menu'
        >
<<<<<<< HEAD
          <ul className='font-medium' role='none'>
=======
          <ul className=' font-medium' role='none'>
            {/* Language options */}
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
            <li>
              <button
                type='button'
                className={`block px-2 py-2 lg:text-sm md:text-xs w-full text-white hover:bg-gray-600 rounded-t-xl ${
<<<<<<< HEAD
                  selectedLanguage === 'en' ? '!bg-gray-600' : ''
=======
                  selectedLanguage === 'en' ? '!bg-gray-600' : '' // Agregar clase condicional si el idioma es inglés o español
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
                }`}
                onClick={() => handleChangeLanguage('en')}
              >
                <div className='inline-flex items-center'>
                  <ReactCountryFlag
<<<<<<< HEAD
                    className='max-[320px]:!me-0'
=======
                    className='max-[320px]:!me-0 '
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
                    countryCode='US'
                    svg
                    style={{
                      width: '1.5em',
                      height: '1.5em',
                      marginInlineEnd: '0.5rem'
                    }}
                    title='US'
                  />
                  <span className='max-[320px]:hidden lg:text-sm md:text-xs'>
<<<<<<< HEAD
                    {t('languageMenu.english')}
=======
                    English (US)
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
                  </span>
                </div>
              </button>
            </li>
            <li>
              <button
                type='button'
<<<<<<< HEAD
                className={`block px-2 py-2 text-sm w-full text-white hover:rounded-b-xl hover:bg-gray-600 ${
                  selectedLanguage === 'es' ? '!bg-gray-600' : ''
                }`}
                onClick={() => handleChangeLanguage('es')}
              >
                <div className='inline-flex items-center'>
                  <ReactCountryFlag
                    className='max-[320px]:!me-0 lg:text-sm md:text-xs'
=======
                className={`block px-2 py-2 text-sm w-full text-white hover:rounded-b-xl  hover:bg-gray-600 ${
                  selectedLanguage === 'ES' ? '!bg-gray-600' : '' // Agregar clase condicional si el idioma es español
                }`}
                onClick={() => handleChangeLanguage('ES')}
              >
                <div className='inline-flex items-center'>
                  <ReactCountryFlag
                    className='max-[320px]:!me-0 lg:text-sm md:text-xs '
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
                    countryCode='ES'
                    svg
                    style={{
                      width: '1.5em',
                      height: '1.5em',
                      marginInlineEnd: '0.5rem'
                    }}
                    title='ES'
                  />
                  <span className='max-[320px]:hidden lg:text-sm md:text-xs'>
<<<<<<< HEAD
                    {t('languageMenu.spanish')}
=======
                    Español (ES)
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
                  </span>
                </div>
              </button>
            </li>
<<<<<<< HEAD
=======
            {/* Add more language options as needed */}
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LanguageMenu

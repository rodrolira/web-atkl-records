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
    setMenuVisibility(false)
  }

  return (
    <div className='relative max-[320px]:hidden '>
      {/* Language dropdown button */}
      <div
        onMouseEnter={() => setMenuVisibility(true)}
        onMouseLeave={() => setMenuVisibility(false)}
      >
        <button
          type='button'
          className='max-[320px]:ms-2 sm:text-sm inline-flex items-center font-medium justify-center  px-4 py-2 text-sm text-white rounded-t-lg cursor-pointer hover:bg-gray-700 hover:text-white'
        >
          {/* Language icon here */}
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
          <span className='max-[320px]:hidden inline-block'>
            {selectedLanguage === 'en' ? 'English (US)' : 'Español (ES)'}
          </span>
        </button>

        {/* Language dropdown menu */}
        <div
          className={`${
            isMenuVisible ? 'block' : 'hidden'
          } sm:text-sm z-50 absolute  text-base list-none w-full divide-y divide-gray-100 rounded-b-xl  shadow bg-gray-700 max-[320px]:ms-2`}
          role='menu'
        >
          <ul className=' font-medium' role='none'>
            {/* Language options */}
            <li>
              <button
                type='button'
                className={`block px-2 py-2 text-sm w-full text-white hover:rounded-b-xl  hover:bg-gray-600 ${
                  selectedLanguage === 'en' ? '!bg-gray-600' : '' // Agregar clase condicional si el idioma es inglés o español
                }`}
                onClick={() => handleChangeLanguage('en')}
              >
                <div className='inline-flex items-center'>
                  <ReactCountryFlag
                    className='max-[320px]:!me-0 '
                    countryCode='US'
                    svg
                    style={{
                      width: '1.5em',
                      height: '1.5em',
                      marginInlineEnd: '0.5rem'
                    }}
                    title='US'
                  />
                  <span className='max-[320px]:hidden'>English (US)</span>
                </div>
              </button>
            </li>
            <li>
              <button
                type='button'
               className={`block px-2 py-2 text-sm w-full text-white hover:rounded-b-xl  hover:bg-gray-600 ${
                  selectedLanguage === 'ES' ? '!bg-gray-600' : '' // Agregar clase condicional si el idioma es español
                }`}
                onClick={() => handleChangeLanguage('ES')}
              >
                <div className='inline-flex items-center'>
                  <ReactCountryFlag
                    className='max-[320px]:!me-0 '
                    countryCode='ES'
                    svg
                    style={{
                      width: '1.5em',
                      height: '1.5em',
                      marginInlineEnd: '0.5rem'
                    }}
                    title='ES'
                  />
                  <span className='max-[320px]:hidden'>Español (ES)</span>
                </div>
              </button>
            </li>
            {/* Add more language options as needed */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LanguageMenu

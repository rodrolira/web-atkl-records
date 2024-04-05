import React, { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import { useLanguage } from '../../contexts/LanguageContext'

const LanguageMenu = () => {
  const { changeLanguage } = useLanguage()
  const { language } = useLanguage()
  const [isMenuVisible, setMenuVisibility] = useState(false)

  const handleChangeLanguage = languageCode => {
    changeLanguage(languageCode)
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
            countryCode={language === 'en' ? 'US' : 'ES'}
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
              marginInlineEnd: '0.5rem'
            }}
            title={language === 'en' ? 'US' : 'ES'}
          />
          <span className='max-[320px]:hidden inline-block'>
            {language === 'en' ? 'English (US)' : 'Español (ES)'}
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
                className='block px-2 py-2 text-sm w-full bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white '
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
                className='block px-2 py-2 text-sm w-full text-white hover:rounded-b-xl  hover:bg-gray-600 '
                onClick={() => handleChangeLanguage('ES')}
              >
                <div className='flex items-center'>
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

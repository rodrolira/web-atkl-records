import React, { useState } from 'react'
import NavItem from '../atoms/NavItem'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

const OtherPagesNavbarLinks = () => {
  const { language } = useLanguage()
  const [isNavbarOpen, setNavbarOpen] = useState(false)
  const location = useLocation()

  const handleItemClick = page => {
    setNavbarOpen(false)
  }

  return (
    <div className='bg-transparent border-gray-200 w-full h-full relative'>
      <div className='max-w-screen-xl flex flex-1 h-full justify-between mx-auto w-full items-center'>
        <div className='flex items-center h-full w-full justify-end me-4 '>
          <div
            className={`${
              isNavbarOpen ? 'md:hidden absolute top-full w-full' : 'hidden'
            } items-center justify-between lg:flex md:block md:w-auto md:order-1`}
          >
            <div className='max-w-screen-xl mx-auto w-full'>
              <div className='flex items-center justify-center w-full'>
                <ul className='space-y-1 items-center md:bg-transparent bg-gray-700 bg-opacity-75 font-semibold flex flex-col md:p-0 w-full z-10 sm:border md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700'>
                  {links.map((link, index) => (
                    <NavItem
                      key={index}
                      to={link.to}
                      text={link.text}
                      isActive={location.pathname === link.to}
                      onClick={() => handleItemClick(link.to)}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherPagesNavbarLinks

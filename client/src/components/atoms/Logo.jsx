// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function Logo({ isAdminSignin }) {
  const logoClass = isAdminSignin
    ? 'rtl:space-x-reverse flex justify-center items-center mx-auto h-full'
    : 'rtl:space-x-reverse flex justify-center items-center mx-auto h-full'

  return (
    <a className={logoClass} href='/'>
      <img
        alt='ATKL Records logo'
        className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto"
        src='/img/main.png'
      />
    </a>
  )
}

export default Logo

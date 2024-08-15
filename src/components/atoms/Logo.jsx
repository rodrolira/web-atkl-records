// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function Logo({ isAdminSignin }) {
  const logoClass = isAdminSignin
    ? 'rtl:space-x-reverse max-[320px]:mx-0 lg:block sm:hidden md:hidden sm:mx-auto h-full'
    : 'rtl:space-x-reverse max-[320px]:mx-0 lg:block sm:hidden md:hidden sm:mx-auto h-full'

  return (
    <a className={logoClass} href='/'>
      <img
        alt='ATKL Records logo'
        className='invert lg:h-full w-48'
        src='/img/main.png'
      />
    </a>
  )
}

export default Logo

import React from 'react'

function Logo () {
  return (
    <a
      className='rtl:space-x-reverse max-[320px]:mx-0 mx-24 md:mx-2 md:block sm:hidden md:h[10%] md:w[10%] sm:mx-auto'
      href='/'
    >
      <img
        alt='ATKL Records logo'
        className='invert h-full w-48'
        src='/img/logo.png'
      />
    </a>
  )
}

export default Logo

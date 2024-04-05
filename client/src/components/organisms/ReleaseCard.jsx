// ReleaseCard.jsx
import React from 'react'
import Button from '../atoms/Button'
import '../atoms/Button.css'

function ReleaseCard ({ title, artist, bandcampLink, embeddedPlayer }) {
  return (
    <div className='max-w-sm w-max  text-center border text-white rounded-lg shadow bg-black border-gray-700'>
      <h3 className='text-xl font-bold mt-2'>{title}</h3>
      <h3 className='text-lg font-bold mt-2'>{artist}</h3>
      <div className='p-4'>{embeddedPlayer}</div>
      <div className='pb-4'>
        <Button
          href={bandcampLink}
          onClick={() => {}}
          className=' px-4 btn w-24 justify-center py-2 btn-buy'
        >
          BUY
        </Button>
      </div>
    </div>
  )
}

export default ReleaseCard

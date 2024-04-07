// ArtistCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function ArtistCard ({ id, name, role, image }) {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700'>
      <Link to={`/artists/${name}`} className='block'>
        <img className='rounded-t-lg' src={image} alt={name} />
      </Link>
      <div className='p-5'>
        <Link to={`/artists/${name}`} className='block'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-800 text-center '>
            {name}
          </h5>
        </Link>
        <p className='mb-3 font-normal uppercase text-center text-gray-700 dark:text-gray-400'>
          {role}
        </p>
        <div className='flex space-x-4 text-2xl justify-center'>
          <a
            href='#'
            className='text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300'
          >
            <i className='fab fa-twitter' aria-hidden='true'></i>
          </a>
          <a
            href='#'
            className='text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300'
          >
            <i className='fab fa-instagram' aria-hidden='true'></i>
          </a>
          <a
            href='#'
            className='text-gray-500 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-600'
          >
            <i className='fab fa-facebook' aria-hidden='true'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

ArtistCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default ArtistCard

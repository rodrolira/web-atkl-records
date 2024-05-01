/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faSoundcloud,
  faBandcamp
} from '@fortawesome/free-brands-svg-icons'

function ArtistCard ({
  id,
  name,
  role,
  image,
  twitterUrl,
  instagramUrl,
  facebookUrl,
  soundcloudUrl,
  bandcampUrl
}) {
  return (
    <div className='max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:border-purple-500'>
      <Link to={`/artists/${id}`} className='block'>
        <img className='rounded-t-lg' src={image} alt={name} />
      </Link>
      <div className='p-5'>
        <Link to={`/artists/${id}`} className='block'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-white text-center '>
            {name}
          </h5>
        </Link>
        <p className='mb-3 font-normal uppercase text-center text-gray-400'>
          {role}
        </p>
        <div className='flex space-x-4 text-2xl justify-center'>
          {twitterUrl && (
            <a
              href={twitterUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View Twitter Profile'
              className='text-gray-400 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300'
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          )}
          {instagramUrl && (
            <a
              href={instagramUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View Twitter Profile'
              className='text-gray-400 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          )}
          {facebookUrl && (
            <a
              href={facebookUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View Twitter Profile'
              className='text-gray-400 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-600'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          )}
          {soundcloudUrl && (
            <a
              href={soundcloudUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View Twitter Profile'
              className='text-gray-400 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400'
            >
              <FontAwesomeIcon icon={faSoundcloud} />
            </a>
          )}
          {bandcampUrl && (
            <a
              href={bandcampUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View Twitter Profile'
              className='text-gray-400 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500'
            >
              <FontAwesomeIcon icon={faBandcamp} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

ArtistCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  twitterUrl: PropTypes.string,
  instagramUrl: PropTypes.string,
  facebookUrl: PropTypes.string,
  soundcloudUrl: PropTypes.string,
  bandcampUrl: PropTypes.string
}

export default ArtistCard

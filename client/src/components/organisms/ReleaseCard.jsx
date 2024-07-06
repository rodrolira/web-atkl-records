import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBandcamp,
    faSpotify,
    faApple,
    faYoutube,
    faSoundcloud,
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Button from '../atoms/Button'
import useArtist from '../../hooks/useArtist'

function ReleaseCard({
    title,
    artistId,
    coverImageUrl,
    releaseDate,
    isExplicit,
    description,
    genreId,
    releaseType,
    bandcampLink,
    beatportLink,
    spotifyLink,
    appleMusicLink,
    youtubeLink,
    soundcloudLink,
}) {
    const { artist, loading, error } = useArtist(artistId);

    return (
        <div className='max-w-sm w-full mx-auto text-center border text-white rounded-lg shadow bg-black border-gray-700'>
            <h3 className='text-xl font-bold mt-2'>{title}</h3>
            {loading ? (
                <p>Loading artist...</p>
            ) : error ? (
                <p>Error loading artist</p>
            ) : (
                <h3 className='text-lg lg:h-auto sm:h-min font-bold mt-2'>
                    {artist}
                </h3>

            )}
            <img
                src={`http://localhost:3000/${coverImageUrl}`}
                alt={title}
                className='w-full rounded-lg'
            />

            {isExplicit && <p className='text-red-500'>Explicit</p>}
            <p className='text-sm mt-2'>{description}</p>

            <div className='flex justify-center space-x-4 my-4'>
                {bandcampLink && (
                    <Link
                        to={bandcampLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-400 hover:text-teal-600'
                    >
                        <FontAwesomeIcon icon={faBandcamp} size='2x' />
                    </Link>
                )}
                {beatportLink && (
                    <Link
                        to={beatportLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-400 hover:text-blue-600'
                    >
                        {/* No icon specified for Beatport, add FontAwesome or similar if needed */}
                        Beatport
                    </Link>
                )}
                {spotifyLink && (
                    <Link
                        to={spotifyLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-400 hover:text-green-400'
                    >
                        <FontAwesomeIcon icon={faSpotify} size='2x' />
                    </Link>
                )}
                {appleMusicLink && (
                    <Link
                        to={appleMusicLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-400 hover:text-purple-500'
                    >
                        <FontAwesomeIcon icon={faApple} size='2x' />
                    </Link>
                )}
                {youtubeLink && (
                    <Link
                        to={youtubeLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-400 hover:text-red-500'
                    >
                        <FontAwesomeIcon icon={faYoutube} size='2x' />
                    </Link>
                )}
                {soundcloudLink && (
                    <Link
                        to={soundcloudLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-400 hover:text-orange-500'
                    >
                        <FontAwesomeIcon icon={faSoundcloud} size='2x' />
                    </Link>
                )}
            </div>
            {bandcampLink && (
                <Button href={bandcampLink} className="btn-buy h-10 mx-auto mb-4">
                    Comprar
                </Button>
            )}

        </div>
    )
}

ReleaseCard.propTypes = {
    title: PropTypes.string.isRequired,
    artistId: PropTypes.string.isRequired,
    coverImageUrl: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    isExplicit: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    genreId: PropTypes.string.isRequired,
    releaseType: PropTypes.string.isRequired,
    bandcampLink: PropTypes.string,
    beatportLink: PropTypes.string,
    spotifyLink: PropTypes.string,
    appleMusicLink: PropTypes.string,
    youtubeLink: PropTypes.string,
    soundcloudLink: PropTypes.string,
}

export default ReleaseCard

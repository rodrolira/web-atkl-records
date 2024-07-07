// ArtistLinks.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faInstagram,
    faFacebook,
    faSoundcloud,
    faBandcamp,
} from '@fortawesome/free-brands-svg-icons';

const ArtistLinks = ({ artist }) => (
    <div className='flex space-x-4 text-2xl justify-center my-2 py-2'>
        {artist.twitter_link && (
            <a
                href={artist.twitter_link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='View Twitter Profile'
                className='text-gray-400 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300'
            >
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        )}
        {artist.instagram_link && (
            <a
                href={artist.instagram_link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='View Instagram Profile'
                className='text-gray-400 dark:text-orange-500 hover:text-red-500 dark:hover:text-red-300'
            >
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        )}
        {artist.facebook_link && (
            <a
                href={artist.facebook_link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='View Facebook Profile'
                className='text-gray-400 dark:text-blue-600 hover:text-blue-800 dark:hover:text-blue-600'
            >
                <FontAwesomeIcon icon={faFacebook} />
            </a>
        )}
        {artist.soundcloud_link && (
            <a
                href={artist.soundcloud_link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='View SoundCloud Profile'
                className='text-gray-400 dark:text-red-400 hover:text-red-600 dark:hover:text-red-400'
            >
                <FontAwesomeIcon icon={faSoundcloud} />
            </a>
        )}
        {artist.bandcamp_link && (
            <a
                href={artist.bandcamp_link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='View Bandcamp Profile'
                className='text-gray-400 dark:text-teal-500 hover:text-teal-600 dark:hover:text-teal-500'
            >
                <FontAwesomeIcon icon={faBandcamp} />
            </a>
        )}
    </div>
);

export default ArtistLinks;

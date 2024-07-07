// ArtistDetails.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faSoundcloud, faBandcamp } from '@fortawesome/free-brands-svg-icons';
import Button from '../../atoms/Button';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import ArtistLinks from './ArtistLinks';

const ArtistDetails = ({ artist, adminAuthenticated, openEditModal }) => {
    return (
        <div className='w-1/3 p-4 border-r text-center text-white'>
            <div className='flex items-center justify-center mb-2'>
                <h1 className='text-2xl font-bold'>{artist.artist_name}</h1>
                {adminAuthenticated && (
                    <Button
                        type='button'
                        onClick={openEditModal}
                        aria-label='Edit Artist'
                        className='ml-4 text-gray-400 hover:text-yellow-500'
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                )}
            </div>
            <div className='p-4 rounded-lg'>
                <img
                    className='rounded-t-lg'
                    src={`http://localhost:3000/${artist.image}`}
                    alt={artist.artist_name}
                />
                <div className='bg-slate-900 border-gray-200 w-full h-full relative rounded-b-lg'>
                    <h1 className='text-2xl font-semibold tracking-tight text-white text-center'>
                        {artist.role}
                    </h1>
                    <ArtistLinks artist={artist} />
                </div>
            </div>
        </div>
    );
};

export default ArtistDetails;

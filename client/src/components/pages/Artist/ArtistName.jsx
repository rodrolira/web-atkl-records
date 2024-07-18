import React from 'react';
import Button from '../../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const ArtistName = ({ name, adminAuthenticated, openEditModal }) => (
    <div className='flex items-center justify-center mb-2'>
        <h1 className='text-2xl font-bold'>{name}</h1>
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
);

export default ArtistName;

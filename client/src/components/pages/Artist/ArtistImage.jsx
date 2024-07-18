import React from 'react';

const ArtistImage = ({ image, alt }) => (
    <div className='p-4 rounded-lg'>
        <img
            className='rounded-t-lg'
            src={image}
            alt={alt}
        />
    </div>
);

export default ArtistImage;

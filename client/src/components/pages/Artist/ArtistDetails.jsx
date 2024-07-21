// ArtistDetails.jsx
import React from 'react'
import ArtistName from './ArtistName'
import ArtistImage from './ArtistImage'
import ArtistLinks from './ArtistLinks'

const ArtistDetails = ({ artist, adminAuthenticated, userAuthenticated, openEditModal }) => {
    return (
        <div className='w-1/3 p-4 border-r text-cent    er text-white'>
            <ArtistName name={artist.artist_name} adminAuthenticated={adminAuthenticated} userAuthenticated={userAuthenticated} openEditModal={openEditModal} />
            <ArtistImage image={`http://localhost:3000/${artist.image}`} alt={artist.artist_name} />
            <div className='px-4'>
                <div className='bg-slate-900 border-gray-200 w-full h-auto relative rounded-b-lg'>
                    <h1 className='text-2xl font-semibold tracking-tight text-white text-center'>
                        {artist.role}
                    </h1>
                    <ArtistLinks artist={artist} />
                </div>
            </div>
        </div>
    )
}

export default ArtistDetails

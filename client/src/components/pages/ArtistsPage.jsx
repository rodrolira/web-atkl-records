import React from 'react'
import ArtistsSection from '../organisms/ArtistsSection'
import Navbar from '../organisms/Navbar'

function ArtistsPage({ artistsData }) {

    return (
        <div>
            <Navbar />
            <div className="my-12 lg:my-16">
                <ArtistsSection artistsData={artistsData} />
            </div>
        </div>
    )
}

export default ArtistsPage

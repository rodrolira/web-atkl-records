import React from 'react'
import PropTypes from 'prop-types'
import ReleaseCard from './ReleaseCard'

function ReleaseSection ({ releasesData }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Array.isArray(releasesData) &&
        releasesData.map(release => (
          <ReleaseCard
            key={release.id}
            title={release.title}
            artist={release.artist}
            bandcampLink={release.bandcampLink}
            embeddedPlayer={release.embeddedPlayer}
          />
        ))}
    </div>
  )
}

ReleaseSection.propTypes = {
  releasesData: PropTypes.array.isRequired
}

export default ReleaseSection

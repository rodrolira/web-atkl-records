// eslint-disable-next-line react/prop-types, no-unused-vars
import React, { lazy, Suspense } from 'react'

// Importa ReleaseCard usando importación dinámica
const ReleaseCard = lazy(() => import('./ReleaseCard'))
import { PropTypes } from 'prop-types';

function ReleaseSection ({ releasesData }) {
  return (
    <div className='grid gap-4'>
      {releasesData &&
        Array.isArray(releasesData) &&
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
  releasesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      bandcampLink: PropTypes.string,
      embeddedPlayer: PropTypes.string
    })
  ).isRequired
}


export default ReleaseSection

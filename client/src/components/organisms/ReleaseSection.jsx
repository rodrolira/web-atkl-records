import React, { lazy, Suspense } from 'react' // Importa React, lazy y Suspense

// Importa ReleaseCard usando importación dinámica
const ReleaseCard = lazy(() => import('./ReleaseCard'))

function ReleaseSection ({ releasesData }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {/* Utiliza Suspense para renderizar ReleaseCard de forma dinámica */}
      <Suspense fallback={<div>Loading ReleaseCard...</div>}>
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
      </Suspense>
    </div>
  )
}

// Elimina la validación de PropTypes debido a que se trata de una importación dinámica

export default ReleaseSection

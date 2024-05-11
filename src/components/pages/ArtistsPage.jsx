import React, { Suspense } from 'react'
function ArtistsPage ({ artistsData }) {
  // Importa ArtistsSection usando importación dinámica
  const ArtistsSection = React.lazy(() => import('../organisms/ArtistsSection'))

  return (
    <div>
      {/* Envuelve ArtistsSection en Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <ArtistsSection artistsData={artistsData} />
      </Suspense>
    </div>
  )
}

export default ArtistsPage

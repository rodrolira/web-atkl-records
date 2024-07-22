import React from 'react'
import TrackList from './TrackList'
import Navbar from '../../organisms/Navbar'

const DiscographyPage = () => {
  // Aquí puedes obtener la lista de canciones de tu sello musical
  const discography = [
    { title: 'Canción 1', artist: 'Artista 1', download_url: 'https://example.com/download/1' },
    // Agrega más canciones aquí
  ]

  return (
    <>
      <Navbar />
      <div className='mt-32'>
        <h1>Discografía</h1>
        <TrackList discography={discography} />
      </div>
    </>

  )
}

export default DiscographyPage

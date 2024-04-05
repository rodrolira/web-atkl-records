import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext' // Importa el hook useLanguage
import ReleaseSection from '../organisms/ReleaseSection'
import Title from '../atoms/Title'

function Releases () {
  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto

  const releasesData = [
    {
      id: 1,
      title: 'INSANITY',
      artist: 'RODRO',
      bandcampLink:
        'https://atklrecords.bandcamp.com/track/insanity-free-download-hpn002',
      embeddedPlayer: (
        <iframe
          style={{ border: '0', width: '350px', height: '442px' }}
          src='https://bandcamp.com/EmbeddedPlayer/track=1762528373/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'
        >
          <a href='https://atklrecords.bandcamp.com/track/insanity-free-download-hpn002'>
            INSANITY - (FREE DOWNLOAD) de RODRO
          </a>
        </iframe>
      )
    }
    // Otros datos de lanzamientos...
  ]
  console.log(releasesData) // Imprimir releasesData en la consola del navegador

  return (
    <div className='inline-block m-32' id='releases'>
      <Title> {language === 'en' ? 'Releases' : 'Lanzamientos'}</Title>
      <ReleaseSection releasesData={releasesData} />
    </div>
  )
}

export default Releases

import React, { Suspense } from 'react' // Importa React y Suspense
import { useLanguage } from '../../contexts/LanguageContext'
import Title from '../atoms/Title'

// Importa ReleaseSection usando importación dinámica
const ReleaseSection = React.lazy(() => import('../organisms/ReleaseSection'))

function Releases () {
  const { language } = useLanguage()

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
      <Suspense fallback={<div>Loading...</div>}>
        <ReleaseSection releasesData={releasesData} />{' '}
        {/* Renderiza el componente ReleaseSection */}
      </Suspense>
    </div>
  )
}

export default Releases

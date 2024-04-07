import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import Title from '../atoms/Title'
import ArtistCard from '../organisms/ArtistCard'

// Importa ArtistCard de forma dinámica usando lazy

function Artists () {
  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto

  return (
    <div className='m-32 inline-block' id='artists'>
      <a href='/artists'>
        <Title>{language === 'en' ? 'Artists' : 'Artistas'}</Title>
      </a>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <ArtistCard
          id={1}
          name={language === 'en' ? 'RODRO' : 'RODRO'}
          role={language === 'en' ? 'DJ' : 'DJ'}
          image='/img/avatar.jpg'
          twitterUrl='https://twitter.com/'
          instagramUrl='https://www.instagram.com/'
          facebookUrl='https://www.facebook.com/'
          soundcloudUrl='https://soundcloud.com/'
          bandcampUrl='https://bandcamp.com/'
        />
        <ArtistCard
          id={2}
          name={language === 'en' ? 'Sweet_Hate' : 'Sweet_Hate'}
          role={language === 'en' ? 'DJ' : 'DJ'}
          image='/img/avatar.jpg'
          twitterUrl='https://twitter.com/'
          instagramUrl='https://www.instagram.com/'
          facebookUrl='https://www.facebook.com/'
          soundcloudUrl='https://soundcloud.com/'
          bandcampUrl='https://bandcamp.com'
        />
        <ArtistCard
          id={3}
          name={language === 'en' ? 'Abstracto' : 'Abstracto'}
          role={language === 'en' ? 'Producer' : 'Productor'}
          image='/img/avatar.jpg'
          twitterUrl='https://twitter.com/'
          instagramUrl='https://www.instagram.com/'
          facebookUrl='https://www.facebook.com/'
          soundcloudUrl='https://soundcloud.com/'
          bandcampUrl='https://bandcamp.com'
        />
        <ArtistCard
          id={4}
          name={language === 'en' ? 'DARKNOISE' : 'DARKNOISE'}
          role={language === 'en' ? 'Producer' : 'Productor'}
          image='/img/avatar.jpg'
          twitterUrl='https://twitter.com/'
          instagramUrl='https://www.instagram.com/'
          facebookUrl='https://www.facebook.com/'
          soundcloudUrl='https://soundcloud.com/'
          bandcampUrl='https://bandcamp.com'
        />
      </div>
    </div>
  )
}

export default Artists

import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import ArtistCard from '../organisms/ArtistCard'
import Title from '../atoms/Title'

function Artists () {
  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto

  return (
    <div className='m-32 inline-block' id='artists'>
      <Title>{language === 'en' ? 'Artists' : 'Artistas'}</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <ArtistCard
          id={1}
          name={language === 'en' ? 'RODRO' : 'RODRO'}
          role={language === 'en' ? 'DJ' : 'DJ'}
          image='/img/avatar.jpg'
        />
        <ArtistCard
          id={2}
          name={language === 'en' ? 'Sweet_Hate' : 'Sweet_Hate'}
          role={language === 'en' ? 'DJ' : 'DJ'}
          image='/img/avatar.jpg'
        />
        <ArtistCard
          id={3}
          name={language === 'en' ? 'Abstracto' : 'Abstracto'}
          role={language === 'en' ? 'Producer' : 'Productor'}
          image='/img/avatar.jpg'
        />
        <ArtistCard
          id={4}
          name={language === 'en' ? 'DARKNOISE' : 'DARKNOISE'}
          role={language === 'en' ? 'Producer' : 'Productor'}
          image='/img/avatar.jpg'
        />
      </div>
    </div>
  )
}

export default Artists

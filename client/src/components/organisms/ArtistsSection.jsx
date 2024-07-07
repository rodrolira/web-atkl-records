// ArtistsSection.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import Title from '../atoms/Title'
import ArtistCard from './ArtistCard'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import AddArtistForm from '../molecules/AddArtistForm'
import { useArtists } from '../../contexts/ArtistContext'


function ArtistsSection() {
    const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()
    const { artists, fetchArtists, createArtist } = useArtists()

    useEffect(() => {
        fetchArtists()
    }, [fetchArtists])

    const handleArtistAdded = async newArtist => {
        await createArtist(newArtist)
        fetchArtists()
    }

    return (
        <div className='inline-block py-16' id='artists'>
            <div className='mb-4 mx-auto'>
                <a href='/artists' className='mx-auto'>
                    <Title>{language === 'en' ? 'Artists' : 'Artistas'}</Title>
                </a>
                {adminAuthenticated && (
                    <AddArtistForm onArtistAdded={handleArtistAdded} />
                )}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {artists.map(artist => (
                    <ArtistCard
                        key={artist.id} // Añadir el atributo key con un identificador único
                        artist={artist}
                    />
                ))}
            </div>
        </div>
    )
}

export default ArtistsSection

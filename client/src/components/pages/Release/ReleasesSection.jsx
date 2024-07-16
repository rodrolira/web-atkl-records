//ReleasesSection.jsx

// eslint-disable-next-line react/prop-types, no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import Title from '../../atoms/Title'
import { useAdminAuth } from '../../../contexts/AdminAuthContext'
import ReleaseCard from './ReleaseCard'
import { ReleaseContext } from '../../../contexts/ReleaseContext'
import { useLanguage } from '../../../contexts/LanguageContext';
import AddReleaseForm from './AddReleaseForm';

function ReleasesSection() {
    const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()
    const { releases, fetchReleases, createRelease } = useContext(ReleaseContext)

    useEffect(() => {
        fetchReleases()
    }, [])

    const handleReleaseAdded = async newRelease => {
        await createRelease([newRelease]) // Agrega el nuevo lanzamiento a la lista de lanzamientos
        fetchReleases()
    }

    return (
        <div className='grid gap-4 py-16 inline-block' id='releases'>
            <a href='/releases' className='mx-auto'>
                <Title>{language === 'en' ? 'Releases' : 'Lanzamientos'}</Title>
            </a>
            {adminAuthenticated && (
                <AddReleaseForm onReleaseAdded={handleReleaseAdded} />
            )}
            {releases &&
                releases.length > 0 &&
                releases.map((release, index) => (
                    <ReleaseCard
                        key={index}
                        title={release.title}
                        artistName={release.artistName}
                        cover_image_url={release.cover_image_url}
                        bandcamp_link={release.bandcamp_link}
                        beatport_link={release.beatport_link}
                        spotify_link={release.spotify_link}
                        apple_music_link={release.apple_music_link}
                        youtube_link={release.youtube_link}
                        soundcloud_link={release.soundcloud_link}
                    />
                ))}
        </div>
    )
}

export default ReleasesSection

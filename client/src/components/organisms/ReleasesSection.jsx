//ReleasesSection.jsx

// eslint-disable-next-line react/prop-types, no-unused-vars
import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import Title from '../atoms/Title'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import ReleaseCard from './ReleaseCard'
import AddReleaseForm from '../molecules/AddReleaseForm'
import { useReleases } from '../../contexts/ReleaseContext'

function ReleasesSection () {
    const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()
    const { releases, fetchReleases, createRelease } = useReleases()

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
                        ArtistId={release.ArtistId}
                        coverImageUrl={release.coverImageUrl}
                        bandcampLink={release.bandcampLink}
                        beatportLink={release.beatportLink}
                        spotifyLink={release.spotifyLink}
                        appleMusicLink={release.appleMusicLink}
                        youtubeLink={release.youtubeLink}
                        soundcloudLink={release.soundcloudLink}
                    />
                ))}
        </div>
    )
}

export default ReleasesSection

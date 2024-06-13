//ReleasesSection.jsx

// eslint-disable-next-line react/prop-types, no-unused-vars
import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import Title from '../atoms/Title'
import { useAdminAuth } from '../../contexts/AuthContext'

import AddReleaseButton from '../molecules/AddReleaseButton'
import ReleaseCard from './ReleaseCard'
import AddReleaseForm from '../molecules/AddReleaseForm'

function ReleasesSection({ releases }) {
    const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()
    const [releaseList, setReleaseList] = useState(releases)

    const handleReleaseAdded = (newRelease) => {
        setReleaseList([...releaseList, newRelease]) // Agrega el nuevo lanzamiento a la lista de lanzamientos
    }

    return (
        <div className="grid gap-4 py-16 inline-block" id="releases">
            <div>
                <a href="/releases" className="mx-auto">
                    <Title>
                        {language === 'en' ? 'Releases' : 'Lanzamientos'}
                    </Title>
                </a>
                {adminAuthenticated && (
                    <ul>
                        <li>
                             <AddReleaseButton>
                                {language === 'en'
                                    ? 'Add Release'
                                    : 'Agregar Lanzamiento'}
                            </AddReleaseButton> 
                        </li>
                    </ul>
                )}
            </div>
            {/* {releasesData &&
                    Array.isArray(releasesData) &&
                    releasesData.map((release) => ( */}
            {releaseList && releaseList.length > 0 && releaseList.map((release,
            index) => (
            <ReleaseCard
                key={index}
                title={release.title}
                artist={release.artist}
                coverImage={release.coverImage}
                audioSrc={release.audioSrc}
            />
            ))}
        </div>
    )
}

export default ReleasesSection

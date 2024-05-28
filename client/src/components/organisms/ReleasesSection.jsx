// eslint-disable-next-line react/prop-types, no-unused-vars
import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import Title from '../atoms/Title'
import { useAdminAuth } from '../../contexts/AuthContext'

import AddReleaseButton from '../molecules/AddReleaseButton'
import ReleaseCard from './ReleaseCard'

function ReleasesSection() {
    const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()

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
                            <AddReleaseButton className="btn-add">
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
            <ReleaseCard
            // key={release.id}
            // title={release.title}
            // artist={release.artist}
            // bandcampLink={release.bandcampLink}
            // embeddedPlayer={release.embeddedPlayer}
            />
            {/* ))} */}
        </div>
    )
}

export default ReleasesSection

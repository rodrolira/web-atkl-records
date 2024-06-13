//ReleasesPage.jsx

import React, { Suspense } from 'react' // Importa React y Suspense
import { useLanguage } from '../../contexts/LanguageContext'
import Button from '../atoms/Button'
import { useAdminAuth } from '../../contexts/AuthContext'

// Importa ReleaseSection usando importación dinámica
const ReleaseSection = React.lazy(() => import('../organisms/ReleasesSection'))
import Navbar from '../organisms/Navbar';

function ReleasesPage() {
    const { language } = useLanguage()
    const { isAdmin } = useAdminAuth()

    const releasesData = [
        {
            id: 1,
            title: 'INSANITY',
            artist: 'RODRO',
            bandcampLink:
                'https://atklrecords.bandcamp.com/track/insanity-free-download-hpn002',
            embeddedPlayer: (
                <iframe
                    style={{ border: '0', width: 'auto', height: '442px' }}
                    src="https://bandcamp.com/EmbeddedPlayer/track=1762528373/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                >
                    <a href="https://atklrecords.bandcamp.com/track/insanity-free-download-hpn002">
                        INSANITY - (FREE DOWNLOAD) de RODRO
                    </a>
                </iframe>
            ),
        },
        // Otros datos de lanzamientos...
    ]
    console.log(releasesData) // Imprimir releasesData en la consola del navegador

    return (
        <div>
            <Navbar/>
            <div className="sm:m-0 inline-block sm:mx-auto my-12 lg:my-16 sm:my-10 w-full">
                <div className="flex items-center justify-between">
                    <a href="/releases" className="mx-auto"></a>
                    {isAdmin && (
                        <Button
                            className="btn-add"
                            children={
                                language === 'en'
                                    ? 'Add Release'
                                    : 'Añadir Lanzamiento'
                            }
                        />
                    )}
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <ReleaseSection releasesData={releasesData} />{' '}
                    {/* Renderiza el componente ReleaseSection */}
                </Suspense>
            </div>
        </div>
    )
}

export default ReleasesPage

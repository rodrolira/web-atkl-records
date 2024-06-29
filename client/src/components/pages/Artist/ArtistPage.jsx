import React, { useState, useEffect, useContext, Suspense } from 'react'
import { useParams, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useLanguage } from '../../../contexts/LanguageContext'
import Title from '../../atoms/Title'
import { getArtistRequest } from '../../../api/artists'
import Navbar from '../../organisms/Navbar'
import { useAdminAuth } from '../../../contexts/AdminAuthContext'

const ReleasesPage = React.lazy(() => import('../ReleasesPage'))
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function ArtistPage({}) {
    const { id } = useParams()
    const [artist, setArtist] = useState(null)
    const { language } = useLanguage()
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()

    useEffect(() => {
        fetchArtist()
    }, [id])

    const fetchArtist = async () => {
        try {
            const response = await getArtistRequest(id)
            setArtist(response.data)
        } catch (error) {
            console.error('Error fetching artist:', error)
        }
    }

    if (!artist) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Navbar />
            <div className="inline-block w-full mt-32">
                <Title>Artist</Title>
                <div className="flex mt-12">
                    <div className="w-1/3 p-4 border-r text-center text-white">
                        <div className="flex items-center justify-center mb-2">
                            <h1 className="text-2xl font-bold">
                                {artist.artistName}
                            </h1>
                            {adminAuthenticated && (
                                <Link
                                    to={`/artists/${artist.id}/edit`}
                                    aria-label="Edit Artist"
                                    className="ml-4 text-gray-400 hover:text-yellow-500"
                                > 
                                    <FontAwesomeIcon icon={faEdit} />
                                </Link>
                            )}
                        </div>
                        <img
                            className="rounded-t-lg"
                            src={`http://localhost:3000/${artist.image}`}
                            alt={artist.artistName}
                        />
                        <p className="mb-2 uppercase">{artist.role}</p>
                        {/* Puedes mostrar otros detalles del artista aquí */}
                    </div>

                    <div className="w-2/3 p-4 text-white text-center">
                        <Title>
                            {language === 'en' ? 'Biography' : 'Biografía'}
                        </Title>
                        <p className="text-white">
                            {artist.bio ||
                                (language === 'en'
                                    ? 'No information available'
                                    : 'No hay información disponible')}
                        </p>
                        {artist.releases ? (
                            artist.releases.map((release) => (
                                <div key={release.id} className="mb-4">
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <ReleasesPage release={release} />
                                    </Suspense>
                                    {/* Pasa los datos del lanzamiento como propiedades */}
                                </div>
                            ))
                        ) : (
                            <p>
                                {language === 'en'
                                    ? 'No releases available'
                                    : 'No hay releases disponibles'}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

ArtistPage.propTypes = {
    artistsData: PropTypes.array.isRequired,
}

export default ArtistPage

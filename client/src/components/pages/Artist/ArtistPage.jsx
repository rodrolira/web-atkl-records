import React, { useState, useEffect, Suspense } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../../../contexts/LanguageContext'
import Title from '../../atoms/Title'
import { getArtistRequest } from '../../../api/artists'
import Navbar from '../../organisms/Navbar'
import { useAdminAuth } from '../../../contexts/AdminAuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faInstagram,
    faFacebook,
    faSoundcloud,
    faBandcamp,
} from '@fortawesome/free-brands-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import EditArtistModal from './EditArtistModal'
import Button from '../../atoms/Button'
import Modal from '../../atoms/Modal'

const ReleasesPage = React.lazy(() => import('../ReleasesPage'))

function ArtistPage () {
    const { id } = useParams()
    const [artist, setArtist] = useState(null)
    const { language } = useLanguage()
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()
    const [showEditModal, setShowEditModal] = useState(false) // Estado para controlar la visibilidad del modal
    const [isDataUpdated, setIsDataUpdated] = useState(false) // Estado para controlar la actualización de datos

    useEffect(() => {
        fetchArtist()
    }, [id, isDataUpdated])

    const fetchArtist = async () => {
        try {
            const response = await getArtistRequest(id)
            setArtist(response.data)
        } catch (error) {
            console.error('Error fetching artist:', error)
        }
    }

    const openEditModal = () => {
        setShowEditModal(true)
    }

    const closeEditModal = () => {
        setShowEditModal(false)
        setIsDataUpdated(prev => !prev) // Cambia el estado para actualizar los datos
    }

    if (!artist) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Navbar />
            <div className='inline-block w-full mt-32'>
                <div className='flex mt-12'>
                    <div className='w-1/3 p-4 border-r text-center text-white'>
                        <div className='flex items-center justify-center mb-2'>
                            <h1 className='text-2xl font-bold'>
                                {artist.artistName}
                            </h1>
                            {adminAuthenticated && (
                                <Button
                                    type='button'
                                    onClick={openEditModal}
                                    // to={`/artists/${artist.id}/edit`}
                                    aria-label='Edit Artist'
                                    className='ml-4 text-gray-400 hover:text-yellow-500'
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                            )}
                        </div>

                        <div className='p-4 rounded-lg'>
                            <img
                                className='rounded-t-lg'
                                src={`http://localhost:3000/${artist.image}`}
                                alt={artist.artistName}
                            />
                            <div className='bg-slate-900 border-gray-200 w-full h-full relative rounded-b-lg'>
                                <h1 className='text-2xl font-semibold tracking-tight text-white text-center'>
                                    {artist.role}
                                </h1>
                                <div className='flex space-x-4 text-2xl justify-center my-2 py-2'>
                                    {artist.twitterLink && (
                                        <a
                                            href={artist.twitterLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label='View Twitter Profile'
                                            className='text-gray-400 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300'
                                        >
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    )}
                                    {artist.instagramLink && (
                                        <a
                                            href={artist.instagramLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label='View Instagram Profile'
                                            className='text-gray-400 dark:text-orange-500 hover:text-red-500 dark:hover:text-red-300'
                                        >
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                            />
                                        </a>
                                    )}
                                    {artist.facebookLink && (
                                        <a
                                            href={artist.facebookLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label='View Facebook Profile'
                                            className='text-gray-400 dark:text-blue-600 hover:text-blue-800 dark:hover:text-blue-600'
                                        >
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                            />
                                        </a>
                                    )}
                                    {artist.soundcloudLink && (
                                        <a
                                            href={artist.soundcloudLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label='View SoundCloud Profile'
                                            className='text-gray-400 dark:text-red-400 hover:text-red-600 dark:hover:text-red-400'
                                        >
                                            <FontAwesomeIcon
                                                icon={faSoundcloud}
                                            />
                                        </a>
                                    )}
                                    {artist.bandcampLink && (
                                        <a
                                            href={artist.bandcampLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label='View Bandcamp Profile'
                                            className='text-gray-400 dark:text-teal-500 hover:text-teal-600 dark:hover:text-teal-500'
                                        >
                                            <FontAwesomeIcon
                                                icon={faBandcamp}
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-2/3 p-4 text-white text-center'>
                        <Title>
                            {language === 'en' ? 'Biography' : 'Biografía'}
                        </Title>
                        <p className='text-white'>
                            {artist.bio ||
                                (language === 'en'
                                    ? 'No information available'
                                    : 'No hay información disponible')}
                        </p>
                        {artist.releases ? (
                            artist.releases.map(release => (
                                <div key={release.id} className='mb-4'>
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
            {/* Modal de Edición del Artista */}
            {showEditModal && (
                <Modal onClose={closeEditModal}>
                    <EditArtistModal id={id} onClose={closeEditModal} />
                </Modal>
            )}
        </>
    )
}

export default ArtistPage

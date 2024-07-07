import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faInstagram,
    faFacebook,
    faSoundcloud,
    faBandcamp,
    faYoutube,
    faSpotify,

} from '@fortawesome/free-brands-svg-icons'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useArtists } from '../../contexts/ArtistContext'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import Button from '../atoms/Button'

const ArtistCard = ({ artist }) => {

    const { deleteArtist, artists, setArtists } = useArtists() // Obtener la función de eliminación del contexto
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()
    const [showEditModal, setShowEditModal] = useState(false) // Estado para controlar la visibilidad del modal

    const handleDelete = async () => {
        if (
            window.confirm(
                `¿Estás seguro de que deseas eliminar al artista ${artist_name}?`
            )
        ) {
            try {
                await deleteArtist(artist.id) // Llamar a la función de eliminación
                // Elimina el artista de la lista actual de artistas
                const updatedArtists = artists.filter(a => a.id !== artist.id)
                setArtists(updatedArtists) // Actualiza la lista de artistas en el contexto
            } catch (error) {
                console.error('Error deleting artist:', error)
            }
        }
    }
    const openEditModal = () => {
        setShowEditModal(true)
    }

    const closeEditModal = () => {
        setShowEditModal(false)
    }

    return (
        <>
            <div className='bg-black max-w-sm border border-gray-200 rounded-lg shadow dark:border-purple-500 relative'>
                <Link to={`/artists/${artist.id}`} className='block relative'>
                    <div className='w-full rounded-t-lg overflow-hidden relative'>
                        <img
                            className='rounded-t-lg'
                            src={`http://localhost:3000/${artist.image}`}
                            alt={artist.artist_name}
                        />
                        {adminAuthenticated && (
                            <div className='absolute top-2 right-2 flex space-x-2'>
                                <Button
                                    // to={`/artists/${artist.id}/edit`}
                                    aria-label='Edit Artist'
                                    className='text-yellow-400 hover:text-yellow-500 text-xl'
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>

                                <button
                                    onClick={handleDelete}
                                    aria-label='Delete Artist'
                                    className='text-red-400 hover:text-red-500 text-xl'
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        )}
                    </div>

                    <h5 className='text-2xl font-bold tracking-tight text-white text-center'>
                        {artist.artist_name}
                    </h5>
                </Link>
                <h4 className='mb-2 text-xl font-bold tracking-tight text-white text-center'>
                    {artist.role}
                </h4>
                <div className='flex space-x-4 text-2xl justify-center my-2'>
                    {artist.twitter_link && (
                        <Link
                            to={artist.twitter_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='View Twitter Profile'
                            className='text-gray-400 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300'
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                    )}
                    {artist.instagram_link && (
                        <Link
                            to={artist.instagram_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='View Instagram Profile'
                            className='text-gray-400 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300'
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                    )}
                    {artist.facebook_link && (
                        <Link
                            to={artist.facebook_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='View Facebook Profile'
                            className='text-gray-400 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-600'
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                    )}
                    {artist.soundcloud_link && (
                        <Link
                            to={artist.soundcloud_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='View Soundcloud Profile'
                            className='text-gray-400 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                        >
                            <FontAwesomeIcon icon={faSoundcloud} />
                        </Link>
                    )}
                    {artist.bandcamp_link && (
                        <Link
                            to={artist.bandcamp_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='View Bandcamp Profile'
                            className='text-gray-400 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500'
                        >
                            <FontAwesomeIcon icon={faBandcamp} />
                        </Link>
                    )}
                    {artist.youtube_link && (
                        <Link
                            to={artist.youtube_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='View YouTube Profile'
                            className='text-gray-400 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                        >
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                    )}
                    {artist.spotify_link && (
                        <Link
                            to={artist.spotify_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='View Spotify Profile'
                            className='text-gray-400 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400'
                        >
                            <FontAwesomeIcon icon={faSpotify} />
                        </Link>
                    )}
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

ArtistCard.propTypes = {
    artist: PropTypes.shape({
        id: PropTypes.number.isRequired,
        artist_name: PropTypes.string.isRequired,
        image: PropTypes.string,
        twitter_link: PropTypes.string,
        instagram_link: PropTypes.string,
        facebook_link: PropTypes.string,
        soundcloud_link: PropTypes.string,
        bandcamp_link: PropTypes.string,
    }).isRequired,
}

export default ArtistCard

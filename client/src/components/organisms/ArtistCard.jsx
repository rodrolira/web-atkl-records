import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faInstagram,
    faFacebook,
    faSoundcloud,
    faBandcamp,
} from '@fortawesome/free-brands-svg-icons'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useArtists } from '../../contexts/ArtistContext'
import { useAdminAuth } from '../../contexts/AdminAuthContext'

const ArtistCard = ({ artist }) => {
    const {
        id,
        artistName,
        image,
        twitterLink,
        instagramLink,
        facebookLink,
        soundcloudLink,
        bandcampLink,
    } = artist
    const { deleteArtist, artists, setArtists } = useArtists() // Obtener la función de eliminación del contexto
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()

    const handleDelete = async () => {
        if (
            window.confirm(
                `¿Estás seguro de que deseas eliminar al artista ${artistName}?`
            )
        ) {
            try {
                await deleteArtist(artist.id) // Llamar a la función de eliminación
                // Elimina el artista de la lista actual de artistas
                const updatedArtists = artists.filter((a) => a.id !== artist.id)
                setArtists(updatedArtists) // Actualiza la lista de artistas en el contexto
            } catch (error) {
                console.error('Error deleting artist:', error)
            }
        }
    }

    return (
        <div className="bg-black max-w-sm border border-gray-200 rounded-lg shadow dark:border-purple-500">
            <Link to={`/artists/${id}`} className="block">
                <div className="w-full rounded-t-lg overflow-hidden">
                    <img
                        className="rounded-t-lg"
                        src={`http://localhost:3000/${image}`}
                        alt={artistName}
                    />
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center ">
                    {artistName}
                </h5>
            </Link>
            <div className="flex space-x-4 text-2xl justify-center my-2">
                {twitterLink && (
                    <a
                        href={twitterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Twitter Profile"
                        className="text-gray-400 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                )}
                {instagramLink && (
                    <a
                        href={instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Twitter Profile"
                        className="text-gray-400 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                )}
                {facebookLink && (
                    <a
                        href={facebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Twitter Profile"
                        className="text-gray-400 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-600"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                )}
                {soundcloudLink && (
                    <a
                        href={soundcloudLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Twitter Profile"
                        className="text-gray-400 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                    >
                        <FontAwesomeIcon icon={faSoundcloud} />
                    </a>
                )}
                {bandcampLink && (
                    <a
                        href={bandcampLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Twitter Profile"
                        className="text-gray-400 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500"
                    >
                        <FontAwesomeIcon icon={faBandcamp} />
                    </a>
                )}
            </div>
            {adminAuthenticated && (
                <div className="flex justify-around my-2">
                    <Link
                        to={`/artists/${artist.id}/edit`}
                        aria-label="Edit Artist"
                        className="text-gray-400 hover:text-yellow-500"
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Link>

                    <button
                        onClick={handleDelete}
                        aria-label="Delete Artist"
                        className="text-gray-400 hover:text-red-500"
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            )}
        </div>
    )
}

ArtistCard.propTypes = {
    artist: PropTypes.shape({
        id: PropTypes.number.isRequired,
        artistName: PropTypes.string.isRequired,
        image: PropTypes.string,
        twitterLink: PropTypes.string,
        instagramLink: PropTypes.string,
        facebookLink: PropTypes.string,
        soundcloudLink: PropTypes.string,
        bandcampLink: PropTypes.string,
    }).isRequired,
}

export default ArtistCard

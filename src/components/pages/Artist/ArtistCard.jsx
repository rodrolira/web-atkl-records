import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useAdminAuth } from '../../../contexts/AdminAuthContext'
import Button from '../../atoms/Button'
import Modal from '../../atoms/Modal';
import EditArtistModal from './EditArtistModal'
import { useArtists } from '../../../contexts/ArtistContext';
import ArtistLinks from './ArtistLinks'

const ArtistCard = ({ artist }) => {

    const { deleteArtist, artists, setArtists } = useArtists() // Obtener la función de eliminación del contexto
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()
    const [showEditModal, setShowEditModal] = useState(false) // Estado para controlar la visibilidad del modal

    const handleDelete = async () => {
        if (
            window.confirm(
                `¿Estás seguro de que deseas eliminar al artista ${artist.artist_name}?`
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
                <div className='w-full rounded-t-lg overflow-hidden relative'>

                    <Link to={`/artists/${artist.id}`} className='block relative'>
                        <img
                            className='rounded-t-lg'
                            src={`http://localhost:3000/${artist.image}`}
                            alt={artist.artist_name}
                        />
                    </Link>

                    {adminAuthenticated && (
                        <div className='absolute top-2 right-2 flex space-x-2'>
                            <Button
                                aria-label='Edit Artist'
                                className='text-yellow-400 hover:text-yellow-500 text-xl'
                                onClick={openEditModal}
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </Button>

                            <Button
                                onClick={handleDelete}
                                aria-label='Delete Artist'
                                className='text-red-400 hover:text-red-500 text-xl'
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                        </div>
                    )}
                </div>

                <h5 className='text-2xl font-bold tracking-tight text-white text-center'>
                    {artist.artist_name}
                </h5>
                <h4 className='mb-2 text-xl font-bold tracking-tight text-white text-center'>
                    {artist.role}
                </h4>
                <ArtistLinks artist={artist} />
            </div >
            {/* Modal de Edición del Artista */}
            {
                showEditModal && (
                    <Modal onClose={closeEditModal}>
                        <EditArtistModal id={artist.id} onClose={closeEditModal} />
                    </Modal>
                )
            }
        </>
    )
}

ArtistCard.propTypes = {
    artist: PropTypes.shape({
        id: PropTypes.number.isRequired,
        artist_name: PropTypes.string.isRequired,
        image: PropTypes.string,
    }).isRequired,
}

export default ArtistCard

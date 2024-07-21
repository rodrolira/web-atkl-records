// components/ReleaseCard.js
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBandcamp,
    faSpotify,
    faApple,
    faYoutube,
    faSoundcloud,
} from '@fortawesome/free-brands-svg-icons'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useAdminAuth } from '../../../contexts/AdminAuthContext'
import Button from '../../atoms/Button'
import Modal from '../../atoms/Modal'
import EditReleaseModal from './EditReleaseModal'
import { useReleases } from '../../../contexts/ReleaseContext'
import { getReleaseRequest } from '../../../api/releases'

const ReleaseCard = ({ release }) => {
    const [currentRelease, setCurrentRelease] = useState(release)
    const { deleteRelease, setReleases } = useReleases()
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()
    const [showEditModal, setShowEditModal] = useState(false)

    useEffect(() => {
        if (release?.id) {
            const fetchRelease = async () => {
                try {
                    const response = await getReleaseRequest(release.id)
                    setCurrentRelease(response.data)
                } catch (error) {
                    console.error('Error fetching release:', error)
                }
            }

            fetchRelease()
        }
    }, [release?.id])

    const handleDelete = async () => {
        if (currentRelease?.id && window.confirm(`¿Estás seguro de que deseas eliminar el lanzamiento ${currentRelease.title}?`)) {
            try {
                await deleteRelease(currentRelease.id)
                setReleases(prevReleases => prevReleases.filter(r => r.id !== currentRelease.id))
            } catch (error) {
                console.error('Error deleting release:', error)
            }
        }
    }

    const openEditModal = () => {
        setShowEditModal(true)
    }

    const closeEditModal = () => {
        setShowEditModal(false)
        // Fetch release again to get updated data
        if (currentRelease?.id) {
            const fetchRelease = async () => {
                try {
                    const response = await getReleaseRequest(currentRelease.id)
                    setCurrentRelease(response.data)
                } catch (error) {
                    console.error('Error fetching release:', error)
                }
            }
            fetchRelease()
        }
    }

    if (!currentRelease) {
        return <div>Loading...</div> // Render a loading state or message
    }

    return (
        <>
            <div className='max-w-sm w-full mx-auto text-center border text-white rounded-lg shadow bg-black border-gray-700'>
                <div className='w-full rounded-t-lg overflow-hidden relative'>
                    <h3 className='text-xl font-bold mt-2'>{currentRelease.title}</h3>
                    <h3 className='text-lg lg:h-auto sm:h-min font-bold mt-2'>
                        {currentRelease.artists && currentRelease.artists.length > 0
                            ? currentRelease.artists.map(artist => artist.artist_name).join(', ')
                            : 'No Artists'}
                    </h3>
                    <img
                        src={`http://localhost:3000/${currentRelease.cover_image_url}`}
                        alt={currentRelease.title}
                        className='w-full rounded-lg'
                    />

                    {adminAuthenticated && (
                        <div className='absolute top-2 right-2 flex space-x-2'>
                            <Button
                                aria-label='Edit Release'
                                className='text-yellow-400 hover:text-yellow-500 text-xl'
                                onClick={openEditModal}
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </Button>

                            <Button
                                onClick={handleDelete}
                                aria-label='Delete Release'
                                className='text-red-400 hover:text-red-500 text-xl'
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                        </div>
                    )}
                </div>

                <div className='flex justify-center space-x-4 my-4'>
                    {currentRelease.bandcamp_link && (
                        <a
                            href={currentRelease.bandcamp_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-teal-600'
                        >
                            <FontAwesomeIcon icon={faBandcamp} size='2x' />
                        </a>
                    )}
                    {currentRelease.spotify_link && (
                        <a
                            href={currentRelease.spotify_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-green-400'
                        >
                            <FontAwesomeIcon icon={faSpotify} size='2x' />
                        </a>
                    )}
                    {currentRelease.apple_music_link && (
                        <a
                            href={currentRelease.apple_music_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-purple-500'
                        >
                            <FontAwesomeIcon icon={faApple} size='2x' />
                        </a>
                    )}
                    {currentRelease.youtube_link && (
                        <a
                            href={currentRelease.youtube_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-red-500'
                        >
                            <FontAwesomeIcon icon={faYoutube} size='2x' />
                        </a>
                    )}
                    {currentRelease.soundcloud_link && (
                        <a
                            href={currentRelease.soundcloud_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-orange-500'
                        >
                            <FontAwesomeIcon icon={faSoundcloud} size='2x' />
                        </a>
                    )}
                </div>
                {currentRelease.bandcamp_link && (
                    <Button href={currentRelease.bandcamp_link} className="btn-buy h-10 mx-auto mb-4">
                        Comprar
                    </Button>
                )}
            </div>
            {showEditModal && (
                <Modal onClose={closeEditModal}>
                    <EditReleaseModal
                        id={currentRelease.id}
                        onClose={closeEditModal}
                    />
                </Modal>
            )}
        </>
    )
}

ReleaseCard.propTypes = {
    release: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        cover_image_url: PropTypes.string,
        artists: PropTypes.arrayOf(PropTypes.shape({
            artist_name: PropTypes.string,
        })),
        bandcamp_link: PropTypes.string,
        spotify_link: PropTypes.string,
        apple_music_link: PropTypes.string,
        youtube_link: PropTypes.string,
        soundcloud_link: PropTypes.string,
    }).isRequired,
}

export default ReleaseCard

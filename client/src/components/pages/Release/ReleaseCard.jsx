import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBandcamp,
    faSpotify,
    faApple,
    faYoutube,
    faSoundcloud,
} from '@fortawesome/free-brands-svg-icons'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useAdminAuth } from '../../../contexts/AdminAuthContext'
import Button from '../../atoms/Button'
import Modal from '../../atoms/Modal';
import { useReleases } from '../../../contexts/ReleaseContext';
import { Link } from 'react-router-dom'
import EditReleaseModal from './EditReleaseModal';

function ReleaseCard({
    title,
    artist,
    cover_image_url,
    bandcamp_link,
    beatport_link,
    spotify_link,
    apple_music_link,
    youtube_link,
    soundcloud_link,
}) {

    const { isAuthenticated: adminAuthenticated } = useAdminAuth();
    const { deleteRelease, releases, setReleases } = useReleases();
    const [showEditModal, setShowEditModal] = useState(false);

    const handleDelete = async () => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar el lanzamiento ${title}?`)) {
            try {
                await deleteRelease(id);
                const updatedReleases = releases.filter(release => release.id !== id);
                setReleases(updatedReleases);
            } catch (error) {
                console.error('Error deleting release:', error);
            }
        }
    };

    const openEditModal = () => {
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
    };

    return (
        <>
            <div className='max-w-sm w-full mx-auto text-center border text-white rounded-lg shadow bg-black border-gray-700'>
                <div className='w-full rounded-t-lg overflow-hidden relative'>

                    <h3 className='text-xl font-bold mt-2'>{title}</h3>
                    <h3 className='text-lg lg:h-auto sm:h-min font-bold mt-2'>
                        {artist}
                    </h3>
                    <img
                        src={`http://localhost:3000/${cover_image_url}`}
                        alt={title}
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
                    {bandcamp_link && (
                        <Link
                            to={bandcamp_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-teal-600'
                        >
                            <FontAwesomeIcon icon={faBandcamp} size='2x' />
                        </Link>
                    )}
                    {beatport_link && (
                        <Link
                            to={beatport_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-blue-600'
                        >
                            {/* No icon specified for Beatport, add FontAwesome or similar if needed */}
                            Beatport
                        </Link>
                    )}
                    {spotify_link && (
                        <Link
                            to={spotify_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-green-400'
                        >
                            <FontAwesomeIcon icon={faSpotify} size='2x' />
                        </Link>
                    )}
                    {apple_music_link && (
                        <Link
                            to={apple_music_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-purple-500'
                        >
                            <FontAwesomeIcon icon={faApple} size='2x' />
                        </Link>
                    )}
                    {youtube_link && (
                        <Link
                            to={youtube_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-red-500'
                        >
                            <FontAwesomeIcon icon={faYoutube} size='2x' />
                        </Link>
                    )}
                    {soundcloud_link && (
                        <Link
                            to={soundcloud_link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-orange-500'
                        >
                            <FontAwesomeIcon icon={faSoundcloud} size='2x' />
                        </Link>
                    )}
                </div>
                {bandcamp_link && (
                    <Button href={bandcamp_link} className="btn-buy h-10 mx-auto mb-4">
                        Comprar
                    </Button>
                )}

            </div>
            {
                showEditModal && (
                    <Modal onClose={closeEditModal}>
                        <EditReleaseModal
                            onClose={closeEditModal}
                        />
                    </Modal>
                )
            }
        </>
    )
}

ReleaseCard.propTypes = {
    title: PropTypes.string.isRequired,
    cover_image_url: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    genre_id: PropTypes.string,
    release_type: PropTypes.string,
    bandcamp_link: PropTypes.string,
    beatport_link: PropTypes.string,
    spotify_link: PropTypes.string,
    apple_music_link: PropTypes.string,
    youtube_link: PropTypes.string,
    soundcloud_link: PropTypes.string,
}

export default ReleaseCard

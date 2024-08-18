// ArtistPage.jsx
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../organisms/Navbar'
import { useArtistData } from '../../../hooks/useArtistData' // Hook personalizado
import Modal from '../../atoms/Modal'
import EditArtistModal from './EditArtistModal'
import ArtistDetails from './ArtistDetails'
import ArtistReleases from './ArtistReleases'
import ArtistBio from './ArtistBio'
import { useAdminAuth } from '../../../contexts/AdminAuthContext'
import { useAuth } from '../../../contexts/AuthContext'

function ArtistPage() {
    const { id } = useParams()
    const { artist, error } = useArtistData(id) // Usando el hook personalizado
    const [showEditModal, setShowEditModal] = useState(false)
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()
    const { user, isAuthenticated: userAuthenticated } = useAuth()

    if (error) {
        return <div>Error al obtener los datos del artista</div>
    }

    if (!artist) {
        return <div>Cargando...</div>
    }

    const openEditModal = () => setShowEditModal(true)
    const closeEditModal = () => setShowEditModal(false)

    const isUserArtistOwner = userAuthenticated && user.id === artist.userId

    return (
        <>
            <Navbar />
            <div className="inline-block w-full mt-32">
                <div className="flex mt-12">
                    <ArtistDetails
                        artist={artist}
                        adminAuthenticated={adminAuthenticated}
                        userAuthenticated={isUserArtistOwner}
                        openEditModal={openEditModal}
                    />
                    <div className="w-2/3 p-4 text-white text-center">
                        <ArtistBio artist={artist} language="en" />
                        <ArtistReleases artist={artist} />
                    </div>
                </div>
            </div>
            {showEditModal && (
                <Modal onClose={closeEditModal}>
                    <EditArtistModal id={id} onClose={closeEditModal} />
                </Modal>
            )}
        </>
    )
}

export default ArtistPage

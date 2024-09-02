import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { getUserProfileRequest } from '../../api/auth'
import Navbar from '../organisms/Navbar'
import Modal from '../atoms/Modal'
import EditArtistModal from './Artist/EditArtistModal'
import ArtistPage from './Artist/ArtistPage' // Asegúrate de ajustar la ruta según tu estructura de carpetas

function ProfilePage() {
    const { user } = useAuth()
    const [profile, setProfile] = useState(null)
    const [showEditModal, setShowEditModal] = useState(false)
    const [isDataUpdated, setIsDataUpdated] = useState(false)

    useEffect(() => {
        fetchProfile()
    }, [isDataUpdated])

    const fetchProfile = async () => {
        try {
            const response = await getUserProfileRequest()
            setProfile(response.data)
        } catch (error) {
            console.error('Error fetching profile:', error)
        }
    }

    const openEditModal = () => {
        setShowEditModal(true)
    }

    const closeEditModal = () => {
        setShowEditModal(false)
        setIsDataUpdated(prev => !prev)
    }

    if (!profile) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Navbar />
            <ArtistPage
                id={profile.id} // Pasar el ID del perfil aquí
            />
            {showEditModal && (
                <Modal onClose={closeEditModal}>
                    <EditArtistModal id={profile.id} onClose={closeEditModal} />
                </Modal>
            )}
        </>
    )
}

export default ProfilePage

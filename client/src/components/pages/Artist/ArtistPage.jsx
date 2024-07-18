// client/src/components/pages/Artist/ArtistPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArtistRequest } from '../../../api/artists';
import Navbar from '../../organisms/Navbar';
import { useAdminAuth } from '../../../contexts/AdminAuthContext';
import ArtistDetails from './ArtistDetails';
import ArtistReleases from './ArtistReleases';
import Modal from '../../atoms/Modal';
import EditArtistModal from './EditArtistModal';
import ArtistBio from './ArtistBio';

function ArtistPage() {
    const { id } = useParams();
    const [artist, setArtist] = useState(null);
    const { isAuthenticated: adminAuthenticated } = useAdminAuth();
    const [showEditModal, setShowEditModal] = useState(false);
    const [isDataUpdated, setIsDataUpdated] = useState(false);

    useEffect(() => {
        fetchArtist();
    }, [id, isDataUpdated]);

    const fetchArtist = async () => {
        try {
            const response = await getArtistRequest(id);
            setArtist(response.data);
        } catch (error) {
            console.error('Error fetching artist:', error);
        }
    };

    const openEditModal = () => {
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
        setIsDataUpdated((prev) => !prev);
    };

    if (!artist) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className='inline-block w-full mt-32'>
                <div className='flex mt-12'>
                    <ArtistDetails artist={artist} adminAuthenticated={adminAuthenticated} openEditModal={openEditModal} />
                    <div className='w-2/3 p-4 text-white text-center'>
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
    );
}

export default ArtistPage;

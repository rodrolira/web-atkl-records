import React, { useEffect, useState } from 'react'
import { Box, Typography, List, ListItem, ListItemText, Button, Modal } from '@mui/material'
import { useAdminAuth } from '../contexts/AdminAuthContext'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/organisms/Navbar'
import EditArtistModal from '../components/pages/Artist/EditArtistModal'
import EditReleaseModal from '../components/pages/Release/EditReleaseModal'

function AdminDashboard() {
    const [openArtistModal, setOpenArtistModal] = useState(false)
    const [openReleaseModal, setOpenReleaseModal] = useState(false)
    const [selectedArtistId, setSelectedArtistId] = useState(null)
    const [selectedReleaseId, setSelectedReleaseId] = useState(null)

    const handleOpenArtistModal = (id) => {
        setSelectedArtistId(id)
        setOpenArtistModal(true)
    }

    const handleOpenReleaseModal = (id) => {
        setSelectedReleaseId(id)
        setOpenReleaseModal(true)
    }

    const handleCloseArtistModal = () => {
        setOpenArtistModal(false)
        setSelectedArtistId(null)
    }

    const handleCloseReleaseModal = () => {
        setOpenReleaseModal(false)
        setSelectedReleaseId(null)
    }

    return (
        <>
            <Navbar />

            <Box paddingY={16} paddingX={4}>
                <Typography variant="h3" gutterBottom>
                    Admin Dashboard
                </Typography>
                <Box mb={4}>
                    <Typography variant="h4" gutterBottom>
                        Users
                    </Typography>
                    <List component="nav">
                        <ListItem button>
                            <ListItemText primary="Create User" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="View Users" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Edit User" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Delete User" />
                        </ListItem>
                    </List>
                </Box>
                <Box mb={4}>
                    <Typography variant="h4" gutterBottom>
                        Releases
                    </Typography>
                    <List component="nav">
                        <ListItem button onClick={() => handleOpenReleaseModal(null)}>
                            <ListItemText primary="Add Release" />
                        </ListItem>
                    </List>
                </Box>
                <Box mb={4}>
                    <Typography variant="h4" gutterBottom>
                        Artists
                    </Typography>
                    <List component="nav">
                        <ListItem button onClick={() => handleOpenArtistModal(null)}>
                            <ListItemText primary="Add Artist" />
                        </ListItem>
                    </List>
                </Box>
            </Box>

            <Modal open={openArtistModal} onClose={handleCloseArtistModal}>
                <Box>
                    <EditArtistModal id={selectedArtistId} onClose={handleCloseArtistModal} />
                </Box>
            </Modal>

            <Modal open={openReleaseModal} onClose={handleCloseReleaseModal}>
                <Box>
                    <EditReleaseModal id={selectedReleaseId} onClose={handleCloseReleaseModal} />
                </Box>
            </Modal>
        </>
    )
}

export default AdminDashboard

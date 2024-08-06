import React, { useEffect, useState } from 'react'
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Modal, Button, List, ListItem, ListItemText } from '@mui/material'
import { Edit as EditIcon } from '@mui/icons-material'
import Navbar from '../components/organisms/Navbar'
import AddArtistButton from '../components/molecules/AddArtistButton'
import EditArtistModal from '../components/pages/Artist/EditArtistModal'
import { getArtistsRequest } from '../api/artists'
import EditReleaseModal from '../components/pages/Release/EditReleaseModal'

function AdminDashboard() {
    const [artists, setArtists] = useState([])

    const [openArtistModal, setOpenArtistModal] = useState(false)
    const [openReleaseModal, setOpenReleaseModal] = useState(false)
    const [selectedArtistId, setSelectedArtistId] = useState(null)
    const [selectedReleaseId, setSelectedReleaseId] = useState(null)

    useEffect(() => {
        fetchArtists()
    }, [])

    const fetchArtists = async () => {
        try {
            const response = await getArtistsRequest()
            setArtists(response.data)
        } catch (error) {
            console.error('Error fetching artists:', error)
        }
    }

    const handleOpenArtistModal = (id) => {
        setSelectedArtistId(id)
        setOpenArtistModal(true)
    }

    const handleCloseArtistModal = () => {
        setOpenArtistModal(false)
        setSelectedArtistId(null)
    }

    const handleOpenReleaseModal = (id) => {
        setSelectedReleaseId(id)
        setOpenReleaseModal(true)
    }

    const handleCloseReleaseModal = () => {
        setOpenReleaseModal(false)
        setSelectedReleaseId(null)
    }

    return (
        <>
            <Navbar />
            <Box className="py-16 px-8">
                <Typography variant="h3" gutterBottom className="text-center mb-8">
                    Admin Dashboard
                </Typography>
                <Box mb={8}>
                    <Typography variant="h4" gutterBottom className="mb-4">
                        Users
                    </Typography>
                    <List component="nav" className="bg-white shadow-md rounded-lg">
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
                <Box mb={8}>
                    <Typography variant="h4" gutterBottom className="mb-4">
                        Releases
                    </Typography>
                    <List component="nav" className="bg-white shadow-md rounded-lg">
                        <ListItem button onClick={() => handleOpenReleaseModal(null)}>
                            <ListItemText primary="Add Release" />
                        </ListItem>
                    </List>
                </Box>
                <Box mb={8}>
                    <Typography variant="h4" gutterBottom className="mb-4">
                        Artists
                    </Typography>
                    <AddArtistButton />
                    <TableContainer component={Paper} className="mt-4">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Artist Name</TableCell>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {artists.map((artist) => (
                                    <TableRow key={artist.id}>
                                        <TableCell>{artist.artist_name}</TableCell>
                                        <TableCell>{artist.username}</TableCell>
                                        <TableCell>{artist.email}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => handleOpenArtistModal(artist.id)}>
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <List component="nav" className="bg-white shadow-md rounded-lg">
                        <ListItem button onClick={() => handleOpenArtistModal(null)}>
                            <ListItemText primary="Add Artist" />
                        </ListItem>
                    </List>
                </Box>
            </Box>

            <Modal open={openArtistModal} onClose={handleCloseArtistModal}>
                <div className="flex items-center justify-center min-h-screen">
                    <EditArtistModal id={selectedArtistId} onClose={handleCloseArtistModal} />
                </div>
            </Modal>

            <Modal open={openReleaseModal} onClose={handleCloseReleaseModal}>
                <div className="flex items-center justify-center min-h-screen">
                    <EditReleaseModal id={selectedReleaseId} onClose={handleCloseReleaseModal} />
                </div>
            </Modal>
        </>
    )
}

export default AdminDashboard

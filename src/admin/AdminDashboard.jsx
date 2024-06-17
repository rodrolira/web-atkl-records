import React, { useContext } from 'react'
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material'
import AdminAuthContext from '../contexts/AdminAuthContext'
import { Navigate } from 'react-router-dom'
import Navbar from '../components/organisms/Navbar'

function AdminDashboard() {
    const { isAuthenticated, loading } = useContext(AdminAuthContext)
    // Si aún se está cargando la verificación de autenticación, muestra un mensaje de carga
    if (loading) {
        return <p>Loading...</p>
    }

    // Si no está autenticado, redirige a la página de login del admin
    if (!isAuthenticated) {
        return <Navigate to="/admin/login" />
    }

    return (
        <>
            <Navbar />

            <Box paddingY={16}>
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
                        <ListItem button>
                            <ListItemText primary="Add Release" />
                        </ListItem>
                    </List>
                </Box>
                <Box mb={4}>
                    <Typography variant="h4" gutterBottom>
                        Artists
                    </Typography>
                    <List component="nav">
                        <ListItem button>
                            <ListItemText primary="Add Artist" />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </>
    )
}

export default AdminDashboard

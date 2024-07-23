import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../components/pages/LoginArtistPage' // Ajusta la importación según la ubicación de tu componente de Login
import Home from '../components/pages/Home'
import ReleasesPage from '../components/pages/ReleasesPage'
import ArtistsPage from '../components/pages/Artist/ArtistsPage'
import ArtistPage from '../components/pages/Artist/ArtistPage'
import LoginAdminPage from '../components/pages/LoginAdminPage'
import NotFound from '../components/pages/NotFound' // Añadido
import { useAuth } from '../contexts/AuthContext'
import { useAdminAuth } from '../contexts/AdminAuthContext'

const PublicRoutes = () => {
    const { isAuthenticated: userAuthenticated } = useAuth()
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/releases' element={<ReleasesPage />} />
            <Route path='/artists' element={<ArtistsPage />} />
            <Route path='/artists/:id' element={<ArtistPage />} />
            <Route path='/login' element={userAuthenticated ? <Navigate to='/' replace /> : <LoginPage />} />
            <Route path='/admin/login' element={adminAuthenticated ? <Navigate to='/admin' replace /> : <LoginAdminPage />} />
            {/* <Route path='*' element={<NotFound />} /> */}

        </Routes>
    )
}

export default PublicRoutes

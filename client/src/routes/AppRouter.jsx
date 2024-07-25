// routes/AppRouter.jsx

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../components/pages/Home'
import AdminDashboard from '../admin/AdminDashboard'
import EditReleaseModal from '../components/pages/Release/EditReleaseModal'
import EditArtist from '../components/pages/Artist/EditArtist'
import DiscographyPage from '../components/pages/Discography/DiscographyPage'
import ProfilePage from '../components/pages/ProfilePage'
import LoginArtistPage from '../components/pages/LoginArtistPage'
import ReleasesPage from '../components/pages/ReleasesPage'
import ArtistsPage from '../components/pages/Artist/ArtistsPage'
import ArtistPage from '../components/pages/Artist/ArtistPage'
import LoginAdminPage from '../components/pages/LoginAdminPage'
import NotFound from '../components/pages/NotFound'
import PrivateRoutes from './PrivateRoutes'
import AdminRoutes from './AdminRoutes'
import ProtectedRoute from './ProtectedRoute'
import { useAuth } from '../contexts/AuthContext'
import { useAdminAuth } from '../contexts/AdminAuthContext'

const AppRouter = () => {
    const { isAuthenticated: userAuthenticated } = useAuth()
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()
    return (
        <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/releases' element={<ReleasesPage />} />
            <Route path='/artists' element={<ArtistsPage />} />
            <Route path='/artists/:id' element={<ArtistPage />} />
            {/* <Route path='/login' element={<LoginArtistPage />} /> */}

            {/* Conditional Login Routes */}
            <Route
                path='/login'
                element={userAuthenticated || adminAuthenticated ? <Navigate to='/' /> : <LoginArtistPage />}
            />
            <Route
                path='/admin/login'
                element={adminAuthenticated ? <Navigate to='/admin' /> : userAuthenticated ? <Navigate to='/' /> : <LoginAdminPage />}
            />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
                <Route path='/discography' element={<DiscographyPage />} />
            </Route>

            {/* Admin Routes */}
            <Route element={<AdminRoutes />}>
                <Route path='/admin' element={adminAuthenticated ? <AdminDashboard /> : userAuthenticated ? <Navigate to='/' /> : <AdminDashboard />} />
                <Route path='/edit-release/:id' element={<EditReleaseModal />} />
                <Route path='/artists/:id/edit' element={<EditArtist />} />
            </Route>

            {/* Private Routes */}
            <Route element={<PrivateRoutes />}>
                <Route path='/profile' element={<ProfilePage />} />
            </Route>

            {/* Redirect to NotFound for unknown paths */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter

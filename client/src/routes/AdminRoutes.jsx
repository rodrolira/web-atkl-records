import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminDashboard from '../admin/AdminDashboard'
import NotFound from '../components/pages/NotFound' // Añadido
import EditReleaseModal from '../components/pages/Release/EditReleaseModal'
import EditArtist from '../components/pages/Artist/EditArtist'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import DiscographyPage from '../components/pages/Discography/DiscographyPage'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='/edit-release/:id' element={<EditReleaseModal />} />
            <Route path='/artists/:id/edit' element={<EditArtist />} />
            <Route path='/admin/login' element={<Navigate to='/admin' replace />} />
            <Route path='/discography' element={<DiscographyPage />} />
            {/* <Route path='/*' element={<><PublicRoutes /><PrivateRoutes /></>} /> */}
            {/* <Route path='/*' element={<PrivateRoutes />} /> */}
            <Route path='/*' element={<PublicRoutes />} />

            <Route path='*' element={<Navigate to='/admin' replace />} />
            {/* <Route path='*' element={<NotFound />} /> */}

        </Routes>
    )
}

export default AdminRoutes

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProfilePage from '../components/pages/ProfilePage' // Añadido
import DiscographyPage from '../components/pages/Discography/DiscographyPage' // Añadido
import NotFound from '../components/pages/NotFound' // Añadido
import PublicRoutes from './PublicRoutes'
import Home from '../components/pages/Home'

const PrivateRoutes = () => {
    return (
        <Routes>

            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/discography' element={<DiscographyPage />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/*' element={<PublicRoutes />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Navigate to='/' replace />} />
            {/* <Route path='/*' element={<PrivateRoutes />} /> */}
            {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
    )
}

export default PrivateRoutes

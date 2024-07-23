import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useAdminAuth } from '../contexts/AdminAuthContext'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import AdminRoutes from './AdminRoutes'

const AppRouter = () => {
    const { isAuthenticated: userAuthenticated } = useAuth()
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()

    if (userAuthenticated) {
        return (
            <Routes>
                <Route path='/*' element={<PrivateRoutes />} />
                <Route path='/*' element={<PublicRoutes />} />

                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        )
    }

    if (adminAuthenticated) {
        return (
            <Routes>
                <Route path='/*' element={<AdminRoutes />} />
                <Route path='/*' element={<PublicRoutes />} />
                <Route path='/*' element={<PrivateRoutes />} />
                {/* <Route path='*' element={<Navigate to='/admin' replace />} /> */}
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path='/*' element={<PublicRoutes />} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    )
}

export default AppRouter

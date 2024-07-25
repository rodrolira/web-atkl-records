// routes/PrivateRoutes.jsx

import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useAdminAuth } from '../contexts/AdminAuthContext'

const PrivateRoutes = () => {
    const { isAuthenticated: userAuthenticated, loading: userLoading } = useAuth()
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()

    if (userLoading) {
        return <div>Loading...</div>
    }

    if (adminAuthenticated) {
        return <Navigate to='/admin' replace />
    }

    return userAuthenticated ? <Outlet /> && <Navigate to='/' /> : <Navigate to='/login' />
}

export default PrivateRoutes

// routes/ProtectedRoute.jsx

import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useAdminAuth } from '../contexts/AdminAuthContext'

const ProtectedRoute = () => {
    const { isAuthenticated: userAuthenticated } = useAuth()
    const { isAuthenticated: adminAuthenticated, loading: adminLoading } = useAdminAuth()

    if (adminLoading) {
        return <div>Loading...</div>
    }

    const isAuthenticated = userAuthenticated || adminAuthenticated

    return isAuthenticated ? <Outlet /> : <Navigate to={userAuthenticated ? '/admin/login' : '/login'} />
}

export default ProtectedRoute

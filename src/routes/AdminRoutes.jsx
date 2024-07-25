import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAdminAuth } from '../contexts/AdminAuthContext'
import { useAuth } from '../contexts/AuthContext'

const AdminRoutes = () => {
    const { isAuthenticated: adminAuthenticated, loading: adminLoading } = useAdminAuth()
    console.log('AdminRoutes - isAuthenticated:', adminAuthenticated)
    const { isAuthenticated: userAuthenticated } = useAuth()

    if (adminLoading) {
        // Render a loading spinner or nothing while loading
        return <div>Loading...</div>
    }

    if (userAuthenticated) {
        return <Navigate to='/' replace />
    }

    return adminAuthenticated ? <Outlet /> : <Navigate to='/admin/login' replace />
}

export default AdminRoutes

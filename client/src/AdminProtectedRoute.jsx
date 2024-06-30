// // components/AdminProtectedRoute.jsx

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAdminAuth } from './contexts/AdminAuthContext'

// Ruta protegida para administradores
const AdminProtectedRoute = () => {
    const { isAuthenticated } = useAdminAuth()
    if (!isAuthenticated) {
        // Redirigir a la página de login si no está autenticado
        return <Navigate to='/login' replace />
    }
    // Renderizar el contenido protegido si está autenticado
    return <Outlet />
}
export default AdminProtectedRoute

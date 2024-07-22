// // components/AdminProtectedRoute.jsx

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAdminAuth } from './contexts/AdminAuthContext'

// Ruta protegida para administradores
const AdminProtectedRoute = () => {
    const { isAdminAuthenticated } = useAdminAuth()
    if (!isAdminAuthenticated) {
        // Redirigir a la página de login si no está autenticado
    }
    // Renderizar el contenido protegido si está autenticado
    return <Outlet />
}
export default AdminProtectedRoute

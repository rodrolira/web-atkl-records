import { useAuth } from './contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute () {
  const { loading, isAuthenticated } = useAuth()
  console.log(loading, isAuthenticated)

  if (loading) return <div className="loader mx-auto"></div>

  if (!loading && !isAuthenticated) return <Navigate to='/login' replace />

  return <Outlet />
}

export default ProtectedRoute

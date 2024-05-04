import { useNavigate } from 'react-router-dom'
import { useAdminAuth } from '../contexts/AuthContext'
import { useEffect } from 'react'

function AdminDashboard () {
  const { isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) navigate('/admin/login')
  }, [isAuthenticated])

  return <div></div>
}

export default AdminDashboard

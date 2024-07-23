import { useEffect } from 'react'
import AdminLoginForm from '../organisms/AdminLoginForm'
import Navbar from '../organisms/Navbar'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import { useNavigate } from 'react-router-dom'

function LoginAdminPage() {
  const { isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin')
    }
  }, [isAuthenticated, navigate])
  return (
    <div>
      <Navbar />
      <AdminLoginForm />
    </div>
  )
}

export default LoginAdminPage

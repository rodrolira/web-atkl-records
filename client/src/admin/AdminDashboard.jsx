import { useNavigate } from 'react-router-dom'
import { authAdmin } from '../contexts/AuthContext'
import { useEffect } from 'react'

function AdminDashboard() {
    const { isAuthenticated } = authAdmin()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) navigate('/admin/login')
    }, [isAuthenticated])

    return <div></div>
}

export default AdminDashboard

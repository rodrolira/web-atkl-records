import axios from './axios'

<<<<<<< HEAD
const getAuthHeaders = () => {
    const token = localStorage.getItem('token')
    if (!token) {
        console.error('No token found in localStorage')
        return {}
    }
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    }
}

export const registerAdminRequest = (user) => axios.post('/admin/register', user)

export const loginAdminRequest = async (user) => {
    try {
        const response = await axios.post('/admin/login', user)
        console.log('Server response:', response.data) // Agrega este log para inspeccionar la respuesta

        const token = response.data.token
        if (token) {
            localStorage.setItem('token', token) // Almacena el token en el localStorage
        } else {
            console.error('No token received from server')
        }
        return response
    } catch (error) {
        console.error('Error during login request:', error)
        throw error
    }
}

export const verifyAdminTokenRequest = () => axios.get('/admin/verify', getAuthHeaders())

export const logoutAdminRequest = () => axios.post('/admin/logout', {}, getAuthHeaders())
=======
export const registerAdminRequest = (user) => axios.post('/admin/register', user)

export const loginAdminRequest = (user) => axios.post('/admin/login', user)

export const verifyAdminTokenRequest = () => axios.get('/admin/verify')

export const logoutAdminRequest = () => axios.post('/admin/logout')
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96

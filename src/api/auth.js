import axios from './axios'

// Axios configuración para enviar cookies con cada solicitud
axios.defaults.withCredentials = true

// Funciones de solicitud al servidor
export const registerRequest = (user) => axios.post('/register', user)

export const loginRequest = async (user) => {
    const response = await axios.post('/login', user)
    return response
}

export const verifyUserTokenRequest = () => axios.get('/verify')
export const logoutRequest = () => axios.post('/logout')
export const fetchUserProfile = (id) => axios.get(`/profile/${id}`)
export const getUserProfileRequest = () => axios.get('/profile')

export const registerAdminRequest = (user) => axios.post('/admin/register', user)

export const loginAdminRequest = (user) => axios.post('/admin/login', user)

export const verifyAdminTokenRequest = () => axios.get('/admin/verify')

export const logoutAdminRequest = () => axios.post('/admin/logout')

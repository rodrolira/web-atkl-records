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
export const logoutRequest = () => axios.post('/logout');  // Añadido

export const registerAdminRequest = (user) =>
    axios.post('/admin/register', user)

export const loginAdminRequest = (user) => axios.post('/admin/login', user)

export const verifyAdminTokenRequest = () => axios.get('/admin/verify')

export const logoutAdminRequest = () => axios.post('/admin/logout')

// Funciones para manejar la autenticación del usuario
const fetchProfile = async () => {
    try {
        const res = await axios.get('/profile')
        setUser(res.data.user)
    } catch (error) {
        console.error('Error fetching user profile:', error)
    }
}

const loginUser = async (username, password) => {
    try {
        const res = await axios.post('/login', { username, password })
        setUser(res.data.user)
    } catch (error) {
        console.error('Error logging in:', error)
    }
}

const logoutUser = async () => {
    try {
        await axios.post('/logout')
        setUser(null)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    } catch (error) {
        console.error('Error logging out:', error)
    }
}

const registerUser = async (username, email, password) => {
    try {
        const res = await axios.post('/register', { username, email, password })
        setUser(res.data.user)
    } catch (error) {
        console.error('Error registering user:', error)
    }
}

export { fetchProfile, loginUser, logoutUser, registerUser }

// Funciones para manejar la autenticación del admin
const fetchAdminProfile = async () => {
    try {
        const res = await axios.get('/admin/profile')
        setAdmin(res.data.admin)
    } catch (error) {
        console.error('Error fetching admin profile:', error)
    }
}

const loginAdmin = async (username, password) => {
    try {
        const res = await axios.post('/admin/login', { username, password })
        setAdmin(res.data.admin)
    } catch (error) {
        console.error('Error logging in admin:', error)
    }
}

const logoutAdmin = async () => {
    try {
        await axios.post('/admin/logout')
        setAdmin(null)
        localStorage.removeItem('admin')
        localStorage.removeItem('token')
    } catch (error) {
        console.error('Error logging out admin:', error)
    }
}


export { fetchAdminProfile, loginAdmin, logoutAdmin }

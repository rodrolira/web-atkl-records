//api/auth.js
import axios from './axios'

export const registerRequest = user => axios.post('/register', user)

export const loginRequest = async (user) => {
    const response = await axios.post('/login', user)
    return response
}
export const logoutRequest = user => axios.post('/logout', user)
export const verityTokenRequest = () => axios.get('/verify')

export const registerAdminRequest = user => axios.post('/admin/register', user)
export const loginAdminRequest = user => axios.post('/admin/login', user)
export const logoutAdminRequest = user => axios.post('/admin/logout', user)
export const verityAdminTokenRequest = () => axios.get('/admin/verify')

import axios from './axios'

export const registerAdminRequest = (user) => axios.post('/admin/register', user)

export const loginAdminRequest = (user) => axios.post('/admin/login', user)

export const verifyAdminTokenRequest = () => axios.get('/admin/verify')

export const logoutAdminRequest = () => axios.post('/admin/logout')

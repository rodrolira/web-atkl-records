import axios from "./axios";


export const registerRequest = (user) => axios.post('/register', user);

export const loginRequest = (user) => axios.post('/login', user);

export const verityTokenRequest = () => axios.get('/verify');

export const registerAdminRequest = (user) => axios.post('/admin/register', user);

export const loginAdminRequest = (user) => axios.post('/admin/login', user);

export const verityAdminTokenRequest = () => axios.get('/admin/verify');

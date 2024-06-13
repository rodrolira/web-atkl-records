import axios from './axios'

export const getReleasesRequest = () => axios.get('/releases')
export const getReleaseRequest = (id) => axios.get(`/releases/${id}`)

export const createReleaseRequest = (release) => axios.post('/releases', release)

export const updateReleaseRequest = (release) =>
    axios.put(`/releases/${release._id}`, release)

export const deleteReleaseRequest = (id) => axios.delete(`/releases/${id}`)

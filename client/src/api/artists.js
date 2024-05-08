import axios from './axios'

export const getArtistsRequest = () => axios.get('/artists')
export const getArtistRequest = (id) => axios.get(`/artists/${id}`)

export const createArtistRequest = (artist) => axios.post('/artists', artist)

export const updateArtistRequest = (artist) =>
    axios.put(`/artists/${artist._id}`, artist)

export const deleteArtistRequest = (id) => axios.delete( `/artists/${id}`)

import axios from './axios'

export const getArtistsRequest = () => axios.get('/artists')
export const getArtistRequest = (id) => axios.get(`/artists/${id}`)

export const createArtistRequest = async (artist) => {
    return await axios.post('/artists', artist)
}

export const updateArtistRequest = async (id, updatedArtistData) => {
    return await axios.put(`/artists/${id}`, updatedArtistData)
}

export const deleteArtistRequest = async (id) => {
    return await axios.delete(`/artists/${id}`)
}

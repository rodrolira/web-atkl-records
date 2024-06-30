import axios from './axios'

export const getReleasesRequest = () => axios.get('/releases')

export const getReleaseRequest = (id) => axios.get(`/releases/${id}`)

export const createReleaseRequest = async (release) => {
    return await axios.post('/releases', release)
}

export const updateReleaseRequest = async (id, release) => {
    try {
        const response = await axios.put(`/releases/${id}`, release)
        return response.data
    } catch (error) {
        throw new Error(`Error updating release: ${error}`)
    }
}

export const deleteReleaseRequest = async (id) => {
    try {
        const response = await axios.delete(`/releases/${id}`)
        return response.data
    } catch (error) {
        throw new Error(`Error deleting release: ${error}`)
    }
}

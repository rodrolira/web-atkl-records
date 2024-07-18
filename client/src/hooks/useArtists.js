import { useState, useEffect } from 'react'
import {
    getArtistRequest,
    updateArtistRequest,
    deleteArtistRequest,
} from '../api/artists'

export const useArtists = (id) => {
    const [artist, setArtist] = useState(null)

    useEffect(() => {
        fetchArtist(id)
    }, [id])

    const fetchArtist = async (id) => {
        try {
            const response = await getArtistRequest(id)
            setArtist(response.data)
        } catch (error) {
            console.error('Error fetching artist:', error)
        }
    }

    const updateArtist = async (id, artist) => {
        try {
            await updateArtistRequest(id, artist)
            fetchArtist(id)
        } catch (error) {
            console.error('Error updating artist:', error)
        }
    }

    const deleteArtist = async (id) => {
        try {
            await deleteArtistRequest(id)
        } catch (error) {
            console.error('Error deleting artist:', error)
        }
    }

    return { artist, updateArtist, deleteArtist }
}

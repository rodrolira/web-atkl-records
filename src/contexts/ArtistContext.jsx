// /contexts/ArtistContext
// This context should manage the state and operations related to a list of artists.

import { createContext, useContext, useState, useCallback } from 'react'
import {
    createArtistRequest,
    deleteArtistRequest,
    getArtistsRequest,
    updateArtistRequest,
} from '../api/artists'

const ArtistContext = createContext()

export const useArtists = () => {
    const context = useContext(ArtistContext)

    if (!context) {
        console.log('useArtist must be used within an ArtistProvider')
        throw new Error('useArtist must be used within an ArtistProvider')
    }
    return context
}

export const ArtistProvider = ({ children }) => {
    const [artists, setArtists] = useState([]) // Estado para almacenar la lista de artistas

    // Lógica para obtener la lista de artistas
    const fetchArtists = useCallback(async () => {
        // Asegúrate de que este fetch esté funcionando correctamente y devuelva los datos esperados.
        try {
            const response = await getArtistsRequest()
            setArtists(response.data)
        } catch (error) {
            console.error('Error fetching artists:', error)
        }
    }, [])

    // Lógica para crear un artista
    const createArtist = async artist => {
        try {
            const res = await createArtistRequest(artist)
            setArtists(prevArtists => [...prevArtists, res.data])
        } catch (error) {
            console.error('Error creating artist:', error)
        }
    }

    return (
        <ArtistContext.Provider
            value={{
                artists,
                setArtists,
                createArtist,
                fetchArtists,
            }}
        >
            {children}
        </ArtistContext.Provider>
    )
}

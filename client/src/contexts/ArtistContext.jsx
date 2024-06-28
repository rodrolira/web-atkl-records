import { createContext, useContext, useState } from 'react'
import {
    createArtistRequest,
    deleteArtistRequest,
    updateArtistRequest,
} from '../api/artists'
import axios from 'axios'

const ArtistContext = createContext()

export const useArtists = () => {
    const context = useContext(ArtistContext)

    if (!context) {
        throw new Error('useArtist must be used within an ArtistProvider')
    }
    return context
}

export function ArtistProvider({ children }) {
    const [artists, setArtists] = useState([]) // Estado para almacenar la lista de artistas

    // Lógica para obtener la lista de artistas
    const fetchArtists = async () => {
        try {
            const response = await axios.get(
                'http://localhost:3000/api/artists'
            )
            setArtists(response.data)
        } catch (error) {
            console.error('Error fetching artists:', error)
        }
    }

    // Lógica para crear un artista
    const createArtist = async (artist) => {
        const res = await createArtistRequest(artist)
        setArtists((prevArtists) => [...prevArtists, res.data])
        console.log(res)
    }

    // Lógica para actualizar un artista
    const updateArtist = async (artistId, updatedData) => {
        try {
            const response = await updateArtistRequest(artistId, updatedData) // Pasa los datos actualizados
            setArtists((prevArtists) =>
                prevArtists.map((artist) =>
                    artist.id === artistId ? response.data : artist
                )
            )
        } catch (error) {
            console.error('Error updating artist:', error)
        }
    }

    // Lógica para eliminar un artista
    const deleteArtist = async (artistId) => {
        try {
            // Lógica para eliminar el artista en el backend (axios.delete, etc.)
            await deleteArtistRequest(artistId)

            // Después de eliminar exitosamente, actualiza la lista localmente
            setArtists((prevArtists) =>
                prevArtists.filter((artist) => artist.id !== artistId)
            )
        } catch (error) {
            console.error('Error deleting artist:', error)
        }
    }

    return (
        <ArtistContext.Provider
            value={{
                artists,
                setArtists,
                createArtist,
                deleteArtist,
                fetchArtists,
                updateArtist,
            }}
        >
            {children}
        </ArtistContext.Provider>
    )
}

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
        const response = await getArtistsRequest()
        setArtists(response.data)
        return response.data
    }, [])

    // Lógica para crear un artista
    const createArtist = async artist => {
        const res = await createArtistRequest(artist)
        setArtists(prevArtists => [...prevArtists, res.data])
        console.log(res)
    }

    // Lógica para actualizar un artista
    const updateArtist = async (artist_id, updatedData) => {
        try {
            const response = await updateArtistRequest(artist_id, updatedData) // Pasa los datos actualizados
            setArtists(prevArtists =>
                prevArtists.map(artist =>
                    artist.id === artist_id ? response.data : artist
                )
            )
        } catch (error) {
            console.error('Error updating artist:', error)
        }
    }

    // Lógica para eliminar un artista
    const deleteArtist = async id => {
        try {
            // Lógica para eliminar el artista en el backend (axios.delete, etc.)
            await deleteArtistRequest(id)

            // Después de eliminar exitosamente, actualiza la lista localmente
            setArtists(prevArtists =>
                prevArtists.filter(artist => artist.id !== id)
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

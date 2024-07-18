import { createContext, useContext, useState, useCallback } from 'react'
import {
    createArtistRequest,
    deleteArtistRequest,
    getArtistsRequest,
    updateArtistRequest,
} from '../api/artists'
import { useArtists } from '../hooks/useArtists'; // Asegúrate de que la ruta es correcta

const ArtistContext = createContext()

export const useArtistsContext = () => {
    const context = useContext(ArtistContext)

    if (!context) {
        console.log('useArtistsContext must be used within an ArtistProvider');
        throw new Error('useArtistsContext must be used within an ArtistProvider');
    }
    return context
}

export const ArtistProvider = ({ children }) => {
    const [artists, setArtists] = useState([]) // Estado para almacenar la lista de artistas

    // Lógica para obtener la lista de artistas
    const fetchArtists = useCallback(async () => {
        // Asegúrate de que este fetch esté funcionando correctamente y devuelva los datos esperados.
        try {
            const response = await getArtistsRequest();
            setArtists(response.data);
        } catch (error) {
            console.error('Error fetching artists:', error);
        }
    }, []);


    // Lógica para crear un artista
    const createArtist = async (artist) => {
        try {
            const res = await createArtistRequest(artist);
            setArtists((prevArtists) => [...prevArtists, res.data]);
        } catch (error) {
            console.error('Error creating artist:', error);
        }
    };

    // Lógica para actualizar un artista
    const updateArtist = async (artist_id, updatedData) => {
        try {
            const response = await updateArtistRequest(artist_id, updatedData) // Pasa los datos actualizados
            setArtists((prevArtists) =>
                prevArtists.map((artist) =>
                    artist.id === artist_id ? response.data : artist
                )
            );
        } catch (error) {
            console.error('Error updating artist:', error);
        }
    };

    // Lógica para eliminar un artista
    const deleteArtist = async id => {
        try {
            // Lógica para eliminar el artista en el backend (axios.delete, etc.)
            await deleteArtistRequest(id)

            // Después de eliminar exitosamente, actualiza la lista localmente
            setArtists((prevArtists) =>
                prevArtists.filter((artist) => artist.id !== id)
            );
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

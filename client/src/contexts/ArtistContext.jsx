// ArtistContext.jsx
import { createContext, useContext, useState } from 'react'
import { createArtistRequest } from '../api/artists'

const ArtistContext = createContext()

export const useArtists = () => {
    const context = useContext(ArtistContext)

    if (!context) {
        throw new Error('useArtist must be used within an ArtistProvider')
    }
    return context
}

export const ArtistProvider = ({ children }) => {
    const [artists, setArtists] = useState([]) // Estado para almacenar la lista de artistas

    const createArtist = async (artist) => {
        try {
        const res = await createArtistRequest(artist)
        setArtists((prevArtists) => [...prevArtists, res.data])
            return res.data
        } catch (error) {
            console.error('Error adding artist:', error)
            throw new Error('Failed to create artist')
            }
        }

    return (
        <ArtistContext.Provider value={{ artists, createArtist }}>
            {children}
        </ArtistContext.Provider>
    )
}

// useFetchArtists.js
import { useEffect } from 'react'
import { useArtists } from '../contexts/ArtistContext'

const useFetchArtists = () => {
    const { fetchArtists } = useArtists()
    useEffect(() => {
        fetchArtists()
    }, [])
    return null
}

export default useFetchArtists

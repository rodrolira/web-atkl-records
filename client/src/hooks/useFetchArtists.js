// useFetchArtists.js
import { useEffect, useState } from 'react'
import { useArtists } from '../contexts/ArtistContext'

const useFetchArtists = () => {
    const { fetchArtists } = useArtists()
    const [artists, setArtists] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadArtists = async () => {
            try {
                const data = await fetchArtists()
                setArtists(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        loadArtists()
    }, [fetchArtists])

    return { artists, loading, error }
}

export default useFetchArtists

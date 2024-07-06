// src/hooks/useArtist.js
import { useState, useEffect } from 'react'

const useArtist = (id) => {
    const [artist, setArtist] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchArtist = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/api/artists/${id}`
                )
                if (!response.ok) {
                    throw new Error('Error fetching artist data')
                }
                const data = await response.json()
                setArtist(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchArtist()
    }, [id])

    return { artist, loading, error }
}

export default useArtist

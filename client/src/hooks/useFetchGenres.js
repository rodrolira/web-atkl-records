// useFetchGenres.js
import { useEffect } from 'react'
import { useGenres } from '../contexts/GenreContext'

const useFetchGenres = () => {
    const { genres, fetchGenres } = useGenres()
    useEffect(() => {
        fetchGenres()
    }, [fetchGenres])
    return genres
}

export default useFetchGenres

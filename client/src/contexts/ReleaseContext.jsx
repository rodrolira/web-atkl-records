import { createContext, useContext, useState } from 'react'
import {
    getReleasesRequest,
    getReleaseRequest,
    createReleaseRequest,
    updateReleaseRequest,
    deleteReleaseRequest,
} from '../api/releases'

const ReleaseContext = createContext()

export const useReleases = () => {
    const context = useContext(ReleaseContext)

    if (!context) {
        throw new Error('useReleases must be used within a ReleaseProvider')
    }

    return context
}

export function ReleaseProvider ({ children }) {
    const [releases, setReleases] = useState([])

    // Lógica para obtener la lista de releases
    const fetchReleases = async () => {
        try {
            const response = await getReleasesRequest()
            setReleases(response.data)
        } catch (error) {
            console.error('Error fetching releases:', error)
        }
    }

    // Lógica para crear un release
    const createRelease = async release => {
        try {
            const response = await createReleaseRequest(release)
            setReleases(prevReleases => [...prevReleases, response])
            return response
        } catch (error) {
            console.error('Error creating release:', error)
            throw error
        }
    }

    // Lógica para actualizar un release
    const updateRelease = async (id, updatedRelease) => {
        try {
            const response = await updateReleaseRequest(id, updatedRelease)
            setReleases(prevReleases =>
                prevReleases.map(release =>
                    release.id === id ? response : release
                )
            )
            return response
        } catch (error) {
            console.error('Error updating release:', error)
            throw error
        }
    }

    // Lógica para eliminar un release
    const deleteRelease = async id => {
        try {
            await deleteReleaseRequest(id)
            setReleases(prevReleases =>
                prevReleases.filter(release => release.id !== id)
            )
        } catch (error) {
            console.error('Error deleting release:', error)
            throw error
        }
    }

    return (
        <ReleaseContext.Provider
            value={{
                releases,
                fetchReleases,
                createRelease,
                updateRelease,
                deleteRelease,
            }}
        >
            {children}
        </ReleaseContext.Provider>
    )
}

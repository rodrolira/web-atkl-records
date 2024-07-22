import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react'
import { getTracksRequest } from '../../../api/discography'

const TrackList = () => {
    const [releases, setReleases] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchReleases = async () => {
            try {
                const response = await getTracksRequest()
                setReleases(response.data)
            } catch (error) {
                setError(error.message)
            }
        }

        fetchReleases()
    }, [])

    return (
        <div className="overflow-x-auto container mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Lista de Releases</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {releases.length > 0 && (
                <Table>
                    <TableHead>
                        <TableHeadCell>Title</TableHeadCell>
                        <TableHeadCell>Artist</TableHeadCell>
                        <TableHeadCell>Album</TableHeadCell>
                        <TableHeadCell>Catalogue</TableHeadCell>
                        <TableHeadCell>Release Type</TableHeadCell>
                        <TableHeadCell>Release Date</TableHeadCell>
                        <TableHeadCell>Genre</TableHeadCell>
                        <TableHeadCell>File Info</TableHeadCell>
                        <TableHeadCell>Download URL</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">
                        {releases.map((release, index) => (
                            <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{release.title || 'N/A'}</TableCell>
                                <TableCell>{release.artist || 'N/A'}</TableCell>
                                <TableCell>{release.album || 'N/A'}</TableCell>
                                <TableCell>{release.catalogue || 'N/A'}</TableCell>
                                <TableCell>{release.release_type || 'N/A'}</TableCell>
                                <TableCell>{release.release_date ? new Date(release.release_date).toLocaleDateString() : 'N/A'}</TableCell>
                                <TableCell>{release.genre || 'N/A'}</TableCell>
                                <TableCell>{release.file_info || 'N/A'}</TableCell>
                                <TableCell>
                                    {release.download_url
                                        ? (
                                            <a href={release.download_url} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline dark:text-cyan-500">Descargar</a>
                                        )
                                        : 'N/A'}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    )
}

export default TrackList

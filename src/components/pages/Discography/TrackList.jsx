// src/components/TrackList.js
import React, { useState } from 'react'
import Papa from 'papaparse'
import { createTracksFromCSV } from '../../../api/discography'

const TrackList = () => {
    const [tracks, setTracks] = useState([])
    const [error, setError] = useState(null)

    const handleFileUpload = (event) => {
        const file = event.target.files[0]
        if (!file) return

        if (file.type !== 'text/csv') {
            setError('Por favor, sube un archivo CSV.')
            return
        }

        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: function (results) {
                setTracks(results.data)
                setError(null)
                uploadTracks(results.data)
            },
            error: function (error) {
                setError(error.message)
            }
        })
    }

    const uploadTracks = async (tracks) => {
        try {
            // Reajusta los nombres de campo según el modelo
            const formattedTracks = tracks.map(track => ({
                title: track.title,
                artist: track.artist,
                release_title: track.release_title,
                catalogue: track.catalogue,
                release_type: track.release_type,
                release_date: track.release_date,
                genre: track.genre,
                file_info: track.file_info,
                download_url: track.download_url,
            }))
            await createTracksFromCSV(formattedTracks)
            alert('Datos subidos correctamente.')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div>
            <h1>Lista de Tracks</h1>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {tracks.length > 0 && (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Artist</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Álbum</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Catalogue</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Release Type</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Release Date</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Genre</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Release Info</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>URL de Descarga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tracks.map((track, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{track.title}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{track.artist}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{track.release_title}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{track.catalogue}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{track.release_type}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{track.release_date}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{track.genre}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{track.file_info}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    {track.download_url ? <a href={track.download_url} target="_blank" rel="noopener noreferrer">Descargar</a> : 'N/A'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default TrackList

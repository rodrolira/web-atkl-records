import React, { useState } from 'react'
import Papa from 'papaparse'
import { createTracksFromCSV } from '../../../api/discography'

const AddTrackForm = () => {
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

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
            skipEmptyLines: true,
            complete: function (results) {
                console.log('Parsed CSV Data:', results.data) // Verifica los datos parseados
                uploadTracks(results.data)
            },
            error: function (error) {
                setError(error.message)
            }
        })
    }

    const uploadTracks = async (tracks) => {
        console.log('Datos del CSV procesados:', tracks) // Verifica los datos antes de enviarlos
        try {
            await createTracksFromCSV(tracks)
            setSuccessMessage('Tracks subidos correctamente.')
            setError(null)
        } catch (error) {
            setError(error.message)
            setSuccessMessage(null)
        }
    }

    return (
        <div className="overflow-x-auto container mx-auto p-6 bg-white to-transparent from-teal-200 shadow-lg rounded-lg w-[25%] mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Agregar Tracks</h1>
            <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="block w-full text-sm text-gray-700 bg-gray-200 border border-gray-300 rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        </div>
    )
}

export default AddTrackForm

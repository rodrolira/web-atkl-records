<<<<<<< HEAD
import React, { createContext, useContext, useCallback, useState } from 'react'
import { getGenresRequest } from '../api/genres'

// Creamos el contexto de géneros musicales
const GenreContext = createContext()
=======
import React, { createContext, useContext, useCallback, useState } from 'react';
import { getGenresRequest } from '../api/genres';

// Creamos el contexto de géneros musicales
const GenreContext = createContext();
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96

// Hook personalizado para usar el contexto de géneros musicales
export const useGenres = () => {
    const context = useContext(GenreContext)

    if (!context) {
        console.log('useArtist must be used within an GenreProvider')
        throw new Error('useArtist must be used within an GenreProvider')
    }
    return context
}

<<<<<<< HEAD
// Proveedor del contexto de géneros musicales
export const GenreProvider = ({ children }) => {
    const [genres, setGenres] = useState([])
=======


// Proveedor del contexto de géneros musicales
export const GenreProvider = ({ children }) => {
    const [genres, setGenres] = useState([]);
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96

    // Función para obtener la lista de géneros desde la API
    const fetchGenres = useCallback(async () => {
        // Asegúrate de que este fetch esté funcionando correctamente y devuelva los datos esperados.
<<<<<<< HEAD
        const response = await getGenresRequest() // Ajusta la ruta según tu API
        setGenres(response.data) // Actualiza la lista de géneros con la respuesta de la API
        return response.data
    }, [])

=======
        const response = await getGenresRequest(); // Ajusta la ruta según tu API
        setGenres(response.data); // Actualiza la lista de géneros con la respuesta de la API
        return response.data;
    }, [])


>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
    // Retorna el proveedor del contexto con los valores disponibles
    return (
        <GenreContext.Provider
            value={{
                genres,
                fetchGenres

            }}>{children}
        </GenreContext.Provider>
<<<<<<< HEAD
    )
}
=======
    );
};
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96

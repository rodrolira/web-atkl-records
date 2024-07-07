import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getGenresRequest } from '../api/genres';

// Creamos el contexto de géneros musicales
const GenreContext = createContext();

// Hook personalizado para usar el contexto de géneros musicales
export const useGenres = () => useContext(GenreContext);

// Proveedor del contexto de géneros musicales
export const GenreProvider = ({ children }) => {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Función para obtener la lista de géneros desde la API
    const fetchGenres = useCallback(async () => {
        setLoading(true);
        try {
            const response = await getGenresRequest(); // Ajusta la ruta según tu API
            setGenres(response.data); // Actualiza la lista de géneros con la respuesta de la API
        } catch (error) {
            console.error('Error fetching genres:', error);
            setError('Failed to fetch genres');
        } finally {
            setLoading(false);
        }
    }, []); // Dependencias vacías para que no se redefina

    useEffect(() => {
        fetchGenres(); // Llama a fetchGenres al montar el componente
    }, [fetchGenres]);

    // Valores expuestos por el contexto
    const values = {
        genres,
        loading,
        error,
        fetchGenres,
    };

    // Retorna el proveedor del contexto con los valores disponibles
    return (
        <GenreContext.Provider value={values}>{children}</GenreContext.Provider>
    );
};

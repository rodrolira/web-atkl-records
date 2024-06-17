import React, { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import {
    registerAdminRequest,
    loginAdminRequest,
    logoutAdminRequest,
    verityAdminTokenRequest,
} from '../api/auth'

const AdminAuthContext = createContext()

// Agrega un hook personalizado para el contexto del administrador
export const useAdminAuth = () => {
    const context = useContext(AdminAuthContext)
    if (!context) {
        throw new Error('useAdminAuth must be used within an AdminAuthProvider')
    }
    return context
}

// ADMIN PROVIDER //
export const AdminAuthProvider = ({ children }) => {
    // El estado de usuario autenticado
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    // El usuario, que se guarda en el estado y en el localStorage
    const [user, setUser] = useState(null)
    // Los errores que pueden ocurrir durante el proceso de autenticación
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Verificar si el usuario está autenticado al cargar la aplicación
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            setIsAuthenticated(true)
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const signup = async (user) => {
        try {
            const res = await registerAdminRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error.response)
            setErrors(error.response.data)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginAdminRequest(user)
            setIsAuthenticated(true)
            setUser(res.data)
            localStorage.setItem('user', JSON.stringify(res.data)) // Guarda el usuario en localStorage
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                setErrors(error.response.data)
            } else {
                setErrors([error.response.data.message])
            }
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get()

            if (!cookies.token) {
                setIsAuthenticated(false)
                return setUser(null)
            }
            try {
                const res = await verityAdminTokenRequest(cookies.token)
                if (!res.data) {
                    setIsAuthenticated(false)
                    setLoading(false)
                    return
                }

                setIsAuthenticated(true)
                setUser(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
            }
        }

        checkLogin()
    }, [])

    const logout = () => {
        logoutAdminRequest()
        Cookies.remove('token')
        setIsAuthenticated(false)
        setUser(null)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            verityAdminTokenRequest(token)
                .then((res) => {
                    setIsAuthenticated(true)
                    setUser(res.data.user)
                })
                .catch((error) => {
                    console.log(error)
                    localStorage.removeItem('token')
                    setIsAuthenticated(false)
                    setUser(null)
                })
        }
    }, [])

    return (
        <AdminAuthContext.Provider
            value={{
                signup,
                signin,
                logout,
                loading,
                user,
                isAuthenticated,
                errors,
            }}
        >
            {children}
            {errors.length > 0 && (
                <div className="error-container">
                    {errors.map((error, index) => (
                        <p key={index} className="error-message">
                            {error}
                        </p>
                    ))}
                </div>
            )}
        </AdminAuthContext.Provider>
    )
}

export default AdminAuthProvider

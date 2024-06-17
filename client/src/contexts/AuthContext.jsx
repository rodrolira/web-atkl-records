// AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import {
    registerRequest,
    loginRequest,
    logoutRequest,
    verityTokenRequest,
} from '../api/auth'

const AuthContext = createContext()

// Hook para usar el contexto de autenticación general
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

// USUARIO PROVIDER //
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)
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
            const res = await registerRequest(user)
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
            const res = await loginRequest(user)
            setIsAuthenticated(true)
            setUser(res.data)
            localStorage.setItem('user', JSON.stringify(res.data)) // Guarda el usuario en localStorage
            setErrors([]) // Limpia los errores
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                setErrors([error.response.data.message])
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
                const res = await verityTokenRequest(cookies.token)
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
        logoutRequest()
        Cookies.remove('token')
        setIsAuthenticated(false)
        setUser(null)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            verityTokenRequest(token)
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
        <AuthContext.Provider
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
        </AuthContext.Provider>
    )
}

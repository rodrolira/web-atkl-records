import React, { useContext, useEffect, useState } from 'react'
import { registerRequest, loginRequest, verifyUserTokenRequest, logoutRequest, fetchUserProfile } from '../api/auth'

const AuthContext = React.createContext()

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
        const checkLogin = async () => {
            try {
                const response = await verifyUserTokenRequest()
                setUser(response.data.user)
                setIsAuthenticated(true)
            } catch (error) {
                setIsAuthenticated(false)
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        checkLogin()
    }, [])

    const signup = async user => {
        try {
            const res = await registerRequest(user)
            setUser(res.data.user)
            setIsAuthenticated(true)
            localStorage.setItem('user', JSON.stringify(res.data.user)) // Guarda el usuario en localStorage
        } catch (error) {
            setErrors([error.response.data.message])
        }
    }

    const signin = async user => {
        try {
            const res = await loginRequest(user)
            const { token, userData } = res.data
            setIsAuthenticated(true)
            setUser(userData)
            localStorage.setItem('token', token) // Guarda el token en localStorage
        } catch (error) {
            setErrors([error.response.data.message])
        }
    }

    const signout = async () => {
        try {
            await logoutRequest()
            setIsAuthenticated(false)
            setUser(null)
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        } catch (error) {
            setErrors(['Error logging out:', error])
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

    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                signout,
                loading,
                user,
                isAuthenticated,
                errors,
                fetchUserProfile, // Agregado para obtener el perfil del usuario
            }}
        >
            {children}
            {errors.length > 0 && (
                <div className='error-container'>
                    {errors.map((error, index) => (
                        <p key={index} className='error-message'>
                            {error}
                        </p>
                    ))}
                </div>
            )}
        </AuthContext.Provider>
    )
}

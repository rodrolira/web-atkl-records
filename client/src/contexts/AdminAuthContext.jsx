import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import {
  adminRegisterRequest,
  adminLoginRequest,
  adminVerityTokenRequest
} from '../api/adminAuth'

export const AdminAuthContext = createContext()

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AdminAuthProvider = ({ children }) => {
  const [adminUser, setAdminUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(true)

  const signup = async adminUser => {
    try {
      const res = await adminRegisterRequest(adminUser)
      console.log(res.data)
      setAdminUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      console.log(error.response)
      setErrors(error.response.data)
    }
  }

  const signin = async adminUser => {
    try {
      const res = await adminLoginRequest(adminUser)
      console.log(res)
      setIsAuthenticated(true)
      setAdminUser(res.data)
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }

      setErrors([error.response.data.message])
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
    async function checkLogin () {
      const cookies = Cookies.get()

      if (!cookies.token) {
        setIsAuthenticated(false)
        setLoading(false)
        return setAdminUser(null)
      }

      try {
        const res = await adminVerityTokenRequest(cookies.token)
        if (!res.data) {
          setIsAuthenticated(false)
          setLoading(false)
          return
        }

        setIsAuthenticated(true)
        setAdminUser(res.data)
        setLoading(false)
      } catch (error) {
        setIsAuthenticated(false)
        setAdminUser(null)
        setLoading(false)
      }
    }
    checkLogin()
  }, [])

  return (
    <AdminAuthContext.Provider
      value={{
        signup,
        signin,
        loading,
        adminUser,
        isAuthenticated,
        errors
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  )
}

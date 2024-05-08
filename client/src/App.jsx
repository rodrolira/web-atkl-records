import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/organisms/Navbar'
import { LanguageProvider } from './contexts/LanguageContext'
import './App.css'
import Home from './components/pages/Home.jsx'
import Footer from './components/organisms/Footer.jsx'
import { AuthProvider, AdminAuthProvider } from './contexts/AuthContext'
import { ArtistProvider } from './contexts/ArtistContext.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

const ArtistsPage = React.lazy(() => import('./components/pages/ArtistsPage'))
const ArtistPage = React.lazy(() => import('./components/pages/ArtistPage'))
const ReleasesPage = React.lazy(() => import('./components/pages/ReleasesPage'))
const LoginArtistPage = React.lazy(() =>
  import('./components/pages/LoginArtistPage')
)
const LoginAdminPage = React.lazy(() =>
  import('./components/pages/LoginAdminPage')
)
const AdminDashboard = React.lazy(() => import('./admin/AdminDashboard'))
const RegisterPage = React.lazy(() => import('./components/pages/RegisterPage'))
const ProfilePage = React.lazy(() => import('./components/pages/ProfilePage'))
const DiscographyPage = React.lazy(() =>
  import('./components/pages/DiscographyPage')
)


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [artistsData, setArtistsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/artists')
        setArtistsData(response.data)
        setIsAuthenticated(true)
      } catch (error) {
        console.error('Error al obtener datos de artistas:', error)
        setIsAuthenticated(false)
      }
    }

    fetchData()
  }, [])

  return (
    <AuthProvider>
      <AdminAuthProvider>
        <ArtistProvider>
          ;
          <LanguageProvider>
            <Router>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Navigate to='/' />} />
                <Route
                  path='/artists'
                  element={<ArtistsPage artistsData={artistsData} />}
                />
                <Route
                  path='/artists/:id'
                  element={<ArtistPage artistsData={artistsData} />}
                />
                <Route path='/releases' element={<ReleasesPage />} />
                <Route path='/login' element={<LoginArtistPage />} />
                <Route path='/admin/login' element={<LoginAdminPage />} />
                <Route path='/admin' element={<AdminDashboard />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/tasks' element={<h1> Tasks Page </h1>} />
                <Route path='/add-task' element={<h1> New Task </h1>} />
                <Route path='/tasks/:id' element={<h1> Update Page </h1>} />
                <Route path='/discography' element={<DiscographyPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path='/profile' element={<ProfilePage />} />
                </Route>
              </Routes>
            </Router>
            <Footer />
          </LanguageProvider>
        </ArtistProvider>
      </AdminAuthProvider>
    </AuthProvider>
  )
}

export default App

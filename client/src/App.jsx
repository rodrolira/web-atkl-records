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
import ArtistDetail from './components/pages/ArtistDetail'
import Home from './components/pages/Home.jsx'
import Artists from './components/pages/Artists.jsx'
import Releases from './components/pages/Releases.jsx'
import Footer from './components/pages/Footer'
import RegisterPage from './components/pages/RegisterPage.jsx'
import LoginAdminPage from './components/pages/LoginAdminPage.jsx'
import LoginArtistPage from './components/pages/LoginArtistPage.jsx'
import { AuthProvider } from './contexts/AuthContext'

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
      <LanguageProvider>
        <div className='App h-full'>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Navigate to='/' />} />
              <Route
                path='/artists'
                element={<Artists artistsData={artistsData} />}
              />
              <Route
                path='/artists/:id'
                element={<ArtistDetail artistsData={artistsData} />}
              />
              <Route path='/releases' element={<Releases />} />
              <Route path='/login' element={<LoginArtistPage />} />
              <Route path='/admin/login' element={<LoginAdminPage />} />
              <Route path='/admin' element={<Navigate to='/admin/login' />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/tasks' element={<h1> Tasks Page </h1>} />
              <Route path='/add-task' element={<h1> New Task </h1>} />
              <Route path='/tasks/:id' element={<h1> Update Page </h1>} />
              <Route path='/profile' element={<h1> Profile Page </h1>} />
            </Routes>
          </Router>
          <Footer />
        </div>
      </LanguageProvider>
    </AuthProvider>
  )
}

export default App

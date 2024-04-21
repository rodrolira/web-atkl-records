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
import AdminLoginForm from './components/organisms/AdminLoginForm'
import './App.css'
import ArtistDetail from './components/pages/ArtistDetail'
import Home from './components/pages/Home.jsx'
import Artists from './components/pages/Artists.jsx'
import Releases from './components/pages/Releases.jsx'
import Login from './components/organisms/Login.jsx'
import AdminPanel from './components/organisms/AdminPanel'
import Footer from './components/pages/Footer'
import RegisterPage from './components/pages/RegisterPage.jsx'
import LoginAdminPage from './components/pages/LoginAdminPage.jsx'
import LoginArtistPage from './components/pages/LoginArtistPage.jsx'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Estado para verificar si el usuario está conectado

  const artistsData = [
    {
      id: 1,
      name: 'RODRO',
      role: 'DJ',
      bio: "Dj and Music Producer from Rancagua, Chile. He started as a music producer in the early 2020's producing Techno. Then he took a DJ course at South Waves Studios in the same city in 2020, finishing the course he entered as a resident of the collective Rancagua Rave. During this journey he has been able to find the sound and style he is most passionate about, Hard Techno, with its distorted, hard, fast and industrial sounds. In his sets we can find musical styles like neorave, acid, industrial, hardgroove and hard techno, adding screamo and gutturals to give a darker and under touch, his mixes generally turn between 140 to 155bpm.",
      releases: [{ title: 'Release 1', catalog: 'Catalog 1' }],
      socialMedia: [
        { name: 'Twitter', link: 'https://twitter.com/rodro' },
        { name: 'Instagram', link: 'https://instagram.com/rodro' }
      ],
      image: '/img/rodro.jpg'
    },
    {
      id: 2,
      name: 'Sweet_Hate',
      role: 'DJ',
      bio: 'Biografía de Sweet Hate...',
      releases: [{ title: 'Release 1', catalog: 'Catalog 1' }],
      socialMedia: [
        { name: 'Twitter', link: 'https://twitter.com/sweet_hate' },
        { name: 'Instagram', link: 'https://instagram.com/sweet_hate' }
      ],
      image: '/img/sweet_hate.jpg'
    }
    // Agrega más artistas según sea necesario
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5050/')
        console.log(response.data)

        // Suponiendo que el backend devuelve un token o algún indicador de que el usuario está conectado
        setIsLoggedIn(true)
      } catch (error) {
        console.error('Error al obtener datos:', error)
        setIsLoggedIn(false) // Si hay un error, asumimos que el usuario no está conectado
      }
    }

    fetchData()
  }, [])

  return (
    <LanguageProvider>
      <div className='App h-full'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Navigate to='/' />} />
            <Route path='/artists' element={<Artists />} />
            <Route
              path='/artists/:id'
              element={
                <ArtistDetail
                  artistsData={artistsData}
                  currentAdminUser={undefined}
                />
              }
            />
            <Route path='/releases' element={<Releases />} />
            <Route path='/login' element={<LoginArtistPage />} />
            <Route path='/admin/login' element={<LoginAdminPage />} />
            <Route path='/admin' element={<Navigate to='/admin/login' />} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/tasks' element={<h1> Tasks Page </h1>} />
            <Route path='/add-task' element={<h1> New Task </h1>} />
            <Route path='/tasks/:id' element={<h1> Update Page </h1>} />
            <Route path='/profile' element={<h1> Profile Page </h1>} />

          </Routes>
        </Router>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App

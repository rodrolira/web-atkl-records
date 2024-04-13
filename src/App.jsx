import React, { useEffect, useState, lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/organisms/Navbar'
import { LanguageProvider } from './contexts/LanguageContext'
import LanguageSelector from './components/atoms/LanguageSelector'
import AdminLoginForm from './components/organisms/AdminLoginForm'
import './App.css'
import ArtistDetail from './components/pages/ArtistDetail'

const Home = lazy(() => import('./components/pages/Home'))
const Artists = lazy(() => import('./components/pages/Artists'))
const Releases = lazy(() => import('./components/pages/Releases'))
const Login = lazy(() => import('./components/organisms/Login'))
import AdminPanel from './components/organisms/AdminPanel'

const App = () => {
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
        const response = await axios.get('http://localhost:9000/auth') // Reemplaza la URL con la ruta de tu backend
        console.log(response.data) // Muestra los datos recibidos del backend en la consola
      } catch (error) {
        console.error('Error al obtener datos:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <LanguageProvider>
      <div className='App h-full'>
        <Router>
          <Navbar />

          <Suspense fallback={<div>Loading...</div>}>
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
              <Route path='/login' element={<Login />} />
              <Route path='/admin/login' element={<AdminLoginForm />} />
              <Route path='/admin' element={<AdminPanel />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </LanguageProvider>
  )
}

export default App
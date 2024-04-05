/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/organisms/Navbar'
import Home from './components/pages/Home'
import Artists from './components/pages/Artists'
import ArtistDetail from './components/pages/ArtistDetail'
import Releases from './components/pages/Releases'
import Login from './components/organisms/Login'
import AdminPanel from './components/organisms/AdminPanel'
import { LanguageProvider } from './contexts/LanguageContext'
import LanguageSelector from './components/atoms/LanguageSelector'
import AdminLoginForm from './components/organisms/AdminLoginForm'
function App () {
  const [apiResponse, setAPIResponse] = useState('')

  useEffect(() => {
    fetch('http://localhost:5174')
      .then(res => res.text())
      .then(res => setAPIResponse(res))
  }, [])

  const artistsData = [
    {
      id: 1,
      name: 'RODRO',
      role: 'DJ',
      bio: "Dj and Music Producer from Rancagua, Chile. He started as a music producer in the early 2020's producing Techno. Then he took a DJ course at South Waves Studios in the same city in 2020, finishing the course he entered as a resident of the collective Rancagua Rave. During this journey he has been able to find the sound and style he is most passionate about, Hard Techno, with its distorted, hard, fast and industrial sounds. In his sets we can find musical styles like neorave, acid, industrial, hardgroove and hard techno, adding screamo and gutturals to give a darker and under touch, his mixes generally turn between 140 to 155bpm.",
      releases: [
        { title: 'Release 1', catalog: 'Catalog 1' },
        { title: 'Release 2', catalog: 'Catalog 2' }
      ],
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

  return (
    <LanguageProvider>
      <div className='App bg-slate-950 h-full'></div>
      <Router>
        <Navbar />
        <Routes>
          {/* Define las rutas de tu aplicación */}
          <Route path='/' element={<Home />} />{' '}
          {/* Ruta para la página de inicio */}
          <Route path='/artists' element={<Artists />} />{' '}
          {/* Ruta para la página de artistas */}
          <Route
            path='/artists/:id'
            element={
              <ArtistDetail
                artistsData={artistsData}
                currentAdminUser={undefined}
              />
            }
          />
          <Route path='/releases' element={<Releases />} />{' '}
          {/*Ruta para la pagina de lanzamientos*/}
          <Route path='/login' element={<Login />} />
          <Route path='/admin/login' element={<AdminLoginForm />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App

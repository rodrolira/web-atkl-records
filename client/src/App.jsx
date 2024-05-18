import React, { useEffect, useState, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'
import axios from 'axios'
import { SpeedInsights } from '@vercel/speed-insights/react'
import 'vite/modulepreload-polyfill'
import { useQuery, gql } from '@apollo/client'

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
const LoginAdminPage = React.lazy(
    () => import('./components/pages/LoginAdminPage')
)
const AdminDashboard = React.lazy(() => import('./admin/AdminDashboard'))
const RegisterPage = React.lazy(() => import('./components/pages/RegisterPage'))
const ProfilePage = React.lazy(() => import('./components/pages/ProfilePage'))
const DiscographyPage = React.lazy(
    () => import('./components/pages/DiscographyPage')
)
import LoginArtistPage from './components/pages/LoginArtistPage'

const GET_ARTISTS = gql`
    query GetArtists {
        artists {
            id
            name
            image
        }
    }
`

function DisplayArtists() {
    const { loading, error, data } = useQuery(GET_ARTISTS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :{error.message} </p>

    return data.artists.map(({ id, name, image }) => (
        <div key={id}>
            <h1>{name}</h1>
            <img src={`${image}`} alt={name} />
        </div>
    ))
}

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [artistsData, setArtistsData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3000/api/artists'
                )
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
        <div className="App">
            <AuthProvider>
                <AdminAuthProvider>
                    <ArtistProvider>
                        <LanguageProvider>
                            <SpeedInsights />
                            <Router>
                                <Navbar />
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route
                                        path="/home"
                                        element={<Navigate to="/" />}
                                    />
                                    <Route
                                        path="/artists"
                                        element={
                                            <Suspense
                                                fallback={
                                                    <div className="loader"></div>
                                                }
                                            >
                                                <ArtistsPage
                                                    artistsData={artistsData}
                                                />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/artists/:id"
                                        element={
                                            <Suspense
                                                fallback={
                                                    <div className="loader"></div>
                                                }
                                            >
                                                <ArtistPage
                                                    artistsData={artistsData}
                                                />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/releases"
                                        element={
                                            <Suspense
                                                fallback={
                                                    <div className="loader"></div>
                                                }
                                            >
                                                <ReleasesPage />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/login"
                                        element={<LoginArtistPage />}
                                    />
                                    <Route
                                        path="/admin/login"
                                        element={
                                            <Suspense
                                                fallback={
                                                    <div className="loader"></div>
                                                }
                                            >
                                                <LoginAdminPage />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/admin"
                                        element={
                                            <Suspense
                                                fallback={
                                                    <div className="loader"></div>
                                                }
                                            >
                                                <AdminDashboard />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/register"
                                        element={
                                            <Suspense
                                                fallback={
                                                    <div className="loader"></div>
                                                }
                                            >
                                                <RegisterPage />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/tasks"
                                        element={<h1> Tasks Page </h1>}
                                    />
                                    <Route
                                        path="/add-task"
                                        element={<h1> New Task </h1>}
                                    />
                                    <Route
                                        path="/tasks/:id"
                                        element={<h1> Update Page </h1>}
                                    />

                                    <Route element={<ProtectedRoute />}>
                                        <Route
                                            path="/profile"
                                            element={
                                                <Suspense
                                                    fallback={
                                                        <div className="loader"></div>
                                                    }
                                                >
                                                    <ProfilePage />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/discography"
                                            element={
                                                <Suspense
                                                    fallback={
                                                        <div className="loader"></div>
                                                    }
                                                >
                                                    <DiscographyPage />
                                                </Suspense>
                                            }
                                        />
                                    </Route>
                                </Routes>
                            </Router>
                            <Footer />
                        </LanguageProvider>
                    </ArtistProvider>
                </AdminAuthProvider>
            </AuthProvider>
        </div>
    )
}

export default App

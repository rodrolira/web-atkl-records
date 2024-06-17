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
import { LanguageProvider } from './contexts/LanguageContext'
import './App.css'
import Home from './components/pages/Home.jsx'
import Footer from './components/organisms/Footer.jsx'
// import { AuthProvider, AdminAuthProvider } from './contexts/AuthContext'
import { ArtistProvider } from './contexts/ArtistContext.jsx'

const ArtistsPage = React.lazy(() => import('./components/pages/ArtistsPage'))
const ArtistPage = React.lazy(() => import('./components/pages/ArtistPage'))
const ReleasesPage = React.lazy(() => import('./components/pages/ReleasesPage'))
const LoginAdminPage = React.lazy(
    () => import('./components/pages/LoginAdminPage')
)
const AdminDashboard = React.lazy(() => import('./admin/AdminDashboard'))
const RegisterPage = React.lazy(() => import('./components/pages/RegisterPage'))
// const ProfilePage = React.lazy(() => import('./components/pages/ProfilePage'))
// const DiscographyPage = React.lazy(
//     () => import('./components/pages/DiscographyPage')
// )
import LoginArtistPage from './components/pages/LoginArtistPage'
import NotFound from './components/pages/NotFound.jsx'
import ProtectedRoute from './ProtectedRoute';
import SigninPage from './components/templates/SigninPage.jsx'

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
                // console.error('Error al obtener datos de artistas:', error)
                setIsAuthenticated(false)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="App flex flex-col min-h-screen">
            {/* <AuthProvider> */}
                {/* <AdminAuthProvider> */}
                    <ArtistProvider>
                        <LanguageProvider>
                            <SpeedInsights />
                            <Router>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route
                                        path="/home"
                                        element={<Navigate to="/" />}
                                    />
                                    <Route
                                        path="/login"
                                        element={<LoginArtistPage />}
                                    />
                                    <Route
                                        path="/admin/login"
                                        element={<LoginAdminPage />}
                                    />
                                </Routes>
                                {/* <main className="flex-grow mt-20 lg:mt-24"> */}
                                    <Routes>
                                        <Route
                                            path="/artists"
                                            element={
                                                <ArtistsPage
                                                    artistsData={artistsData}
                                                />
                                            }
                                        />
                                        <Route
                                            path="/artists/:id"
                                            element={
                                                <ArtistPage
                                                    artistsData={artistsData}
                                                />
                                            }
                                        />
                                        <Route
                                            path="/releases"
                                            element={
                                                <Suspense
                                                    fallback={
                                                        <div>Loading...</div>
                                                    }
                                                >
                                                    <ReleasesPage />{' '}
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/admin"
                                            element={<AdminDashboard />}
                                        />
                                        <Route
                                            path="/register"
                                            element={<RegisterPage />}
                                    />
                                    <ProtectedRoute>
                                        <Route
                                            path="/login"
                                            element={<SigninPage />}
                                        />
                                    </ProtectedRoute>

                                    </Routes>

                                {/* </main> */}
                                <Footer />
                            </Router>
                        </LanguageProvider>
                    </ArtistProvider>
                {/* </AdminAuthProvider> */}
            {/* </AuthProvider> */}
        </div>
    )
}

export default App

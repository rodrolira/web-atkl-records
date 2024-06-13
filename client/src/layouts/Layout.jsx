//layouts/Layout.jsx
import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import ArtistsPage from '../components/pages/ArtistsPage'
import LoginAdminPage from '../components/pages/LoginAdminPage'
import LoginArtistPage from '../components/pages/LoginArtistPage'
import RegisterPage from '../components/pages/RegisterPage'
import ReleasesPage from '../components/pages/ReleasesPage'
import NotFound from '../components/pages/NotFound'
import { AdminAuthProvider, AuthProvider } from '../contexts/AuthContext'
import { ArtistProvider } from '../contexts/ArtistContext'
import { LanguageProvider } from '../contexts/LanguageContext'
import '../App.css'
import Footer from '../components/organisms/Footer'
import AdminDashboard from '../admin/AdminDashboard'


const Layout = () => {

    return (
        <div className="flex">
            <div className="layout">
                <AuthProvider>
                    <AdminAuthProvider>
                        <ArtistProvider>
                            <LanguageProvider>
                                <BrowserRouter>
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route
                                            path="/artists"
                                            element={<ArtistsPage />}
                                        />
                                        <Route
                                            path="/releases"
                                            element={<ReleasesPage />}
                                        />
                                        <Route
                                            path="/login"
                                            element={<LoginArtistPage />}
                                        />
                                        <Route
                                            path="/admin/login"
                                            element={<LoginAdminPage />}
                                        />
                                        <Route
                                            path="/register"
                                            element={<RegisterPage />}
                                        />
                                        <Route
                                            path="/*"
                                            element={<NotFound />}
                                        />
                                        <Route
                                            path="/admin"
                                            element={<AdminDashboard />}
                                        />
                                    </Routes>
                                    <Footer />
                                </BrowserRouter>
                            </LanguageProvider>
                        </ArtistProvider>
                    </AdminAuthProvider>
                </AuthProvider>
            </div>
        </div>
    )
}

export default Layout
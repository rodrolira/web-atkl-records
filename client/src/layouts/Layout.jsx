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
// import { AdminAuthProvider } from '../contexts/AdminAuthContext'
// import { AuthProvider } from '../contexts/AuthContext'
import { ReleaseProvider } from '../contexts/ReleaseContext'
import { ArtistProvider } from '../contexts/ArtistContext'
import { LanguageProvider } from '../contexts/LanguageContext'
import '../App.css'
import Footer from '../components/organisms/Footer'
import AdminDashboard from '../admin/AdminDashboard'
import ProtectedRoute from '../ProtectedRoute'
import EditArtist from '../components/pages/Artist/EditArtist'
import ArtistPage from '../components/pages/Artist/ArtistPage'
import { GenreProvider } from '../contexts/GenreContext'
import ArtistProfilePage from '../components/pages/Artist/ArtistProfilePage'
import AdminProtectedRoute from '../AdminProtectedRoute'

const Layout = () => {
    return (
        <div className='flex'>
            <div className='layout'>
                {/* <AuthProvider> */}
                {/* <AdminAuthProvider> */}
                <GenreProvider>
                    <ReleaseProvider>
                        <ArtistProvider>
                            <LanguageProvider>
                                <BrowserRouter>
                                    <Routes>
                                        <Route path='/' element={<Home />} />
                                        <Route
                                            path='/artists'
                                            element={<ArtistsPage />}
                                        />
                                        <Route
                                            path='/artists/:id'
                                            element={<ArtistPage />}
                                        />
                                        <Route
                                            path='/artists/:id/edit'
                                            element={<EditArtist />}
                                        />
                                        <Route
                                            path='/releases'
                                            element={<ReleasesPage />}
                                        />
                                        <Route
                                            path='/login'
                                            element={<LoginArtistPage />}
                                        />
                                        <Route
                                            path='/admin/login'
                                            element={<LoginAdminPage />}
                                        />

                                        <Route
                                            element={<AdminProtectedRoute />}
                                        >
                                            {''}
                                            <Route
                                                path='/register'
                                                element={<RegisterPage />}
                                            />
                                        </Route>
                                        <Route
                                            path='/*'
                                            element={<NotFound />}
                                        />
                                        <Route
                                            path='/artists/:id'
                                            element={<ArtistProfilePage />}
                                        />
                                        <Route
                                            path='/admin'
                                            element={<AdminDashboard />}
                                        />
                                    </Routes>
                                    <Footer />
                                </BrowserRouter>
                            </LanguageProvider>
                        </ArtistProvider>
                    </ReleaseProvider>
                </GenreProvider>
                {/* </AdminAuthProvider>
                </AuthProvider> */}
            </div>
        </div>
    )
}

export default Layout

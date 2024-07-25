import React from 'react'
import AppRouter from './routes/AppRouter' // Asegúrate de que la ruta sea correcta
import Layout from './layouts/Layout'
import { AdminAuthProvider } from './contexts/AdminAuthContext'
import { AuthProvider } from './contexts/AuthContext'
import { GenreProvider } from './contexts/GenreContext'
import { ReleaseProvider } from './contexts/ReleaseContext'
import { ArtistProvider } from './contexts/ArtistContext'
import { LanguageProvider } from './contexts/LanguageContext'

const App = () => {
    return (
        <>
            <AdminAuthProvider>
                <AuthProvider>
                    <GenreProvider>
                        <ReleaseProvider>
                            <ArtistProvider>
                                <LanguageProvider >
                                    <Layout>
                                        <AppRouter />
                                    </Layout>
                                </LanguageProvider>
                            </ArtistProvider>
                        </ReleaseProvider>
                    </GenreProvider>
                </AuthProvider>
            </AdminAuthProvider>
            {/* </AdminAuthProvider> */}
        </>
    )
}

export default App

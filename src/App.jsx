import React from 'react'
import AppRouter from './routes/AppRouter' // Asegúrate de que la ruta sea correcta
import Layout from './layouts/Layout'
import { AdminAuthProvider } from './contexts/AdminAuthContext'
import { AuthProvider } from './contexts/AuthContext'
import { GenreProvider } from './contexts/GenreContext'
import { ReleaseProvider } from './contexts/ReleaseContext'
import { ArtistProvider } from './contexts/ArtistContext'
<<<<<<< HEAD
// import { LanguageProvider } from './contexts/LanguageContext'
=======
import { LanguageProvider } from './contexts/LanguageContext'
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96

const App = () => {
    return (
        <>
            <AdminAuthProvider>
                <AuthProvider>
                    <GenreProvider>
                        <ReleaseProvider>
                            <ArtistProvider>
<<<<<<< HEAD
                                {/* <LanguageProvider > */}
                                    <Layout>
                                        <AppRouter />
                                    </Layout>
                                {/* </LanguageProvider> */}
=======
                                <LanguageProvider >
                                    <Layout>
                                        <AppRouter />
                                    </Layout>
                                </LanguageProvider>
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
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

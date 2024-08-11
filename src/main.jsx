// main.jsx
import React from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './App'
// import 'vite/modulepreload-polyfill'
import './index.css'
// import Layout from './layouts/Layout'
// import { AuthProvider } from './contexts/AuthContext'
// import { AdminAuthProvider } from './contexts/AdminAuthContext'
// import { GenreProvider } from './contexts/GenreContext'
// import { ReleaseProvider } from './contexts/ReleaseContext'
// import { ArtistProvider } from './contexts/ArtistContext'
<<<<<<< HEAD
import { LanguageProvider } from './contexts/LanguageContext'
import './i18n'
=======
// import { LanguageProvider } from './contexts/LanguageContext'
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
// import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
<<<<<<< HEAD
        <LanguageProvider>
        <App />
        </LanguageProvider>
=======

        <App />
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
    </React.StrictMode>
)

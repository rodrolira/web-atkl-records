import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ReleaseProvider } from '../contexts/ReleaseContext'
import { ArtistProvider } from '../contexts/ArtistContext'
import { LanguageProvider } from '../contexts/LanguageContext'
import Footer from '../components/organisms/Footer'
import '../App.css'
import { GenreProvider } from '../contexts/GenreContext'
// import AdminAuthProvider from '../contexts/AdminAuthContext'

const Layout = ({ children }) => {
    return (
        <div className='flex'>
            <div className='layout'>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
                <Footer />

            </div>
        </div>
    )
}

export default Layout

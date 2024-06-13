//Home.jsx

import React, { useEffect, useContext } from 'react'
import './Home.css'
import { useLanguage } from '../../contexts/LanguageContext'
import AboutSection from '../organisms/AboutSection'
import DemosSection from '../organisms/DemoSection'
import ReleasesSection from '../organisms/ReleasesSection'
import ArtistsSection from '../organisms/ArtistsSection'
import ContactSection from '../organisms/ContactSection'
import { useLocation } from 'react-router-dom'
import Navbar from '../organisms/Navbar'

function Home() {
    const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto
    const location = useLocation()

    useEffect(() => {
        if (location.state && location.state.scrollToDemos) {
            const demosSection = document.getElementById('demos')
            if (demosSection) {
                demosSection.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [location])

    return (
        <div id="home" className="home">
            <Navbar />
            <div className="parallax-container flex">
                <div className="parallax-content flex w-full">
                    {/* Contenido del encabezado aquí */}
                    <div className="container mx-auto my-24">
                        <section
                            id="main"
                            className="main h-full flex flex-col"
                        >
                            <div className="logo-main flex items-center h-full w-full">
                                <img
                                    alt="main"
                                    className="h-full mx-auto"
                                    src="/img/main.png"
                                />
                            </div>
                            <div className="text-center text-white flex flex-col">
                                <h1 className="title-main font-extrabold text-5xl">
                                    {language === 'en'
                                        ? 'HARD TECHNO IS LIFE'
                                        : 'HARD TECHNO IS LIFE'}
                                </h1>
                                <h2 className="text-3xl">
                                    {language === 'en'
                                        ? 'LABEL'
                                        : 'SELLO DISCOGRÁFICO'}
                                </h2>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <ArtistsSection />
            <ReleasesSection />
            <AboutSection />
            <DemosSection />
            <ContactSection />
        </div>
    )
}

export default Home

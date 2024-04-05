import React from 'react'
import './Home.css'
import Artists from './Artists'
import Releases from './Releases'
import AboutSection from './AboutSection'
import DemosSection from './DemoSection'
import Footer from './Footer'
import ContactSection from './ContactSection'
import { useLanguage } from '../../contexts/LanguageContext';

function Home () {
  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto

  return (
    <div id='home' className='home bg-slate-950'>
      <div className='parallax-container flex'>
        <div className='parallax-content flex w-full'>
          {/* Contenido del encabezado aquí */}
          <div className='container mx-auto my-24'>
            <section id='main' className='main h-full flex flex-col'>
              <div className='logo-main flex items-center h-full w-full'>
                <img
                  alt='main'
                  className='h-full mx-auto'
                  src='/img/main.png'
                />
              </div>
              <div className='text-center text-white flex flex-col'>
                <h1 className='title-main font-extrabold text-5xl'>
                  {language === 'en'
                    ? 'HARD TECHNO IS LIFE'
                    : 'HARD TECHNO IS LIFE'}
                </h1>
                <h2 className='text-3xl'>
                  {language === 'en' ? 'LABEL' : 'SELLO DISCOGRÁFICO'}
                </h2>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Artists />
      <Releases />
      <AboutSection />
      <DemosSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home

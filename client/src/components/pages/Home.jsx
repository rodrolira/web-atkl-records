import React, { Suspense } from 'react'
import './Home.css'
import { useLanguage } from '../../contexts/LanguageContext'
const Artists = React.lazy(() => import('../organisms/ArtistsSection'))
const Releases = React.lazy(() => import('../organisms/ReleasesSection'))
const DemosSection = React.lazy(() => import('../organisms/DemoSection'))
const ContactSection = React.lazy(() => import('../organisms/ContactSection'))
import AboutSection from '../organisms/AboutSection'

function Home () {
  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto

  return (
    <div id='home' className='home'>
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

      <Suspense fallback={<div>Loading...</div>}>
        <Artists />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Releases />
      </Suspense>
      <AboutSection />
      <Suspense fallback={<div>Loading...</div>}>
        <DemosSection />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  )
}

export default Home

import React, { lazy, Suspense } from 'react'
import './Home.css'
import { useLanguage } from '../../contexts/LanguageContext'

const Artists = lazy(() => import('./Artists'))
const Releases = lazy(() => import('./Releases'))
const AboutSection = lazy(() => import('./AboutSection'))
const DemosSection = lazy(() => import('./DemoSection'))
const Footer = lazy(() => import('./Footer'))
const ContactSection = lazy(() => import('./ContactSection'))

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
      <Suspense fallback={<div>Loading Artists...</div>}>
        <Artists />
      </Suspense>
      ;
      <Suspense fallback={<div>Loading Releases...</div>}>
        <Releases />
      </Suspense>
      ;
      <Suspense fallback={<div>Loading AboutSection...</div>}>
        <AboutSection />
      </Suspense>
      ;
      <Suspense fallback={<div>Loading DemosSection...</div>}>
        <DemosSection />
      </Suspense>
      ;
      <Suspense fallback={<div>Loading ContactSection...</div>}>
        <ContactSection />
      </Suspense>
      ;
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default Home

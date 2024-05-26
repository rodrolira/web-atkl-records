import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext';
import Title from '../atoms/Title';

function AboutSection () {
  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto

  return (
    <section id='about' className='py-16'>
      <div className='container mx-auto p-5'>
        <Title>{language === 'en' ? 'About' : 'Acerca de'}</Title>
        <p className='text-lg text-white'>
          {language === 'en'
            ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum risus vel augue tincidunt, nec fermentum massa fermentum. Sed pretium dolor non libero ultrices, sit amet feugiat est pharetra. Donec non felis eget quam tristique scelerisque at id nisi.'
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum risus vel augue tincidunt, nec fermentum massa fermentum. Sed pretium dolor non libero ultrices, sit amet feugiat est pharetra. Donec non felis eget quam tristique scelerisque at id nisi.'}
        </p>
        {/* Agrega más contenido sobre la sección "About" según sea necesario */}
      </div>
    </section>
  )
}

export default AboutSection

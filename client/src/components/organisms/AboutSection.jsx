import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Title from '../atoms/Title';

function AboutSection() {
  const { language } = useLanguage(); // Obtiene el estado del idioma desde el contexto

  const aboutText = {
    en: `ATKL Records, founded by <a href="https://soundcloud.com/rodro_music" target="_blank" rel="noopener noreferrer" class="hover:text-red-500 ">RODRO</a> in December 2022 in Chile, is characterized by its distinctive blend of hardcore techno, industrial, and schranz genres, known for their heavy, energetic, and dynamic soundscapes. The label's inaugural release, "<a href="https://open.spotify.com/album/unknown-va-i" target="_blank" rel="noopener noreferrer" class="hover:text-red-500">Unknown VA I</a>", a compilation featuring 10 emerging artists from Chile, Colombia, and Spain, was launched in March 2023, marking the beginning of its journey. Since then, ATKL Records has grown to showcase over 12 diverse releases and hosts two popular podcasts on SoundCloud, highlighting both established and up-and-coming talents in the global electronic music scene. In mid-2023, the label expanded its influence by organizing energetic events and parties, further solidifying its role not only as a record label but also as a vibrant community hub where local DJs and music enthusiasts converge.`,
    es: `ATKL Records, fundada por <a href="https://soundcloud.com/rodro_music" target="_blank" rel="noopener noreferrer" class="hover:text-red-500 ">RODRO</a> en diciembre de 2022 en Chile, se caracteriza por su distintiva fusión de géneros como hardcore techno, industrial y schranz, reconocidos por sus paisajes sonoros pesados, energéticos y dinámicos. El primer lanzamiento del sello, "<a href="https://open.spotify.com/album/unknown-va-i" target="_blank" rel="noopener noreferrer" class="hover:text-red-500">Unknown VA I</a>", un compilado que incluye a 10 artistas emergentes de Chile, Colombia y España, se lanzó en marzo de 2023, marcando el inicio de su trayectoria. Desde entonces, ATKL Records ha crecido hasta exhibir más de 12 lanzamientos diversos y cuenta con dos podcasts populares en SoundCloud, destacando tanto talentos establecidos como prometedores en la escena global de la música electrónica. A mediados de 2023, el sello expandió su influencia al organizar eventos y fiestas enérgicas, consolidando aún más su rol no solo como sello discográfico sino también como un vibrante punto de encuentro comunitario donde DJs locales y entusiastas de la música convergen.`
  };

  return (
    <section id='about' className='p-20'>
      <div className='container mx-auto p-5'>
        <Title>{language === 'en' ? 'About' : 'Acerca de'}</Title>
        <p className='text-xl text-white'>
          {language === 'en' ? (
            <span dangerouslySetInnerHTML={{ __html: aboutText.en }} />
          ) : (
            <span dangerouslySetInnerHTML={{ __html: aboutText.es }} />
          )}
        </p>
        {/* Agrega más contenido sobre la sección "About" según sea necesario */}
      </div>
    </section>
  );
}

export default AboutSection;

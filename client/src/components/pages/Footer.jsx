import React from 'react'
import { Typography } from '@material-tailwind/react'
import { useLanguage } from '../../contexts/LanguageContext'

const SITEMAP_EN = [
  {
    title: 'Label',
    links: ['About Us', 'Artists', 'Releases', 'Services']
  },
  {
    title: 'Links',
    links: ['Instagram', 'Soundcloud', 'Beatport', 'BandCamp']
  },
  {
    title: 'Resources',
    links: ['Blog', 'Newsletter', 'Free Products', 'Affiliate Program']
  },
  {
    title: 'Products',
    links: ['Templates', 'UI Kits', 'Icons', 'Mockups']
  }
]

const SITEMAP_ES = [
  {
    title: 'Empresa',
    links: ['Sobre nosotros', 'Carreras', 'Nuestro Equipo', 'Proyectos']
  },
  {
    title: 'Centro de ayuda',
    links: ['Discord', 'Twitter', 'GitHub', 'Contáctenos']
  },
  {
    title: 'Recursos',
    links: ['Blog', 'Boletín', 'Productos gratuitos', 'Programa de afiliados']
  },
  {
    title: 'Productos',
    links: ['Plantillas', 'Kits de UI', 'Iconos', 'Maquetas']
  }
]

const currentYear = new Date().getFullYear()

function Footer () {
  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto
  const sitemap = language === 'en' ? SITEMAP_EN : SITEMAP_ES // Selecciona el sitemap según el idioma

  return (
    <footer className='relative w-full'>
      <div className='mx-auto w-full max-w-7xl px-8'>
        <div className='mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4'>
          {sitemap.map(({ title, links }, key) => (
            <div key={key} className='w-full'>
              <Typography
                variant='small'
                color='white'
                className='mb-4 font-bold uppercase opacity-50'
              >
                {title}
              </Typography>
              <ul className='space-y-1'>
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as='li'
                    color='white'
                    className='font-normal'
                  >
                    <a
                      href='#'
                      className='inline-block py-1 pr-2 transition-transform hover:scale-105'
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between'>
          <Typography
            variant='small'
            className='mb-4 text-center font-normal text-white md:mb-0'
          >
            &copy; {currentYear}{' '}
            <a href='https://material-tailwind.com/'>ATKL Records</a>. All
            Rights Reserved.
          </Typography>
          <div className='flex gap-4 text-white sm:justify-center'>
            <Typography
              as='a'
              href='#'
              className='opacity-80 transition-opacity hover:opacity-100'
            >
              <svg
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                {/* Icono de red social 1 */}
              </svg>
            </Typography>
            <Typography
              as='a'
              href='#'
              className='opacity-80 transition-opacity hover:opacity-100'
            >
              <svg
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                {/* Icono de red social 2 */}
              </svg>
            </Typography>
            <Typography
              as='a'
              href='#'
              className='opacity-80 transition-opacity hover:opacity-100'
            >
              <svg
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                {/* Icono de red social 3 */}
              </svg>
            </Typography>
            <Typography
              as='a'
              href='#'
              className='opacity-80 transition-opacity hover:opacity-100'
            >
              <svg
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                {/* Icono de red social 4 */}
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

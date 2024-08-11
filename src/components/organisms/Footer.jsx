import React from 'react'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBandcamp, faInstagram, faSoundcloud, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const SITEMAP = {
    en: [
        {
            title: 'Label',
            links: ['About Us', 'Artists', 'Releases', 'Send Demo'],
        },
        {
            title: 'Links',
            links: ['Instagram', 'Soundcloud', 'Beatport', 'Bandcamp'],
        },
        {
            title: 'Services',
            links: ['Booking', 'Mastering', 'Free Releases', 'Affiliate Program'],
        },
        {
            title: 'Products',
            links: ['Events', 'Discography', 'Merchandising', 'Sample Packs'],
        },
    ],
    es: [
        {
            title: 'Sello Discográfico',
            links: ['Sobre nosotros', 'Artistas', 'Lanzamientos', 'Envía tu Demo'],
        },
        {
            title: 'Redes Sociales',
            links: ['Instagram', 'Soundcloud', 'Beatport', 'Bandcamp'],
        },
        {
            title: 'Servicios',
            links: [
                'Booking',
                'Mastering',
                'Lanzamientos gratuitos',
                'Programa de afiliados',
            ],
        },
        {
            title: 'Productos',
            links: ['Eventos', 'Discografía', 'Merchandising', 'Pack de Samples'],
        },
    ],
}

const currentYear = new Date().getFullYear()

function Footer({ isAdminLogin }) {
    const { t, i18n } = useTranslation()
    const language = i18n.language
    const sitemap = SITEMAP[language] || SITEMAP.en

    const footerClass = isAdminLogin ? 'admin-login-footer' : ''

    return (
        <footer className={`relative footer w-full ${footerClass}`}>
            <div className='mx-auto w-full max-w-7xl px-8 border-t border-blue-gray-50'>
                <div className='mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4'>
                    {sitemap.map(({ title, links }, key) => (
                        <div key={key} className='w-full'>
                            <Typography
                                variant='small'
                                color='white'
                                className='mb-4 font-bold uppercase opacity-50'
                            >
                                {t(title)}
                            </Typography>
                            <ul className='space-y-1'>
                                {links.map((link, key) => (
                                    <Typography
                                        key={key}
                                        as='li'
                                        color='white'
                                        className='font-normal'
                                    >
                                        <Link
                                            to={link}
                                            className='inline-block py-1 pr-2 transition-transform hover:scale-105'
                                        >
                                            {t(link)}
                                        </Link>
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
                        <a href='https://material-tailwind.com/'>
                            ATKL Records
                        </a>
                        . {t('All Rights Reserved.')}
                    </Typography>
                    <div className='flex gap-4 text-white sm:justify-center px-4'>
                        <Link to='https://www.instagram.com/atklrecords/' target='_blank' rel='noopener noreferrer'>
                            <i>
                                <FontAwesomeIcon icon={faInstagram} size='2x' />
                            </i>
                        </Link>
                        <Link to='https://soundcloud.com/atklrecords' target='_blank' rel='noopener noreferrer'>
                            <i>
                                <FontAwesomeIcon icon={faSoundcloud} size='2x' />
                            </i>
                        </Link>
                        <Link to='https://www.bandcamp.com/atklrecords' target='_blank' rel='noopener noreferrer'>
                            <i>
                                <FontAwesomeIcon icon={faBandcamp} size='2x' />
                            </i>
                        </Link>
                        <Link to='https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQyHvryaw' target='_blank' rel='noopener noreferrer'>
                            <i>
                                <FontAwesomeIcon icon={faYoutube} size='2x' />
                            </i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

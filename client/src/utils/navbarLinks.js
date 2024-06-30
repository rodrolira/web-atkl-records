const links = [
    { to: '/', text_en: 'Home', text_es: 'Inicio', id: 'home' },
    { to: '/artists', text_en: 'Artists', text_es: 'Artistas', id: 'artists' },
    {
        to: '/releases',
        text_en: 'Releases',
        text_es: 'Lanzamientos',
        id: 'releases',
    },
    { to: '/about', text_en: 'About', text_es: 'Nosotros', id: 'about' },
    {
        to: '/services',
        text_en: 'Services',
        text_es: 'Servicios',
        id: 'services',
    },
    { to: '/contact', text_en: 'Contact', text_es: 'Contacto', id: 'contact' },
    {
        to: '/discography',
        text_en: 'Discography',
        text_es: 'Discografía',
        authRequired: true,
    },
]

export default links

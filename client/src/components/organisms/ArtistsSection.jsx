// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import Title from '../atoms/Title'
import ArtistCard from './ArtistCard'
import { useAdminAuth } from '../../contexts/AuthContext'
import AddArtistButton from '../molecules/AddArtistButton'
import axios from 'axios'
import { PropTypes } from 'prop-types'
// Importa ArtistCard de forma dinámica usando lazy

function ArtistsSection() {
    const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()
    const [artists, setArtists] = useState([]) // Estado para almacenar la lista de artistas

    useEffect(() => {
        // Hace una solicitud GET al backend para obtener los artistas
        axios
            .get('http://localhost:3000/api/artists')
            .then((response) => {
                setArtists(response.data) // Actualiza el estado con los artistas obtenidos
            })
            .catch((error) => {
                console.error('Error fetching artists:', error)
            })
    }, []) // Se ejecuta una vez al montar el componente

    // Renderiza los artistas en la interfaz de usuario
    return (
        <div className="inline-block" id="artists">
            <div>
                <a href="/artists" className="mx-auto">
                    <Title>{language === 'en' ? 'Artists' : 'Artistas'}</Title>
                </a>
                {adminAuthenticated && (
                    <ul>
                        <li>
                            <AddArtistButton className="btn-add">
                                {language === 'en'
                                    ? 'Add Artist'
                                    : 'Agregar Artista'}
                            </AddArtistButton>
                        </li>
                    </ul>
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {artists.map((artist) => (
                    <ArtistCard
                        id={artist.id}
                        name={artist.name}
                        image={artist.image}
                        twitterUrl={artist.twitterUrl}
                        instagramUrl={artist.instagramUrl}
                        facebookUrl={artist.facebookUrl}
                        soundcloudUrl={artist.soundcloudUrl}
                        bandcampUrl={artist.bandcampUrl}
                    />
                ))}

                <ArtistCard
                    id={1}
                    name={language === 'en' ? 'RODRO' : 'RODRO'}
                    image="/img/avatar.jpg"
                    twitterUrl="https://twitter.com/"
                    instagramUrl="https://www.instagram.com/"
                    facebookUrl="https://www.facebook.com/"
                    soundcloudUrl="https://soundcloud.com/"
                    bandcampUrl="https://bandcamp.com/"
                />
                <ArtistCard
                    id={2}
                    name={language === 'en' ? 'Sweet_Hate' : 'Sweet_Hate'}
                    image="/img/avatar.jpg"
                    twitterUrl="https://twitter.com/"
                    instagramUrl="https://www.instagram.com/"
                    facebookUrl="https://www.facebook.com/"
                    soundcloudUrl="https://soundcloud.com/"
                    bandcampUrl="https://bandcamp.com"
                />
                <ArtistCard
                    id={3}
                    name={language === 'en' ? 'Abstracto' : 'Abstracto'}
                    image="/img/avatar.jpg"
                    twitterUrl="https://twitter.com/"
                    instagramUrl="https://www.instagram.com/"
                    facebookUrl="https://www.facebook.com/"
                    soundcloudUrl="https://soundcloud.com/"
                    bandcampUrl="https://bandcamp.com"
                />
                <ArtistCard
                    id={4}
                    name={language === 'en' ? 'DARKNOISE' : 'DARKNOISE'}
                    image="/img/avatar.jpg"
                    twitterUrl="https://twitter.com/"
                    instagramUrl="https://www.instagram.com/"
                    facebookUrl="https://www.facebook.com/"
                    soundcloudUrl="https://soundcloud.com/"
                    bandcampUrl="https://bandcamp.com"
                />
            </div>
        </div>
    )
}

export default ArtistsSection


// ArtistReleases.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { getArtistReleases } from '../../../api/artists'; // Importa la función para obtener los lanzamientos del artista

import Title from '../../atoms/Title';
import ReleaseCard from '../Release/ReleaseCard';

const ArtistReleases = ({ artist }) => {
    const { language } = useLanguage();
    const [releases, setReleases] = useState([]);

    useEffect(() => {
        if (artist) { // Verifica si artist está definido
            fetchArtistReleases();
        }
    }, [artist]); // Vuelve a cargar los lanzamientos cuando cambia el artista

    const fetchArtistReleases = async () => {
        try {
            const response = await getArtistReleases(artist.id); // Obtén los lanzamientos del artista por su ID
            console.log('Artist releases:', response.data); // Verifica la estructura de datos aquí

            setReleases(response.data);
        } catch (error) {
            console.error('Error fetching artist releases:', error);
        }
    };



    return (
        <div>
            <Title > Releases </Title>
            <div className=' p-4 text-white text-center'>
                {releases && releases.length > 0 ? (
                    releases.map((release) => (
                        <div key={release.id} className='mb-4'>
                            <ReleaseCard
                                title={release.title}
                                artist={release.artist}
                                cover_image_url={release.cover_image_url}
                                release_date={release.release_date}
                                is_explicit={release.is_explicit}
                                description={release.description}
                                genre_id={release.genre_id}
                                release_type={release.release_type}
                                bandcamp_link={release.bandcamp_link}
                                beatport_link={release.beatport_link}
                                spotify_link={release.spotify_link}
                                apple_music_link={release.apple_music_link}
                                youtube_link={release.youtube_link}
                                soundcloud_link={release.soundcloud_link}
                            />
                        </div>
                    ))
                ) : (
                    <p>{language === 'en' ? 'No releases available' : 'No hay releases disponibles'}</p>
                )}

            </div>
        </div>

    );
};

export default ArtistReleases;


// ArtistReleases.jsx
import React, { Suspense } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
const ReleasesPage = React.lazy(() => import('../ReleasesPage'));
import Title from '../../atoms/Title';

const ArtistReleases = ({ releases, artist }) => {
    const { language } = useLanguage();

    return (
        <div className='w-2/3 p-4 text-white text-center'>
            <Title>
                {language === 'en' ? 'Biography' : 'Biografía'}
            </Title>
            <p className='text-white'>
                {artist && artist.bio ? artist.bio :
                    (language === 'en'
                        ? 'No information available'
                        : 'No hay información disponible')}
            </p>
            {releases && releases.length > 0 ? (
                releases.map((release) => (
                    <div key={release.id} className='mb-4'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <ReleasesPage release={release} />
                        </Suspense>
                    </div>
                ))
            ) : (
                <p>{language === 'en' ? 'No releases available' : 'No hay releases disponibles'}</p>
            )}
        </div>
    );
};

export default ArtistReleases;

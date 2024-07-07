import React from 'react';
import * as Yup from 'yup';
import DialogManager from './DialogManager';
import ReleaseForm from './ReleaseForm';
import { useReleases } from '../../../contexts/ReleaseContext';
import useFetchArtists from '../../../hooks/useFetchArtists';
import useFetchGenres from '../../../hooks/useFetchGenres';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    release_date: Yup.date().required('Release date is required'),
    genre_id: Yup.number().required('Genre is required'),
    release_type: Yup.string().required('Release type is required'),
    artist_id: Yup.array().of(Yup.number().min(1, 'At least one artist is required')),
    bandcamp_link: Yup.string(),
    beatport_link: Yup.string(),
    spotify_link: Yup.string(),
    apple_music_link: Yup.string(),
    youtube_link: Yup.string(),
    soundcloud_link: Yup.string(),
    cover_image_url: Yup.mixed(),
    description: Yup.string(),
});

const AddReleaseForm = ({ onReleaseAdded }) => {
    const initialValues = {
        title: '',
        release_date: '',
        genre_id: '',
        release_type: '',
        bandcamp_link: '',
        beatport_link: '',
        spotify_link: '',
        apple_music_link: '',
        youtube_link: '',
        soundcloud_link: '',
        artist_id: [],
    };
    const artists = useFetchArtists();
    const genres = useFetchGenres();
    const { createRelease } = useReleases();

    const handleSubmit = async (values, actions) => {
        const formData = new FormData();
        for (const key in values) {
            if (key === 'artist_id') {
                values[key].forEach(id => formData.append(key, id));
            } else {
                formData.append(key, values[key]);
            }
        }

        try {
            const newRelease = await createRelease(formData);
            actions.setSubmitting(false);
            onReleaseAdded && onReleaseAdded(newRelease);
        } catch (error) {
            console.error('Error adding release:', error);
            actions.setSubmitting(false);
        }
    };

    return (
        <DialogManager>
            {(handleClose) => (
                <ReleaseForm
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    artists={artists}
                    genres={genres}
                    handleClose={handleClose}
                />
            )}
        </DialogManager>
    );
};

export default AddReleaseForm;

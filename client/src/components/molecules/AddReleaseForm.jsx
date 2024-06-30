import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    IconButton,
    MenuItem,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Button from '../atoms/Button'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FileUpload from './FileUpload'
import { useReleases } from '../../contexts/ReleaseContext' // Asegúrate de ajustar el contexto según sea necesario
import { useArtists } from '../../contexts/ArtistContext'
import { useGenres } from '../../contexts/GenreContext'
import FileUploadRelease from './FileUploadRelease'

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    releaseDate: Yup.date().required('Release date is required'),
    genreId: Yup.number().required('Genre is required'),
    releaseType: Yup.string().required('Release type is required'),
    artistIds: Yup.number().min(1, 'At least one artist is required'),
    // Agrega más validaciones según sea necesario
    bandcampLink: Yup.string(),
    beatportLink: Yup.string(),
    spotifyLink: Yup.string(),
    appleMusicLink: Yup.string(),
    youtubeLink: Yup.string(),
    soundcloudLink: Yup.string(),
})

const AddReleaseForm = ({ onReleaseAdded }) => {
    const [open, setOpen] = useState(false)
    const { createRelease } = useReleases() // Ajusta según el contexto de los releases
    const [error, setError] = useState(null)
    const { artists, fetchArtists } = useArtists() // Obtiene la lista de artistas y la función para obtenerlos
    const { genres, fetchGenres } = useGenres() // Obtiene la lista de géneros y la función para obtenerlos

    useEffect(() => {
        fetchArtists() // Carga la lista de artistas al montar el componente
        fetchGenres() // Carga la lista de géneros al montar el componente
    }, [])

    const openPopup = () => {
        setOpen(true)
    }

    const closePopup = () => {
        setOpen(false)
        setError(null)
    }

    const onSubmit = async (values, actions) => {
        const formData = new FormData()
        for (let key in values) {
            if (key === 'artistIds') {
                // Ensure artistIds is an array and convert to JSON string
                const artistIdsArray = Array.isArray(values[key])
                    ? values[key]
                    : [values[key]]
                formData.append(key, JSON.stringify(artistIdsArray))
            } else {
                formData.append(key, values[key])
            }
        }
        try {
            const newRelease = await createRelease(formData) // Llama al método para crear un release
            actions.setSubmitting(false)
            closePopup()
            if (onReleaseAdded) {
                onReleaseAdded(newRelease)
            }
        } catch (error) {
            console.error('Error adding release:', error)
            actions.setSubmitting(false)
            setError('Failed to add release')
        }
    }

    return (
        <>
            <Button
                onClick={openPopup}
                className={'btn-add mx-auto'}
                variant='contained'
            >
                Add Release
            </Button>
            <Dialog
                open={open}
                onClose={closePopup}
                fullWidth
                maxWidth='sm'
                PaperProps={{
                    sx: {
                        borderRadius: '0px',
                        margin: '0',
                        display: 'inline-flex',
                        flexDirection: 'column',
                        position: 'relative',
                        float: 'right',
                    },
                }}
                scroll='body'
            >
                <DialogTitle style={{ textAlign: 'center' }}>
                    Add Release
                </DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={{
                            title: '',
                            releaseDate: '',
                            isExplicit: false,
                            description: '',
                            genreId: '',
                            releaseType: '',
                            bandcampLink: '',
                            beatportLink: '',
                            spotifyLink: '',
                            appleMusicLink: '',
                            youtubeLink: '',
                            soundcloudLink: '',
                            artistIds: [],
                        }}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting, setFieldValue }) => (
                            <Form>
                                <Stack spacing={2} margin={2}>
                                    <Field name='title'>
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                label='Title'
                                                variant='outlined'
                                                error={
                                                    form.errors.title &&
                                                    form.touched.title
                                                }
                                                helperText={
                                                    form.errors.title &&
                                                    form.touched.title &&
                                                    form.errors.title
                                                }
                                            />
                                        )}
                                    </Field>
                                    <Field name='releaseDate'>
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                variant='outlined'
                                                type='date'
                                                error={
                                                    form.errors.releaseDate &&
                                                    form.touched.releaseDate
                                                }
                                                helperText={
                                                    form.errors.releaseDate &&
                                                    form.touched.releaseDate &&
                                                    form.errors.releaseDate
                                                }
                                            />
                                        )}
                                    </Field>
                                    <Field name='genreId'>
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                select
                                                label='Genre'
                                                variant='outlined'
                                                error={
                                                    form.errors.genreId &&
                                                    form.touched.genreId
                                                }
                                                helperText={
                                                    form.errors.genreId &&
                                                    form.touched.genreId &&
                                                    form.errors.genreId
                                                }
                                                onChange={e =>
                                                    setFieldValue(
                                                        'genreId',
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                {genres.map(genre => (
                                                    <MenuItem
                                                        key={genre.id}
                                                        value={genre.id}
                                                    >
                                                        {genre.name}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        )}
                                    </Field>
                                    <Field name='releaseType'>
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                label='Release Type'
                                                variant='outlined'
                                                error={
                                                    form.errors.releaseType &&
                                                    form.touched.releaseType
                                                }
                                                helperText={
                                                    form.errors.releaseType &&
                                                    form.touched.releaseType &&
                                                    form.errors.releaseType
                                                }
                                            />
                                        )}
                                    </Field>
                                    <Field name='artistIds'>
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                select
                                                label='Artists'
                                                variant='outlined'
                                                error={Boolean(
                                                    form.errors.artistIds &&
                                                        form.touched.artistIds
                                                )}
                                                helperText={
                                                    form.errors.artistIds &&
                                                    form.touched.artistIds &&
                                                    form.errors.artistIds
                                                }
                                                multiple
                                                onChange={e =>
                                                    setFieldValue(
                                                        'artistIds',
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                {artists.map(artist => (
                                                    <MenuItem
                                                        key={artist.id}
                                                        value={artist.id}
                                                    >
                                                        {artist.artistName}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        )}
                                    </Field>
                                    <FileUploadRelease />
                                    <Field name='bandcampLink'>
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label='Bandcamp Link'
                                                variant='outlined'
                                            />
                                        )}
                                    </Field>
                                    <Field name='beatportLink'>
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label='Beatport Link'
                                                variant='outlined'
                                            />
                                        )}
                                    </Field>
                                    <Field name='spotifyLink'>
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label='Spotify Link'
                                                variant='outlined'
                                            />
                                        )}
                                    </Field>
                                    <Field name='appleMusicLink'>
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label='Apple Music Link'
                                                variant='outlined'
                                            />
                                        )}
                                    </Field>
                                    <Field name='youtubeLink'>
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label='Youtube Link'
                                                variant='outlined'
                                            />
                                        )}
                                    </Field>
                                    <Field name='soundcloudLink'>
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label='Soundcloud Link'
                                                variant='outlined'
                                            />
                                        )}
                                    </Field>
                                    <Button
                                        className={'btn-add'}
                                        type='submit'
                                        variant='contained'
                                        color='success'
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Adding...' : 'Add'}
                                    </Button>
                                    {error && (
                                        <div style={{ color: 'red' }}>
                                            {error}
                                        </div>
                                    )}
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddReleaseForm

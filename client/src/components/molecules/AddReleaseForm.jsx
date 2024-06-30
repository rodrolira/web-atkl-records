import React, { useState } from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Button from '../atoms/Button'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FileUpload from './FileUpload'
import { useReleases } from '../../contexts/ReleaseContext' // Asegúrate de ajustar el contexto según sea necesario

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    releaseDate: Yup.date().required('Release date is required'),
    genre: Yup.string().required('Genre is required'),
    releaseType: Yup.string().required('Release type is required'),
    artistIds: Yup.array().min(1, 'At least one artist is required'),
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

    const openPopup = () => {
        setOpen(true)
    }

    const closePopup = () => {
        setOpen(false)
    }

    const onSubmit = async (values, actions) => {
        const formData = new FormData()
        for (let key in values) {
            if (key === 'artistIds') {
                formData.append(key, JSON.stringify(values[key]))
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
                            genre: '',
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
                        {({ isSubmitting }) => (
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
                                    <ErrorMessage
                                        name='title'
                                        component='div'
                                    />
                                    <Field name='releaseDate'>
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                label='Release Date'
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
                                    <ErrorMessage
                                        name='releaseDate'
                                        component='div'
                                    />
                                    <Field name='genre'>
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                label='Genre'
                                                variant='outlined'
                                                error={
                                                    form.errors.genre &&
                                                    form.touched.genre
                                                }
                                                helperText={
                                                    form.errors.genre &&
                                                    form.touched.genre &&
                                                    form.errors.genre
                                                }
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage
                                        name='genre'
                                        component='div'
                                    />
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
                                    <ErrorMessage
                                        name='releaseType'
                                        component='div'
                                    />
                                    <Field name='artistIds'>
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                label='Artist IDs (comma-separated)'
                                                variant='outlined'
                                                error={
                                                    form.errors.artistIds &&
                                                    form.touched.artistIds
                                                }
                                                helperText={
                                                    form.errors.artistIds &&
                                                    form.touched.artistIds &&
                                                    form.errors.artistIds
                                                }
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage
                                        name='artistIds'
                                        component='div'
                                    />
                                    <FileUpload />
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

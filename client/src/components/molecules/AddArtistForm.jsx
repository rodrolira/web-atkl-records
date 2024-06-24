import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    InputLabel,
    Stack,
    TextField,
    Button,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import React, { useState } from 'react'
// import Button from '../atoms/Button'
import { IconButton } from '@mui/material'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useArtists } from '../../contexts/ArtistContext'
// import { useForm } from 'react-hook-form'
import FileUpload from './FileUpload'
import ArtistCard from '../organisms/ArtistCard'

const validationSchema = Yup.object().shape({
    artistName: Yup.string().required('El nombre del artista es requerido'),
    username: Yup.string().required('El nombre de usuario es requerido'),
    email: Yup.string()
        .email('Correo electrónico inválido')
        .required('El correo electrónico es requerido'),
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('La contraseña es requerida'),
    // Agrega más validaciones para otros campos si es necesario
    bio: Yup.string(),
    image: Yup.mixed(),
    bandcampLink: Yup.string(),
    facebookLink: Yup.string(),
    instagramLink: Yup.string(),
    soundcloudLink: Yup.string(),
    twitterLink: Yup.string(),
    youtubeLink: Yup.string(),
    spotifyLink: Yup.string(),
})

const AddArtistForm = ({ onArtistAdded }) => {
    const [open, setOpen] = useState(false)
    const { createArtist } = useArtists() // Función para crear artistas desde el contexto
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
            formData.append(key, values[key])
        }
        try {
            const response = await createArtist(formData) // Llamada al contexto para crear un artista
            actions.resetForm() // Reinicia el formulario después de enviar
            closePopup()
            if (onArtistAdded) {
                onArtistAdded(response) // Llama a la función para manejar el nuevo artista agregado
            }
        } catch (error) {
            console.error('Error adding artist:', error)
            setError('Failed to add artist')
        }
    }

    return (
        <>
            <Button
                onClick={openPopup}
                className={'btn-add'}
                variant="contained"


            >
                Add Artist
            </Button>
            <Dialog
                open={open}
                onClose={closePopup}
                fullWidth
                maxWidth="sm"
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
                scroll="body"
            >
                <DialogTitle style={{ textAlign: 'center' }}>
                    {' '}
                    Add Artist{' '}
                    <IconButton style={{ float: 'right' }} onClick={closePopup}>
                        {' '}
                        <CloseIcon color="error"> </CloseIcon>
                    </IconButton>{' '}
                </DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={{
                            artistName: '',
                            username: '',
                            email: '',
                            password: '',
                            // Agrega más campos iniciales si es necesario
                            bio: '',
                            image: '',
                            bandcampLink: '',
                            facebookLink: '',
                            instagramLink: '',
                            soundcloudLink: '',
                            twitterLink: '',
                            youtubeLink: '',
                            spotifyLink: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Stack spacing={2} margin={2}>
                                    <Field name="artistName">
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                label="Artist Name"
                                                variant="outlined"
                                                error={
                                                    form.errors.artistName &&
                                                    form.touched.artistName
                                                }
                                                helperText={
                                                    form.errors.artistName &&
                                                    form.touched.artistName &&
                                                    form.errors.artistName
                                                }
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage
                                        name="artistName"
                                        component="div"
                                    />
                                    <Field name="username">
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                label="Username"
                                                variant="outlined"
                                                error={
                                                    form.errors.username &&
                                                    form.touched.username
                                                }
                                                helperText={
                                                    form.errors.username &&
                                                    form.touched.username &&
                                                    form.errors.username
                                                }
                                                autoComplete="off"
                                            />
                                        )}
                                    </Field>

                                    <Field name="email">
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                label="Email"
                                                variant="outlined"
                                                error={
                                                    form.errors.email &&
                                                    form.touched.email
                                                }
                                                helperText={
                                                    form.errors.email &&
                                                    form.touched.email &&
                                                    form.errors.email
                                                }
                                            />
                                        )}
                                    </Field>
                                    <Field name="password">
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                label="Password"
                                                variant="outlined"
                                                type="password"
                                                error={
                                                    form.errors.password &&
                                                    form.touched.password
                                                }
                                                helperText={
                                                    form.errors.password &&
                                                    form.touched.password &&
                                                    form.errors.password
                                                }
                                                autoComplete="current-password"
                                            />
                                        )}
                                    </Field>
                                    <FileUpload />
                                    <Field name="bandcampLink">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Bandcamp Link"
                                                variant="outlined"
                                            />
                                        )}
                                    </Field>
                                    <Field name="facebookLink">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Facebook Link"
                                                variant="outlined"
                                            />
                                        )}
                                    </Field>
                                    <Field name="instagramLink">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Instagram Link"
                                                variant="outlined"
                                            />
                                        )}
                                    </Field>
                                    <Field name="soundcloudLink">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Soundcloud Link"
                                                variant="outlined"
                                            />
                                        )}
                                    </Field>
                                    <Field name="twitterLink">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Twitter Link"
                                                variant="outlined"
                                            />
                                        )}
                                    </Field>
                                    <Field name="youtubeLink">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Youtube Link"
                                                variant="outlined"
                                            />
                                        )}
                                    </Field>
                                    <Field name="spotifyLink">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Spotify Link"
                                                variant="outlined"
                                            />
                                        )}
                                    </Field>{' '}
                                    <Button
                                        className={'btn-add'}
                                        type="submit"
                                        variant="contained"
                                        color="success"
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
                <DialogActions>
                    <IconButton onClick={closePopup}>
                        <CloseIcon />
                    </IconButton>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddArtistForm

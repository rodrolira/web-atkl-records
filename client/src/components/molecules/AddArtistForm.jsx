import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    InputLabel,
    Stack,
    TextField,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import React, { useState } from 'react'
import ButtonComponent from '../atoms/Button'
import { IconButton } from '@mui/material'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useArtists } from '../../contexts/ArtistContext'
// import { useForm } from 'react-hook-form'
import FileUpload from './FileUpload';

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
    // const { register, handleSubmit, errors } = useForm()
    const [open, setOpen] = useState(false)
    const { createArtist } = useArtists()

    const functionOpenPopup = () => {
        setOpen(true)
    }
    const closePopup = () => {
        setOpen(false)
    }


    const onSubmit = async (values, actions) => {
        console.log('Submitting values:', values)
        const formData = new FormData()
        for (let key in values) {
            formData.append(key, values[key])
        }
        try {
            const newArtist = await createArtist(formData)
            actions.setSubmitting(false)
            closePopup()

            // Llama a la función onArtistAdded si está definida
            if (onArtistAdded) {
                onArtistAdded(newArtist) // Pasa el nuevo artista como argumento si es necesario
            }
        } catch (error) {
            console.error('Error adding artist:', error)
            actions.setSubmitting(false)
        }
    }

    return (
        <>
            <ButtonComponent
                onClick={functionOpenPopup}
                className={'btn-add'}
                variant="contained"
            >
                Add Artist
            </ButtonComponent>
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
                                    <ErrorMessage
                                        name="username"
                                        component="div"
                                    />
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
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                    />
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
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                    />
                                    {/* <InputLabel>
                                        {' '}
                                        Upload Profile Image{' '}
                                    </InputLabel>
                                    <Field name="image">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                helperText="Upload Profile Image"
                                                type="file"
                                                name="image"
                                                id="image"
                                                variant="outlined"
                                                style={{ marginTop: '0px' }}
                                            ></TextField>
                                        )}
                                    </Field> */}
                                    <FileUpload/>
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
                                        type="submit"
                                        variant="contained"
                                        color="success"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Adding...' : 'Add'}
                                    </Button>
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
        </>
    )
}

export default AddArtistForm

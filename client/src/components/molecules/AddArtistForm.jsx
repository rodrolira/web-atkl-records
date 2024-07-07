import {
    // Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import React, { useState } from 'react'
import Button from '../atoms/Button'
import { IconButton } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useArtists } from '../../contexts/ArtistContext'
import FileUpload from './FileUpload'
import { ButtonGroup } from 'react-bootstrap'

const validationSchema = Yup.object().shape({
    artist_name: Yup.string().required('El nombre del artista es requerido'),
    username: Yup.string().required('El nombre de usuario es requerido'),
    email: Yup.string()
        .email('Correo electrónico inválido')
        .required('El correo electrónico es requerido'),
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('La contraseña es requerida'),
    bio: Yup.string(),
    image: Yup.mixed(),
    role: Yup.string().required('El rol es requerido'),
    bandcamp_link: Yup.string(),
    facebook_link: Yup.string(),
    instagram_link: Yup.string(),
    soundcloud_link: Yup.string(),
    twitterLink: Yup.string(),
    youtube_link: Yup.string(),
    spotify_link: Yup.string(),
    beatport_link: Yup.string(),
    apple_music_link: Yup.string(),

})

const AddArtistForm = ({ onArtistAdded }) => {
    const [open, setOpen] = useState(false)
    const { createArtist } = useArtists()
    const [error, setError] = useState(null)

    const openPopup = () => setOpen(true)
    const closePopup = () => setOpen(false)

    const onSubmit = async (values, actions) => {
        console.log('Submitting values:', values)
        const formData = new FormData()
        Object.keys(values).forEach(key => {
            console.log(`Appending ${key}: ${values[key]}`)
            formData.append(key, values[key])
        })

        try {
            const newArtist = await createArtist(formData)
            actions.setSubmitting(false)
            closePopup()
            onArtistAdded && onArtistAdded(newArtist)
        } catch (error) {
            console.error('Error adding artist:', error)
            setError('Failed to add artist')
            actions.setSubmitting(false)
        }
    }

    const renderField = (name, label, type = 'text', autoComplete = 'on') => (
        <Field name={name}>
            {({ field, form }) => (
                <TextField
                    {...field}
                    label={label}
                    variant='outlined'
                    type={type}
                    autoComplete={autoComplete}
                    error={form.errors[name] && form.touched[name]}
                    helperText={form.errors[name] && form.touched[name] && form.errors[name]}
                />
            )}
        </Field>
    )

    return (
        <>
            <Button onClick={openPopup} className='btn-add mx-auto' variant='contained'>
                Add Artist
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
                    Add Artist
                    <IconButton style={{ float: 'right' }} onClick={closePopup}>
                        <CloseIcon color='error' />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={{
                            artist_name: '',
                            username: '',
                            email: '',
                            password: '',
                            bio: '',
                            image: '',
                            role: '',
                            bandcamp_link: '',
                            facebook_link: '',
                            instagram_link: '',
                            soundcloud_link: '',
                            twitterLink: '',
                            youtube_link: '',
                            spotify_link: '',
                            beatport_link: '',

                        }}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Stack spacing={2} margin={2}>
                                    {renderField('artist_name', 'Artist Name')}
                                    {renderField('username', 'Username')}
                                    {renderField('email', 'Email')}
                                    {renderField('password', 'Password', 'password', 'current-password')}
                                    <FileUpload />
                                    <Field name='role'>
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                label='Role'
                                                variant='outlined'
                                                select
                                                error={form.errors.role && form.touched.role}
                                                helperText={form.errors.role && form.touched.role && form.errors.role}
                                                SelectProps={{ native: true }}
                                            >
                                                <option value=''></option>
                                                <option value='DJ'>DJ</option>
                                                <option value='Producer'>Producer</option>
                                            </TextField>
                                        )}
                                    </Field>
                                    {renderField('bio', 'Bio')}
                                    {renderField('bandcamp_link', 'Bandcamp Link')}
                                    {renderField('beatport_link', 'Beatport Link')}
                                    {renderField('facebook_link', 'Facebook Link')}
                                    {renderField('instagram_link', 'Instagram Link')}
                                    {renderField('soundcloud_link', 'Soundcloud Link')}
                                    {renderField('twitterLink', 'Twitter Link')}
                                    {renderField('youtube_link', 'Youtube Link')}
                                    {renderField('spotify_link', 'Spotify Link')}
                                    {renderField('apple_music_link', 'Apple Music Link')}

                                    <Button
                                        className='btn-add'
                                        type='submit'
                                        variant='contained'
                                        color='success'
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Adding...' : 'Add'}
                                    </Button>
                                    {error && <div style={{ color: 'red' }}>{error}</div>}
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddArtistForm

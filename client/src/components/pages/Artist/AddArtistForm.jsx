import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    IconButton,
    MenuItem,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Button from '../../atoms/Button'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useArtists } from '../../../contexts/ArtistContext'
import FileUpload from '../../molecules/FileUpload'
import { getRolesRequest } from '../../../api/artists'

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
    role: Yup.array().of(Yup.string()).required('Role is required'),
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
    const [roles, setRoles] = useState([])
    const [error, setError] = useState(null)
    const { createArtist } = useArtists()

    const openPopup = () => setOpen(true)
    const closePopup = () => setOpen(false)

    const onSubmit = async (values, actions) => {
                // Formatear roles seleccionados con "/"
        const formattedRoles = Array.isArray(values.role)
            ? values.role.join(' / ')
            : values.role

        const formData = new FormData()
        Object.keys(values).forEach(key => {
            formData.append(key, values[key])
        })
        // Añadir roles formateados al FormData
        formData.set('role', formattedRoles)

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

    // Lógica para obtener los roles
    useEffect(() => {
        // Función para obtener los roles desde la API
        const fetchRoles = async () => {
            try {
                const response = await getRolesRequest()
                setRoles(response.data)
            } catch (error) {
                console.error('Error fetching roles:', error)
            }
        }

        fetchRoles()
    }, [])

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
                            role: [],
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
                                    <Field
                                        as='select'
                                        multiple
                                        id='role'
                                        name='role'
                                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    >
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                variant='outlined'
                                                select
                                                error={form.errors.role && form.touched.role}
                                                helperText={form.errors.role && form.touched.role && form.errors.role}
                                                SelectProps={{
                                                    native: true,
                                                    multiple: true,
                                                }}

                                            >
                                                <option value='' disabled >Select Role</option>
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

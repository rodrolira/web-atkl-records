import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    IconButton,
<<<<<<< HEAD
    FormControl,
    InputLabel,
    Select,
=======
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
    MenuItem,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Button from '../../atoms/Button'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useArtists } from '../../../contexts/ArtistContext'
import FileUpload from '../../molecules/FileUpload'
import { getRolesRequest } from '../../../api/artists'
<<<<<<< HEAD
import { useTranslation } from 'react-i18next'

const AddArtistForm = ({ onArtistAdded }) => {
    const { t } = useTranslation()
=======

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
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
    const [open, setOpen] = useState(false)
    const [roles, setRoles] = useState([])
    const [error, setError] = useState(null)
    const { createArtist } = useArtists()

    const openPopup = () => setOpen(true)
    const closePopup = () => setOpen(false)

    const onSubmit = async (values, actions) => {
<<<<<<< HEAD
        const formData = new FormData()
        Object.keys(values).forEach(key => {
            if (key === 'roleIds') {
                formData.append(key, values[key].join(','))
            } else {
                formData.append(key, values[key])
            }
        })
=======
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
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96

        try {
            const newArtist = await createArtist(formData)
            actions.setSubmitting(false)
            closePopup()
            onArtistAdded && onArtistAdded(newArtist)
        } catch (error) {
            console.error('Error adding artist:', error)
<<<<<<< HEAD
            setError(t('error.addArtist'))
=======
            setError('Failed to add artist')
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
            actions.setSubmitting(false)
        }
    }

<<<<<<< HEAD
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await getRolesRequest()
                if (response && response.data) {
                    setRoles(response.data)
                } else {
                    console.error('Unexpected response format:', response)
                }
=======
    // Lógica para obtener los roles
    useEffect(() => {
        // Función para obtener los roles desde la API
        const fetchRoles = async () => {
            try {
                const response = await getRolesRequest()
                setRoles(response.data)
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
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
<<<<<<< HEAD
                    label={t(label)}
=======
                    label={label}
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
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
<<<<<<< HEAD
                {t('addArtist.title')}
=======
                Add Artist
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
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
<<<<<<< HEAD
                    {t('addArtist.title')}
=======
                    Add Artist
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
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
<<<<<<< HEAD
                            roleIds: [], // Initialize as an empty array for multiple selection
=======
                            role: [],
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
                            bandcamp_link: '',
                            facebook_link: '',
                            instagram_link: '',
                            soundcloud_link: '',
<<<<<<< HEAD
                            twitter_link: '',
                            youtube_link: '',
                            spotify_link: '',
                            beatport_link: '',
                            apple_music_link: '',
                        }}
                        validationSchema={Yup.object().shape({
                            artist_name: Yup.string().required(t('addArtist.validation.artistNameRequired')),
                            username: Yup.string().required(t('addArtist.validation.usernameRequired')),
                            email: Yup.string()
                                .email(t('addArtist.validation.invalidEmail'))
                                .required(t('addArtist.validation.emailRequired')),
                            password: Yup.string()
                                .min(6, t('addArtist.validation.passwordMin'))
                                .required(t('addArtist.validation.passwordRequired')),
                            bio: Yup.string(),
                            image: Yup.mixed(),
                            roleIds: Yup.array().of(Yup.string()).required(t('addArtist.validation.roleRequired')),
                            bandcamp_link: Yup.string(),
                            facebook_link: Yup.string(),
                            instagram_link: Yup.string(),
                            soundcloud_link: Yup.string(),
                            twitter_link: Yup.string(),
                            youtube_link: Yup.string(),
                            spotify_link: Yup.string(),
                            beatport_link: Yup.string(),
                            apple_music_link: Yup.string(),
                        })}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting, setFieldValue, values }) => (
                            <Form>
                                <Stack spacing={2} margin={2}>
                                    {renderField('artist_name', 'artistName')}
                                    {renderField('username', 'username')}
                                    {renderField('email', 'email')}
                                    {renderField('password', 'password', 'password', 'current-password')}
                                    <FileUpload />
                                    <FormControl fullWidth variant='outlined'>
                                        <InputLabel>{t('addArtist.selectRole')}</InputLabel>
                                        <Field name='roleIds'>
                                            {({ field, form }) => (
                                                <Select
                                                    {...field}
                                                    multiple
                                                    label={t('addArtist.selectRole')}
                                                    onChange={(event) => setFieldValue('roleIds', event.target.value)}
                                                    value={values.roleIds}
                                                    error={form.errors.roleIds && form.touched.roleIds}
                                                    renderValue={(selected) => selected.join(' / ')}
                                                >
                                                    {roles.map((role) => (
                                                        <MenuItem key={role.id} value={role.label}>
                                                            {role.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            )}
                                        </Field>
                                    </FormControl>

                                    <Stack spacing={1}>
                                        <TextField
                                            label={t('addArtist.bio')}
                                            name='bio'
                                            multiline
                                            rows={4}
                                            variant='outlined'
                                        />
                                    </Stack>
                                    <Stack spacing={2}>
                                        {['bandcamp_link', 'facebook_link', 'instagram_link', 'soundcloud_link', 'twitter_link', 'youtube_link', 'spotify_link', 'beatport_link', 'apple_music_link'].map((linkField, index) => (
                                            <Field key={index} name={linkField}>
                                                {({ field, form }) => (
                                                    <TextField
                                                        {...field}
                                                        label={t(linkField)}
                                                        variant='outlined'
                                                        error={form.errors[linkField] && form.touched[linkField]}
                                                        helperText={form.errors[linkField] && form.touched[linkField] && form.errors[linkField]}
                                                    />
                                                )}
                                            </Field>
                                        ))}
                                    </Stack>
                                    {error && <div className='text-red-500'>{error}</div>}
                                    <Button type='submit' disabled={isSubmitting} variant='contained' className='btn-add mx-auto flex justify-center'>
                                        {t('submit')}
                                    </Button>
=======
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
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
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

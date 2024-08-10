import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Button from '../../atoms/Button'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useArtists } from '../../../contexts/ArtistContext'
import FileUpload from '../../molecules/FileUpload'
import { getRolesRequest } from '../../../api/artists'
import { useTranslation } from 'react-i18next'

const AddArtistForm = ({ onArtistAdded }) => {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)
    const [roles, setRoles] = useState([])
    const [error, setError] = useState(null)
    const { createArtist } = useArtists()

    const openPopup = () => setOpen(true)
    const closePopup = () => setOpen(false)

    const onSubmit = async (values, actions) => {
        const formattedRoles = Array.isArray(values.role)
            ? values.role.join(' / ')
            : values.role

        const formData = new FormData()
        Object.keys(values).forEach(key => {
            formData.append(key, values[key])
        })
        formData.set('role', formattedRoles)

        try {
            const newArtist = await createArtist(formData)
            actions.setSubmitting(false)
            closePopup()
            onArtistAdded && onArtistAdded(newArtist)
        } catch (error) {
            console.error('Error adding artist:', error)
            setError(t('error.addArtist'))
            actions.setSubmitting(false)
        }
    }

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await getRolesRequest()
                if (response && response.data) {
                setRoles(response.data) // Ensure roles are objects
            } else {
                console.error('Unexpected response format:', response)
            }
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
                    label={t(label)}
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
                {t('addArtist.title')}
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
                    {t('addArtist.title')}
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
                            role: Yup.array().of(Yup.string()).required(t('addArtist.validation.roleRequired')),
                            bandcamp_link: Yup.string(),
                            facebook_link: Yup.string(),
                            instagram_link: Yup.string(),
                            soundcloud_link: Yup.string(),
                            twitterLink: Yup.string(),
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
                                        <Field name='role'>
                                            {({ field, form }) => (
                                                <Select
                                                    {...field}
                                                    multiple
                                                    label={t('addArtist.selectRole')}
                                                    onChange={(event) => setFieldValue('role', event.target.value)}
                                                    value={values.role}
                                                    error={form.errors.role && form.touched.role}
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
                                    <Button type='submit' disabled={isSubmitting} variant='contained' className='btn-add mx-auto flex justify-center' >
                                        {t('submit')}
                                    </Button>
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

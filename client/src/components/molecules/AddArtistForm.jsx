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
import { useState } from 'react'
import ButtonComponent from '../atoms/Button'
import { IconButton } from '@mui/material'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik'
import * as Yup from 'yup'
import { useArtists } from '../../contexts/ArtistContext'
import { useForm } from 'react-hook-form'

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
})

const AddArtistForm = () => {
    const { register, handleSubmit, errors } = useForm()
    const [open, setOpen] = useState(false)
    const { createArtist } = useArtists()

    const functionOpenPopup = () => {
        setOpen(true)
    }
    const closePopup = () => {
        setOpen(false)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = async (values, actions) => {
        console.log('Submitting values:', values)
        try {
            await createArtist(values)
            actions.setSubmitting(false)
            closePopup()
        } catch (error) {
            console.error(error)
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
                                                autoComplete="auto"
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
                                    <InputLabel>
                                        {' '}
                                        Upload Profile Image{' '}
                                    </InputLabel>
                                    <TextField
                                        helperText="Upload Profile Image"
                                        type="file"
                                        name="image"
                                        id="image"
                                        variant="outlined"
                                        style={{ marginTop: '0px' }}
                                    ></TextField>
                                    <TextField
                                        label="Artist Bio"
                                        variant="outlined"
                                    ></TextField>
                                    <TextField
                                        label="Bandcamp Link"
                                        variant="outlined"
                                    ></TextField>
                                    <TextField
                                        label="Facebook Link"
                                        variant="outlined"
                                    ></TextField>
                                    <TextField
                                        label="Instagram Link"
                                        variant="outlined"
                                    ></TextField>
                                    <TextField
                                        label="Soundcloud Link"
                                        variant="outlined"
                                    ></TextField>
                                    <TextField
                                        label="Twitter Link"
                                        variant="outlined"
                                    ></TextField>
                                    <TextField
                                        label="Youtube Link"
                                        variant="outlined"
                                    ></TextField>
                                    <TextField
                                        label="Spotify Link"
                                        variant="outlined"
                                    ></TextField>
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

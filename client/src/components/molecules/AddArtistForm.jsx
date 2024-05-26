import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  Stack,
  TextField
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import ButtonComponent from '../atoms/Button'
import { IconButton } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  artistName: Yup.string().required('El nombre del artista es requerido'),
  username: Yup.string().required('El nombre de usuario es requerido'),
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es requerida')
  // Agrega más validaciones para otros campos si es necesario
})

const AddArtistForm = () => {
  const [open, setOpen] = useState(false)

  const functionOpenPopup = () => {
    setOpen(true)
  }
  const closePopup = () => {
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <ButtonComponent
        onClick={functionOpenPopup}
        className={'btn-add'}
        variant='contained'
      >
        Add Artist
      </ButtonComponent>
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
            float: 'right'
          }
        }}
        scroll='body'
      >
        <DialogTitle style={{ textAlign: 'center' }}>
          {' '}
          Add Artist{' '}
          <IconButton style={{ float: 'right' }} onClick={closePopup}>
            {' '}
            <CloseIcon color='error'> </CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              artistName: '',
              username: '',
              email: '',
              password: ''
              // Agrega más campos iniciales si es necesario
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Envía los datos del formulario al backend para procesarlos
              fetch('http://localhost:4000/api/artists', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
              })
                .then(response => response.json())
                .then(data => {
                  console.log('Success:', data)
                  setSubmitting(false)
                  handleClose()
                })
                .catch(error => {
                  console.error('Error:', error)
                  setSubmitting(false)
                })
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack spacing={2} margin={2}>
                  <Field name='artistName'>
                    {({ field, form }) => (
                      <TextField
                        {...field}
                        label='Artist Name'
                        variant='outlined'
                        error={
                          form.errors.artistName && form.touched.artistName
                        }
                        helperText={
                          form.errors.artistName &&
                          form.touched.artistName &&
                          form.errors.artistName
                        }
                      />
                    )}
                  </Field>
                  <Field name='username'>
                    {({ field, form }) => (
                      <TextField
                        {...field}
                        label='Username'
                        variant='outlined'
                        error={form.errors.username && form.touched.username}
                        helperText={
                          form.errors.username &&
                          form.touched.username &&
                          form.errors.username
                        }
                      />
                    )}
                  </Field>

                  <Field name='email'>
                    {({ field, form }) => (
                      <TextField
                        {...field}
                        label='Email'
                        variant='outlined'
                        error={form.errors.email && form.touched.email}
                        helperText={
                          form.errors.email &&
                          form.touched.email &&
                          form.errors.email
                        }
                      />
                    )}
                  </Field>


                  <Field name='password'>
                    {({ field, form }) => (
                      <TextField
                        {...field}
                        label='Password'
                        variant='outlined'
                        type='password'
                        error={form.errors.password && form.touched.password}
                        helperText={
                          form.errors.password &&
                          form.touched.password &&
                          form.errors.password
                        }
                      />
                    )}
                  </Field>
                  <InputLabel> Upload Profile Image </InputLabel>
                  <TextField
                    helperText='Upload Profile Image'
                    type='file'
                    name='image'
                    id='image'
                    variant='outlined'
                    style={{ marginTop: '0px' }}
                  ></TextField>
                  <TextField label='Artist Bio' variant='outlined'></TextField>
                  <TextField
                    label='Bandcamp Link'
                    variant='outlined'
                  ></TextField>
                  <TextField
                    label='Facebook Link'
                    variant='outlined'
                  ></TextField>
                  <TextField
                    label='Instagram Link'
                    variant='outlined'
                  ></TextField>
                  <TextField
                    label='Soundcloud Link'
                    variant='outlined'
                  ></TextField>
                  <TextField
                    label='Twitter Link'
                    variant='outlined'
                  ></TextField>
                  <TextField
                    label='Youtube Link'
                    variant='outlined'
                  ></TextField>
                  <TextField
                    label='Spotify Link'
                    variant='outlined'
                  ></TextField>
                  <Button
                    type='submit'
                    variant='contained'
                    color='success'
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

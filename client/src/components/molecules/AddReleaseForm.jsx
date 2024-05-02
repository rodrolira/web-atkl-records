import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import ButtonComponent from '../atoms/Button'

const validationSchema = Yup.object().shape({
  title: Yup.string().required('El título del lanzamiento es requerido'),
  releaseYear: Yup.number().required('El año de lanzamiento es requerido'),
  artist: Yup.string().required('El artista es requerido')
  // Agrega más validaciones para otros campos si es necesario
})

const AddReleaseForm = () => {
  const [open, setOpen] = useState(false)

  const openPopup = () => {
    setOpen(true)
  }

  const closePopup = () => {
    setOpen(false)
  }

  return (
    <>
      <ButtonComponent
        onClick={openPopup}
        variant='contained'
        className={'btn-add'}
      >
        Add Release
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
          Add Release
          <IconButton style={{ float: 'right' }} onClick={closePopup}>
            {' '}
            <CloseIcon color='error'> </CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              title: '',
              releaseYear: '',
              artist: '',
              genre: '',
              buyLink: ''
              // Agrega más campos iniciales si es necesario
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Envía los datos del formulario al backend para procesarlos
              fetch('http://localhost:3000/api/releases', {
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
                  setOpen(false)
                })
                .catch(error => {
                  console.error('Error:', error)
                  setSubmitting(false)
                })
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack spacing={2}>
                  <Field name='title'>
                    {({ field, form }) => (
                      <TextField
                        {...field}
                        label='Title'
                        variant='outlined'
                        error={form.errors.title && form.touched.title}
                        helperText={
                          form.errors.title &&
                          form.touched.title &&
                          form.errors.title
                        }
                      />
                    )}
                  </Field>
                  <ErrorMessage name='title' component='div' />
                  <Field name='releaseYear'>
                    {({ field, form }) => (
                      <TextField
                        {...field}
                        label='Release Year'
                        variant='outlined'
                        type='number'
                        error={
                          form.errors.releaseYear && form.touched.releaseYear
                        }
                        helperText={
                          form.errors.releaseYear &&
                          form.touched.releaseYear &&
                          form.errors.releaseYear
                        }
                      />
                    )}
                  </Field>
                  <ErrorMessage name='releaseYear' component='div' />
                  <InputLabel>Artist</InputLabel>
                  <Field name='artist'>
                    {({ field, form }) => (
                      <Select
                        {...field}
                        label='Artist'
                        variant='outlined'
                        error={form.errors.artist && form.touched.artist}
                        helperText={
                          form.errors.artist &&
                          form.touched.artist &&
                          form.errors.artist
                        }
                      >
                        {/* Opciones de artistas obtenidas de la base de datos */}
                        <MenuItem value='artist1'>Artist 1</MenuItem>
                        <MenuItem value='artist2'>Artist 2</MenuItem>
                        {/* Agrega más opciones según sea necesario */}
                      </Select>
                    )}
                  </Field>
                  <ErrorMessage name='artist' component='div' />
                  <Field name='genre'>
                    {({ field, form }) => (
                      <TextField
                        {...field}
                        label='Genre'
                        variant='outlined'
                        error={form.errors.genre && form.touched.genre}
                        helperText={
                          form.errors.genre &&
                          form.touched.genre &&
                          form.errors.genre
                        }
                      />
                    )}
                  </Field>
                  <ErrorMessage name='genre' component='div' />
                  <Field name='buyLink'>
                    {({ field, form }) => (
                      <TextField
                        {...field}
                        label='Buy Link'
                        variant='outlined'
                        error={form.errors.buyLink && form.touched.buyLink}
                        helperText={
                          form.errors.buyLink &&
                          form.touched.buyLink &&
                          form.errors.buyLink
                        }
                      />
                    )}
                  </Field>
                  <ErrorMessage name='buyLink' component='div' />
                  <InputLabel> Upload Cover Image </InputLabel>
                  <TextField
                    helperText='Upload Cover Image'
                    type='file'
                    variant='outlined'
                    style={{ marginTop: '0px' }}
                  ></TextField>
                  {/* Agrega más campos de formulario según sea necesario */}
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Adding...' : 'Add'}
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={closePopup} color='secondary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddReleaseForm

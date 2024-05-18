import React, { lazy, Suspense } from 'react' // Importa lazy y Suspense
import { Box } from '@mui/material'
import MainLayout from '../../layouts/MainLayout'
import AdminSignin from '../templates/AdminSignin'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

const AdminLoginForm = () => {
  return (
    <MainLayout>
      {' '}
      {/* Agrega el MainLayout alrededor del Login */}
      <Box
        sx={{
          width: {
            sm: '90vw',
            xs: '90vw',
            md: '60vw',
            lg: '60vw',
            xl: '60vw'
          },
          marginBottom: '100px',
          margin: '100px'
        }}
      >
        {/* GRID SYSTEM */}
        <Grid
          container
          height='90vh'
          justifyContent='center'
          alignItems='center'
        >
          <AdminSignin />

          {/* Reemplaza el formulario por el componente Login */}
        </Grid>
        {/* GRID SYSTEM END */}
      </Box>
    </MainLayout>
  )
}

export default AdminLoginForm

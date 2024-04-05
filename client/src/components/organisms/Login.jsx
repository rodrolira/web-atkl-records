import React, { lazy, Suspense } from 'react' // Importa React, lazy y Suspense
import MainLayout from '../../layouts/MainLayout'
import { Box, Grid } from '@mui/material'

// Importa SigninPage y TitleBox usando importación dinámica
const SigninPage = lazy(() => import('../templates/SigninPage'))
const TitleBox = lazy(() => import('../TitleBox'))

const Login = () => {
  return (
    <MainLayout>
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
        <Grid
          container
          height='90vh'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={12} sm={6}>
            <Suspense fallback={<div>Loading...</div>}>
              <SigninPage /> {/* Renderiza SigninPage dentro de Suspense */}
            </Suspense>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Suspense fallback={<div>Loading...</div>}>
              <TitleBox /> {/* Renderiza TitleBox dentro de Suspense */}
            </Suspense>
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  )
}

export default Login

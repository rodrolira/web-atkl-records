import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import SigninPage from '../templates/SigninPage'
import { Box, Grid } from '@mui/material'
import TitleBox from '../TitleBox';

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
            <SigninPage />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TitleBox />
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  )
}

export default Login

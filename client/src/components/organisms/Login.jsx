import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import SigninPage from '../templates/SigninPage'
import TitleBox from '../TitleBox'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'

const Login = () => {
  return (
    <div>
      <form action='/login/password' method='post'>
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
            {/* GRID SYSTEM */}
            <Grid container height='90vh'>
              <SigninPage />

              <TitleBox />
            </Grid>
            {/* GRID SYSTEM END */}
          </Box>
        </MainLayout>
      </form>
    </div>
  )
}

export default Login

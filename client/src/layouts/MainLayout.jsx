import React from 'react'
import { Box, ThemeProvider } from '@mui/material'
import { theme } from '../theme'
import bgImage from '../bg.png' // Importa la imagen de fondo

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'darken',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          height: '150vh',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  )
}

export default MainLayout

import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from '../theme';
import bgImage from '../bg.png'; // Importa la imagen de fondo en formato PNG
import bgWebpImage from '../bg.webp'; // Importa la imagen de fondo en formato WebP

/**
 * Renders the main layout with a specified theme and background image.
 *
 * @param {Object} children - The elements to be rendered within the layout.
 * @return {JSX.Element} The main layout component.
 */
const MainLayout = ({ children }) => {
  // Determina si el navegador admite el formato webp
  const supportsWebp = (() => {
    try {
      return (
        document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
      );
    } catch (error) {
      return false;
    }
  })();

  // Usa la imagen de fondo adecuada según la compatibilidad del navegador
  const backgroundImage = supportsWebp ? bgWebpImage : bgImage;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'darken',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          height: '180vh',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;

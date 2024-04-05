import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext' // Importa el hook useLanguage
import { Box, Button, Checkbox, colors, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import CustomInput from '../atoms/CustomInput'
import Logo from '../atoms/Logo'
import { useNavigate } from 'react-router-dom'

const AdminSignin = () => {
  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:5174/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      if (!response.ok) {
        throw new Error('Error de inicio de sesión')
      }

      // Redirige al usuario a la página de inicio
      navigate('/')
    } catch (error) {
      console.error('Error during login:', error)
    }
  }

  return (
    <Grid
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      minHeight={550}
      sx={{
        boxShadow: {
          xs: '',
          sm: '',
          md: '15px 2px 5px -5px',
          lg: '15px 2px 5px -5px',
          xl: '15px 2px 5px -5px'
        },
        marginTop: {
          xs: '0px',
          sm: '0px',
          md: '100px',
          lg: '100px',
          xl: '100px'
        }
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
          borderRadius: {
            xs: '30px',
            sm: '30px',
            md: '30px 0 0 30px',
            lg: '30px 0 0 30px',
            xl: '30px 0 0 30px'
          }
        }}
      >
        <Box width='80%'>
          <Box display='flex' flexDirection='column' alignItems='center'>
            {/* LOGO */}
            <Box
              sx={{
                mt: '60px',
                width: '150px',
                height: '150px',
                bgcolor: 'black',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Logo />
            </Box>
            {/* LOGO END */}

            <Typography
              color='white'
              fontSize='24px'
              fontWeight='bold'
              mt={7}
              mb={3}
            >
              {language === 'en'
                ? 'Admin Sign in'
                : 'Inicia Sesión de Administrador'}
            </Typography>
          </Box>

          {/* FORM */}
          <form onSubmit={handleSubmit}>
            <CustomInput
              label={language === 'en' ? 'Username' : 'Nombre de usuario'}
              placeholder={
                language === 'en'
                  ? 'Enter your username...'
                  : 'Ingrese su nombre de usuario...'
              }
              name='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
              isIconActive={false}
              text-align='center'
              mx='auto'
            />

            <CustomInput
              label={language === 'en' ? 'Email' : 'Email'}
              placeholder={
                language === 'en'
                  ? 'Enter your email...'
                  : 'Ingrese su email...'
              }
              isIconActive={true}
            />

            <CustomInput
              label={language === 'en' ? 'Password' : 'Contraseña'}
              placeholder={
                language === 'en'
                  ? 'Enter your password...'
                  : 'Ingrese su contraseña...'
              }
              value={password}
              onChange={e => setPassword(e.target.value)}
              isIconActive={true}
            />

            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
              mt={2}
              width='100%'
              color='white'
            >
              <div style={{ display: 'flex' }}>
                <Checkbox disableRipple sx={{ p: 0, pr: 1 }} />
                <Typography>
                  {language === 'en' ? 'Remember me' : 'Recuérdame'}
                </Typography>
              </div>
              <a
                href='#yoyo'
                style={{
                  color: colors.green[500],
                  textDecoration: 'none'
                }}
              >
                {language === 'en'
                  ? 'Forget password?'
                  : '¿Olvidó su contraseña?'}
              </a>
            </Box>
            <Button
              type='submit'
              variant='contained'
              fullWidth
              sx={{ mt: 4, mb: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
            >
              {language === 'en' ? 'Login' : 'Iniciar Sesión'}
            </Button>
          </form>
          {/* FORM END */}

          {/* Mostrar error si existe */}
        </Box>
      </Box>
    </Grid>
  )
}

export default AdminSignin

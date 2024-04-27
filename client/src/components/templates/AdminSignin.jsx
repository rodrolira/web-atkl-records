import React, { useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext' // Importa el hook useLanguage
import { Box, Button, Checkbox, colors, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import CustomInput from '../atoms/CustomInput'
import Logo from '../atoms/Logo'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const AdminSignin = () => {
  const { language } = useLanguage() // Usa el hook para obtener language

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { signin, isAuthenticated, errors: signinErrors } = useAdminAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated])

  const onSubmit = handleSubmit(data => {
    signin(data)
  })

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
              <Logo isAdminSignin />
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

          <div>
            {signinErrors.map((error, i) => (
              <div
                className='bg-red-500 p-2 mb-2 text-white rounded-md'
                key={i}
              >
                {error}
              </div>
            ))}

            {/* FORM */}
            <form onSubmit={onSubmit}>
              <CustomInput
                type='text'
                label={language === 'en' ? 'Username' : 'Nombre de usuario'}
                placeholder={
                  language === 'en'
                    ? 'Enter your username...'
                    : 'Ingrese su nombre de usuario...'
                }
                {...register('username', {
                  required: true
                })}
                isIconActive={false}
                text-align='center'
                mx='auto'
              />

              {errors.username && (
                <Typography
                  color='red'
                  fontSize='14px'
                  fontWeight='bold'
                  mt={2}
                  mb={2}
                  textAlign='center'
                >
                  {language === 'en'
                    ? 'Username is required'
                    : 'Se requiere nombre de usuario'}
                </Typography>
              )}

              <CustomInput
                label={language === 'en' ? 'Password' : 'Contraseña'}
                placeholder={
                  language === 'en'
                    ? 'Enter your password...'
                    : 'Ingrese su contraseña...'
                }
                type='password'
                isIconActive={true}
                {...register('password', { required: true })}
              />

              {errors.password && (
                <Typography
                  color='red'
                  fontSize='14px'
                  fontWeight='bold'
                  mt={2}
                  mb={2}
                  textAlign='center'
                >
                  {language === 'en'
                    ? 'Password is required'
                    : 'Se requiere contraseña'}
                </Typography>
              )}

              {/* BUTTON */}
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
                sx={{
                  mt: 4,
                  mb: 4,
                  boxShadow: `0 0 20px ${colors.green[500]}`
                }}
              >
                {language === 'en' ? 'Login' : 'Iniciar Sesión'}
              </Button>
            </form>
            {/* FORM END */}
          </div>

          {/* Mostrar error si existe */}
        </Box>
      </Box>
    </Grid>
  )
}

export default AdminSignin

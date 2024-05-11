import React, { useEffect, lazy } from 'react' // Importa React y useEffect
import { useLanguage } from '../../contexts/LanguageContext' // Importa el hook useLanguage
import { Box, Button, Checkbox, colors, Typography } from '@mui/material'
import CustomInput from '../atoms/CustomInput'
import Logo from '../atoms/Logo'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Grid = lazy(() => import('@mui/material/Unstable_Grid2/Grid2'))
import { PropTypes } from 'prop-types'

const SigninPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto

  const { signin, isAuthenticated, errors: signinErrors } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const onSubmit = handleSubmit(data => {
    signin(data)
  })

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
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
                {language === 'en' ? 'Sign in' : 'Inicia Sesión'}
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

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* INPUTS */}
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
                  <p
                   style={{
                      color: 'red',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      marginTop: '2px',
                      marginBottom: '2px'
                    }}
                  >
                    {language === 'en'
                      ? 'Username is required'
                      : 'El usuario es requerido'}
                  </p>
                )}

                <CustomInput
                  type='password'
                  label={language === 'en' ? 'Password' : 'Contraseña'}
                  placeholder={
                    language === 'en'
                      ? 'Enter your password...'
                      : 'Ingrese su contraseña...'
                  }
                  isIconActive={true}
                  {...register('password', { required: true })}
                />

                {errors.password && (
                  <p
                    style={{
                      color: 'red',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      marginTop: '2px',
                      marginBottom: '2px'
                    }}
                  >
                    {language === 'en'
                      ? 'Password is required'
                      : 'La contraseña es requerida'}
                  </p>
                )}

                {/* INPUT END */}

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
                  variant='contained'
                  fullWidth
                  sx={{
                    mt: 4,
                    mb: 4,
                    boxShadow: `0 0 20px ${colors.green[500]}`
                  }}
                  type='submit'
                >
                  {language === 'en' ? 'Login' : 'Iniciar Sesión'}
                </Button>
              </form>
            </div>
          </Box>
        </Box>
      </Grid>
    </React.Suspense>
  )
}

SigninPage.defaultProps = {
  language: 'es'
}

SigninPage.propTypes = {
  language: PropTypes.string
}

export default SigninPage

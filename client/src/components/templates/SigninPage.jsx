import React, { useEffect } from 'react' // Importa React y useEffect
import { useLanguage } from '../../contexts/LanguageContext' // Importa el hook useLanguage
import { Box, Button, Checkbox, colors, Typography } from '@mui/material'
import CustomInput from '../atoms/CustomInput'
import Logo from '../atoms/Logo'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

import Grid from '@mui/material/Unstable_Grid2/Grid2'

const SigninPage = () => {
    // Validacion del Form
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required(
                'El nombre de usuario es requerido'
            ),
            password: Yup.string()
                .min(6, 'La contraseña debe tener al menos 6 caracteres')
                .required('La contraseña es requerida'),
        }),
        onSubmit: async (values) => {
            console.log('sending')
            console.log(values)
        },
    })

    const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto

    const { signin, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/', { replace: true })
        }
    }, [isAuthenticated, navigate])

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
                        xl: '15px 2px 5px -5px',
                    },
                    marginTop: {
                        xs: '0px',
                        sm: '0px',
                        md: '100px',
                        lg: '100px',
                        xl: '100px',
                    },
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
                            xl: '30px 0 0 30px',
                        },
                    }}
                >
                    <Box width="80%">
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
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
                                    justifyContent: 'center',
                                }}
                            >
                                <Logo />
                            </Box>
                            {/* LOGO END */}

                            <Typography
                                color="white"
                                fontSize="24px"
                                fontWeight="bold"
                                mt={7}
                                mb={3}
                            >
                                {language === 'en'
                                    ? 'Sign in'
                                    : 'Inicia Sesión'}
                            </Typography>
                        </Box>

                        <div>
                            <Box
                                component="form"
                                onSubmit={formik.handleSubmit}
                            >
                                {/* INPUTS */}
                                <CustomInput
                                    id="username"
                                    type="text"
                                    label={
                                        language === 'en'
                                            ? 'Username'
                                            : 'Nombre de usuario'
                                    }
                                    placeholder={
                                        language === 'en'
                                            ? 'Enter your username...'
                                            : 'Ingrese su nombre de usuario...'
                                    }
                                    isIconActive={false}
                                    text-align="center"
                                    mx="auto"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                {formik.touched.username &&
                                formik.errors.username ? (
                                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                        <p className="font-bold">Error</p>
                                        <p>{formik.errors.username}</p>
                                    </div>
                                ) : null}

                                <div>
                                    <CustomInput
                                        id="password"
                                        type="password"
                                        label={
                                            language === 'en'
                                                ? 'Password'
                                                : 'Contraseña'
                                        }
                                        placeholder={
                                            language === 'en'
                                                ? 'Enter your password...'
                                                : 'Ingrese su contraseña...'
                                        }
                                        isIconActive={true}
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                {formik.touched.password &&
                                formik.errors.password ? (
                                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                        <p className="font-bold">Error</p>
                                        <p>{formik.errors.password}</p>
                                    </div>
                                ) : null}

                                {/* INPUT END */}

                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    justifyContent="space-between"
                                    mt={2}
                                    width="100%"
                                    color="white"
                                >
                                    <div style={{ display: 'flex' }}>
                                        <Checkbox
                                            disableRipple
                                            sx={{ p: 0, pr: 1 }}
                                        />
                                        <Typography>
                                            {language === 'en'
                                                ? 'Remember me'
                                                : 'Recuérdame'}
                                        </Typography>
                                    </div>
                                    <a
                                        href="#yoyo"
                                        style={{
                                            color: colors.green[500],
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {language === 'en'
                                            ? 'Forget password?'
                                            : '¿Olvidó su contraseña?'}
                                    </a>
                                </Box>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        mt: 4,
                                        mb: 4,
                                        boxShadow: `0 0 20px ${colors.green[500]}`,
                                    }}
                                    type="submit"
                                    value="Login"
                                >
                                    {language === 'en'
                                        ? 'Login'
                                        : 'Iniciar Sesión'}
                                </Button>
                            </Box>
                        </div>
                    </Box>
                </Box>
            </Grid>
        </React.Suspense>
    )
}

export default SigninPage

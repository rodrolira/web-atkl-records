import React, { useEffect, useState } from 'react' // Importa React y useEffect
import { useLanguage } from '../../contexts/LanguageContext' // Importa el hook useLanguage
import { Box, Button, Checkbox, colors, Typography } from '@mui/material'
import CustomInput from '../atoms/CustomInput'
import Logo from '../atoms/Logo'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { gql, useMutation, useQuery } from '@apollo/client'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useAdminAuth } from '../../contexts/AuthContext'

const AUTH_ADMIN = gql`
    mutation authAdmin($input: AuthInput) {
        authAdmin(input: $input) {
            token
        }
    }
`

function AdminSignin() {
    // routing
    const navigate = useNavigate()
    const { signin } = useAdminAuth() // Obtener la función signin del contexto de autenticación de administradores

    const [message, saveMessage] = useState(null)

    const [authAdmin] = useMutation(AUTH_ADMIN)

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
            password: Yup.string().required('La contraseña es requerida'),
        }),
        onSubmit: async (values) => {
            // console.log(values)
            const { username, password } = values

            try {
                const { data } = await authAdmin({
                    variables: {
                        input: {
                            username,
                            password,
                        },
                    },
                })
                console.log(data)
                saveMessage('Auth...')

                //Guardar token
                const { token } = data.authAdmin
                localStorage.setItem('adminToken', token)
                signin({ username, password }) // Llamar a la función signin para establecer el estado de autenticación del administrador

                //Redirect
                navigate('/')
            } catch (error) {
                saveMessage(error.message.replace('GraphQL error: ', ''))
                // console.log(error)

                setTimeout(() => {
                    saveMessage(null)
                }, 2000)
            }
        },
    })

    const { language } = useLanguage() // Usa el hook para obtener language

    const showMessage = () => {
        return (
            <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
                <p>{message} </p>
            </div>
        )
    }

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
                                <Logo isAdminSignin />
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
                                    ? 'Admin Sign in'
                                    : 'Inicia Sesión de Administrador'}
                            </Typography>
                        </Box>

                        {message && showMessage()}

                        <div>
                            {/* FORM */}
                            <Box
                                component="form"
                                onSubmit={formik.handleSubmit}
                            >
                                <CustomInput
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
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
                                    name="username"
                                    id="username"
                                />
                                {formik.touched.username &&
                                formik.errors.username ? (
                                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                        <p className="font-bold">Error</p>
                                        <p>{formik.errors.username}</p>
                                    </div>
                                ) : null}

                                <CustomInput
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
                                    type="password"
                                    isIconActive={true}
                                    text-align="center"
                                    mx="auto"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    name="password"
                                    id="password"
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password &&
                                formik.errors.password ? (
                                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                        <p className="font-bold">Error</p>
                                        <p>{formik.errors.password}</p>
                                    </div>
                                ) : null}

                                {/* BUTTON */}
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
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        mt: 4,
                                        mb: 4,
                                        boxShadow: `0 0 20px ${colors.green[500]}`,
                                    }}
                                    value="Login"
                                >
                                    {language === 'en'
                                        ? 'Login'
                                        : 'Iniciar Sesión'}
                                </Button>
                            </Box>
                            {/* FORM END */}
                        </div>

                        {/* Mostrar error si existe */}
                    </Box>
                </Box>
            </Grid>
        </React.Suspense>
    )
}

export default AdminSignin

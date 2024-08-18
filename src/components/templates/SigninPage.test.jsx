/* eslint-disable no-undef */
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { useAuth } from '../../contexts/AuthContext'
import SigninPage from './SigninPage'
import { useNavigate } from 'react-router-dom'

// Mock useAuth
jest.mock('../../contexts/AuthContext', () => ({
  useAuth: jest.fn(() => ({
    signin: jest.fn(),
  })),
}))

// Mock de useLanguage para controlar su valor durante las pruebas
jest.mock('../../contexts/LanguageContext', () => ({
  useLanguage: jest.fn(() => ({ language: 'en' })),
}))

// Mock de useNavigate para controlar la navegación durante las pruebas
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

describe('SigninPage', () => {
  // Configura el mock de useAuth para devolver valores predeterminados antes de cada prueba
  beforeEach(() => {
    useAuth.mockReturnValue({
      signin: jest.fn(),
      isAuthenticated: false,
      errors: [],
    })
  })

  // Prueba que el componente SigninPage se renderiza correctamente
  it('renders the SigninPage component', () => {
    render(
      <SigninPage />
    )
    // Verifica que los elementos esperados están en el documento
    expect(screen.getAllByText('Sign in').length).toBeGreaterThan(0) // Asegura que hay al menos un elemento 'Sign in'
    expect(screen.getByText('Username')).toBeInTheDocument()
    expect(screen.getByText('Password')).toBeInTheDocument()
  })

  // Prueba que se muestran los errores de validación del formulario
  it('validates the form fields and shows errors', async () => {
    render(
      <SigninPage />
    )

    // Intenta enviar el formulario sin llenar los campos
    fireEvent.click(screen.getByText('Login'))

    // Espera y verifica que los mensajes de error se muestran
    await waitFor(() => {
      expect(screen.getByText('El nombre de usuario es requerido')).toBeInTheDocument()
      expect(screen.getByText('La contraseña es requerida')).toBeInTheDocument()
    })
  })

  // Prueba que la función signin se llama con los valores correctos del formulario
  it('calls signin function on form submission', async () => {
    const signinMock = jest.fn()
    useAuth.mockReturnValue({
      signin: signinMock,
      isAuthenticated: false,
      errors: [],
    })
    render(
      <SigninPage />
    )

    // Llena los campos del formulario y envíalo
    fireEvent.change(screen.getByPlaceholderText('Enter your username...'), { target: { value: 'artist' } })
    fireEvent.change(screen.getByPlaceholderText('Enter your password...'), { target: { value: 'password' } })
    fireEvent.click(screen.getByText('Login'))

    // Espera y verifica que la función signin se haya llamado con los valores correctos
    await waitFor(() => {
        expect(signinMock).toHaveBeenCalledWith({ username: 'artist', password: 'password' })
    })
  })

  // Prueba que se navega a la página de inicio después de una autenticación exitosa
  it('navigates to home page on successful login', async () => {
    const mockSignin = jest.fn(() => Promise.resolve())
    const mockNavigate = jest.fn()
    useAuth.mockReturnValue({
      signin: mockSignin,
      isAuthenticated: true,
      errors: [],
    })

    useNavigate.mockReturnValue(mockNavigate)

    render(<SigninPage />)

    // Fill out the form and submit
    fireEvent.change(screen.getByPlaceholderText('Enter your username...'), { target: { value: 'artist' } })
    fireEvent.change(screen.getByPlaceholderText('Enter your password...'), { target: { value: 'password' } })
    fireEvent.click(screen.getByText(/login/i))

    // Espera y verifica que la función de navegación se haya llamado con "/"
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/')
    })
  })

  // Prueba que se muestran los errores de inicio de sesión si existen
  it('muestra errores de inicio de sesión', () => {
    const mockSignin = jest.fn()
    // Configura el mock de useAuth para devolver un error de inicio de sesión
    useAuth.mockReturnValue({
      signin: mockSignin,
      isAuthenticated: false,
      errors: ['Invalid credentials'],
    })

    render(
      <SigninPage />
    )

    // Verifica que el mensaje de error se muestra en el documento
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument()
  })
})

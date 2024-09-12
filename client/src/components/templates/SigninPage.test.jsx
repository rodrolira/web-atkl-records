import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider, useAuth, AuthContext } from '../../contexts/AuthContext'
import { LanguageProvider } from '../../contexts/LanguageContext'
import SigninPage from './SigninPage'
import { describe, it, expect, jest, beforeEach, test } from 'jest'

jest.mock('@mui/material/Unstable_Grid2/Grid2', () => 'Grid')

// Mock de useAuth antes de las importaciones que lo utilizan
jest.mock('../../contexts/AuthContext', () => ({
  useAuth: jest.fn(),
}))

// Mock de useLanguage para controlar su valor durante las pruebas {% endcomment %}
jest.mock('../../contexts/LanguageContext', () => ({
  useLanguage: jest.fn(() => ({ language: 'en' })),
}))

// Mock de la función signin y la función de navegación {% endcomment %}
const mockSignin = jest.fn()
const mockNavigate = jest.fn()

// Mock de useNavigate para controlar la navegación durante las pruebas {% endcomment %}
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

describe('SigninPage', () => {
  // Configura el mock de useAuth para devolver valores predeterminados antes de cada prueba
  beforeEach(() => {
    AuthContext.useAuth.mockImplementation(() => ({
      signin: jest.fn(),
      isAuthenticated: false,
    }))
  })

  // Prueba que el componente SigninPage se renderiza correctamente {% endcomment %}
  test('renders the SigninPage component', () => {
    render(
      <LanguageProvider>
        <AuthProvider>
          <Router>
            <SigninPage />
          </Router>
        </AuthProvider>
      </LanguageProvider>
    )

    // Verifica que los elementos esperados están en el documento {% endcomment %}
    expect(screen.getByText('Sign in')).toBeInTheDocument()
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  // Prueba que se muestran los errores de validación del formulario {% endcomment %}
  it('validates the form fields and shows errors', async () => {
    render(
      <LanguageProvider>
        <AuthProvider>
          <Router>
            <SigninPage />
          </Router>
        </AuthProvider>
      </LanguageProvider>
    )

    // Intenta enviar el formulario sin llenar los campos {% endcomment %}
    fireEvent.click(screen.getByText('Login'))

    // Espera y verifica que los mensajes de error se muestran {% endcomment %}
    await waitFor(() => {
      expect(screen.getByText('El nombre de usuario es requerido')).toBeInTheDocument()
      expect(screen.getByText('La contraseña es requerida')).toBeInTheDocument()
    })
  })

  // Prueba que la función signin se llama con los valores correctos del formulario {% endcomment %}
  it('calls signin function on form submission', async () => {
    render(
      <LanguageProvider>
        <AuthProvider>
          <Router>
            <SigninPage />
          </Router>
        </AuthProvider>
      </LanguageProvider>
    )

    // Llena los campos del formulario y envíalo {% endcomment %}
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'artist' } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password' } })
    fireEvent.click(screen.getByText('Login'))

    // Espera y verifica que la función signin se haya llamado con los valores correctos {% endcomment %}
    await waitFor(() => {
      expect(mockSignin).toHaveBeenCalledWith({ username: 'artist', password: 'password' })
    })
  })

  // Prueba que se navega a la página de inicio después de una autenticación exitosa {% endcomment %}
  it('navigates to home page on successful login', () => {
    // Configura el mock de useAuth para indicar que el usuario está autenticado {% endcomment %}
    useAuth.mockReturnValue({
      signin: mockSignin,
      isAuthenticated: true,
      errors: [],
    })

    render(
      <LanguageProvider>
        <AuthProvider>
          <Router>
            <SigninPage />
          </Router>
        </AuthProvider>
      </LanguageProvider>
    )

    // Verifica que la navegación a la página de inicio se haya realizado {% endcomment %}
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })

  // Prueba que se muestran los errores de inicio de sesión si existen {% endcomment %}
  it('displays signin errors', () => {
    // Configura el mock de useAuth para devolver un error de inicio de sesión {% endcomment %}
    useAuth.mockReturnValue({
      signin: mockSignin,
      isAuthenticated: false,
      errors: ['Invalid credentials'],
    })

    render(
      <LanguageProvider>
        <AuthProvider>
          <Router>
            <SigninPage />
          </Router>
        </AuthProvider>
      </LanguageProvider>
    )

    // Verifica que el mensaje de error se muestra en el documento {% endcomment %}
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument()
  })
})

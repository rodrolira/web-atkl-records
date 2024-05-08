import { useForm } from 'react-hook-form'
import { useAuth } from '../../contexts/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterPage () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { signup, isAuthenticated, errors: registerErrors } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async values => {
    signup(values)
  })

  return (
    <div className='flex flex-col space-y-4 m-32'>
      {registerErrors.map((error, i) => (
        <div className='bg-red-500 p-2 mb-2 rounded-md text-white' key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit} className='flex flex-col space-y-4'>
        <input
          type='text'
          placeholder='username'
          {...register('username', { required: true })}
        />
        {errors.username && (
          <p className='text-red-500'>Username is required</p>
        )}
        <input
          type='email'
          placeholder='email'
          {...register('email', { required: true })}
        />
        {errors.email && <p className='text-red-500'>Email is required</p>}
        <input
          type='password'
          placeholder='password'
          {...register('password', { required: true })}
        />
        {errors.password && (
          <p className='text-red-500'>Password is required</p>
        )}

        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage

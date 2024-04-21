import { useForm } from 'react-hook-form'
function RegisterPage () {
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit(async values => {
})

  return (
    <div className='flex flex-col space-y-4 m-32'>
      <form
        onSubmit={onSubmit}
        className='flex flex-col space-y-4'
      >
        <input
          type='text'
          placeholder='username'
          {...register('username', { required: true })}
        />
        <input
          type='email'
          placeholder='email'
          {...register('email', { required: true })}
        />
        <input
          type='password'
          placeholder='password'
          {...register('password', { required: true })}
        />

        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage

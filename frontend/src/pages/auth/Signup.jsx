import { useState } from 'react'
import { useForm } from 'react-hook-form'
// import Image from '../../../src/assets/AuthImg.png'
import Image from '../../assets/right-look.jpg'
import {Link, useNavigate} from 'react-router-dom'
import TextInput from '../../components/inputs/TextInput'
import AuthButton from '../../components/buttons/AuthButton'
import { useRegisterUserMutation } from '../../redux/features/auth/userApi'
import {useGoogleLogin} from '@react-oauth/google'
import { responseGoogle } from '../../utils/googleAuthResponse'

function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const navigate=useNavigate()

// Initialize the mutation hook
const [registerUser, { isLoading, isSuccess, isError, error }] = useRegisterUserMutation();

  const onSubmit = async (data) => {
    try {
      const result = await registerUser(data).unwrap();
      console.log('User registered successfully:', result);
      reset();
      navigate('/login')
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  const googleLogin=useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code'
  })
  
  document.title="Signup"

  return (
    <div className="flex min-h-screen items-center justify-center bg-white md:bg-black-color p-2 sm:p-6 md:p-4">
      <div className="w-full max-w-[1000px] overflow-hidden md:rounded-3xl bg-white md:shadow-xl border-opacity-5">
        <div className="grid md:grid-cols-2">

        <div className="hidden md:flex items-center justify-center bg-gray-50">
            <img src={Image} alt="" className='w-full h-full' />
          </div>

          
          <div className="p-8 sm:p-12">
            <div className="mb-8 flex justify-center">
            <div className="font-serif text-black-color font-semibold text-2xl cursor-pointer" onClick={()=>navigate('/')}>
                M<span className='text-grey-color font-serif font-bold'>.</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-center">Welcome!</h1>
                <p className="text-sm text-gray-600 text-center">Please enter your details</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <TextInput
                  label="Name"
                  type='text'
                  {...register('name', { required: 'Name is required' })}
                  error={errors.name?.message}
                />

                <TextInput
                  label="Email"
                  {...register('email', { required: 'Email is required' })}
                  error={errors.email?.message}
                />

                <TextInput
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  showPassword={showPassword}
                  onTogglePassword={() => setShowPassword(!showPassword)}
                  {...register('password', { required: 'Password is required' })}
                  error={errors.password?.message}
                />

                <div className="space-y-4 flex w-[90%] md:w-[90%] justify-center items-center flex-col mx-auto pt-4">
                  <AuthButton type="submit"className='py-3'>Sign Up</AuthButton>
                  <AuthButton variant="google"
                  onClick={googleLogin}>
                    <img
                      src="https://www.loginradius.com/blog/static/a9dad0fc4bf1af95243aa5e2d017bc22/a8669/google_cover.jpg"
                      alt="Google"
                      width={25}
                      height={25}
                      className="mr-2"
                    />
                    Signup with Google
                  </AuthButton>
                </div>
              </form>

              <p className="text-center text-sm text-gray-600 md:pt-6">
                Already Have An Account?{' '}
                <Link to="/login" className="font-medium text-gray-900 hover:underline">
                  Log In
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup

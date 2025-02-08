import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from '../../../src/assets/AuthImg.png'
import {Link, useNavigate} from 'react-router-dom'
import TextInput from '../../components/inputs/TextInput'
import AuthButton from '../../components/buttons/AuthButton'

import { useLoginUserMutation } from '../../redux/features/auth/userApi'
import { setUser } from '../../redux/features/auth/authSlice';

import {useGoogleLogin} from '@react-oauth/google'
import { responseGoogle } from '../../utils/googleAuthResponse'
import { useDispatch } from 'react-redux'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors },reset } = useForm()
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const onSubmit = async (data) => {
    try {
      const user = await loginUser(data).unwrap(); 
      dispatch(setUser(user)); // Store the user in Redux state
      console.log('Login successful:', user);
      navigate("/")
      reset(); 
    } catch (error) {
      console.error('Login failed:', error);
      alert(error?.data?.message || 'An error occurred during login.');
    }
  }

 
  const googleLogin=useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code'
  })

  return (
    <div className="flex min-h-screen items-center justify-center bg-white md:bg-black-color p-2 sm:p-6 md:p-4">
      <div className="w-full max-w-[1000px] overflow-hidden md:rounded-3xl bg-white md:shadow-xl border-opacity-5">
        <div className="grid md:grid-cols-2">
          
          <div className="p-8 sm:p-12">
            <div className="mb-8 flex justify-center">
              <div className="h-8 w-8">
                <img
                  src={Image}
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-center">Welcome back!</h1>
                <p className="text-sm text-gray-600 text-center">Please enter your details</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" autoComplete='off'>
                
                <TextInput
                  label="Email"
                  defaultValue=""
                  name='email'
                  {...register('email', { required: 'Email is required' })}
                  error={errors.email?.message}
                />

                <TextInput
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  showPassword={showPassword}
                  defaultValue=""
                  name='password'
                  onTogglePassword={() => setShowPassword(!showPassword)}
                  {...register('password', { required: 'Password is required' })}
                  error={errors.password?.message}
                />

                <div className="space-y-4 flex w-[90%] md:w-[90%] justify-center items-center flex-col mx-auto pt-4">
                  <AuthButton type="submit"className='py-3'>Log In</AuthButton>
                  <AuthButton variant="google"
                  onClick={googleLogin}>
                    <img
                      src="https://www.loginradius.com/blog/static/a9dad0fc4bf1af95243aa5e2d017bc22/a8669/google_cover.jpg"
                      alt="Google"
                      width={25}
                      height={25}
                      className="mr-2"
                    />
                    Sign in with Google
                  </AuthButton>
                </div>
              </form>

              <p className="text-center text-sm text-gray-600 md:pt-6">
                Don't have an account?{' '}
                <Link to="/signup" className="font-medium text-gray-900 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center bg-gray-50">
            <img src={Image} alt="" className='w-full h-full' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
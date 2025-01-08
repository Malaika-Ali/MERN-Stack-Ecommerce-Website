import React from 'react'
import {useGoogleLogin} from '@react-oauth/google'

const Login = () => {

  const responseGoogle= async(authResult) => {
    try {
      
      console.log(authResult)
    } catch (error) {
      console.log(`Eroor while requesting th egoogle code : ${error}`)
    }
  }

  const googleLogin=useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code',
  })


  return (
    <div>
      <button onClick={googleLogin}>Login with google</button>
    </div>
  )
}

export default Login

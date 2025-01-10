import React from 'react'
import {useGoogleLogin} from '@react-oauth/google'

const Login = () => {

  const responseGoogle= async(authResult) => {
    try {
      
      if (authResult["code"]) {
				console.log(authResult.code);
				const result = await googleAuth(authResult['code']);
        console.log(result)
    } }catch (error) {
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

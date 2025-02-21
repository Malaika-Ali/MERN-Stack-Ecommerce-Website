import { googleAuth } from '../pages/auth/googleApi'
import { useNavigate } from 'react-router-dom'

const navigate=useNavigate()

export const responseGoogle= async(authResult)=>{
    try {
      if(authResult['code']){
        const result=await googleAuth(authResult['code'])
        console.log(result)
        const {email, name}=result.data.user
        console.log('Result.data.user from login page', result?.data?.user)
        navigate("/")
      }
      console.log(authResult)
    } catch (error) {
      console.log("Error while requesting Google code!",error)
    }
      }
    
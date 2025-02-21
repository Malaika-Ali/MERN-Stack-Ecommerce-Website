import { googleAuth } from '../pages/auth/googleApi'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../redux/features/auth/authSlice'
import { useDispatch } from 'react-redux'

const navigate = useNavigate()
const dispatch = useDispatch();


export const responseGoogle = async (authResult) => {
  try {
    if (authResult['code']) {
      const result = await googleAuth(authResult['code'])
      dispatch(setUser(result.data.user));
      const { email, name } = result.data.user
      console.log('Result.data.user from login page', result?.data?.user)
      navigate("/")
    }
    console.log(authResult)
  } catch (error) {
    console.log("Error while requesting Google code!", error)
  }
}

import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Marque from './components/Marque';
import Footer from './components/footer/Footer';
import ScrollToTop from './utils/ScrollToTop';
import { useDispatch } from 'react-redux'
import { setUser, logout } from './redux/features/auth/authSlice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/me`,
          { withCredentials: true }
        )
        dispatch(setUser(data))
      } catch (error) {
        dispatch(logout())
      }
    }
    checkAuth()
  }, [dispatch])

  return (
    <>
      {/* <Marque/> */}
      <Navbar />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <Footer />
    </>
  )
}

export default App

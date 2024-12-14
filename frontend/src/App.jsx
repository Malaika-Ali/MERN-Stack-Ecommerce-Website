import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Marque from './components/Marque';

function App() {

  return (
    <>
      <Marque/>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App

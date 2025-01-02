import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Marque from './components/Marque';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Marque/>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App

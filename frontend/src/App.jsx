import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Marque from './components/Marque';
import Footer from './components/footer/Footer';
import ScrollToTop from './utils/ScrollToTop';

function App() {

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

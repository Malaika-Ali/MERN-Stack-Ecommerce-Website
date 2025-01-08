import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import CartDrawer from './CartDrawer';
import { GoPerson } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => setIsCartOpen(false)

  const products = useSelector(state => state.cart.products)


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if user has scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-10 mb:10 lg:mb-2 bg-white ${isScrolled ? 'shadow-lg' : ""}`}>
      <nav className={`container mx-auto flex justify-between items-center px-4 py-1 lg:py-2 `}>
        {/* Left Side for Desktop */}
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" className={({ isActive }) => `text-black-color hover:text-grey-color ${isActive ? 'text-grey-color' : ''}`}>
                Collections
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/about" className="text-gray-700 hover:text-blue-500" activeClassName="font-bold">
                Men
              </NavLink>
            </li>
            <li>
              <NavLink to="/women" className="text-gray-700 hover:text-blue-500" activeClassName="font-bold">
                Women
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/contact" className={({ isActive }) => `text-black-color hover:text-grey-color ${isActive ? 'text-grey-color' : ''}`}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Center Logo */}
        <div className="flex-grow text-center">
          <Link to='/'> <h1 className="text-3xl font-bold text-black-color">M<span className='text-grey-color text-3xl'>.</span> </h1></Link>

        </div>

        {/* Right Side for Desktop */}
        <div className="hidden md:flex space-x-4">
          <NavLink to='/search' className={({ isActive }) => `${isActive ? 'text-white' : 'text-black'}`}>
            <FiSearch size={22} className={({ isActive }) => `text-black-color hover:text-grey-color ${isActive ? 'text-grey-color' : ''}`} /></NavLink>

          <div onClick={() => setIsCartOpen((prev) => !prev)} className='relative'>
            <BsCart2 size={22} className={({ isActive }) => `text-black-color  hover:text-grey-color ${isActive ? 'text-grey-color' : ''}`} />
            <span className="absolute -top-2 -right-2 bg-yellow-color text-black-color text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {products?.length}
            </span>
          </div>

          <NavLink to="/login">
            <GoPerson size={22} className={({ isActive }) => `text-black-color hover:text-grey-color ${isActive ? 'text-grey-color' : ''}`} />

          </NavLink>

        </div>

        {
          isCartOpen && (
            <CartDrawer isOpen={isCartOpen} toggleCart={toggleCart} products={products} />
          )
        }

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX className="text-gray-700" size={24} /> : <HiMenu className="text-gray-700" size={24} />}
          </button>
        </div>
      </nav>



      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <div className="flex items-center mb-4">
            <FaSearch className="text-gray-700 hover:text-blue-500 cursor-pointer mr-2" />
            <input type="text" placeholder="Search..." className="border border-gray-300 rounded-md p-2 flex-grow" />
          </div>
          <ul className="space-y-2">
            <li>
              <NavLink to="/collections" className="text-gray-700 hover:text-blue-500" activeclassname="font-bold">
                Collections
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/men" className="text-gray-700 hover:text-blue-500" activeClassName="font-bold">
                Men
              </NavLink>
            </li>
            <li>
              <NavLink to="/women" className="text-gray-700 hover:text-blue-500" activeClassName="font-bold">
                Women
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/contact" className="text-gray-700 hover:text-blue-500" activeclassname="font-bold">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <FaShoppingCart onClick={() => setIsCartOpen((prev) => !prev)} className="text-gray-700 hover:text-blue-500 cursor-pointer" />
            <FaUser className="text-gray-700 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar


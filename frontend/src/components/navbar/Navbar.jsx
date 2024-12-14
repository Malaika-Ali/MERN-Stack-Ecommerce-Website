import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser  } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Left Side for Desktop */}
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" className="text-gray-700 hover:text-blue-500" activeClassName="font-bold">
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
              <NavLink to="/contact" className="text-gray-700 hover:text-blue-500" activeClassName="font-bold">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Center Logo */}
        <div className="flex-grow text-center">
          <h1 className="text-xl font-bold">Company Logo</h1>
        </div>

        {/* Right Side for Desktop */}
        <div className="hidden md:flex space-x-4">
          <FaSearch className="text-gray-700 hover:text-blue-500 cursor-pointer" />
          <FaShoppingCart className="text-gray-700 hover:text-blue-500 cursor-pointer" />
          <FaUser  className="text-gray-700 hover:text-blue-500 cursor-pointer" />
        </div>

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
              <NavLink to="/collections" className="text-gray-700 hover:text-blue-500" activeClassName="font-bold">
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
              <NavLink to="/contact" className="text-gray-700 hover:text-blue-500" activeClassName="font-bold">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <FaShoppingCart className="text-gray-700 hover:text-blue-500 cursor-pointer" />
            <FaUser  className="text-gray-700 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      )}
        </header>
  )}

  export default Navbar


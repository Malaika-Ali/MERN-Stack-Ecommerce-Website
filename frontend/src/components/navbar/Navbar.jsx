import { useState, useEffect, useRef } from "react"
import { NavLink, Link } from "react-router-dom"
import CartDrawer from "./CartDrawer"
import NavItem from "./NavItem"
import { AnimatePresence } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"

import { GoPerson } from "react-icons/go"
import { BsCart2 } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import { HiMenu, HiX } from "react-icons/hi"
import { FaSearch, FaShoppingCart, FaUser, FaSignOutAlt, FaBoxOpen } from "react-icons/fa"

import { logout } from "../../redux/features/auth/authSlice"
import { useLogoutUserMutation } from "../../redux/features/auth/userApi"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const toggleCart = () => setIsCartOpen(false)
  const products = useSelector((state) => state.cart.products)
  const [logoutUser] = useLogoutUserMutation();
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, isAuthenticated } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = async() => {
    try {
      await logoutUser().unwrap(); 
      dispatch(logout()); 
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  useEffect(() => {
    // This effect will run whenever `isAuthenticated` changes
    // You can add any additional logic here if needed
  }, [isAuthenticated]);

  const navlinks = [
    {
      title: "Clothes",
      category: "clothes"
    },
    {
      title: "Accessories",
      category: "accessories"
    },
    {
      title: "Bags",
      category: "bags"
    },
    {
      title: "Footwear",
      category: "footwear"
    }
  ]


  return (
    <header className={`sticky top-0 w-full z-10 bg-white ${isScrolled ? "shadow-lg" : ""}`}>
      <nav className={`container mx-auto flex justify-between items-center px-4 py-1 lg:py-2`}>
        {/* Left Side for Desktop */}
        <div className="hidden md:flex space-x-4 flex-1 justify-start">
          <ul className="flex space-x-4">
            {navlinks.map((navlink) => (
              <li key={navlink.category}>
                <NavItem category={navlink.category} title={navlink.title} />
              </li>
            ))}
          </ul>
        </div>

        {/* Center Logo */}
        <div className="text-center justify-center">
          <Link to="/">
            {" "}
            <h1 className="text-4xl font-bold text-black-color font-serif">
              M<span className="text-grey-color text-3xl">.</span>{" "}
            </h1>
          </Link>
        </div>

        {/* Right Side for Desktop */}
        <div className="hidden md:flex space-x-4 flex-1 justify-end">
          <NavLink to="/search" className={({ isActive }) => `${isActive ? "text-white" : "text-black"}`}>
            <FiSearch
              size={22}
              className={({ isActive }) =>
                `text-black-color hover:text-grey-color ${isActive ? "text-grey-color" : ""}`
              }
            />
          </NavLink>

          <div onClick={() => setIsCartOpen((prev) => !prev)} className="relative cursor-pointer">
            <BsCart2
              size={22}
              className={({ isActive }) =>
                `text-black-color  hover:text-grey-color ${isActive ? "text-grey-color" : ""}`
              }
            />
            <span className="absolute -top-2 -right-2 bg-yellow-color text-black-color text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {products?.length}
            </span>
          </div>

          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
              <div onClick={toggleDropdown} className="cursor-pointer">
                <FaUser size={22} className="text-black-color hover:text-grey-color" />
              </div>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    <p>{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <NavLink to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <FaBoxOpen className="inline-block mr-2" /> Orders
                  </NavLink>
                  <button
                    // onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaSignOutAlt className="inline-block mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/login">
              <GoPerson
                size={22}
                className={({ isActive }) =>
                  `text-black-color hover:text-grey-color ${isActive ? "text-grey-color" : ""}`
                }
              />
            </NavLink>
          )}

        </div>

        <AnimatePresence>
          {isCartOpen && <CartDrawer isOpen={isCartOpen} toggleCart={toggleCart} products={products} />}
        </AnimatePresence>

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
          <ul className="space-y-2 px-8">
            <li>
              <NavLink to="/clothes" className="text-gray-700 hover:text-blue-500" activeclassname="font-bold">
                Clothes
              </NavLink>
            </li>
            <li>
              <NavLink to="/accessories" className="text-gray-700 hover:text-blue-500" activeclassname="font-bold">
                Accessories
              </NavLink>
            </li>
            <li>
              <NavLink to="/footwear" className="text-gray-700 hover:text-blue-500" activeclassname="font-bold">
                Footwear
              </NavLink>
            </li>
            <li>
              <NavLink to="/bags" className="text-gray-700 hover:text-blue-500" activeclassname="font-bold">
                Bags
              </NavLink>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4 justify-center items-center">
            <FaShoppingCart
              onClick={() => setIsCartOpen((prev) => !prev)}
              className="text-gray-700 hover:text-blue-500 cursor-pointer"
            />
            {isAuthenticated ? (
              <div className="relative">
                <FaUser onClick={toggleDropdown} className="text-gray-700 hover:text-blue-500 cursor-pointer" />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl py-1 z-10 p-12 shadow-xl border-opacity-5">
                    <div className="px-4 py-2 text-sm text-gray-700">
                      <p>{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <NavLink to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <FaBoxOpen className="inline-block mr-2" /> Orders
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FaSignOutAlt className="inline-block mr-2" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to="/login">
                <FaUser className="text-gray-700 hover:text-blue-500 cursor-pointer" />
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar


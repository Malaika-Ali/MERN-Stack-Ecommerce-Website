import React from 'react'
import { Bell, Menu } from 'lucide-react'
import { ThemeToggler } from '../ThemeToggler'
import Profile from './Profile'


const Navbar = ({ setIsSidebarOpen }) => {
    return (
        <div className='flex justify-between items-center py-2 sm:py-4 px-4 sm:px-8 bg-[#F3F3F3]'>
            <div className='text-slate-600 font-[500] text-xl sm:text-2xl'>Welcome, <span className='text-black-color font-[600]'>Admin Name</span></div>
            <div className='flex justify-between gap-1 items-center'>
                <div className='rounded-full hover:bg-gray-100 cursor-pointer p-2'> <Bell size={20} /></div>
                <div><ThemeToggler /></div>
                <Profile />
                <div className='lg:hidden' onClick={() => setIsSidebarOpen(true)}><Menu /></div>
            </div>

        </div>
    )
}

export default Navbar

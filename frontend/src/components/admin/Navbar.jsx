import React from 'react'
import { Bell, Menu } from 'lucide-react'
import { ThemeToggler } from '../ThemeToggler'
import Profile from './Profile'


const Navbar = ({ setIsSidebarOpen }) => {
    return (
        <div className='flex justify-between items-center py-2 sm:py-4 px-4 sm:px-8'>
            <div className='text-slate-600 font-[500] text-xl sm:text-2xl dark:text-gray-400'>Welcome, <span className='text-black-color font-[600] dark:text-white'>Admin Name</span></div>
            <div className='flex justify-between gap-1 items-center dark:text-[#F2F2F2]'>
                <div className='rounded-full hover:bg-gray-100 cursor-pointer p-2 dark:hover:bg-light-gray'> <Bell size={20} /></div>
                <div><ThemeToggler /></div>
                <Profile />
                <div className='lg:hidden' onClick={() => setIsSidebarOpen(true)}><Menu /></div>
            </div>

        </div>
    )
}

export default Navbar

import React from 'react'
import { Bell } from 'lucide-react'
import { ThemeToggler } from '../ThemeToggler'


const Navbar = () => {
    return (
        <div className='flex justify-between py-4 px-8 bg-[#F3F3F3]'>
            <div className='text-slate-600 font-[500] text-2xl'>Welcome, <span className='text-black-color font-[600]'>Admin Name</span></div>
            <div className='flex justify-between'>
                <div className='rounded-full hover:bg-gray-100 cursor-pointer p-2'> <Bell size={20} /></div>
                <div><ThemeToggler /></div>
            </div>

        </div>
    )
}

export default Navbar

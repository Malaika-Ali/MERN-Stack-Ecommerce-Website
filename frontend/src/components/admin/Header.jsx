import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { RxCalendar } from "react-icons/rx";

const Header = () => {
    return (
        <div className='flex justify-between items-center py-4 px-4 sm:px-8 bg-[#F3F3F3]'>
            <div className='flex justify-between text-xs sm:text-base'> <GrHomeRounded /> &nbsp; &gt; &nbsp; <span>Dashboard</span></div>

            <div className='flex flex-row justify-between gap-1 sm:gap-2 items-center bg-white rounded-full py-1 sm:py-2 px-1 sm:px-4'>
                <RxCalendar />
                <span className='text-xs sm:text-sm'>Nov 11- Nov 14, 2025</span>
            </div>

        </div>
    )
}

export default Header

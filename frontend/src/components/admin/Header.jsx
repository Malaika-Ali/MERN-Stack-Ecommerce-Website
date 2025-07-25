import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { RxCalendar } from "react-icons/rx";

const Header = () => {
    return (
        <div className='flex justify-between items-center py-4 px-8 bg-[#F3F3F3]'>
            <div className='flex justify-between'> <GrHomeRounded /> &nbsp; &gt; &nbsp; <span>Dashboard</span></div>

            <div className='flex flex-row justify-between gap-2 items-center bg-white rounded-full py-2 px-4'>
                <RxCalendar />
                <span className='text-sm'>Nov 11- Nov 14, 2025</span>
            </div>

        </div>
    )
}

export default Header

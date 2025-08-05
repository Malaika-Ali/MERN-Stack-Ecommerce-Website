import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { RxCalendar } from "react-icons/rx";

import { useLocation } from 'react-router-dom';

const Header = () => {

    const routeNameMap = {
        '/admin/dashboard': 'Dashboard',
        '/admin/products': 'Products',
        'admin//orders': 'Orders',
        'admin//users': 'Users',
    };

    const location = useLocation();
    const currentPath = location.pathname;
    const pageTitle = routeNameMap[currentPath] || 'Page';

    return (
        <div className='flex justify-between items-center py-4 px-4 sm:px-8 dark:text-white-color'>
            <div className='flex justify-between text-xs sm:text-base dark:text-[#FFFFFF]'> <GrHomeRounded /> &nbsp; &gt; &nbsp; <span>{pageTitle}</span></div>

            <div className='flex flex-row justify-between gap-1 sm:gap-2 items-center bg-white rounded-full py-1.5 sm:py-2 px-1 sm:px-4 dark:bg-[#131313] dark:text-[#F7F7F7]'>
                <RxCalendar />
                <span className='text-xs sm:text-sm'>Nov 11- Nov 14, 2025</span>
            </div>

        </div>
    )
}

export default Header

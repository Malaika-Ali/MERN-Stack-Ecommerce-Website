import React from 'react'
import Sidebar from '../components/admin/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../components/admin/Header'
import Navbar from '../components/admin/Navbar'


const AdminLayout = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-[16rem_1fr] grid-rows-[auto_1fr_auto] grid-area min-h-screen'>
            {/* <Header className="header-grid-area" /> */}
            <div className="header-grid-area flex flex-col">
                <Navbar/>
                <Header/>
            </div>
            <Sidebar />
            <Outlet className="main-grid-area bg-[#F7F7F7]" />

        </div>
    )
}

export default AdminLayout

import { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../components/admin/Header'
import Navbar from '../components/admin/Navbar'


const AdminLayout = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState("")

    return (
        <div className='grid grid-cols-1 lg:grid-cols-[15rem_1fr]  grid-area min-h-screen'>
            {/* <Header className="header-grid-area" /> */}
            <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>

            <div className="header-grid-area flex flex-col">
                <Navbar setIsSidebarOpen={setIsSidebarOpen} />
                <Header />
            </div>
            <Outlet className="main-grid-area bg-[#F7F7F7]" />

        </div>


        // <div className='flex min-h-screen w-full'>
        //     <Sidebar />
        //     {/* <Header className="header-grid-area" /> */}
        //     <div className="flex flex-col">
        //         <Navbar />
        //         <Header />
        //         <Outlet className="bg-[#F7F7F7]" />

        //     </div>


        // </div>
    )
}

export default AdminLayout

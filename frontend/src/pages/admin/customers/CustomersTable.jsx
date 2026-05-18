import React, { useState } from 'react'

import { useSelector } from "react-redux";
import { BiSolidEditAlt } from "react-icons/bi";
import TabularList from '../../../components/admin/tables/TabularList';
import { useGetCustomersQuery } from '../../../redux/features/admin/customerApi';
import returnDate from '../../../utils/dateFormatter';

const CustomersTable = () => {

        const [currentPage, setCurrentPage] = useState(1)
        const [filterStatus, setFilterStatus] = useState("All")
        const [isModalOpen, setIsModalOpen] = useState(false)

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const {data, isLoading}= useGetCustomersQuery({
        page: currentPage,
        // status: filterStatus
    })

    const customers= data?.data?.customers
    const totalCustomers=data?.data?.totalCustomers
    const totalPages=data?.data?.totalPages
    const limit=10


    const columns = [
        {
            name: 'Customer ID',
            selector: row => row.user,
            cell: row => (
                <span className="text-sm">#{row._id.slice(0, 8)}</span>
            ),
            sortable: true,
        },
        {
            name: 'Date Of Registration',
            selector: row => row.registration,
            cell: row => (
                <span className="text-xs text-gray-500 dark:text-gray-400">{
                    returnDate(row.createdAt)
                }</span>
            ),
            sortable: true,
            wrap: true,
        },
        {
            name: 'Customer Name',
            selector: row => row.name,
            cell: row => (
                <span className="text-sm">{row.name}</span>
            ),
            sortable: true,
            wrap: true,
        },
        {
            name: 'Total Orders Placed',
            selector: row => (
                <span className="text-sm px-auto">{row.totalOrders}</span>
            ),
            sortable: true,
            wrap: true,
        },
        {
            name: 'Action',
            cell: (row) => (
                <button 
                // onClick={() => handleStatusUpdate(row)}
                    className='hover:bg-gray-100 dark:hover:bg-gray-500 p-2 rounded-full transition-all duration-200 ease-linear'>
                    <BiSolidEditAlt color={`${isDarkMode ? 'white' : 'black'}`} size={20} />
                </button>
            ),
            ignoreRowClick: true,
        }
    ];

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm  dark:bg-[#1D1D1D]">
            {/* Header */}
            <div className="flex flex-row justify-between items-center gap-4 mb-2 sm:px-2">
                <h2 className="text-lg font-[500] text-black-color dark:text-white">Orders</h2>
            </div>

            <TabularList
            columns={columns}
            tableData={customers} 
            totalCount={totalCustomers}
            limit={limit}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            
            />
            {/* {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 dark:bg-white dark:bg-opacity-20">
                    <div className="bg-white dark:bg-[#1D1D1D] p-6 rounded-2xl w-[400px] shadow-lg">
                        <h3 className="text-lg font-semibold mb-4 dark:text-white">
                            Update Order Status
                        </h3>

                        <p className="text-sm mb-2 dark:text-gray-300">
                            Order ID: {selectedOrder?._id}
                        </p>

                        <select
                            value={newStatus}
                            onChange={(e) => setNewStatus(e.target.value)}
                            className="w-full p-2 border rounded-lg mb-4 dark:bg-[#333] dark:text-white focus:border-gray-500"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 transition-colors duration-400 ease-in-out"
                            >
                                Cancel
                            </button>

                            <button
                                // onClick={() => updateOrder(selectedOrder._id)}
                                className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition-colors duration-400 ease-in-out"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            )} */}

        </div>



    )
}

export default CustomersTable

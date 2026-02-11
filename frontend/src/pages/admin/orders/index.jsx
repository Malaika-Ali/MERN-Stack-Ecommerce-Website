import React, { useState } from 'react';
import StatsCard from '../../../components/cards/StatsCard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

import { BiSolidEditAlt } from "react-icons/bi";
import OrdersTable from './Table';


const Button = ({ children, variant = 'default', size = 'md', className = '', ...props }) => {
    const baseStyles = 'rounded px-4 py-2 font-medium';
    const variants = {
        default: 'bg-green-600 text-white hover:bg-green-700',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    };
    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

const stats = [
    {
        title: "Total Orders",
        stat: `19`
    },
    {
        title: "Pending Orders",
        stat: 2
    },
    {
        title: "On Delivery Orders",
        stat: 15
    },
    {
        title: "Approved Orders",
        stat: 2
    },
]



const Orders = () => {

    const navigate = useNavigate()
    // const handleAddProduct = () => {
    //     navigate('/admin/add-product')
    // }



    const dropdownOptions = [
        { value: "All", label: "All Categories" },
        { value: "Published", label: "Published" },
        { value: "Out of Stock", label: "Out of Stock" },
        { value: "Inactive", label: "Inactive" },
    ]


    const [filterText, setFilterText] = useState("")
    const [filterStatus, setFilterStatus] = useState("All Categories")

    const handleDropdownChange = (value) => {
        setFilterStatus(value === "All" ? "All Categories" : value)
    }

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);



    return (
        <div className="flex flex-col px-6 pb-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-xl font-[500] dark:text-white">Orders List</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Here you can find all of your products
                    </p>
                </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stats?.map((stat, index) => (
                    <StatsCard key={index} statsTitle={stat.title} statsNumber={stat.stat} />
                )

                )}
            </div>

            {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <OutlinedInput placeholder="Search by name, Product ID..." className="w-full md:w-80" />
                <div className="flex gap-2 flex-wrap">
                    <Select>
                        <SelectItem value="All Status">All Status</SelectItem>
                        <SelectItem value="Published">Published</SelectItem>
                        <SelectItem value="Out Stock">Out Stock</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                    </Select>
                </div>
            </div> */}

            {/* <Card>
                <CardContent>
                    <DataTable
                        columns={columns}
                        data={products}
                        customStyles={customStyles}
                        pagination
                        responsive
                        highlightOnHover
                    />
                </CardContent>
            </Card> */}


            {/* <div className="bg-white rounded-2xl p-6 shadow-sm  dark:bg-[#1D1D1D]">
             
                <div className="flex flex-row justify-between items-center gap-4 mb-2 sm:px-2">
                    <h2 className="text-lg font-[500] text-black-color dark:text-white">Orders</h2>
                    <div className="flex flex-wrap rounded-full gap-2 sm:gap-4">
                        <CustomDropdown value={filterStatus} onChange={handleDropdownChange} options={dropdownOptions} />
                    </div>
                </div>

                <OrdersTable />
            </div> */}
            <OrdersTable/>
        </div>
    );
};

export default Orders;
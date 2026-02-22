import React, { useState } from 'react';
import StatsCard from '../../../components/cards/StatsCard';
import { useSelector } from "react-redux";

import OrdersTable from './Table';


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
 
    const dropdownOptions = [
        { value: "All", label: "All Categories" },
        { value: "Published", label: "Published" },
        { value: "Out of Stock", label: "Out of Stock" },
        { value: "Inactive", label: "Inactive" },
    ]

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
            <OrdersTable/>
        </div>
    );
};

export default Orders;
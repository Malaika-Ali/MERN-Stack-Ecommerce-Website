import React from 'react'
import StatsCard from '../../../components/cards/StatsCard'
import CustomersTable from './CustomersTable'

const Customers = () => {
    const stats = [
        {
            title: "Total Orders",
            // stat: `${totalOrders}`
            stat: 2
        },
        {
            title: "Pending Orders",
            // stat: `${pendingOrders}`
            stat: 2

        },
        {
            title: "Shipped Orders",
            // stat: `${shippedOrders}`
            stat: 2
        },
        {
            title: "Delivered Orders",
            // stat: `${deliveredOrders}`
            stat: 2
        },
    ]
    return (
        <div className="flex flex-col px-6 pb-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-xl font-[500] dark:text-white">Customers List</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Here you can find details of the customers
                    </p>
                </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stats?.map((stat, index) => (
                    <StatsCard key={index} statsTitle={stat.title} statsNumber={stat.stat} />
                )
                )}
            </div>
            <CustomersTable/>
        </div>
    )
}

export default Customers

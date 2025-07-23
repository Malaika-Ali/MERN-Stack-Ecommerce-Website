import React from 'react';

const customers = [
    {
        name: 'Marks Hoverson',
        orders: 25,
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        name: 'Marks Hoverson',
        orders: 15,
        image: 'https://randomuser.me/api/portraits/men/33.jpg',
    },
    {
        name: 'Jhony Peters',
        orders: 23,
        image: 'https://randomuser.me/api/portraits/men/34.jpg',
    },
];

const WeeklyTopCustomers = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm px-6 py-8 w-full max-w-md col-span-4">
            <h2 className="text-md font-semibold text-gray-800 mb-4">Weekly Top Customers</h2>
            <div className="space-y-4">
                {customers.map((customer, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-xl py-3 transition"
                    >
                        <div className="flex items-center space-x-4">
                            <img
                                src={customer.image}
                                alt={customer.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-sm font-medium text-gray-800">{customer.name}</p>
                                <p className="text-xs text-gray-500">{customer.orders} Orders</p>
                            </div>
                        </div>
                        <button className="text-blue-600 text-sm font-medium hover:underline">
                            View
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeeklyTopCustomers;

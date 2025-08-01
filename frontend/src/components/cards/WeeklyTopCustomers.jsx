import React from 'react';

// const customers = [
//     {
//         name: 'Marks Hoverson',
//         orders: 25,
//         image: 'https://randomuser.me/api/portraits/men/32.jpg',
//     },
//     {
//         name: 'Marks Hoverson',
//         orders: 15,
//         image: 'https://randomuser.me/api/portraits/men/33.jpg',
//     },
//     {
//         name: 'Jhony Peters',
//         orders: 23,
//         image: 'https://randomuser.me/api/portraits/men/34.jpg',
//     },
//     {
//         name: 'Jhony Peters',
//         orders: 23,
//         image: 'https://randomuser.me/api/portraits/men/34.jpg',
//     },
// ];

const WeeklyTopCustomers = ({ customers }) => {
    return (
        // <div className="bg-white rounded-2xl shadow-sm px-6 py-8 w-full max-w-md col-span-4 top-customers">
        <div className="bg-[#DBDBDB] rounded-3xl shadow-sm px-4 py-8 w-full max-w-md lg:col-span-4 top-customers  dark:bg-light-gray">

            <h2 className="text-md font-[500] text-gray-800 mb-6 px-2 dark:text-white">Weekly Top Customers</h2>
            <div className="space-y-2">
                {customers?.map((customer, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-xl p-3 transition dark:bg-dark-bg"
                    >
                        <div className="flex items-center space-x-4">
                            {/* <img
                                src={customer.image}
                                alt={customer.name}
                                className="w-10 h-10 rounded-full object-cover"
                            /> */}
                            <div>
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-300">{customer.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{customer.orderCount} Orders | Rs {customer.totalSpent} Sales</p>
                            </div>
                        </div>
                        <p className="text-black-color opacity-70 text-xs font-[400] hover:underline dark:text-white">
                            {customer.city}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(WeeklyTopCustomers);

// import React, { useState } from "react";
// import DataTable from "react-data-table-component";

// // Sample order data
// const ordersData = [
//     {
//         id: "#0234",
//         customer: "Amaya Weller",
//         date: "July 19, 2025",
//         total: "$100",
//         status: "Cancelled",
//     },
//     {
//         id: "#0235",
//         customer: "Sebastian Adams",
//         date: "July 18, 2025",
//         total: "$120",
//         status: "Shipped",
//     },
//     {
//         id: "#0236",
//         customer: "Suzanne Bright",
//         date: "July 18, 2025",
//         total: "$99",
//         status: "Shipped",
//     },
//     {
//         id: "#0237",
//         customer: "Peter Howl",
//         date: "July 17, 2025",
//         total: "$150",
//         status: "Pending",
//     },
//     {
//         id: "#0238",
//         customer: "Anita Singh",
//         date: "July 16, 2025",
//         total: "$200",
//         status: "Delivered",
//     },
// ];

// // Status badge colors
// const statusBadge = (status) => {
//     const baseClasses =
//         "text-xs font-medium px-3 py-1 rounded-full inline-block";
//     if (status === "Shipped") {
//         return (
//             <span className={`${baseClasses} bg-blue-100 text-blue-600`}>
//                 Shipped
//             </span>
//         );
//     } else if (status === "Pending") {
//         return (
//             <span className={`${baseClasses} bg-yellow-100 text-yellow-600`}>
//                 Pending
//             </span>
//         );
//     }
//     else if (status === "Delivered") {
//         return (
//             <span className={`${baseClasses} bg-green-100 text-green-600`}>
//                 Delivered
//             </span>
//         );
//     }
//     else if (status === "Cancelled") {
//         return (
//             <span className={`${baseClasses} bg-red-100 text-red-600`}>
//                 Cancelled
//             </span>
//         );
//     }
// };

// // Table columns
// const columns = [
//     {
//         name: "No",
//         selector: (_, index) => index + 1,
//         width: "70px",
//         sortable: false,
//     },
//     {
//         name: "Order ID",
//         selector: (row) => row.id,
//         sortable: true,
//     },
//     {
//         name: "Customer",
//         selector: (row) => row.customer,
//         sortable: true,

//     },
//     {
//         name: "Date",
//         selector: (row) => row.date,
//         sortable: true,
//         center: true
//     },
//     {
//         name: "Total",
//         selector: (row) => row.total,
//         sortable: true,
//         center: true

//     },
//     {
//         name: "Status",
//         selector: (row) => row.status,
//         cell: (row) => statusBadge(row.status),
//         sortable: true,
//         center: true

//     },
// ];

// export default function RecentOrders() {
//     const [filterText, setFilterText] = useState("");
//     const [filterStatus, setFilterStatus] = useState("All");

//     const filteredData = ordersData.filter((item) => {
//         const matchesText =
//             item.customer.toLowerCase().includes(filterText.toLowerCase()) ||
//             item.id.toLowerCase().includes(filterText.toLowerCase());

//         const matchesStatus =
//             filterStatus === "All" || item.status === filterStatus;

//         return matchesText && matchesStatus;
//     });

//     return (
//         // <div className="bg-white rounded-2xl p-6 shadow-sm col-span-12 lg:col-span-8 recent-orders">
//         <div className="bg-white rounded-2xl p-6 shadow-sm recent-orders lg:col-span-8">

//             {/* Header */}
//             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-2 px-4">
//                 <h2 className="text-lg font-[500] text-black-color">Recent Orders</h2>

//                 <div className="flex flex-wrap rounded-full gap-2 sm:gap-4">
//                     {/* <input
//                         type="text"
//                         placeholder="Search orders..."
//                         className="px-3 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
//                         value={filterText}
//                         onChange={(e) => setFilterText(e.target.value)}
//                     /> */}

//                     <select
//                         className="px-3 py-2 text-sm rounded-full border focus:outline-none focus:ring-1 focus:ring-[#9B9B9B] cursor-pointer"
//                         value={filterStatus}
//                         onChange={(e) => setFilterStatus(e.target.value)}
//                     >
//                         <option value="All">All Categories</option>
//                         <option value="Shipped">Shipped</option>
//                         <option value="Pending">Pending</option>
//                         <option value="Delivered">Delivered</option>
//                     </select>
//                 </div>
//             </div>

//             {/* DataTable */}
//             <DataTable
//                 columns={columns}
//                 data={filteredData}
//                 // noHeader
//                 highlightOnHover
//                 responsive
//                 persistTableHead
//                 customStyles={{
//                     rows: {
//                         style: {
//                             minHeight: "48px",
//                             borderBottom: "none",
//                             // backgroundColor: "#F6F6F6",
//                             borderRadius: "7px",
//                             // marginBlock: "0.2em",
//                             border: "none",
//                             outline: "none"
//                         },
//                     },
//                     headCells: {
//                         style: {
//                             fontSize: "14px",
//                             fontWeight: 600,
//                             color: "#6b7280",
//                             backgroundColor: "#fff",
//                             paddingLeft: "16px",
//                             paddingRight: "16px",
//                         },
//                     },
//                     cells: {
//                         style: {
//                             paddingLeft: "16px",
//                             paddingRight: "16px",
//                             fontSize: "14px",
//                             color: "#374151",
//                             borderBottom: "none",

//                         },
//                     },
//                 }}
//             />
//         </div>
//     );
// }
















"use client"

import { useState } from "react"
import DataTable from "react-data-table-component"
import { ChevronDown } from "lucide-react"

// Sample order data
const ordersData = [
    {
        id: "#0234",
        customer: "Amaya Weller",
        date: "July 19, 2025",
        total: "$100",
        status: "Cancelled",
    },
    {
        id: "#0235",
        customer: "Sebastian Adams",
        date: "July 18, 2025",
        total: "$120",
        status: "Shipped",
    },
    {
        id: "#0236",
        customer: "Suzanne Bright",
        date: "July 18, 2025",
        total: "$99",
        status: "Shipped",
    },
    {
        id: "#0237",
        customer: "Peter Howl",
        date: "July 17, 2025",
        total: "$150",
        status: "Pending",
    },
    {
        id: "#0238",
        customer: "Anita Singh",
        date: "July 16, 2025",
        total: "$200",
        status: "Delivered",
    },
]

// Status badge colors
const statusBadge = (status) => {
    const baseClasses = "text-xs font-medium px-3 py-1 rounded-full inline-block"
    if (status === "Shipped") {
        return <span className={`${baseClasses} bg-blue-100 text-blue-600`}>Shipped</span>
    } else if (status === "Pending") {
        return <span className={`${baseClasses} bg-yellow-100 text-yellow-600`}>Pending</span>
    } else if (status === "Delivered") {
        return <span className={`${baseClasses} bg-green-100 text-green-600`}>Delivered</span>
    } else if (status === "Cancelled") {
        return <span className={`${baseClasses} bg-red-100 text-red-600`}>Cancelled</span>
    }
}

// Custom Dropdown Component
const CustomDropdown = ({ value, onChange, options }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (optionValue) => {
        onChange(optionValue)
        setIsOpen(false)
    }

    return (
        <div className="relative">
            <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#9B9B9B] transition-colors duration-200 min-w-[140px]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-gray-700">{value}</span>
                <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                    <div className="absolute right-0 z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${value === option.label ? "bg-[#DCDCDC] text-black-color" : "text-gray-700"
                                    }`}
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

// Table columns
const columns = [
    {
        name: "No",
        selector: (_, index) => index + 1,
        width: "70px",
        sortable: false,
    },
    {
        name: "Order ID",
        selector: (row) => row.id,
        sortable: true,
    },
    {
        name: "Customer",
        selector: (row) => row.customer,
        sortable: true,
    },
    {
        name: "Date",
        selector: (row) => row.date,
        sortable: true,
        center: true,
    },
    {
        name: "Total",
        selector: (row) => row.total,
        sortable: true,
        center: true,
    },
    {
        name: "Status",
        selector: (row) => row.status,
        cell: (row) => statusBadge(row.status),
        sortable: true,
        center: true,
    },
]

export default function RecentOrders() {
    const [filterText, setFilterText] = useState("")
    const [filterStatus, setFilterStatus] = useState("All Categories")

    const dropdownOptions = [
        { value: "All", label: "All Categories" },
        { value: "Shipped", label: "Shipped" },
        { value: "Pending", label: "Pending" },
        { value: "Delivered", label: "Delivered" },
        { value: "Cancelled", label: "Cancelled" },
    ]

    const filteredData = ordersData.filter((item) => {
        const matchesText =
            item.customer.toLowerCase().includes(filterText.toLowerCase()) ||
            item.id.toLowerCase().includes(filterText.toLowerCase())
        const matchesStatus = filterStatus === "All Categories" || item.status === filterStatus
        return matchesText && matchesStatus
    })

    const handleDropdownChange = (value) => {
        setFilterStatus(value === "All" ? "All Categories" : value)
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm recent-orders lg:col-span-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-2 px-2">
                <h2 className="text-lg font-[500] text-black-color">Recent Orders</h2>
                <div className="flex flex-wrap rounded-full gap-2 sm:gap-4">
                    <CustomDropdown value={filterStatus} onChange={handleDropdownChange} options={dropdownOptions} />
                </div>
            </div>

            {/* DataTable */}
            <DataTable
                columns={columns}
                data={filteredData}
                highlightOnHover
                responsive
                persistTableHead
                customStyles={{
                    rows: {
                        style: {
                            minHeight: "48px",
                            borderBottom: "none",
                            borderRadius: "7px",
                            border: "none",
                            outline: "none",
                        },
                    },
                    headCells: {
                        style: {
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#6b7280",
                            backgroundColor: "#fff",
                            paddingLeft: "16px",
                            paddingRight: "16px",
                        },
                    },
                    cells: {
                        style: {
                            paddingLeft: "16px",
                            paddingRight: "16px",
                            fontSize: "14px",
                            color: "#374151",
                            borderBottom: "none",
                        },
                    },
                }}
            />
        </div>
    )
}

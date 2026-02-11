import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import { useGetOrdersQuery } from '../../../redux/features/admin/orderApi';
import CustomDropdown from '../../../components/inputs/drop downs/CustomDropDown';

import { useSelector } from "react-redux";
import { BiSolidEditAlt } from "react-icons/bi";


const OrdersTable = () => {
    const { data, isLoading, error } = useGetOrdersQuery()
    const orders = data?.data

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);


    const [filterText, setFilterText] = useState("")
    const [filterStatus, setFilterStatus] = useState("All Categories")

    const dropdownOptions = [
        { value: "All", label: "All Categories" },
        { value: "Published", label: "Published" },
        { value: "Out of Stock", label: "Out of Stock" },
        { value: "Inactive", label: "Inactive" },
    ]

    const handleDropdownChange = (value) => {
        setFilterStatus(value === "All" ? "All Categories" : value)
    }



    let returnDate = (date) => {
        date = new Date(date);
        const day = date.getUTCDate().toString().padStart(2, '0');
        // Months are 0-indexed, so add 1
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
        // Get the last two digits of the year
        const year = date.getUTCFullYear().toString().slice(-2);

        // 3. Format the date as dd-mm-yy
        const formattedDate = `${day}-${month}-${year}`;
        return formattedDate;
    }

    const columns = [
        {
            name: 'Order ID',
            selector: row => row._id,
            cell: row => (
                <span className="text-sm">#{row._id.slice(0, 8)}</span>
            ),
            sortable: true,
        },
        {
            name: 'Date',
            selector: row => row.id,
            cell: row => (
                <span className="text-xs text-gray-500 dark:text-gray-400">{
                    returnDate(row.createdAt)
                }</span>
            ),
            sortable: true,
            wrap: true,
        },
        {
            name: 'Customer#',
            selector: row => row.materialOrFabric,
            cell: row => (
                <span className="text-sm">#{row.user.slice(0, 8)}</span>
            ),
            sortable: true,
            wrap: true,
        },
        // {
        //     name: 'Payment',
        //     selector: row => row.color,
        //     cell: row => (
        //         <span className="text-sm">{row.totalAmount}</span>
        //     ),
        //     sortable: true,
        //     wrap: true,
        // },
        {
            name: 'Total',
            selector: row => (
                <span className="text-sm">{`Rs. ${row.totalAmount}`}</span>
            ),
            sortable: true
        },
        // {
        //     name: 'Items',
        //     selector: row => row.products.map(item=>),
        //     sortable: true
        // },
        {
            name: 'Status',
            selector: row => row.orderStatus,
            sortable: true
        },

        {
            name: 'Status',
            selector: row => "Published",
            cell: row => (
                <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${row.orderStatus === 'Published'
                        ? 'bg-green-100 text-green-700'
                        : row.status === 'Out Stock'
                            ? 'bg-orange-100 text-orange-700'
                            : row.status === 'Inactive'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-gray-100 text-gray-700'
                        }`}
                >
                    {row.orderStatus}
                </span>
            ),
            sortable: true
        },
        {
            name: 'Action',
            cell: () => (
                <button >
                    <BiSolidEditAlt color={`${isDarkMode ? 'white' : 'black'}`} size={20} />
                </button>
            ),
            ignoreRowClick: true,
        }
    ];

    const filteredData = orders?.filter((item) => {
        const matchesText =
            item.orderStatus.toLowerCase().includes(filterText.toLowerCase())
        // || item.id.toLowerCase().includes(filterText.toLowerCase())
        const matchesStatus = filterStatus === "All Categories" || item.status === filterStatus
        return matchesText && matchesStatus
    })

    const paginationComponentOptions = {
        noRowsPerPage: true,
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Orders',
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm  dark:bg-[#1D1D1D]">
            {/* Header */}
            <div className="flex flex-row justify-between items-center gap-4 mb-2 sm:px-2">
                <h2 className="text-lg font-[500] text-black-color dark:text-white">Orders</h2>
                <div className="flex flex-wrap rounded-full gap-2 sm:gap-4">
                    <CustomDropdown value={filterStatus} onChange={handleDropdownChange} options={dropdownOptions} />
                </div>
            </div>
                <div className="min-w-[600px] lg:min-w-[800px] rounded-2xl">
                    <DataTable
                        columns={columns}
                        data={filteredData}
                        highlightOnHover
                        responsive
                        persistTableHead
                        pagination
                        paginationComponentOptions={paginationComponentOptions}
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
                                    backgroundColor: isDarkMode ? "#333333" : "#fff",
                                    paddingLeft: "16px",
                                    paddingRight: "16px",
                                },
                            },
                            cells: {
                                style: {
                                    paddingLeft: "14px",
                                    paddingRight: "14px",
                                    paddingTop: "20px",
                                    fontSize: "14px",
                                    backgroundColor: isDarkMode ? "#333333" : "#fff",
                                    color: isDarkMode ? "#D5D5D5" : "374151",
                                    borderBottom: "none",
                                },
                            },
                        }}
                    />
               
            </div>
        </div>



    )
}

export default OrdersTable

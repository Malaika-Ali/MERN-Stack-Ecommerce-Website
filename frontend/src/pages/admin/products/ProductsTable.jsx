import React, { useState } from 'react'
import { useSelector } from "react-redux";

import CustomDropdown from '../../../components/inputs/drop downs/CustomDropDown'
import TabularList from '../../../components/admin/tables/TabularList'
import { useGetProductsQuery } from '../../../redux/features/admin/productApi'
import { BiSolidEditAlt } from "react-icons/bi";

const ProductsTable = () => {
    const [filterStatus, setFilterStatus] = useState("All Categories")
    const [currentPage, setCurrentPage] = useState(1)
    const limit = 10;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const { data, isLoading, error } = useGetProductsQuery({
        page: currentPage,
        status: filterStatus
    })

    const products = data?.data?.formattedProducts
    const totalProducts = data?.data?.totalProducts
    const totalPage = data?.data?.totalPages

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    const dropdownOptions = [
        { value: "All", label: "All Categories" },
        { value: "out-of-stock", label: "Out Of Stock" },
        { value: "in-stock", label: "In Stock" },
    ]

    const columns = [
        {
            name: 'Product Name',
            selector: row => row.name,
            cell: row => (
                <div className="flex items-center gap-3 min-w-[200px]">
                    <img className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md object-cover" src={row.image}>
                    </img>
                    <div className="flex flex-col">
                        <span className="font-medium text-sm">{row.name}</span>
                        <span className="text-xs text-gray-500">{row.category}</span>
                    </div>
                </div>
            ),
            sortable: true,
            grow: 2,
            wrap: true,
        },
        {
            name: 'Create Date',
            selector: row => row.id,
            cell: row => (
                <span className="text-xs text-gray-500 dark:text-gray-400">{row.createdAt.slice(0, 10)}</span>
            ),
            sortable: true,
            wrap: true,
        },
        {
            name: 'Fabric or Material',
            selector: row => row.materialOrFabric,
            cell: row => (
                <span className="text-sm">{row.materialOrFabric}</span>
            ),
            sortable: true,
            wrap: true,
        },
        {
            name: 'Color',
            selector: row => row.color,
            cell: row => (
                <span className="text-sm">{row.color}</span>
            ),
            sortable: true,
            wrap: true,
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true
        },
        {
            name: 'Stock',
            selector: row => row.quantity,
            sortable: true
        },
        // {
        //     name: 'Status',
        //     selector: row => "Published",
        //     cell: row => (
        //         <span
        //             className={`px-2 py-1 text-xs rounded-full font-medium ${row.status === 'Published'
        //                 ? 'bg-green-100 text-green-700'
        //                 : row.status === 'Out Stock'
        //                     ? 'bg-orange-100 text-orange-700'
        //                     : row.status === 'Inactive'
        //                         ? 'bg-red-100 text-red-700'
        //                         : 'bg-gray-100 text-gray-700'
        //                 }`}
        //         >
        //             {row.status}
        //         </span>
        //     ),
        //     sortable: true
        // },
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

    const handleDropdownChange = (value) => {
        setFilterStatus(value === "All Categories" ? "All" : value)
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm  dark:bg-[#1D1D1D]">
            {/* Header */}
            <div className="flex flex-row justify-between items-center gap-4 mb-2 sm:px-2">
                <h2 className="text-lg font-[500] text-black-color dark:text-white">Products</h2>
                <div className="flex flex-wrap rounded-full gap-2 sm:gap-4">
                    <CustomDropdown value={filterStatus} onChange={handleDropdownChange} options={dropdownOptions}
                    />
                </div>
            </div>

            {/* DataTable */}

            <TabularList
                columns={columns}
                tableData={products}
                totalCount={totalProducts}
                limit={limit}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />

        </div>
    )
}

export default ProductsTable

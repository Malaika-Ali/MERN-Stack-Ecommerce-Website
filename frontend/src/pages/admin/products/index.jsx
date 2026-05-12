import React, { useState } from 'react';

import StatsCard from '../../../components/cards/StatsCard';
import IconButton from '../../../components/buttons/IconButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import CustomDropdown from '../../../components/inputs/drop downs/CustomDropDown';

import { BiSolidEditAlt } from "react-icons/bi";
import { useGetProductsQuery } from '../../../redux/features/admin/productApi';
import { FiPlus } from "react-icons/fi";

import ProductsTable from './ProductsTable';

const stats = [
    {
        title: "Total Products",
        stat: `19`
    },
    {
        title: "Out of Stock Products",
        stat: 2
    },
    {
        title: "Published Products",
        stat: 15
    },
    {
        title: "Inactive Products",
        stat: 2
    },
]

const Products = () => {

    const navigate = useNavigate()
    const handleAddProduct = () => {
        navigate('/admin/add-product')
    }

    const { data, isLoading, error } = useGetProductsQuery()

    const products = data?.data

    const dropdownOptions = [
        { value: "All", label: "All Categories" },
        { value: "Published", label: "Published" },
        { value: "Out of Stock", label: "Out of Stock" },
        { value: "Inactive", label: "Inactive" },
    ]

    // const [filterText, setFilterText] = useState("")
    // const [filterStatus, setFilterStatus] = useState("All Categories")

    const handleDropdownChange = (value) => {
        setFilterStatus(value === "All" ? "All Categories" : value)
    }

    // const filteredData = products?.filter((item) => {
    //     const matchesText =
    //         item.name.toLowerCase().includes(filterText.toLowerCase()) ||
    //         item.id.toLowerCase().includes(filterText.toLowerCase())
    //     const matchesStatus = filterStatus === "All Categories" || item.status === filterStatus
    //     return matchesText && matchesStatus
    // })


    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return (
        <div className="flex flex-col px-6 pb-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-xl font-[500] dark:text-white">Products List</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Here you can find all of your products
                    </p>
                </div>
                <div className="flex gap-2">
                    <button className='rounded-full flex justify-between items-center py-2 px-4 bg-black-color text-white gap-2' onClick={handleAddProduct}>
                        <FiPlus />
                        Add Product
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stats?.map((stat, index) => (
                    <StatsCard key={index} statsTitle={stat.title} statsNumber={stat.stat} />
                )

                )}
            </div>

                {/* DataTable */}
                <ProductsTable/>
            </div>
        
    );
};

export default Products;

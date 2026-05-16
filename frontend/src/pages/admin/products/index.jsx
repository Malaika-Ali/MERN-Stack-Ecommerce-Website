import React, { useState } from 'react';

import StatsCard from '../../../components/cards/StatsCard';
import IconButton from '../../../components/buttons/IconButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import CustomDropdown from '../../../components/inputs/drop downs/CustomDropDown';

import { BiSolidEditAlt } from "react-icons/bi";
import { useGetProductsStatsQuery } from '../../../redux/features/admin/productApi';
import { FiPlus } from "react-icons/fi";

import ProductsTable from './ProductsTable';



const Products = () => {

    const navigate = useNavigate()
    const handleAddProduct = () => {
        navigate('/admin/add-product')
    }

    const dropdownOptions = [
        { value: "All", label: "All Categories" },
        { value: "Published", label: "Published" },
        { value: "Out of Stock", label: "Out of Stock" },
        { value: "Inactive", label: "Inactive" },
    ]

    const handleDropdownChange = (value) => {
        setFilterStatus(value === "All" ? "All Categories" : value)
    }

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    const {data, isLoading}=useGetProductsStatsQuery()
    
    const stats = [
        {
            title: "Total Products",
            stat: `${data?.data?.totalProducts ?? 0}`
        },
        {
            title: "Out of Stock Products",
            stat: `${data?.data?.outOfStockProducts ?? 0}`
        },
        {
            title: "In Stock Products",
            stat: `${data?.data?.inStockProducts ?? 0}`
        },
        {
            title: "Best Selling Products",
            stat: `${data?.data?.bestSellingProducts ?? 0}`
        },
    ]

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

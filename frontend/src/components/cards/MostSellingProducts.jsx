import React from 'react'
import { useGetTopProductsQuery } from "../../redux/features/admin/dashboardApi";

function MostSellingProducts() {

    const { data, isLoading, error } = useGetTopProductsQuery({
        startDate: "2025-01-03",
        endDate: "2025-02-28"
    })

    const products = data?.data || [];

    return (
        <div className="bg-[#111111] rounded-3xl  px-5 py-8 w-full max-w-md lg:max-w-full h-fit lg:col-span-4 my-6 selling-products dark:bg-[#000000]">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-md font-[500] text-white">
                    Top Selling Products
                </h2>
            </div>

            <ul className="space-y-4">
                {products?.map((product, idx) => (
                    <li key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md object-cover" src={product.image}>
                            </img>
                            <div className="text-sm">
                                <p className="font-medium text-white opacity-90">{product.name}</p>
                                <p className="text-xs text-gray-500">ID: {product._id.slice(0, 8)}</p>

                            </div>
                        </div>
                        <span className="text-sm text-white opacity-80">{product.totalSales} Sales</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default React.memo(MostSellingProducts)
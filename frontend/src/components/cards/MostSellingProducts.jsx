import { FaShoePrints } from "react-icons/fa";
import { BsBackpack2Fill } from "react-icons/bs";
import { FaBottleWater } from "react-icons/fa6";
import { useGetTopProductsQuery } from "../../redux/features/admin/dashboardApi";

// const products = [
//     {
//         id: "2441310",
//         name: "Black Bag",
//         icon: 'https://plus.unsplash.com/premium_photo-1677995700947-4b92cb1bba76?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         sales: "1k Sales",
//     },
//     {
//         id: "1241318",
//         name: "Black shirt",
//         icon: 'https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         sales: "300 Sales",
//     },
//     {
//         id: "8441573",
//         name: "Black Jewellery",
//         icon: 'https://images.unsplash.com/photo-1731085819151-c59cd8c27098?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         sales: "200 Sales",
//     },
//     {
//         id: "8441289",
//         name: "Black Shoes",
//         icon: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         sales: "100 Sales",
//     },
// ];


export default function MostSellingProducts() {

    const { data, isLoading, error } = useGetTopProductsQuery({
        startDate: "2025-01-03",
        endDate: "2025-02-28"
    })

    console.log(data)
    const products = data?.topProducts || [];

    return (
        // <div className="bg-black-color rounded-2xl shadow-sm px-5 py-8 w-full max-w-md lg:max-w-full h-fit col-span-12 md:col-span-4 lg:col-span-4 my-6 selling-products">
        <div className="bg-[#111111] rounded-3xl  px-5 py-8 w-full max-w-md lg:max-w-full h-fit lg:col-span-4 my-6 selling-products">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-md font-[500] text-white">
                    Top Selling Products
                </h2>

            </div>

            <ul className="space-y-4">
                {products.map((product, idx) => (
                    <li key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md" src={product.icon}>
                                {/* {product.icon} */}
                            </img>
                            <div className="text-sm">
                                <p className="font-medium text-white opacity-90">{product.name}</p>
                                {/* <p className="text-xs text-white opacity-70">ID: {product.id}</p> */}
                                <p className="text-xs text-gray-500">ID: {product.id}</p>

                            </div>
                        </div>
                        <span className="text-sm text-white opacity-80">{product.sales}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

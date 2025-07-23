import { FaShoePrints } from "react-icons/fa";
import { BsBackpack2Fill } from "react-icons/bs";
import { FaBottleWater } from "react-icons/fa6";

const products = [
    {
        id: "2441310",
        name: "Snicker Vento",
        icon: <FaShoePrints className="text-2xl text-blue-600" />,
        sales: "128 Sales",
    },
    {
        id: "1241318",
        name: "Blue Backpack",
        icon: <BsBackpack2Fill className="text-2xl text-blue-500" />,
        sales: "401 Sales",
    },
    {
        id: "8441573",
        name: "Water Bottle",
        icon: <FaBottleWater className="text-2xl text-cyan-600" />,
        sales: "1K+ Sales",
    },
];

export default function MostSellingProducts() {
    return (
        // <div className="bg-black-color rounded-2xl shadow-sm px-5 py-8 w-full max-w-md lg:max-w-full h-fit col-span-12 md:col-span-4 lg:col-span-4 my-6 selling-products">
        <div className="bg-black-color rounded-2xl shadow-sm px-5 py-8 w-full max-w-md lg:max-w-full h-fit lg:col-span-4 my-6 selling-products">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-[500] text-white">
                    Top Selling Products
                </h2>

            </div>

            <ul className="space-y-4">
                {products.map((product, idx) => (
                    <li key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
                                {product.icon}
                            </div>
                            <div className="text-sm">
                                <p className="font-medium text-gray-800">{product.name}</p>
                                <p className="text-xs text-gray-400">ID: {product.id}</p>
                            </div>
                        </div>
                        <span className="text-sm text-gray-500">{product.sales}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

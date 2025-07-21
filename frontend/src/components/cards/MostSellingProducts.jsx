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
        <div className="bg-white rounded-xl shadow-sm p-5 w-full max-w-md lg:max-w-full h-fit">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Top Selling Products
                </h2>
                <button className="text-gray-400 hover:text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v.01M12 12v.01M12 18v.01" />
                    </svg>
                </button>
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

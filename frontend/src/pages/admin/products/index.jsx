import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { MoreHorizontal } from 'lucide-react';
import TextInput from '../../../components/inputs/TextInput';
import OutlinedDropDown from '../../../components/inputs/drop downs/OutlinedDropDown';
import OutlinedInput from '../../../components/inputs/text fields/OutlinedInput';
import StatsCard from '../../../components/cards/StatsCard';
import IconButton from '../../../components/buttons/IconButton';
import { useNavigate } from 'react-router-dom';
import RoundedButton from '../../../components/buttons/RoundedButton';
import { useSelector } from "react-redux";
import CustomDropdown from '../../../components/inputs/drop downs/CustomDropDown';

import { CiEdit } from "react-icons/ci";
import { BiSolidEditAlt } from "react-icons/bi";


const Button = ({ children, variant = 'default', size = 'md', className = '', ...props }) => {
    const baseStyles = 'rounded px-4 py-2 font-medium';
    const variants = {
        default: 'bg-green-600 text-white hover:bg-green-700',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    };
    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

const products = [
    {
        id: '#KM1662286',
        name: 'Airpods Pro Max 2024',
        category: 'Electric Product',
        createdAt: 'Jan 01, 2024',
        price: '$10,120.00',
        stock: '1,20,120',
        status: 'Published'
    },
    {
        id: '#KM1662200',
        name: 'Small Hi-Speed Fan',
        category: 'Electric Product',
        createdAt: 'Jan 01, 2024',
        price: '$5,180.00',
        stock: '0',
        status: 'Out Stock'
    },
    {
        id: '#KM1662211',
        name: 'Nike New Model Shoes',
        category: 'Shoes Product',
        createdAt: 'Jan 01, 2024',
        price: '$13,145.00',
        stock: '10,120',
        status: 'Published'
    },
];

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
    // {
    //     title: "New Customers",
    //     icon: <GoPeople size={25} />,
    //     arrowIcon: <LiaLongArrowAltUpSolid color='green' />,
    //     stat: data?.data?.newCustomersCount
    // },
    // {
    //     title: "Conversion Rate",
    //     icon: <PiTargetLight size={25} />,
    //     arrowIcon: <LiaLongArrowAltUpSolid color='green' />,
    //     stat: `${data?.data?.conversionRate}%`
    // },
]

// const columns = [
//     {
//         name: 'Product Name',
//         selector: row => row.name,
//         cell: row => (
//             <div className="flex flex-col">
//                 <span className="font-medium text-sm">{row.name}</span>
//                 <span className="text-xs text-gray-500">{row.category}</span>
//             </div>
//         ),
//         sortable: true,
//         grow: 2
//     },
//     {
//         name: 'ID & Create Date',
//         selector: row => row.id,
//         cell: row => (
//             <div className="flex flex-col">
//                 <span className="text-sm">{row.id}</span>
//                 <span className="text-xs text-gray-500">{row.createdAt}</span>
//             </div>
//         ),
//         sortable: true,
//     },
//     {
//         name: 'Price',
//         selector: row => row.price,
//         sortable: true
//     },
//     {
//         name: 'Stock',
//         selector: row => row.stock,
//         sortable: true
//     },
//     {
//         name: 'Status',
//         selector: row => row.status,
//         cell: row => (
//             <span
//                 className={`px-2 py-1 text-xs rounded-full font-medium ${row.status === 'Published'
//                     ? 'bg-green-100 text-green-700'
//                     : row.status === 'Out Stock'
//                         ? 'bg-orange-100 text-orange-700'
//                         : row.status === 'Inactive'
//                             ? 'bg-red-100 text-red-700'
//                             : 'bg-gray-100 text-gray-700'
//                     }`}
//             >
//                 {row.status}
//             </span>
//         ),
//         sortable: true
//     },
//     {
//         name: 'Action',
//         cell: () => (
//             <button >
//                 <BiSolidEditAlt color={`${isDarkMode ? 'white' : 'black'}`} size={20} />
//             </button>
//         ),
//         ignoreRowClick: true,
//         allowOverflow: true,
//         button: true
//     }
// ];

const customStyles = {
    rows: {
        style: {
            minHeight: '60px',
        },
    },
    headCells: {
        style: {
            fontWeight: '600',
            fontSize: '14px',
        },
    },
};

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

    const [filterText, setFilterText] = useState("")
    const [filterStatus, setFilterStatus] = useState("All Categories")

    const handleDropdownChange = (value) => {
        setFilterStatus(value === "All" ? "All Categories" : value)
    }

    const filteredData = products?.filter((item) => {
        const matchesText =
            item.name.toLowerCase().includes(filterText.toLowerCase()) ||
            item.id.toLowerCase().includes(filterText.toLowerCase())
        const matchesStatus = filterStatus === "All Categories" || item.status === filterStatus
        return matchesText && matchesStatus
    })


    const isDarkMode = useSelector((state) => state.theme.isDarkMode);


    const columns = [
        {
            name: 'Product Name',
            selector: row => row.name,
            cell: row => (
                <div className="flex items-center gap-3">
                    <img className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md object-cover" src={row.image}>
                    </img>
                    <div className="flex flex-col">
                        <span className="font-medium text-sm">{row.name}</span>
                        <span className="text-xs text-gray-500">{row.category}</span>
                    </div>
                </div>
            ),
            sortable: true,
            grow: 2
        },
        {
            name: 'ID & Create Date',
            selector: row => row.id,
            cell: row => (
                <div className="flex flex-col">
                    <span className="text-sm">{row.id}</span>
                    <span className="text-xs text-gray-500">{row.createdAt}</span>
                </div>
            ),
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true
        },
        {
            name: 'Stock',
            selector: row => row.stock,
            sortable: true
        },
        {
            name: 'Status',
            selector: row => row.status,
            cell: row => (
                <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${row.status === 'Published'
                        ? 'bg-green-100 text-green-700'
                        : row.status === 'Out Stock'
                            ? 'bg-orange-100 text-orange-700'
                            : row.status === 'Inactive'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-gray-100 text-gray-700'
                        }`}
                >
                    {row.status}
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
            allowOverflow: true,
            button: true
        }
    ];


    return (
        <div className="px-6 w-full pb-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-xl font-[500] dark:text-white">Products List</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Here you can find all of your products
                    </p>
                </div>
                <div className="flex gap-2">
                    {/* <Button>Add Product</Button> */}
                    <RoundedButton children="Add Product" handleClick={handleAddProduct} />
                    {/* <Button variant="outline">More Actions</Button> */}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {/* <Card><CardContent><p className="text-sm">Total Products</p><h2 className="text-lg font-semibold">2,40,120</h2></CardContent></Card>
                <Card><CardContent><p className="text-sm">Product Sales</p><h2 className="text-lg font-semibold">5,70,190</h2></CardContent></Card>
                <Card><CardContent><p className="text-sm">Stock Products</p><h2 className="text-lg font-semibold">1,40,530</h2></CardContent></Card>
                <Card><CardContent><p className="text-sm">Out of Stock</p><h2 className="text-lg font-semibold">99,349</h2></CardContent></Card> */}
                {stats?.map((stat, index) => (
                    <StatsCard key={index} statsTitle={stat.title} statsNumber={stat.stat} />
                )

                )}
            </div>

            {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <OutlinedInput placeholder="Search by name, Product ID..." className="w-full md:w-80" />
                <div className="flex gap-2 flex-wrap">
                    <Select>
                        <SelectItem value="All Status">All Status</SelectItem>
                        <SelectItem value="Published">Published</SelectItem>
                        <SelectItem value="Out Stock">Out Stock</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                    </Select>
                </div>
            </div> */}

            {/* <Card>
                <CardContent>
                    <DataTable
                        columns={columns}
                        data={products}
                        customStyles={customStyles}
                        pagination
                        responsive
                        highlightOnHover
                    />
                </CardContent>
            </Card> */}


            <div className="bg-white rounded-2xl p-6 shadow-sm recent-orders lg:col-span-8 dark:bg-[#1D1D1D]">
                {/* Header */}
                <div className="flex flex-row justify-between items-center gap-4 mb-2 sm:px-2">
                    <h2 className="text-lg font-[500] text-black-color dark:text-white">Products</h2>
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
                                // backgroundColor: "#fff",
                                backgroundColor: isDarkMode ? "#333333" : "#fff",
                                paddingLeft: "16px",
                                paddingRight: "16px",
                            },
                        },
                        cells: {
                            style: {
                                paddingLeft: "16px",
                                paddingRight: "16px",
                                fontSize: "14px",
                                backgroundColor: isDarkMode ? "#333333" : "#fff",
                                // color: "#374151",
                                color: isDarkMode ? "#D5D5D5" : "374151",
                                borderBottom: "none",
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default Products;

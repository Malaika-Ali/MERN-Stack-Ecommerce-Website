import { useState } from "react"
import DataTable from "react-data-table-component"
import { ChevronDown } from "lucide-react"
import { useGetRecentOrdersQuery } from "../../../redux/features/admin/dashboardApi"
import { useSelector } from "react-redux";


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
                className="flex items-center justify-between w-full px-2 sm:px-4 py-1 sm:py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#9B9B9B] transition-colors duration-200 min-w-[140px]"
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

    const { data, isLoading, error } = useGetRecentOrdersQuery({
        startDate: "2025-01-09",
        endDate: "2025-02-28"
    })

    const ordersData = data?.data
    console.log(ordersData, ordersData)

    const [filterText, setFilterText] = useState("")
    const [filterStatus, setFilterStatus] = useState("All Categories")

    const dropdownOptions = [
        { value: "All", label: "All Categories" },
        { value: "Shipped", label: "Shipped" },
        { value: "Pending", label: "Pending" },
        { value: "Delivered", label: "Delivered" },
        { value: "Cancelled", label: "Cancelled" },
    ]

    const formattedOrders = ordersData?.map((order) => ({
        id: `#${order._id.slice(-4)}`,
        customer: order.user?.name || "Unknown",
        date: new Date(order.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }),
        total: `Rs ${order.totalAmount}`,
        status: order.orderStatus,
    }))


    const filteredData = formattedOrders?.filter((item) => {
        const matchesText =
            item.customer.toLowerCase().includes(filterText.toLowerCase()) ||
            item.id.toLowerCase().includes(filterText.toLowerCase())
        const matchesStatus = filterStatus === "All Categories" || item.status === filterStatus
        return matchesText && matchesStatus
    })

    const handleDropdownChange = (value) => {
        setFilterStatus(value === "All" ? "All Categories" : value)
    }

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);



    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm recent-orders lg:col-span-8 dark:bg-[#1D1D1D]">
            {/* Header */}
            <div className="flex flex-row justify-between items-center gap-4 mb-2 sm:px-2">
                <h2 className="text-lg font-[500] text-black-color dark:text-white">Recent Orders</h2>
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
    )
}

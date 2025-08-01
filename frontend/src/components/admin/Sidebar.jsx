import { NavLink, Link } from "react-router-dom"
import {
    LayoutDashboard,
    TrendingUp,
    Package,
    FileText,
    Users,
    BarChart3,
    Settings,
    MessageCircle,
    ChevronDown,
    X,
} from "lucide-react"

const navigationItems = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        url: "/admin/dashboard",
    },
    {
        title: "Sales",
        icon: TrendingUp,
        url: "/admin/sales",
    },
    {
        title: "Products",
        icon: Package,
        url: "/admin/products",
    },
    {
        title: "Reports",
        icon: FileText,
        url: "/admin/reports",
    },
    {
        title: "Customers",
        icon: Users,
        url: "/admin/customers",
    },
    {
        title: "Stats",
        icon: BarChart3,
        url: "/admin/stats",
    },
    {
        title: "Settings",
        icon: Settings,
        url: "/admin/settings",
    },
    {
        title: "Support",
        icon: MessageCircle,
        url: "/admin/support",
    },
]


const Sidebar = ({ isOpen, setIsSidebarOpen }) => {

    const onClose = () => {
        setIsSidebarOpen(false)
    }

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

            {/* Sidebar */}
            <aside
                // fixed top-0 left-0
                className={`

        fixed top-0 left-0
         h-screen bg-white rounded-r-2xl shadow-md z-50
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:sticky lg:z-auto sidebar-grid-area sm:min-w-sm
        ${isOpen ? "translate-x-0" : "-translate-x-full"} dark:bg-dark-sidebar-bg
      `} >
                {/* Sticky inner container */}
                {/* <div className="sticky top-0"> */}
                {/* Mobile Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 lg:hidden">
                    <X className="h-5 w-5 text-gray-500" />
                </button>

                {/* Header */}
                <div className="p-4 pb-8">
                    {/* <div className="flex items-center gap-3 p-2 rounded-xl border border-gray-200">
                        <div className="h-10 w-10 rounded-lg bg-gray-800 flex items-center justify-center overflow-hidden">
                            <img
                                src="/placeholder.svg?height=40&width=40"
                                alt="Profile"
                                className="h-full w-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-900 truncate">Ciao Damir</p>
                                    <p className="text-xs text-gray-500 truncate">damir@ciaodamir.com</p>
                                </div>
                                <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
                            </div>
                        </div>
                    </div> */}

                    {/* Center Logo */}
                    <div className="text-center justify-center">
                        <Link to="/">
                            {" "}
                            <h1 className="text-3xl md:text-4xl font-bold text-black-color font-serif dark:text-[#F8F8F8]">
                                M<span className="text-grey-color text-3xl font-serif">.</span>{" "}
                            </h1>
                        </Link>
                    </div>
                </div>

                {/* Navigation */}
                <div className="px-8 lg:px-4 pb-4">
                    <nav className="space-y-1">
                        {navigationItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <NavLink
                                    key={item.title}
                                    to={item.url}
                                    onClick={() => onClose()} // Close mobile sidebar on navigation
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-6 lg:px-3 ${item.title == "Settings" ? "mt-24 pt-2 pb-2.5" : "py-2.5"} text-sm font-medium rounded-xl transition-colors ${isActive ? "bg-black-color text-white dark:bg-gray-100 dark:text-gray-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-[#FDFDFD] dark:hover:bg-light-gray"
                                        }`
                                    }
                                >
                                    <Icon className="h-4 w-4 flex-shrink-0" />
                                    <span>{item.title}</span>
                                </NavLink>
                            )
                        })}
                    </nav>
                </div>
                {/* </div> */}
            </aside>
        </>
    )
}

export default Sidebar

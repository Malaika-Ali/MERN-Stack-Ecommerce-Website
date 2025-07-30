import StatsCard from '../../components/cards/StatsCard'
import { CiShoppingTag } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { PiTargetLight } from "react-icons/pi";
import { PiHandCoinsLight } from "react-icons/pi";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import RevenueChart from '../../components/admin/charts/RevenueChart';
import MostSellingProducts from '../../components/cards/MostSellingProducts';
import RecentOrders from '../../components/admin/tables/RecentOrders';
import WeeklyTopCustomers from '../../components/cards/WeeklyTopCustomers';
import { useGetStatsQuery } from '../../redux/features/admin/dashboardApi';

const Dashboard = () => {

    const { data, isLoading, error } = useGetStatsQuery({
        startDate: "2025-02-03",
        endDate: "2025-02-23"
    })

    console.log(data?.data?.topCustomers)
    console.log(data?.data?.topProducts)



    const stats = [
        {
            title: "Total sales",
            icon: <PiHandCoinsLight size={25} />,
            arrowIcon: <LiaLongArrowAltUpSolid color='green' size={22} />,
            stat: data?.data?.totalSales
        },
        {
            title: "Total Orders",
            icon: <CiShoppingTag size={25} />,
            arrowIcon: <LiaLongArrowAltDownSolid color='red' />,
            stat: data?.data?.totalOrdersCount
        },
        {
            title: "New Customers",
            icon: <GoPeople size={25} />,
            arrowIcon: <LiaLongArrowAltUpSolid color='green' />,
            stat: data?.data?.newCustomersCount
        },
        {
            title: "Conversion Rate",
            icon: <PiTargetLight size={25} />,
            arrowIcon: <LiaLongArrowAltUpSolid color='green' />,
            stat: '4.2%'
        },
    ]
    return (
        // <div className='bg-[#F3F3F3] px-6 grid grid-cols-12 gap-5 w-full dashboard-grid-area'>
        <div className='bg-[#F3F3F3] opacity-95 px-6 w-full dashboard-grid-area pb-8'>

            {/* First row of cards */}
            {
                stats?.map((stat, index) => (
                    <StatsCard statsTitle={stat.title} statsNumber={stat.stat} arrow={stat.arrowIcon} icon={stat.icon} gridAreaNumber={index + 1} />
                ))
            }

            {/* Second row of line chart and card */}
            <RevenueChart />
            <MostSellingProducts />

            {/* Third row of table and card */}
            <RecentOrders />
            <WeeklyTopCustomers customers={data?.data?.topCustomers} />

        </div>
    )
}

export default Dashboard

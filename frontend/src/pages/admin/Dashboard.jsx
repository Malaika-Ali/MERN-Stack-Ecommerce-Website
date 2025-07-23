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

const Dashboard = () => {
    const stats = [
        {
            title: "Total sales",
            icon: <PiHandCoinsLight size={25} />,
            arrowIcon: <LiaLongArrowAltUpSolid color='green' size={22} />,
            stat: 'Rs 30000'
        },
        {
            title: "Total Orders",
            icon: <CiShoppingTag size={25} />,
            arrowIcon: <LiaLongArrowAltDownSolid color='red' />,
            stat: 24
        },
        {
            title: "New Customers",
            icon: <GoPeople size={25} />,
            arrowIcon: <LiaLongArrowAltUpSolid color='green' />,
            stat: 5
        },
        {
            title: "Conversion Rate",
            icon: <PiTargetLight size={25} />,
            arrowIcon: <LiaLongArrowAltUpSolid color='green' />,
            stat: '4.2%'
        },
    ]
    return (
        <div className='bg-[#F3F3F3] px-6 grid grid-cols-12 gap-5 w-full'>
            {/* <div className='grid grid-cols-4 gap-4'> */}
            {
                stats.map((stat) => (
                    <StatsCard statsTitle={stat.title} statsNumber={stat.stat} arrow={stat.arrowIcon} icon={stat.icon} />
                ))
            }
            {/* </div> */}

            {/* <div className="grid gap-4 grid-cols-[1fr_200px]"> */}
            <RevenueChart />
            <MostSellingProducts />

            {/* </div>   */}

            {/* <RevenueChart />
            <MostSellingProducts /> */}
            <RecentOrders />

            <WeeklyTopCustomers />

        </div>



    )
}

export default Dashboard

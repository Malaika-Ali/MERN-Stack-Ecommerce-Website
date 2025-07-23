import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useRef } from "react";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler);

const RevenueChart = () => {
    const chartRef = useRef(null);
    const tooltipRef = useRef(null);

    const labels = ["12 Aug", "13 Aug", "14 Aug", "15 Aug", "16 Aug", "17 Aug", "18 Aug", "19 Aug"];
    const revenueData = [8000, 10000, 9500, 12000, 12500, 11000, 14521, 13000];
    const orderData = [4000, 5000, 4700, 6000, 6100, 5800, 7000, 6800];

    const maxRevenue = Math.max(...revenueData);
    const maxRevenueIndex = revenueData.indexOf(maxRevenue);

    const data = {
        labels,
        datasets: [
            {
                label: "Revenue",
                data: revenueData,
                borderColor: "#010101",
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
                fill: false,
            },
            {
                label: "Order",
                data: orderData,
                borderColor: "#010101",
                borderDash: [6, 6],
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        scales: {
            y: {
                ticks: {
                    callback: (val) => `$${val / 1000}k`,
                    color: "#6b7280",
                    maxTicksLimit: 4,
                },
                grid: {
                    drawBorder: false,
                    color: "#e5e7eb",
                    borderDash: [4, 4],
                },
                border: {
                    display: false,
                },
            },
            x: {
                ticks: {
                    color: "#6b7280",
                    callback: function (value, index, ticks) {
                        return '      ' + this.getLabelForValue(value);
                    },
                },
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
        },
    };

    const handleChartUpdate = (chart) => {
        if (!chart || !tooltipRef.current) return;

        const meta = chart.getDatasetMeta(0); // Revenue dataset
        const point = meta?.data?.[maxRevenueIndex];

        if (point) {
            const { x, y } = point.getProps(['x', 'y'], true);
            tooltipRef.current.style.transform = `translate(${x}px, ${y - 35}px)`;
            // tooltipRef.current.style.transform = `translate(${x}px, ${y - 40}px)`;
            tooltipRef.current.style.display = "block";
        }
    };

    return (
        <div className="relative bg-white rounded-2xl shadow-sm p-4 w-full h-[340px] my-6 col-span-12 md:col-span-6 lg:col-span-8">
            <div className="flex justify-between items-start mb-3">
                <h2 className="text-lg font-[500] text-black-color">Revenue Analytics</h2>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <div className="w-6 h-0.5 bg-[#010101]"></div>
                        <span className="text-sm text-gray-600">Revenue</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-6 h-0.5 border-t-2 border-[#010101] border-dashed"></div>
                        <span className="text-sm text-gray-600">Order</span>
                    </div>
                    <button className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200">
                        Last 8 Days
                    </button>
                </div>
            </div>

            <div className="relative h-[280px] cursor-pointer">
                <Line
                    ref={chartRef}
                    data={data}
                    options={options}
                    updateMode="none"
                    onUpdate={handleChartUpdate}
                />

            </div>
        </div>
    );
};

export default RevenueChart;

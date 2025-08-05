import React from 'react'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler } from "chart.js"
import { Line } from "react-chartjs-2"
import { useRef, useEffect, useState, useCallback } from "react"
import { useSelector } from "react-redux";


ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler)

const RevenueChart = () => {

    const chartRef = useRef(null)
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0, show: false })
    const [peakPointPosition, setPeakPointPosition] = useState({ x: 0, y: 0, show: false })
    const [isChartReady, setIsChartReady] = useState(false)
    const [responseData, setResponseData] = useState([]);

    const fetchData = async () => {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/dashboard/revenue-analytics?` + new URLSearchParams({
            startDate: "2025-02-03",
            endDate: "2025-02-23"
        }).toString())
        const data = await res.json()
        return data?.data
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchData();
                setResponseData(data);
            } catch (err) {
                console.error("Failed to fetch chart data", err);
            }
        };

        getData();
    }, []);

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);



    // const labels = ["12 Aug", "13 Aug", "14 Aug", "15 Aug", "16 Aug", "17 Aug", "18 Aug", "19 Aug"]
    const labels = responseData?.map(label => label.date)
    // const revenueData = [8000, 10000, 9500, 12000, 12500, 11000, 14521, 13000]
    const revenueData = responseData?.map(item => item.revenue) || []
    // if(!revenueData){
    //     revenueData= []
    // }
    const orderData = [400, 500, 2000, 600, 610, 580, 300, 680]
    // const orderData = responseData?.map(item => item.orders)

    const maxRevenue = Math.max(...revenueData)
    const maxRevenueIndex = revenueData.indexOf(maxRevenue)
    const maxRevenueDate = labels[maxRevenueIndex]

    const updateTooltipPosition = useCallback(() => {
        if (!chartRef.current || !isChartReady) return

        const chart = chartRef.current
        const meta = chart.getDatasetMeta(0) // Revenue dataset
        const point = meta?.data?.[maxRevenueIndex]

        if (point) {
            // Get the exact pixel coordinates from the chart
            const pixelX = point.x
            const pixelY = point.y

            // Update tooltip position (above the peak point)
            setTooltipPosition((prev) => {
                if (Math.abs(prev.x - pixelX) > 2 || Math.abs(prev.y - (pixelY - 60)) > 2 || !prev.show) {
                    return {
                        x: pixelX,
                        y: pixelY - 60, // Position tooltip above the point
                        show: true,
                    }
                }
                return prev
            })

            // Update peak point position (exactly at the chart line peak)
            setPeakPointPosition((prev) => {
                if (Math.abs(prev.x - pixelX) > 2 || Math.abs(prev.y - pixelY) > 2 || !prev.show) {
                    return {
                        x: pixelX,
                        y: pixelY, // Position exactly at the chart point
                        show: true,
                    }
                }
                return prev
            })
        }
    }, [maxRevenueIndex, isChartReady])

    const chartData = {
        labels,
        datasets: [
            {
                label: "Revenue",
                data: revenueData,
                // borderColor: "#010101",
                borderColor: isDarkMode ? "#fff" : "#010101",
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
                fill: false,
            },
            {
                label: "Order",
                data: orderData,
                // borderColor: "#9B9B9B",
                borderColor: isDarkMode ? "#fff" : "#9B9B9B",
                borderDash: [6, 6],
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
                fill: false,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            onComplete: () => {
                if (!isChartReady) {
                    setIsChartReady(true)
                }
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }, // Disable default tooltip
        },
        scales: {
            y: {
                ticks: {
                    callback: (val) => `Rs ${val / 1000}k`,
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
                        return "      " + this.getLabelForValue(value)
                    },
                },
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
        },
    }

    // Update tooltip position when chart is ready
    useEffect(() => {
        if (isChartReady) {
            const timer = setTimeout(updateTooltipPosition, 100)
            return () => clearTimeout(timer)
        }
    }, [isChartReady, updateTooltipPosition])

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            if (isChartReady) {
                setIsChartReady(false) // Reset chart ready state
                const timer = setTimeout(() => {
                    setIsChartReady(true)
                }, 300)
                return () => clearTimeout(timer)
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [isChartReady])

    return (
        <div className="relative bg-white rounded-2xl shadow-sm p-4 w-full h-[340px] my-6 revenue-area lg:col-span-8 dark:bg-[#000000]">
            <div className="flex justify-between items-start mb-3">
                <h2 className="text-lg font-[500] text-black-color mb-9 dark:text-white">Revenue Analytics</h2>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex items-center gap-1">
                        <div className="w-6 h-0.5 bg-[#010101] dark:bg-white"></div>
                        <span className="text-sm text-black-color dark:text-white">Revenue</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-6 h-0.5 border-t-2 border-[#9B9B9B] border-dashed"></div>
                        <span className="text-sm text-black-color dark:text-white">Order</span>
                    </div>
                    <button className="hidden sm:block text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200">
                        Last 7 Days
                    </button>
                </div>
            </div>

            <div className="relative h-[240px] cursor-pointer overflow-visible">
                <Line ref={chartRef} data={chartData} options={options} />

                {/* Custom Permanent Tooltip */}
                {tooltipPosition.show && (
                    <div
                        className="absolute z-30 pointer-events-none"
                        style={{
                            left: `${tooltipPosition.x}px`,
                            top: `${tooltipPosition.y}px`,
                            transform: "translate(-50%, 0)",
                        }}
                    >
                        {/* Tooltip Container */}
                        <div className="relative">
                            {/* Main Tooltip Box */}
                            <div className="bg-[#111111] text-white px-3 py-2 rounded-lg shadow-lg min-w-[100px] text-center dark:bg-light-gray">
                                <div className="text-xs font-medium opacity-90 mb-1">{maxRevenueDate}</div>
                                <div className="text-sm font-semibold">Rs {(maxRevenue / 1000).toFixed(1)}k</div>
                            </div>

                            {/* Tooltip Arrow */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-black"></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Peak Point Indicator - WHITE dot exactly on the chart line peak */}
                {peakPointPosition.show && (
                    <div
                        className="absolute z-40 pointer-events-none"
                        style={{
                            left: `${peakPointPosition.x}px`,
                            top: `${peakPointPosition.y}px`,
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        {/* White dot with black border to match the reference image */}
                        <div className="w-4 h-4 bg-white rounded-full border-2 border-black shadow-lg"></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default React.memo(RevenueChart)

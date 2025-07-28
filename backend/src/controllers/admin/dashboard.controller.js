import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import { Order } from "../../models/order.model.js";
import { User } from "../../models/user.model.js";


const getDashboardStats = asyncHandler(async (req, res) => {
    const { startDate, endDate } = req.query

    if (!startDate || !endDate) {
        throw new ApiError(400, "Start date and end date are required!")
    }

    const start = new Date(startDate)
    const end = new Date(endDate)

    try {
        const totalOrders = await Order.find({
            createdAt: {
                $gte: start,
                $lte: end
            }
        })

        const totalOrdersCount = totalOrders.length

        // Total Sales
        const totalSales = totalOrders.reduce((sum, order) => sum + order.totalAmount, 0);

        // Total new customers
        const newCustomers = await User.find({
            createdAt: { $gte: start, $lte: end }
        });

        const newCustomersCount = newCustomers.length


        return res.status(201).json(new ApiResponse(200, { totalOrdersCount, totalSales, newCustomersCount }, "Dashboard stats Successfully fetched!"))

    }
    catch (e) {
        console.log("error in fetching the dashboard stats")
        throw new ApiError(500, "There was error in fetching the stats", error)
    }
})

export { getDashboardStats }
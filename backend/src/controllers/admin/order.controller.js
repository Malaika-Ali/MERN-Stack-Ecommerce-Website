import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { Order } from "../../models/order.model.js";

const getAllOrders = asyncHandler(async (req, res) => {
    try {
        const filter= req.query.filter
        const page=Number(req.query.page) || 1;
        const limit=10;
        const skip=(page-1)*limit
        const orders = await Order.find(filter).skip(skip).limit(limit).sort({createdAt: -1});
        return res.status(201).json(
            new ApiResponse(200, orders, "All orders have been fetched successfully!")
        );

    } catch (error) {
        throw new ApiError(500, "Internal Server Error while fetching all the orders! Try again",error);
    }
})

const getOrdersStats = asyncHandler(async(req,res) => {
    try {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const totalOrders=await Order.countDocuments({
            createdAt: { $gte: thirtyDaysAgo }
        });
        return res.status(201).json(
            new ApiResponse(200, totalOrders, "All stats have been fetched successfully!")
        );
    } catch (error) {
        throw new ApiError(500, "Internal Server Error while fetching all the orders stats! Try again",error);
    }
})

export {getAllOrders, getOrdersStats}
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { Order } from "../../models/order.model.js";

const getAllOrders = asyncHandler(async (_, res) => {
    try {
        const orders = await Order.find();
        return res.status(201).json(
            new ApiResponse(200, orders, "All orders have been fetched successfully!")
        );

    } catch (error) {
        throw new ApiError(500, "Internal Server Error while fetching all the orders! Try again");
    }
})

export {getAllOrders}
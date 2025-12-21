import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { Order } from "../../models/order.model.js";

const createOrder = asyncHandler(async (req, res) => {
    try {
        const { products, shippingInfo, paymentInfo, totalAmount } = req.body
        console.log(products, shippingInfo, paymentInfo, totalAmount)

        if (!products || !shippingInfo || !paymentInfo || !totalAmount) {
            throw new ApiError(400, 'Incomplete Order Information!');
        }

        const order = await Order.create({
            user: req.user._id,
            products: products?.map((item) => ({
                product: item.product,
                quantity: item.quantity,
                price: item.price
            })),
            shippingInfo,
            paymentInfo,
            totalAmount
        })

        return res.status(201).json(new ApiResponse(200, order, "Order successfully created!"))

    } catch (error) {
        console.error("Order creation error:", error);
        console.log(error)
        throw new ApiError(500, "Order couldn't be placed", error)
    }
})
export { createOrder }

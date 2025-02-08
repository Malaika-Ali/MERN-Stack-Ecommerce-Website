import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Order } from "../models/order.model.js";

const createOrder=asyncHandler(async(req,res)=>{
    try {

        const {products, shippingInfo, paymentInfo, totalAmount}=req.body
        
    } catch (error) {
        
    }
})

export {createOrder}
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Order } from "../models/order.model.js";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createOrder = asyncHandler(async (req, res) => {
    try {

        const { products, shippingInfo, paymentInfo, totalAmount } = req.body
        console.log(products, shippingInfo, paymentInfo, totalAmount)

        if (!products || !shippingInfo || !paymentInfo || !totalAmount) {
            throw new ApiError(400, 'Incomplete Order Information!');
        }

        // If payment method is "credit-debit", create a Stripe PaymentIntent
        if (paymentInfo.paymentMethod === "credit-debit") {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: totalAmount * 100, // Convert to cents
                currency: 'usd',
                payment_method: paymentInfo.paymentMethodId, // Payment method ID from Stripe Elements
                confirm: true, // Automatically confirm the payment
                description: `Order for ${req.user.email}`,
            });

            if (paymentIntent.status !== 'succeeded') {
                throw new ApiError(400, 'Payment failed. Please try again.');
            }
        }


        const order = await Order.create({
            user: req.user._id,
            products: products?.map((item) => ({
                product: item.product,
                quantity: item.quantity,
                price: item.price
            })),
            shippingInfo,
            // paymentInfo,
            paymentInfo: {
                ...paymentInfo,
                status: paymentInfo.paymentMethod === "credit-debit" ? "paid" : "pending",
              },
            totalAmount
        })

        return res.status(201).json(new ApiResponse(200, order, "Order successfully created!"))

    } catch (error) {
        console.error("Order creation error:", error);
        throw new ApiError(500, "Order couldn't be placed", error)
    }
})

export { createOrder }

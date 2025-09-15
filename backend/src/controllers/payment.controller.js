import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = asyncHandler(async (req, res) => {
    try {
        const { amount } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: "pkr",
            automatic_payment_methods: { enabled: true }
        })

        res.json({ clientSecret: paymentIntent.client_secret })
    } catch (error) {
        throw new ApiError(500, "Payment was unsuccessful! Please try again")
    }
})

export { createPaymentIntent }

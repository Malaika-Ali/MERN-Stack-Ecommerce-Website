import {Router} from 'express'
import { createOrder } from '../controllers/order.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'

const router=Router()

// router.route("/create-payment-intent").post(verifyJWT, createPaymentIntent);
router.route("/create-order").post(verifyJWT,createOrder)

export default router
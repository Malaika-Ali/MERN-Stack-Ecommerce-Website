import { Router } from 'express'
import { createPaymentIntent } from '../../controllers/customers/payment.controller.js'

const router = Router()

router.route("/payment-intent").post(createPaymentIntent)

export default router
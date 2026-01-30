import { Router } from 'express'
import { getAllOrders } from '../../controllers/admin/order.controller.js'

const router = Router()

router.route("/orders").get(getAllOrders)

export default router

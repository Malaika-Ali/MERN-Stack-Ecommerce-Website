import { Router } from 'express'
import { getAllOrders, getOrdersStats } from '../../controllers/admin/order.controller.js'

const router = Router()

router.route("/orders").get(getAllOrders)
router.route("/orders-stats").get(getOrdersStats)

export default router

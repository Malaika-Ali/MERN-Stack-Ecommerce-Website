import { Router } from 'express'
import { getAllOrders, getOrdersStats, updateOrderStatus } from '../../controllers/admin/order.controller.js'

const router = Router()

router.route("/orders").get(getAllOrders)
router.route("/orders-stats").get(getOrdersStats)
router.route("/order-status/:id").patch(updateOrderStatus)

export default router

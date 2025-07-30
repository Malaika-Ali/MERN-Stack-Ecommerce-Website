import { Router } from 'express'
import { getDashboardStats, getRecentOrders, getTopProducts } from '../../controllers/admin/dashboard.controller.js'

const router = Router()

router.route("/stats").get(getDashboardStats)
router.route("/topProducts").get(getTopProducts)
router.route("/recent-orders").get(getRecentOrders)


export default router


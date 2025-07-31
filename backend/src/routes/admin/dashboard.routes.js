import { Router } from 'express'
import { getDashboardStats, getRecentOrders, getRevenueAnalytics, getTopProducts } from '../../controllers/admin/dashboard.controller.js'

const router = Router()

router.route("/stats").get(getDashboardStats)
router.route("/topProducts").get(getTopProducts)
router.route("/recent-orders").get(getRecentOrders)
router.route("/revenue-analytics").get(getRevenueAnalytics)

export default router


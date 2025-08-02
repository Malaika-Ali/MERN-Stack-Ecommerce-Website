import { Router } from 'express'
import { getDashboardStats, getRecentOrders, getRevenueAnalytics, getTopSellingProducts } from '../../controllers/admin/dashboard.controller.js'

const router = Router()

router.route("/stats").get(getDashboardStats)
router.route("/top-products").get(getTopSellingProducts)
router.route("/recent-orders").get(getRecentOrders)
router.route("/revenue-analytics").get(getRevenueAnalytics)

export default router


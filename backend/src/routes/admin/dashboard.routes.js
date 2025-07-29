import { Router } from 'express'
import { getDashboardStats, getTopProducts } from '../../controllers/admin/dashboard.controller.js'

const router = Router()

router.route("/stats").get(getDashboardStats)
router.route("/topProducts").get(getTopProducts)

export default router


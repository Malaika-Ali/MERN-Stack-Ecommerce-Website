import { Router } from 'express'
import { getAllProductsForAdmin } from '../../controllers/admin/products.controller.js'

const router = Router()

router.route("/products-list").get(getAllProductsForAdmin)


export default router

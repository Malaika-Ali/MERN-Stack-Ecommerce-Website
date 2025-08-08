import { Router } from 'express'
import { addProduct, getAllProductsForAdmin } from '../../controllers/admin/products.controller.js'

const router = Router()

router.route("/products-list").get(getAllProductsForAdmin)
router.route("/add-product").post(addProduct)



export default router

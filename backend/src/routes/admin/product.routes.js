import { Router } from 'express'
import { addProduct, getAllProductsForAdmin } from '../../controllers/admin/products.controller.js'
import { validateAddProduct } from '../../middlewares/validators/product.validator.js'
import handleValidationErrors from '../../middlewares/validators/validationResultHandler.js'
import rateLimiter from '../../middlewares/rateLimit.middleware.js'

const router = Router()

router.route("/products-list").get( getAllProductsForAdmin)
router.route("/add-product").post(rateLimiter,validateAddProduct, handleValidationErrors, addProduct)



export default router

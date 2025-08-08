import { Router } from 'express'
import { addProduct, getAllProductsForAdmin } from '../../controllers/admin/products.controller.js'
import { validateAddProduct } from '../../middlewares/validators/product.validator.js'
import handleValidationErrors from '../../middlewares/validators/validationResultHandler.js'

const router = Router()

router.route("/products-list").get( getAllProductsForAdmin)
router.route("/add-product").post(validateAddProduct, handleValidationErrors, addProduct)



export default router

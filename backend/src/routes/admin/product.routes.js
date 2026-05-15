import { Router } from 'express'
import { addProduct, getAllProductsForAdmin, updateProduct } from '../../controllers/admin/products.controller.js'
import { validateAddProduct } from '../../middlewares/validators/product.validator.js'
import handleValidationErrors from '../../middlewares/validators/validationResultHandler.js'
import rateLimiter from '../../middlewares/rateLimit.middleware.js'
import { upload } from '../../middlewares/multer.middleware.js'

const router = Router()

router.route("/products-list").get(getAllProductsForAdmin)
// router.route("/add-product").post(rateLimiter,validateAddProduct, handleValidationErrors, addProduct)
// router.route("/add-product").post(rateLimiter, upload.array("images", 4), validateAddProduct,handleValidationErrors, addProduct)

router.route("/add-product").post(rateLimiter, upload.array("images", 4), addProduct)

router.route("/update-product/:id").patch(rateLimiter, upload.single("image", 1), updateProduct)


export default router

import {Router} from 'express'
import { createProduct, getAllProducts, getSingleProduct, updateProduct } from '../controllers/product.controller.js'
import {upload} from '../middlewares/multer.middleware.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'

const router=Router()

router.route('/create-product').post(verifyJWT, createProduct)
router.route('/get-all-products').get(verifyJWT, getAllProducts)
router.route('/get-single-product/:id').get(verifyJWT, getSingleProduct)
router.route('/update-product/:id').patch(verifyJWT, updateProduct)



export default router

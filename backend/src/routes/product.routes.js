import {Router} from 'express'
import { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js'
import {upload} from '../middlewares/multer.middleware.js'
import { verifyJWT, verifyAdmin } from '../middlewares/auth.middleware.js'

const router=Router()

router.route('/create-product').post(verifyJWT, createProduct)
router.route('/get-all-products').get(verifyJWT, getAllProducts)
router.route('/get-single-product/:id').get(verifyJWT, getSingleProduct)
router.route('/update-product/:id').patch(verifyAdmin, updateProduct)
router.route('/delete-product/:id').delete(verifyAdmin, deleteProduct)



export default router

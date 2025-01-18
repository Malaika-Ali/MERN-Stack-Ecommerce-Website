import {Router} from 'express'
import { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js'
import {upload} from '../middlewares/multer.middleware.js'
import { verifyJWT, verifyAdmin } from '../middlewares/auth.middleware.js'

const router=Router()

router.route('/create-product').post( upload.array("productImages", 5), createProduct)
router.route('/get-all-products').get( getAllProducts)
router.route('/get-single-product/:id').get( getSingleProduct)
router.route('/update-product/:id').patch( updateProduct)
router.route('/delete-product/:id').delete( deleteProduct)



export default router

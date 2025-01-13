import {Router} from 'express'
import { deleteReview, postReview, getAllReviews, updateReview } from '../controllers/review.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'

const router=Router()

router.route('/post-review/:productId').post(verifyJWT, postReview)
router.route('/delete-review/:reviewId').delete(verifyJWT, deleteReview)
router.route('/get-all-reviews/:productId').get(verifyJWT, getAllReviews)
router.route('/update-review/:reviewId').patch(verifyJWT, updateReview)






export default router

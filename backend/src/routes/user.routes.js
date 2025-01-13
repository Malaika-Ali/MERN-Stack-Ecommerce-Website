import {Router} from 'express'
import { registerUser, loginUser, logoutUser, refreshAccessToken, deleteUser, getAllUsers, updateUserRole } from '../controllers/user.controller.js'
import {upload} from '../middlewares/multer.middleware.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'

const router=Router()

router.route("/register").post(registerUser)

// Login Route
router.route('/login').post(loginUser)

// Secured Routes(Which require the user to be logged in / To have a token)
router.route('/logout').post(verifyJWT, logoutUser)

// Not verifying JWT token here since the controller itself uses refresh token and decodes it
router.route('/refresh-token').post(refreshAccessToken)
router.route('/delete-user/:id').delete(verifyJWT, deleteUser)
router.route('/get-all-users').get(verifyJWT, getAllUsers)
router.route('/update-user-role/:id').put(verifyJWT, updateUserRole)




export default router
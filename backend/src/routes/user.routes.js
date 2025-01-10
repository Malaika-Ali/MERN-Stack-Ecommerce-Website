import {Router} from 'express'
import { registerUser, loginUser, logoutUser } from '../controllers/user.controller.js'
import {upload} from '../middlewares/multer.middleware.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'

const router=Router()

router.route("/register").post(registerUser)

// Login Route
router.route('/login').post(loginUser)

// Secured Routes(Which require the user to be logged in / To have a token)
router.route('/logout').post(verifyJWT, logoutUser)

export default router
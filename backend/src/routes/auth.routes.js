import { googleAuth } from '../controllers/auth.controller.js'
import { Router } from 'express'
import { verifyJWT } from '../middlewares/auth.middleware.js'


const router = Router()

router.route("/google").get(googleAuth)
router.route("/me").get(verifyJWT, (req, res) => {
    res.json({ name: req.user.name, email: req.user.email })
})

export default router
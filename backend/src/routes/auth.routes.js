import { googleAuth } from '../controllers/auth.controller.js'
import {Router} from 'express'


const router=Router()

router.route("/google").get(googleAuth)

export default router
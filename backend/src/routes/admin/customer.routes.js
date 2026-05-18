import { Router } from 'express'
import { getUsers } from '../../controllers/admin/customer.controller.js'

const router = Router()

router.route("/customers").get(getUsers)

export default router
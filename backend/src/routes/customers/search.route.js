import { Router } from "express";
import { searchProduct } from "../../controllers/customers/search.controller.js";


const router=Router()
router.route('/search').get( searchProduct )

export default router
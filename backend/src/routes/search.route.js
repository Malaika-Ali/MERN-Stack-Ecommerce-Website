import { Router } from "express";
import { searchProduct } from "../controllers/search.controller";


const router=Router()
router.route('/search').get( searchProduct )

export default router
import { Router } from "express";
import {getProducts} from "../controlers/products.controllers"

const router = Router()


router.get('/products', getProducts)

router.post('/products',)

router.delete('/products',)

router.put('/products',)

router.get('/products',)

export default router
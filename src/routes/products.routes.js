import { Router } from "express";
import {CreateNewProducts, getProductById, getProducts} from "../controlers/products.controllers"

const router = Router()


router.get('/products', getProducts)

router.post('/products', CreateNewProducts)

router.delete('/products',)

router.put('/products',)

router.get('/products/:id', getProductById)

export default router
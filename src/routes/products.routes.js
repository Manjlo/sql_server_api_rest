import { Router } from "express";
import {CreateNewProducts, deleteProduct, getProductById, getProducts, updateProductById} from "../controlers/products.controllers"

const router = Router()


router.get('/products', getProducts)

router.post('/products', CreateNewProducts)

router.delete('/products/:id',deleteProduct)

router.put('/products/:id', updateProductById)

router.get('/products/:id', getProductById)

export default router
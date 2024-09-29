import express from 'express';
import { getProducts, createProduct } from '../controllers/ProductController';

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", createProduct);

export default router;
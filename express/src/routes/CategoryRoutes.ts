import express from 'express';
import { createCategories, getCategories, getCategoryById } from '../controllers/CategoryController';

const router = express.Router();

router.get("/categories", getCategories);
router.post("/categories", createCategories);
router.get("/categories/:id", getCategoryById);

export default router;
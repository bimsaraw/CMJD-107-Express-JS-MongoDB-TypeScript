import { Request, Response } from 'express';
import Category from '../models/Category';

export const getCategories = async (req: Request, res: Response) => {
    const categories = await Category.find();

    res.status(200).json(categories);
}

export const getCategoryById = async (req: Request, res: Response) => {
    const id = req.params.id; //fetch parameter from URL
    const category = await Category.findById(id);

    if(category) {
        res.status(200).json(category);
    } else {
        res.status(404).json({
            message: "Category not found"
        })
    }
}

export const createCategories = async (req: Request, res: Response) => {
    const name = req.body.name; //fetch value from Request Body

    try {
        const category = new Category();
        category.name = name;
        await category.save();

        res.status(201).json(category);
    } catch (error: any) {
        console.log(error);
        res.status(400).json({
            message: "Cannot create the category"
        })
    }
}
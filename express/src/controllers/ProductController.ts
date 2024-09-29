import { Request, Response } from "express";
import Product from "../models/Product";

export const getProducts = async (req: Request, res: Response) => {
    const products = await Product.find();

    res.status(200).json(products);
}

export const createProduct = async (req: Request, res: Response) => {
    const {name, price, category} = req.body;

    try {
        const product = new Product();
        product.name = name;
        product.price = price;
        product.category = category;
        await product.save();

        res.status(201).json(product);
    } catch (error: any) {
        res.status(400).json({message: "Cannot create product"});
    }
}
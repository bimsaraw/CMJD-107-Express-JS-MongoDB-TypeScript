import { Document } from "mongoose";
import CategoryType from "./CategoryType";


interface ProductType extends Document {
    name: String;
    price: Number;
    category: CategoryType;
    createdAt: Date;
    updatedAt: Date;
}

export default ProductType;
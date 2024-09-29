import mongoose, { Schema } from "mongoose";
import ProductType from "../types/ProductType";

const ProductSchema = new Schema<ProductType> ({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: { //adding a reference to Category Collection
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model<ProductType>("Product", ProductSchema);

export default Product;
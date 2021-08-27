import { model, Schema, Model, Document } from 'mongoose';

export interface Product extends Document {
    name: string;
    product_image: string;
    createDate: string;
    updatedDate: string;
    price: string;
    category: string;
    restaurant_id: string;
}

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    product_image: { type: String, required: false },
    createDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    price: { type: String, required: true },
    category: { type: String, required: true },
    restaurant_id: { type: String, required: true }
});

export const ProductModel: Model<Product> = model<Product>('product', ProductSchema);
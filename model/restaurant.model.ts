import { model, Schema, Model, Document } from 'mongoose';

export interface Restaurant extends Document {
    name: string;
    picture: string;
    createDate: string;
    updatedDate: string;
    address: string;
    opening_hour: string;
}

const RestaurantSchema: Schema = new Schema({
    name: { type: String, required: true },
    picture: { type: String, required: false },
    createDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    address: { type: String, required: true },
    opening_hour: { type: String, required: true }
});

export const RestaurantModel: Model<Restaurant> = model<Restaurant>('restaurant', RestaurantSchema);
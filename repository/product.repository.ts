import { connect, disconnect } from "../config/db.config";
import { ProductModel } from '../model/product.model';
import { APILogger } from '../logger/api.logger';

export class ProductRepository {

    private logger: APILogger;

    constructor() {
        connect();
        this.logger = new APILogger()
    }

    //Product//

    async getProduct() {
        const products = await ProductModel.find({});
        return products;
    }

    async createProduct(product) {
        let data = {};
        try {
            data = await ProductModel.create(product);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async updateProduct(product) {
        let data = {};
        try {
            data = await ProductModel.updateOne(product);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async deleteProduct(productId) {
        let data: any = {};
        try {
            data = await ProductModel.deleteOne({_id : productId});
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
}
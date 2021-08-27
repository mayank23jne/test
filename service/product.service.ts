import { ProductRepository } from '../repository/product.repository';

export class ProductService {

    private productRepository: ProductRepository;

    constructor() {
        this.productRepository = new ProductRepository();
    }

    // product //

    async getProduct() {
        return await this.productRepository.getProduct();
    }

    async createProduct(product) {
        return await this.productRepository.createProduct(product);
    }

    async updateProduct(product) {
        return await this.productRepository.updateProduct(product);
    }

    async deleteProduct(productId) {
        return await this.productRepository.deleteProduct(productId);
    }

}
import { RestaurantRepository } from '../repository/restaurant.repository';

export class RestaurantService {

    private restaurantRepository: RestaurantRepository;

    constructor() {
        this.restaurantRepository = new RestaurantRepository();
    }


    // restaurant //

    async getRestaurant() {
        return await this.restaurantRepository.getRestaurant();
    }

    async createRestaurant(restaurant) {
        return await this.restaurantRepository.createRestaurant(restaurant);
    }

    async updateRestaurant(restaurant) {
        return await this.restaurantRepository.updateRestaurant(restaurant);
    }

    async deleteRestaurant(restaurantId) {
        return await this.restaurantRepository.deleteRestaurant(restaurantId);
    }
}
import { APILogger } from '../logger/api.logger';
import { RestaurantService } from '../service/restaurant.service';

export class RestaurantController {

    private restaurantService: RestaurantService;
    private logger: APILogger;

    constructor() {
        this.restaurantService = new RestaurantService();
        this.logger = new APILogger()
    }

    // restaurant //

    async getRestaurant() {
        this.logger.info('Controller: getRestaurant', null)
        return await this.restaurantService.getRestaurant();
    }

    async createRestaurant(restaurant) {
        this.logger.info('Controller: createRestaurant', restaurant);
        return await this.restaurantService.createRestaurant(restaurant);
    }

    async updateRestaurant(restaurant) {
        this.logger.info('Controller: updateRestaurant', restaurant);
        return await this.restaurantService.updateRestaurant(restaurant);
    }

    async deleteRestaurant(restaurantId) {
        this.logger.info('Controller: deleteRestaurant', restaurantId);
        return await this.restaurantService.deleteRestaurant(restaurantId);
    }
}
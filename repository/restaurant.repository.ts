import { connect, disconnect } from "../config/db.config";
import { RestaurantModel } from '../model/restaurant.model';
import { APILogger } from '../logger/api.logger';

export class RestaurantRepository {

    private logger: APILogger;

    constructor() {
        connect();
        this.logger = new APILogger()
    }
    //Restaurant//

    async getRestaurant() {
        const restaurants = await RestaurantModel.find({});
        return restaurants;
    }

    async createRestaurant(restaurant) {
        let data = {};
        try {
            data = await RestaurantModel.create(restaurant);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async updateRestaurant(restaurant) {
        let data = {};
        try {
            data = await RestaurantModel.updateOne(restaurant);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async deleteRestaurant(restaurantId) {
        let data: any = {};
        try {
            data = await RestaurantModel.deleteOne({_id : restaurantId});
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}
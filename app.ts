import * as bodyParser from "body-parser";
import * as express from "express";
import { APILogger } from "./logger/api.logger";
import { RestaurantController } from "./controller/restaurant.controller";
import { ProductController} from "./controller/product.controller";
import fs = require('fs');
const multer  = require('multer')
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png'
}

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const extension = MIME_TYPES[file.mimetype];
      cb(null, `${file.fieldname}.${new Date().toISOString().replace(/:/g,'-')}.${extension}`)
    }
});
const upload = multer({storage: storage});
class App {

    public express: express.Application;
    public logger: APILogger;
    public restaurantController: RestaurantController;
    public productController: ProductController;
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new APILogger();
        this.restaurantController = new RestaurantController();
        this.productController = new ProductController();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        this.express.get("/", (req, res, next) => {
            res.send("Typescript App works!!");
        });


        // restuarant api start// 

        // get list of restaurants //

        this.express.get('/api/restaurants', (req, res) => {
            this.restaurantController.getRestaurant().then(data => res.json(data));
        });
        
        // upload image into filder //

        this.express.post('/api/upload_restaurant_image',upload.single('picture'), (req, res , next) => {
            res.send("Image uploded sucessfully");
        });

        // save restaurant data //

        this.express.post('/api/restaurant', (req, res , next) => {
            console.log(req.body);
            this.restaurantController.createRestaurant(req.body).then(data => res.json(data));
        });
        
        // update restaurant data //

        this.express.put('/api/restaurant', (req, res) => {
            this.restaurantController.updateRestaurant(req.body).then(data => res.json(data));
        });
        
        //delete restaurant data //
        this.express.delete('/api/restaurant/:id', (req, res) => {
            this.restaurantController.deleteRestaurant(req.params.id).then(data => res.json(data));
        });

        // end of restaurant api // 

        // get list of restaurants product //

        this.express.get('/api/products', (req, res) => {
            this.productController.getProduct().then(data => res.json(data));
        });
        
        // upload image into filder //

        this.express.post('/api/upload_product_image',upload.single('product_image'), (req, res , next) => {
            res.send("Image uploded sucessfully");
        });

        // save restaurant data //

        this.express.post('/api/product', (req, res , next) => {
            this.productController.createProduct(req.body).then(data => res.json(data));
        });
        
        // update restaurant data //

        this.express.put('/api/product', (req, res) => {
            this.productController.updateProduct(req.body).then(data => res.json(data));
        });
        
        //delete restaurant data //
        this.express.delete('/api/product/:id', (req, res) => {
            this.productController.deleteProduct(req.params.id).then(data => res.json(data));
        });

        // end of product api // 

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }
}

export default new App().express;
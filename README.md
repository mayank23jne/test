# setup project
# for image upload using multer plugin
# run npm install
# run npm start

# --------------- Restaurant API ------------- #

# api for get list of restaurants 
api/restaurants
# method GET - with no parameter

# api for upload restaurant image into local folder
api/upload_restaurant_image  
# Using form data - with picture parameter

# api for create restaurant 
api/restaurant
# method POST - with parameter
# {
    "name": "",
     "picture": "",
     "address": "",
     "opening_hour" : ""
    
# }
# api for update restaurant data
api/restaurant
# method PUT - with parameter
# {
    "id" : "",
    "name": "",
     "picture": "",
     "address": "",
     "opening_hour" : ""
    
# }
# api for delete restaurant data by id
api/restaurant/{{id}}
# method DELETE - with parameter id

# --------------- Product API ------------- #

# api for upload product image into local folder
api/upload_product_image  
# Using form data - with product_image parameter

# api for get list of product 
api/products 
# method GET - with no parameter

# api for create product 
api/product
# method POST - with parameter
# {
    "restaurant_id": "",
     "name": "",
     "product_image": "",
     "price": "",
     "category" : ""
    
# }
# api for update product data
api/product
# method PUT - with parameter
# {
    "id" : "",
    "restaurant_id": "",
    "name": "",
    "product_image": "",
    "price": "",
    "category" : ""
    
# }
# api for delete product data by id
api/product/{{id}}
# method DELETE - with parameter id

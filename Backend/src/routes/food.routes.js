import express from 'express';
import { createFood, getFoodItems } from '../controllers/food.controller.js'; // ✅ named import
import multer from 'multer';
import { authFoodPartnerMiddleware, authUserMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();
// import  {authFoodPartnerMiddleware,authUserMiddleware} from '../middlewares/auth.middleware.js';                                     
// post /api/food/ and should be [protected]=>normal user cannot add food item only food-partner can 


const upload=multer({
    storage: multer.memoryStorage(),

})

router.post("/", authFoodPartnerMiddleware,upload.single("video"), createFood);
//what is it doing authMiddleware.authFoodPartnerMiddleware is a middleware function that checks if the user is authenticated as a food partner
//  before allowing them to access the route handler foodController.createFood. If the user is not authenticated, it will return a 401 Unauthorized 
// response. If the user is authenticated, it will call the next middleware or route handler, which in this case is foodController.createFood.
//without this middleware anyone can add food item but with this middleware only food partner can add food item because it checks if the user is 
// authenticated as a food partner or not before allowing them to access the route handler.


//GER /api/food/ => to get all food items [public]=>anyone can access this route
//create a new middleware
router.get('/',authUserMiddleware,//middleware to check if the user is authenticated or not before allowing them to access the route handler foodController.getFoodItems
    getFoodItems//controller function to get all food items from database and send it to client
)


export default router;
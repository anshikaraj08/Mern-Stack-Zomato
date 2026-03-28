import foodPartnerModel from "../models/foodPartner.model.js";
import jwt from 'jsonwebtoken';
import userModel from "../models/user.model.js";
//middleware
async function authFoodPartnerMiddleware(req,res,next){
    
    //doing what?//checking if the user is logged in or not
    //when user logs in => token generated => and saves in cookie
    // when user register => token generated => and saves in cookie
    //if not saved in cookies then neither loggen in nor register
    
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Please login first"
        })
    }
    try
    {
        //jwt.verify(token,secretKey,callback)
        //checks if token is valid or not
        const decoded=jwt.verify(token,process.env.JWT_SECRET);//if token is valid then we will get the decoded payload which contains the user id
        //we will find the user in the database using the id from the decoded token
        const foodPartner=await foodPartnerModel.findById(decoded.id);
    
        req.foodPartner=foodPartner;
        //creating a new property foodPartner in the request object and assigning the foodPartner object to it
        //we will attach the user object to the request object so that we can access it in the next middleware or route handler
        next();//if token is valid then we will call the next middleware or route handler
    }
    catch(err)
    {
        return res.status(401).json({
            message:"Invalid token"
        })
    }
}

async function authUserMiddleware(req,res,next){
    const token=req.cookies.token;
    if(!token){

        return res.status(401).json({
            message:"Please login first"
        })
    }
    try
    {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await userModel.findById(decoded.id);   
        req.user=user;   
        next();
    }
    catch(err)
    {
        return res.status(401).json({
            message:"Invalid token"
        })
    }
}          
export  {authFoodPartnerMiddleware, authUserMiddleware};
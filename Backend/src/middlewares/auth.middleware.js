import foodPartnerModel from "../models/foodpartner.model";
import jwt from 'jsonwebtoken';
//middleware
async function authFoodPartnerMiddleware(req,res,next){
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Please login first"
        })
    }

}
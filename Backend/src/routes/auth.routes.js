import express from 'express';
import authController from '../controllers/auth.controller.js';
// router = group of user-related APIs
// Router helps you separate APIs by feature and keep code clean.
const router=express.Router();
// (req,res)=>{   }=>controller
//before registering a user we have to create a model in database

router.post('/user/register',authController.registerUser);
router.post('/user/login',authController.loginUser);


export default router;
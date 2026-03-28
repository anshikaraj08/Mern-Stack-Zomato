import foodModel from "../models/food.model.js";
import { uploadFile } from "../services/storage.service.js";  // named import
import { v4 as uuid } from 'uuid';  // import uuid here
async function createFood(req,res){
    console.log(req.foodPartner);
    console.log(req.body);
    console.log(req.file);
    
    const fileUploadResult= await 
    uploadFile(req.file.buffer,uuid());
    //what is it doing? it is uploading the file to imagekit and uuid is used to generate unique name for each file because if
    //  we upload file with same name then it will override the previous file with same name but with uuid it will generate unique
    //  name for each file and it will not override the previous file with same name.   
    console.log(fileUploadResult);
    

    //create food item in database
    const foodItem=await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        video:fileUploadResult.url,
        foodPartner:req.foodPartner._id

    })

    res.status(201).json({
        message:"Food item created successfully",
        food:foodItem
    })

}


async function getFoodItems(req,res){
    const foodItems=await foodModel.find({})
    res.status(200).json({
        message:"Food items fetched successfully",
        foodItems:foodItems
    })
}


export  {createFood, getFoodItems};
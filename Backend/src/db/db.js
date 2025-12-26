//only to write connection logic
import mongoose from "mongoose";

//server will connect to db only when this function runs
export function connectDB(){

    mongoose.connect("mongodb://localhost:27017/food-vew")
    .then(()=>{
        console.log("MongoDb Connected");
    })
    .catch((err)=>{
        console.log("Mongodb error",err);
    })
}
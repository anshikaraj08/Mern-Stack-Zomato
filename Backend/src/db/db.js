//only to write connection logic
import mongoose from "mongoose";

//server will connect to db only when this function runs
//call this to run database cause mongoose.connect will get called only then
// function call on server.js
export function connectDB(){ 

    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("MongoDb Connected");
    })
    .catch((err)=>{
        console.log("Mongodb error",err);
    })
}
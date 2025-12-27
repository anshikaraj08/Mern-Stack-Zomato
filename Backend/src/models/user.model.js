import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true //with one email only one user is created
    },
    password:{
        type:String,
        required:true
    }

},
    {
        // createdAt & updatedAt automatically
        timestamps:true //database creation last update is measured
    }
)
const userModel=mongoose.model("User",userSchema);
export default userModel;
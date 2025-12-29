import mongoose from "mongoose";

const foodpartrnerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const foodPartnerModel=mongoose.model("foodPartner",foodpartrnerSchema);
export default foodPartnerModel;
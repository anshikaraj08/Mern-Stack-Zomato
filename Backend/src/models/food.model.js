import mongoose from 'mongoose'

const foodSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    //url of video is stored in mongodb database not the video
    video:{
        type:String,
        required:true,
    },
    description:{
        type:String
    },
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foodpartner"
    }
})

const foodModel=mongoose.model("food",foodSchema);
export default foodModel;
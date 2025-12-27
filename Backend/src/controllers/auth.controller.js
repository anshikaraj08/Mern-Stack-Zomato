//routes logic are here
import userModel from "../models/user.model.js";
import bcrypt from 'bcryptjs';// bcrypt is a password-hashing library used in Node.js.
import jwt from 'jsonwebtoken';


async function registerUser(req,res) {
    const {fullName,email,password}=req.body;

    const isUserAlreadyExists= await userModel.findOne({email})
    if(isUserAlreadyExists){
        return res.status(400).json({
            message: "User Already exists"
        })
    }

    //to protect user data in data breach condition
    //to hash password bcryptjs library is there
    const hashedPassword = await bcrypt.hash(password,10); // 10 → Salt Rounds. This number controls how strong the hashing is.
    
    const user=await userModel.create({
        fullName,
        email,
        password:hashedPassword
    })
    const token= jwt.sign({//data is given in object form also unique
        id:user._id,
    },"47307d9ff076f781a2464a97a34d2c6b")
    res.cookie("token",token)
    res.status(201).json({
        message: "User registered successfully",
        user:{
            _id:user._id,
            email:user.email,
            fullName: user.fullName
        }
    })




    
}
async function loginUser(req,res){

}



export default { registerUser, loginUser };
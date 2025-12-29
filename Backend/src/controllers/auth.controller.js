//routes logic are here
import userModel from "../models/user.model.js";
import foodPartnerModel from "../models/foodpartner.model.js";
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
    },process.env.JWT_SECRET)
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
    const {email,password} = req.body;
    const user=await userModel.findOne({email});
    if(!user){
        return res.status(400).json({
            message:"Invalid email and password"
        })

    }
    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return  res.status(400).json({
            message:"Invalid email and password"
        })

    }

    const token=jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)

     res.status(201).json({
        message: "User logged in successfully",
        user:{
            _id:user._id,
            email:user.email,
            fullName: user.fullName
        }
    })


}

async function logoutUser(req,res){
    res.clearCookie("token"); //to clear token from browser
    res.status(200).json({
        message: "User logged out successfully"
    })

}

async function registerFoodPartner(req,res){
    const {name,email,password}=req.body;
    const isAccountAlreadyExists= await foodPartnerModel.findOne({email});
    if(isAccountAlreadyExists){
        return res.status(400).json({
            message: "Food partner account already exists"
        })
    }
    const hashedpass=await bcrypt.hash(password,10);
    //create account
    // Creates a new user document in MongoDB
    const foodPartner= await foodPartnerModel.create({
        name,email,password:hashedpass
    })

    const token= jwt.sign({
        id:foodPartner._id,
    },process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(201).json({
        message: "FoodPartner registered successfully",
        user:{
            _id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name
        }
    }) 

}

async function loginFoodPartner(req,res){
    const {email,password} = req.body;
    const foodPartner=await foodPartnerModel.findOne({email});

    if(!foodPartner){
        return res.status(400).json({
            message:"Invalid email and password"
        })

    }
    const isPasswordValid=await bcrypt.compare(password,foodPartner.password);

    if(!isPasswordValid){
        return  res.status(400).json({
            message:"Invalid email and password"
        })

    }

    const token=jwt.sign({id:foodPartner._id,},process.env.JWT_SECRET)

    res.cookie("token",token)

     res.status(201).json({
        message: "FoodPartner logged in successfully",
        // user: { ... }
        // This object sends safe user information back to the frontend.
        user:{
            _id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name
}
    })


}
async function logoutFoodPartner(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"Food partner logged out successfully"
    })

}
                 

export default { registerUser, loginUser,logoutUser,registerFoodPartner,loginFoodPartner,logoutFoodPartner};
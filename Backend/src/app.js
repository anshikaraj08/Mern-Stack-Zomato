//create server inside this file
// const express=require('express'); //for commonjs
import express from 'express'
import cookieParser from 'cookie-parser' //used as a middleware
import authRoutes from './routes/auth.routes.js';
//server instance
const app = express();
app.use(cookieParser());
// ❌ Without express.json(): req.body = undefined
// ✅ With express.json(): req.body = {fullName: "John", email: "john@test.com", password: "123"}

app.use(express.json());//middleware to fetches data to req.body and make it readable



app.use('/api/auth',authRoutes);
//dummy route 
app.get('/',(req,res)=>{
    res.send("Hello world");
})



export default app;
//module.exports=app; //for commonjs
//create server inside this file
// const express=require('express'); //for commonjs
import express from 'express'
//server instance
const app = express()





//dummy route 
app.get('/',(req,res)=>{
    res.send("Hello world");
})

export default app;
//module.exports=app; //for commonjs
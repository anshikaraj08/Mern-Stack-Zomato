//start server 
import 'dotenv/config'; 
import dotenv from 'dotenv';  
dotenv.config();    
import app from './src/app.js';
import { connectDB } from './src/db/db.js';

//start database
connectDB();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
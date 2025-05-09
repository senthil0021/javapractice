
import express from "express";
import cors from "cors";
import authRoutes from './backend/routes/authRoutes.js';
import connectDB from "./backend/config/data.js";
const app=express();
const PORT=4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true,limit:'100mb'}));

connectDB();
app.use('/api/auth',authRoutes)


app.listen(PORT,()=>
{
   console.log(`Server is running on port ${PORT}`);
});
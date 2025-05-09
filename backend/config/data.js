import mongoose from "mongoose";


const connectDB=async()=>
{

    try
    {
    await mongoose.connect('mongodb://localhost:27017/practice');
    console.log("MongoDB is connected successfully");
    }
    catch(err)
    {
       console.error("Error while connecting with mongoDB",err);
    }
}

export default connectDB;
import mongoose from "mongoose";

export const connectDB = async() =>{
    try{
        await mongoose.connect('mongodb://localhost/login')
        console.log(">>> DB is Connected :D")
    } catch (error) {
        console.log(error)
    }
}
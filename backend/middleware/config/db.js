import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://ankibeanki:A3-LB4syUF_2Dj5@cluster0.it91ch6.mongodb.net/project3').then(()=>console.log("DB Connected"));
}
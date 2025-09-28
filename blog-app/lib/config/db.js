import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://blogapp:blogapp123@cluster0.lmde3sr.mongodb.net/blog-app');
    console.log("DB Connected");
}
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js"
import usersRoute from "./api/routes/users.js"
import hotelsRoute from "./api/routes/hotels.js"
import roomsRoute from "./api/routes/rooms.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connnect = async()=>{
  try{
    await mongoose.connect(process.env.URI);
    console.log("Connnected to MongoDB Server!");
  }catch(err){
    throw err;
  }
};

mongoose.connection.on("disconnected", ()=>{
  console.log("MongoDB Server Disconnected!");
})

//Middlewares
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(7500, ()=>{
  connnect();
  console.log("Listening 7500....");
})
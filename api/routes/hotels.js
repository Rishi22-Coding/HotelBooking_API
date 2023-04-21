import express from "express";
const router = express.Router();
import Hotel from "../models/Hotel.js";

//Create
router.post("/", async(req, res)=>{
  const newHotel = new Hotel(req.body);
  // console.log(req.body);
  try{
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  }catch(err){
    res.status(500).json(err);
  }
})

export default router;
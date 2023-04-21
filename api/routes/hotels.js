import express from "express";
const router = express.Router();
import Hotel from "../models/Hotel.js";

//Get All
router.get("/", async(req, res)=>{
  //console.log(req.body);
  try{
    const hotels = await Hotel.find(req.params.id);
    res.status(200).json(hotels);
  }catch(err){
    res.status(500).json(err);
  }
});

//Get One
router.get("/:id", async(req, res)=>{
  //console.log(req.body);
  try{
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  }catch(err){
    res.status(500).json(err);
  }
});

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
});

//update
router.put("/:id", async(req, res)=>{
  console.log(req.body);
  try{
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true});
    res.status(200).json(updatedHotel);
  }catch(err){
    res.status(500).json(err);
  }
});

//Delete
router.delete("/:id", async(req, res)=>{
  //console.log(req.body);
  try{
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been Removed!");
  }catch(err){
    res.status(500).json(err);
  }
});

export default router;
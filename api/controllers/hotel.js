import { MinKey } from "bson";
import Hotel from "../models/Hotel.js";

//Get All
export const getHotels = async(req, res, next)=>{
  // console.log(req.query.limit);
  // console.log(req.query.featured);
  const {min, max, filter}=req.query;
  try{
    const hotels = await Hotel.find({filter, cheapestPrice: {$gt: min | 1, $lt: max || 9999}}).limit(req.query.limit);
    res.status(200).json(hotels);
  }catch(err){
    next(err);
  }
}

//Get ONE
export const getHotel = async(req, res, next)=>{
  //console.log(req.body);
  try{
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  }catch(err){
    next(err);
  }
}

//post
export const createHotel = async(req, res, next)=>{
  const newHotel = new Hotel(req.body);
  // console.log(req.body);
  try{
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  }catch(err){
    next(err);
  }
}

//put
export const updateHotel = async(req, res, next)=>{
  // console.log(req.body);
  try{
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true});
    res.status(200).json(updatedHotel);
  }catch(err){
    next(err);
  }
}

//Delete
export const deleteHotel = async(req, res, next)=>{
  //console.log(req.body);
  try{
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been Removed!");
  }catch(err){
    next(err);
  }
}

//countByCity
export const countByCity = async(req, res, next)=>{
  //console.log(req.body);
  const cities=req.query.cities.split(",");
  try{
    const list=await Promise.all(cities.map(city=>{
      return Hotel.countDocuments({city: city});
    }))
    res.status(200).json(list);
  }catch(err){
    next(err);
  }
}

//countByType
export const countByType = async(req, res, next)=>{
  //console.log(req.body);
  try{
    const hotelCount=await Hotel.countDocuments({type: "Hotel"});
    const apartmentCount=await Hotel.countDocuments({type: "Apartment"});
    const villaCount=await Hotel.countDocuments({type: "Villa"});
    const resortCount=await Hotel.countDocuments({type: "Resort"});
    const cabinCount=await Hotel.countDocuments({type: "Cabin"});

    res.status(200).json([
      {type: "Hotels", count: hotelCount},
      {type: "Apartments", count: apartmentCount},
      {type: "Resorts", count: resortCount},
      {type: "Villas", count: villaCount},
      {type: "Cabins", count: cabinCount}
    ]);
  }catch(err){
    next(err);
  }
}
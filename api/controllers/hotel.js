import Hotel from "../models/Hotel.js";

//Get All
export const getHotels = async(req, res, next)=>{
  //console.log(req.body);
  try{
    const hotels = await Hotel.find(req.params.id);
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
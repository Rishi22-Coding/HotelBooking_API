import User from "../models/User.js";

//Get All
export const getUsers = async(req, res, next)=>{
  //console.log(req.body);
  try{
    const users = await User.find(req.params.id);
    res.status(200).json(users);
  }catch(err){
    next(err);
  }
}

//Get ONE
export const getUser = async(req, res, next)=>{
  //console.log(req.body);
  try{
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  }catch(err){
    next(err);
  }
}

//put
export const updateUser = async(req, res, next)=>{
  // console.log(req.body);
  try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true});
    res.status(200).json(updatedUser);
  }catch(err){
    next(err);
  }
}

//Delete
export const deleteUser = async(req, res, next)=>{
  //console.log(req.body);
  try{
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been Removed!");
  }catch(err){
    next(err);
  }
}
import User from "../models/User.js"
import bcrypt from"bcryptjs";
import {createError} from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register=async(req, res, next)=>{
  try{
    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashed
    })
    await newUser.save();
    res.status(200).send("User has been Created!");
  }catch(err){
    next(err);
  }
}

export const login=async(req, res, next)=>{
  try{
    //console.log(req.body.username);
    const user=await User.findOne({username: req.body.username});
    //console.log(user);
    if(!user){
      return next(createError(404, "User not Found!"));
    }
    const isPasswordCorrect=await bcrypt.compare(req.body.password, user.password);
    if(!isPasswordCorrect){
      return next(createError(400, "Wrong Password!"));
    }

    //jwt
    const token=jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET);

    const {password, isAdmin, ...otherDetails}=user._doc;
    res.cookie("access_token", token, {
      httpOnly: true //it dosen't allow client secret to reach this cookie
      //Now whenever we go to CRUD on Hotels jwt will verify the token and if the token is valid, Then it will check user info if iit si admin then it will proceed
    }).status(200).json({...otherDetails});
  }catch(err){
    next(err);
  }
}
import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//check auth
router.get("/checkauthentication", verifyToken, (req, res, next)=>{
  res.send("Successfully Logged In!")
})
router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
  res.send("Successfully Logged In User! You can Delete your Account!")
})
router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
  res.send("Successfully Logged In Admin! You can Delete multiple Accounts!")
})

//Get All
router.get("/", getUsers);

//Get One
router.get("/:id", getUser);

//update
router.put("/:id", updateUser);

//Delete
router.delete("/:id", deleteUser);

export default router;
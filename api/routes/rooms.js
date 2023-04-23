import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import {verifyAdmin} from"../utils/verifyToken.js";
const router = express.Router();

//Get All
router.get("/", getRooms);

//Get One
router.get("/:id", getRoom);

//Create
router.post("/:hotelid", verifyAdmin , createRoom)

//update
router.put("/:id", verifyAdmin, updateRoom);

//Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

export default router;
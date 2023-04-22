import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//Get All
router.get("/", getHotels);

//Get One
router.get("/:id", getHotel);

//Create
router.post("/", verifyAdmin , createHotel)

//update
router.put("/:id", verifyAdmin, updateHotel);

//Delete
router.delete("/:id", verifyAdmin, deleteHotel);

export default router;
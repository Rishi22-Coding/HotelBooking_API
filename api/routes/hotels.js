import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
const router = express.Router();

//Get All
router.get("/", getHotels);

//Get One
router.get("/:id", getHotel);

//Create
router.post("/", createHotel)

//update
router.put("/:id", updateHotel);

//Delete
router.delete("/:id", deleteHotel);

export default router;
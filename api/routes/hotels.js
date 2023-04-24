import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//Get All
router.get("/", getHotels);

//Get One
router.get("/find/:id", getHotel);

//count by city
router.get("/countByCity", countByCity);

//count by type
router.get("/countByType", countByType);

//Create
router.post("/", verifyAdmin , createHotel)

//update
router.put("/:id", verifyAdmin, updateHotel);

//Delete
router.delete("/:id", verifyAdmin, deleteHotel);

export default router;